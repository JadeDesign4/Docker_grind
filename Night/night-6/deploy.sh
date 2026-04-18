# 1. check if YAML file exist
if [ -f "docker-compose.yml" ]; then
    echo "✅ YAML found. Proceeding..."
else
    echo "❌ Error: docker-compose.yml missing!"
    exit 1
fi

# 2. Clean up old containers
echo "🧹 Cleaning up old containers..."
docker compose down

# 2.5 Automated Backup
echo "💾 Backing up HTML files..."

# tar -czf ~/me/cloud/Docker_grind/backups/night-6-sitebackup-$(date +%F).tar.gz ./musicplayer-server

# 3. Start the service
echo "📦 Starting the Server..."
docker compose up -d

echo "-----------------------------------"
echo "::✨ Deployment Complete!::"
echo "View your site at https://localhost:8601"
echo "-----------------------------------"

