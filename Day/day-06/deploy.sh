# 1. Check If YAML file exists
if [ -f "docker-compose.yml" ]; then
    echo "✅ YAML found. Proceeding..."
else
    echo "❌ Error: docker-compose.yml missing!"
fi

# 2. Clean up any old containers
echo "🧹 Cleaning up old containers..."
docker compose down

# 5. Automated Backup
BACKUP_DIR="~/me/cloud/backups"
mkdir -p $BACKUP_DIR

# This gets the directory where the script itself is located
SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

# Now use that for your paths
tar -czf $BACKUP_DIR/backup.tar.gz "$SCRIPT_DIR/petshop-server"

echo "💾 Backing up HTML files..."
tar -czf ~/me/cloud/Docker_grind/backups/day-06backup-$(date +%F).tar.gz web-server
echo "✅ Backup saved to ~/me/cloud/Docker_grind/backups"

# 3. Start the engine
echo "📦 Starting up the services..."
docker compose up -d

echo "----------------------------------------"
echo "::✨Deployment Complete!::"
echo "View your site at http://localhost:8501"
echo "----------------------------------------"
