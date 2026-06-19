#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const SITE_ORIGIN = stripTrailingSlash(process.env.SITE_ORIGIN || "https://weekly.newming.io");
const LIST_API_URL = process.env.NEWSLETTER_ISSUES_API_URL || `${SITE_ORIGIN}/api/newsletter/issues`;
const LIST_LIMIT = Number(process.env.NEWSLETTER_ISSUES_LIMIT || 100);
const HOME_LIST_LIMIT = Number(process.env.NEWSLETTER_HOME_LIST_LIMIT || 5);

const INDEX_PATH = path.join(ROOT_DIR, "index.html");
const SITEMAP_PATH = path.join(ROOT_DIR, "sitemap.xml");
const ISSUES_DIR = path.join(ROOT_DIR, "issues");

const LIST_MARKER_START = "<!-- NEWSLETTER_SEO_LIST_START -->";
const LIST_MARKER_END = "<!-- NEWSLETTER_SEO_LIST_END -->";
const ITEMLIST_MARKER_START = "<!-- NEWSLETTER_ITEMLIST_JSONLD_START -->";
const ITEMLIST_MARKER_END = "<!-- NEWSLETTER_ITEMLIST_JSONLD_END -->";
const ISSUE_SEO_MARKER_START = "<!-- NEWSLETTER_ISSUE_SEO_START -->";
const ISSUE_SEO_MARKER_END = "<!-- NEWSLETTER_ISSUE_SEO_END -->";

async function main() {
  const issues = await fetchIssuesWithDetails();
  if (!issues.length) {
    throw new Error("No newsletter issues returned from API.");
  }

  await writeIssuePages(issues);
  await writeSitemap(issues);
  await writeIndexSeoFallback(issues.slice(0, HOME_LIST_LIMIT));

  console.log(`Synced newsletter SEO files for ${issues.length} issue(s).`);
}

