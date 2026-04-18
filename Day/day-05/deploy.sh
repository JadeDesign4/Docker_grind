#!/bin/bash

# 1. Define variables
PROJECT_DIR="$USER/me/cloud/Docker_grind/day5/web-server"

echo "🚀 Starting Jade Design Deployment..."

# 2. Check if the Compose file exists
if [ -f "docker-compose.yml" ]; then
    echo "✅ YAML found. Proceeding..."
else
    echo "❌ Error: docker-compose.YML missing!"
    exit 1
fi

# 2.5 Smart Port Check
#Port=${1:-8080}
#if ss -tuln | grep -q ":$PORT"; then
#	echo "⚠️ Warning: Port $PORT is already in use!"
#	echo "🔎 Checking what's running there..."
#   ss -tulpn | grep ":$PORT"
#	echo "❌ Please stop the conflicting service or change your YAML."
#   	exit 1
#else
#	echo "✅ port $PORT is clear. Ready for takeoff."
#fi

# 3. Clean up any old containers
echo "🧹 Cleaning up old containers..."
docker compose down

# 3.5 Automated Backup
	echo "💾 Backing up HTML files..."
# This gets the directory where the script itself is located
#SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

tar -czf ~/me/cloud/Docker_grind/backups/day-05_cvapp-$(date +%F).tar.gz .
echo "✅ Backup saved to $BACKUP_DIR"

# 4. Start the engine
echo "📦 Spinning up the services..."
docker compose up -d

echo "---------------------------------------"
echo "✨ Deployment Complete!"
echo "View your site at: http://localhost:8500"
echo "---------------------------------------"
