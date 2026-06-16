#!/bin/bash
set -euo pipefail

SSH_KEY="${SSH_KEY:-$HOME/work/keys/aws-crema-ai-admin.pem}"
SSH_HOST="${SSH_HOST:-ubuntu@54.180.118.44}"
REMOTE_DIR="${REMOTE_DIR:-/home/ubuntu/weekly}"
BRANCH="${BRANCH:-main}"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=== weekly 배포 시작 ==="

if [ ! -f "$SSH_KEY" ]; then
  echo "SSH 키를 찾을 수 없습니다: $SSH_KEY"
  exit 1
fi

# 1. 로컬 변경사항 확인
if [ -n "$(git -C "$LOCAL_DIR" status --porcelain)" ]; then
  echo "커밋되지 않은 변경사항이 있습니다. 먼저 커밋해주세요."
  exit 1
fi

# 2. 버전 태그 생성
LATEST_TAG=$(git -C "$LOCAL_DIR" tag -l "v*" --sort=-v:refname | head -1)
if [ -z "$LATEST_TAG" ]; then
  NEW_TAG="v1.0.0"
elif [[ "$LATEST_TAG" =~ ^v([0-9]+)\.([0-9]+)\.([0-9]+)$ ]]; then
  NEW_TAG="v${BASH_REMATCH[1]}.${BASH_REMATCH[2]}.$((BASH_REMATCH[3] + 1))"
else
  echo "버전 태그 형식이 올바르지 않습니다: $LATEST_TAG"
  exit 1
fi

echo "[1/4] 버전: $NEW_TAG (이전: ${LATEST_TAG:-없음})"
git -C "$LOCAL_DIR" tag "$NEW_TAG"
git -C "$LOCAL_DIR" push origin "$BRANCH" --tags

# 3. 원격 디렉터리 준비
echo "[2/4] 원격 디렉터리 준비..."
ssh -i "$SSH_KEY" "$SSH_HOST" "mkdir -p '$REMOTE_DIR'"

# 4. 정적 파일 동기화
echo "[3/4] 파일 동기화..."
rsync -az --delete \
  -e "ssh -i $SSH_KEY" \
  --exclude ".git/" \
  --exclude ".DS_Store" \
  --exclude ".env*" \
  --exclude "AGENTS.md" \
  --exclude "README.md" \
  --exclude "deploy-weekly.sh" \
  --exclude "node_modules/" \
  "$LOCAL_DIR/" "$SSH_HOST:$REMOTE_DIR/"

echo "[4/4] 배포 완료! ($NEW_TAG)"
echo ""
echo "  버전: $NEW_TAG"
echo "  커밋: $(git -C "$LOCAL_DIR" log --oneline -1)"
echo "  서버: https://weekly.newming.io"
