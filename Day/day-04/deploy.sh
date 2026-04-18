#!/bin/bash

# 1. Define variables
PROJECT_DIR="~/me/cloud/Docker_grind/web-server"

echo "🚀 Starting Jade Design Deployment..."

# 2. Check if the Compose file exists
if [ -f "docker-compose.yml" ]; then
    echo "✅ YAML found. Proceeding..."
else
    echo "❌ Error: docker-compose.yml missing!"
    exit 1
fi

# 2.5 Smart Port Check
#PORT=8080
#if ss -tuln | grep -q ":$PORT "; then
#    echo "⚠️  Warning: Port $PORT is already in use!"
#    echo "🔍 Checking what's running there..."
#    ss -tulpn | grep ":$PORT"
#    echo "❌ Please stop the conflicting service or change your YAML."
#    exit 1
#else
#    echo "✅ Port $PORT is clear. Ready for takeoff."
#fi

# 3. Clean up any old containers
echo "🧹 Cleaning up old containers..."
docker-compose down

# 3.5 Backing up files
echo "Backing up files...."
tar -czf ~/me/cloud/Docker_grind/backups/day-04_cv-app-$(date +%F).tar.gz .

# 4. Start the engine
echo "📦 Spinning up the services..."
docker-compose up -d

echo "------------------------------------------------------------------"
echo "✨ Deployment Complete!"
echo "View your site at: http://localhost:8400 & http://localhost:8440"
echo "------------------------------------------------------------------"
