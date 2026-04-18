# 1. Check if YAML Exist
if [ -f "docker-compose.yml" ]; then
    echo "✅ YAML found. Proceeding...."
else 
    echo "❌ Error: docker-compose.yml MISSING!"
    exit 1
fi

# 2. Clean up old containers
echo "🧹 Cleaning up old containers...."
docker compose down 
sleep 5

# 2.5 Backing up files
echo "💾 Backing up files..."
tar -czf ~/me/cloud/Docker_grind/backups/day-07-$(date +%F).tar.gz petshop-server
tar -czf ~/me/cloud/Docker_grind/backups/day-07-$(date +%F).tar.gz petshop-server
sleep 3

# 3. Starting up the container
echo "📦 Starting up the container...."
docker compose up -d
sleep 1

echo "================================================================="
echo "::✨Deployment Complete::"
echo "View your site at http://localhost:8700 && http://localhost:8770"
echo "=================================================================="
