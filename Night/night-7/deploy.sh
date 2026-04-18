echo "🚀 Starting Gabriel Deployment...."

# 1. Check if the "docker-compose.yml" file exist
if [ -f "docker-compose.yml" ]; then
	echo "✅ docker-compose.yml FOUND! Proceeding...."
else
	echo "❌ Error: docker-compose.yml MISSING!"
fi
sleep 1
echo ""

# 2. Clean up old containers
echo "🧹 Cleaning up old containers...."
docker compose down
sleep 2
echo ""

# 3. Backup app/site files
echo "💾 Backing up app files...."
tar -czf ~/me/cloud/Docker_grind/backups/night-07_backup-$(date +%F).tar.gz ./cv-app
sleep 1
echo ""

# 4. Smart Port check
PORT=8701
if ss -tulpn | grep ":$PORT"; then
	echo "⚠️ WARNING! Port $PORT is already in use."
	sleep 1
	echo "🔎 Checking what's there...."
	ss -tulpn | grep -q ":$PORT"
	exit 1
	echo "❌ Please! Stop the conflicting service or change the port in the 'docker-compose.yml' file."
else
	echo "✅ Port $PORT is available. Ready for takeoff...."
fi
echo ""

# 5. Start up the Service
echo "📦 Starting up the service...."
docker compose up -d
sleep 2
echo ""

echo "============================================================"
echo "::✨Deployment Complete::"
echo "View your site at http://localhost:8701"
echo "============================================================"
