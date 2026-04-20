echo "🚀 Jade Design Deployment...."

# Check for .dockerignore, create if missing
if [ ! -f .dockerignore ]; then
  echo "Generating .dockerignore..."
  echo -e "*.tar\n*.zip\n.env\nnode_modules" > .dockerignore
fi

# 1. Check if docker-compose.yml exist in current folder
if [ -f "docker-compose.yml" ]; then
	echo "✅ YAML found. Proceeding...."
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

# 3. Smart Port Check
PORT=8090
if ss -tulpn | grep -q ":$PORT"; then
	echo "⚠️ WARNING! Port $PORT is already in use by another service."
	sleep 1
	echo "🔍 Checking what's running there...."
	ss -tulpn | grep ":$PORT"
	exit 1
	echo "❌ Please stop the conflicting service or change the Port in the docker-compose.yml file."
else
	echo "✅ Port $PORT is available. 🚀 Ready for takeoff...."
fi
sleep 2
echo ""

# 4. Backup app files
echo "💾 Backing up files ...."
tar -czf ~/me/cloud/Docker_grind/backups/day-11_calculator-app-$(date +%F).tar.gz ./
sleep 1
echo ""

# 5. Starting the service
echo "📦 Starting up the service...."
docker compose up -d
sleep 3
echo ""

echo "========================================================="
echo "::✨ Deployment Complete::"
echo "View Your Site at http://localhost:8090"
echo "========================================================="

