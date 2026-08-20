#!/bin/bash

# RIOS Landing — Production Deployment Guide
# This script helps deploy the redesigned RIOS landing to production

set -e

echo "🚀 RIOS Landing — Production Deployment"
echo "========================================"
echo ""

# Check if git is configured
echo "📍 Checking Git status..."
git status
echo ""

# Commit any remaining changes
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️  Uncommitted changes detected. Committing..."
  git add -A
  git commit -m "chore: Final production push" || echo "No changes to commit"
fi

echo ""
echo "📋 Deployment Options:"
echo ""
echo "Option 1: Push via GitHub CLI (Recommended)"
echo "  Command: gh repo create jkailett/RIOS_Landing --remote=origin --push"
echo "  or: git push -u origin master (if remote is set)"
echo ""
echo "Option 2: Manual Push via GitHub Web"
echo "  1. Go to: https://github.com/jkailett/RIOS_Landing"
echo "  2. Click 'Upload files' and drag the repository"
echo "  3. Or use GitHub Desktop to push"
echo ""
echo "Option 3: Deploy Directly to Vercel (No GitHub Push Needed)"
echo "  Command: vercel deploy --prod"
echo "  Note: Requires 'vercel login' first"
echo ""

echo "🔍 Current Branch: $(git rev-parse --abbrev-ref HEAD)"
echo "📊 Commits to push: $(git rev-list --count origin/master..HEAD 2>/dev/null || echo 'Unable to count')"
echo ""

echo "✅ Repository is ready for production deployment!"
echo ""
echo "Next Steps:"
echo "1. Push to GitHub (use one of the options above)"
echo "2. Vercel will auto-deploy (2-5 minutes)"
echo "3. Monitor: https://vercel.com/jkailetts-projects/rios-landing"
echo "4. Live: https://rioskreasindo.site"
echo ""
