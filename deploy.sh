#!/bin/bash
set -e

echo "Cleaning previous build..."
rm -rf .output/public dist

echo "Generating new files version..."
npm run generate

echo "Uploading files to S3..."
aws s3 sync dist s3://fabrisilve.com --delete

echo "Invalidating cache..."
aws cloudfront create-invalidation --distribution-id E2DKYKQ6IEV8S5 --paths "/*"

echo "✅ Deployment complete!"