function stripTrailingSlash(value) {
  return String(value).replace(/\/+$/, "");
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { accept: "application/json" } });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText} ${url}`);
  }

  return response.json();
}

function listUrl(limit, offset) {
  const url = new URL(LIST_API_URL);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("offset", String(offset));
  return url;
}

function detailUrl(campaignKey) {
  const url = new URL(LIST_API_URL);
  url.search = "";
  url.pathname = `${url.pathname.replace(/\/+$/, "")}/${encodeURIComponent(campaignKey)}`;
  return url;
}

async function fetchIssueList() {
  const items = [];
  let offset = 0;

  while (true) {
    const data = await fetchJson(listUrl(LIST_LIMIT, offset));
    if (!data?.ok || !Array.isArray(data.items)) {
      throw new Error("Newsletter list API response is invalid.");
    }

    items.push(...data.items.filter((item) => item?.campaignKey));

    const paging = data.paging || {};
    const hasMore = Boolean(paging.hasMore);
    const received = data.items.length;
    if (!hasMore || received === 0) break;
    offset += received;
  }

  return uniqueByCampaignKey(items).sort(compareIssueDateDesc);
}

async function fetchIssuesWithDetails() {
  const items = await fetchIssueList();
  const detailed = [];

  for (const item of items) {
    const data = await fetchJson(detailUrl(item.campaignKey));
    if (!data?.ok || !data.item?.html) {
      throw new Error(`Newsletter detail API response is invalid: ${item.campaignKey}`);
    }

    const merged = { ...item, ...data.item };
    const pageTitle = extractTitle(merged.html) || merged.subject || "뉴밍 위클리";
    const description = merged.excerpt || extractPreheader(merged.html) || merged.subject || pageTitle;
    const issueDate = dateOnly(merged.issueDate || merged.sentAt || merged.createdAt);
    const lastmod = dateOnly(merged.updatedAt || merged.createdAt || merged.sentAt || merged.issueDate) || issueDate;

    detailed.push({
      ...merged,
      pageTitle,
      description,
      issueDate,
      lastmod,
      url: `${SITE_ORIGIN}/issues/${encodeURIComponent(merged.campaignKey)}/`,
      path: `/issues/${encodeURIComponent(merged.campaignKey)}/`,
    });
  }

  return detailed.sort(compareIssueDateDesc);
}

function uniqueByCampaignKey(items) {
  const map = new Map();
  for (const item of items) {
    if (!map.has(item.campaignKey)) map.set(item.campaignKey, item);
  }
  return [...map.values()];
}

function compareIssueDateDesc(left, right) {
  return String(right.issueDate || right.sentAt || right.createdAt || "").localeCompare(
    String(left.issueDate || left.sentAt || left.createdAt || ""),
  );
}

function extractTitle(html) {
  const match = String(html).match(/<title>([\s\S]*?)<\/title>/i);
  return match ? decodeBasicEntities(stripTags(match[1]).trim()) : "";
}

function extractPreheader(html) {
  const match = String(html).match(/<body[\s\S]*?<div[^>]*display\s*:\s*none[^>]*>([\s\S]*?)<\/div>/i);
  return match ? decodeBasicEntities(stripTags(match[1]).replace(/\s+/g, " ").trim()) : "";
}

function stripTags(value) {
  return String(value).replace(/<[^>]*>/g, "");
}

function decodeBasicEntities(value) {
  return String(value)
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function dateOnly(value) {
  if (!value) return "";
  const text = String(value);
  const direct = text.match(/^(\d{4}-\d{2}-\d{2})/);
  if (direct) return direct[1];

  const date = new Date(text);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

function dateTime(value) {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toISOString();
}

function formatDisplayDate(value) {
  const date = dateOnly(value);
  return date ? date.replaceAll("-", ".") : "";
}

async function writeIssuePages(issues) {
  for (const issue of issues) {
    const issueDir = path.join(ISSUES_DIR, issue.campaignKey);
    await mkdir(issueDir, { recursive: true });
    await writeFile(path.join(issueDir, "index.html"), injectIssueSeo(issue), "utf8");
  }
}

function injectIssueSeo(issue) {
  let html = String(issue.html).replace(
    new RegExp(`${escapeRegExp(ISSUE_SEO_MARKER_START)}[\\s\\S]*?${escapeRegExp(ISSUE_SEO_MARKER_END)}\\n?`, "g"),
    "",
  );

  const block = buildIssueSeoBlock(issue);
  if (!/<\/head>/i.test(html)) {
    throw new Error(`Issue HTML is missing </head>: ${issue.campaignKey}`);
  }

  return html.replace(/<\/head>/i, `${block}\n  </head>`);
}

function buildIssueSeoBlock(issue) {
  const image = issue.coverImageUrl || `${SITE_ORIGIN}/assets/newming-weekly-og.png`;
  const jsonLd = safeJson({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${issue.url}#article`,
    mainEntityOfPage: issue.url,
    headline: issue.pageTitle,
    description: issue.description,
    image,
    datePublished: dateTime(issue.issueDate || issue.sentAt),
    dateModified: dateTime(issue.updatedAt || issue.createdAt || issue.sentAt || issue.issueDate),
    inLanguage: "ko-KR",
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
  });

  return `
    ${ISSUE_SEO_MARKER_START}
    <link rel="canonical" href="${escapeHtml(issue.url)}">
    <meta name="description" content="${escapeHtml(issue.description)}">
    <meta name="robots" content="index, follow">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="뉴밍 위클리">
    <meta property="og:locale" content="ko_KR">
    <meta property="og:title" content="${escapeHtml(issue.pageTitle)}">
    <meta property="og:description" content="${escapeHtml(issue.description)}">
    <meta property="og:url" content="${escapeHtml(issue.url)}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(issue.pageTitle)}">
    <meta name="twitter:description" content="${escapeHtml(issue.description)}">
    <meta name="twitter:image" content="${escapeHtml(image)}">
    <script type="application/ld+json">${jsonLd}</script>
    ${ISSUE_SEO_MARKER_END}`;
}

