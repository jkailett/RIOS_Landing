#!/bin/bash
# Deploy RIOS Landing ke Vercel via Vercel API
# Usage: ./deploy-vercel.sh

set -e

PROJECT_ID="prj_bcdTNpLxDE1KOaJzVMPd7hEgkpa2"
ORG_ID="team_lxPiFxeSecWxA2ar2NrhwOun"
VERCEL_TOKEN=$(grep VERCEL_TOKEN ~/tom-agent/.env | cut -d'=' -f2 | tr -d '"')

if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ VERCEL_TOKEN tidak ditemukan di ~/tom-agent/.env"
  exit 1
fi

echo "🔨 Building project..."
cd ~/rios-landing
npm run build

echo "📦 Creating deployment archive..."
tar -czf /tmp/rios-deploy.tar.gz \
  .next \
  public \
  package.json \
  package-lock.json \
  next.config.js \
  prisma \
  src

echo "☁️  Uploading to Vercel..."
curl -X POST "https://api.vercel.com/v13/deployments" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"rios-landing\",
    \"project\": \"$PROJECT_ID\",
    \"target\": \"production\",
    \"gitSource\": {
      \"type\": \"github\",
      \"repoId\": 0,
      \"ref\": \"main\"
    }
  }"

echo ""
echo "✅ Deployment request sent! Check https://vercel.com/dashboard"