async function writeSitemap(issues) {
  const existing = await readOptional(SITEMAP_PATH);
  const existingHomeLastmod = existing.match(/<loc>https:\/\/weekly\.newming\.io\/<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/)?.[1] || "";
  const latestIssueLastmod = issues.map((issue) => issue.lastmod).filter(Boolean).sort().at(-1) || "";
  const homeLastmod = maxDate(process.env.HOME_LASTMOD, existingHomeLastmod, latestIssueLastmod);

  const entries = [
    sitemapEntry(`${SITE_ORIGIN}/`, homeLastmod),
    ...issues.map((issue) => sitemapEntry(issue.url, issue.lastmod || issue.issueDate, "monthly", "0.8")),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

  await writeFile(SITEMAP_PATH, xml, "utf8");
}

function sitemapEntry(loc, lastmod, changefreq, priority) {
  const changefreqTag = changefreq ? `\n    <changefreq>${escapeXml(changefreq)}</changefreq>` : "";
  const priorityTag = priority ? `\n    <priority>${escapeXml(priority)}</priority>` : "";

  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>${changefreqTag}${priorityTag}
  </url>`;
}

async function writeIndexSeoFallback(issues) {
  let html = await readFile(INDEX_PATH, "utf8");
  html = replaceBetweenMarkers(html, LIST_MARKER_START, LIST_MARKER_END, buildHomeIssueLinks(issues));
  html = replaceBetweenMarkers(html, ITEMLIST_MARKER_START, ITEMLIST_MARKER_END, buildItemListJsonLd(issues));
  await writeFile(INDEX_PATH, html, "utf8");
}

function buildHomeIssueLinks(issues) {
  const items = issues
    .map((issue) => {
      const title = issue.pageTitle || issue.subject || "뉴밍 위클리";
      const description = issue.description || issue.excerpt || "";
      const visibleDescription = normalizeText(description) === normalizeText(title) ? "" : description;
      const descriptionLine = visibleDescription ? `\n                  <p>${escapeHtml(visibleDescription)}</p>` : "";
      const image = issue.coverImageUrl || "assets/newming-weekly-icon.png";
      const displayDate = formatDisplayDate(issue.issueDate || issue.sentAt);

      return `              <a class="newsletter-item" href="${escapeHtml(issue.path)}" data-issue-key="${escapeHtml(issue.campaignKey)}" data-stagger-item>
                <span class="newsletter-thumb">
                  <img src="${escapeHtml(image)}" alt="" loading="lazy" />
                </span>
                <div>
                  <div class="newsletter-meta">
                    <span>뉴밍 위클리</span>
                    <span>5분 읽기</span>
                    <span>발행본</span>
                  </div>
                  <h3>${escapeHtml(title)}</h3>${descriptionLine}
                  ${displayDate ? `<time datetime="${escapeHtml(issue.issueDate)}">${escapeHtml(displayDate)}</time>` : ""}
                </div>
              </a>`;
    })
    .join("\n");

  return `\n${items}\n              `;
}

function buildItemListJsonLd(issues) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_ORIGIN}/#newsletter-issues`,
    name: "뉴밍 위클리 최신 발행 목록",
    itemListElement: issues.map((issue, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: issue.url,
      name: issue.pageTitle || issue.subject || "뉴밍 위클리",
      description: issue.description || issue.excerpt || undefined,
      image: issue.coverImageUrl || undefined,
      datePublished: dateTime(issue.issueDate || issue.sentAt),
    })),
  };

  return `\n    <script type="application/ld+json">${safeJson(itemList)}</script>\n    `;
}

function replaceBetweenMarkers(html, start, end, replacement) {
  const pattern = new RegExp(`${escapeRegExp(start)}[\\s\\S]*?${escapeRegExp(end)}`);
  if (!pattern.test(html)) {
    throw new Error(`Missing marker pair in index.html: ${start} / ${end}`);
  }

  return html.replace(pattern, `${start}${replacement}${end}`);
}

function maxDate(...values) {
  return values.map(dateOnly).filter(Boolean).sort().at(-1) || "";
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

async function readOptional(filePath) {
  try {
    return await readFile(filePath, "utf8");
  } catch {
    return "";
  }
}

function safeJson(value) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeXml(value) {
  return escapeHtml(value).replace(/'/g, "&apos;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
