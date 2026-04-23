echo "🚀 JADE DESIGN DEPLOYMENT...."
echo ""

# Check if .dockerignore exist
if [ ! -f ".dockerignore" ]; then
	echo "Generating .dockerignore..."
	echo -e "*.tar\n*.env\n*.zip\n.zip\nnode_modules\n*.txt" > .dockerignore
fi
echo ""

# 1. Check if docker-compose.yml exist
if [ -f "docker-compose.yml" ]; then
	echo "✅ YAML found. Proceeding..."
else 
	echo "❌ ERROR: 'docker-dompose.yml' MISSING!"
fi 
echo ""
sleep 1

# 2. Clean up old containers
echo "🧹 Cleaning up old containers...."
docker compose down
echo ""

# 2.5 Smart Port Check
PORT=8093
if ss -tulpn | grep -q ":$PORT"; then
	echo "⚠️ WARNING! Port $PORT is already in use by another service"
	sleep 1
	echo "🕵️‍♀️ Checking what's running there..."
	ss -tulpn | grep ":$PORT"
	sleep 1
	echo "❌ Please stop the conflicting service or change the port in the YAML file."
else
	echo "✅ Port $PORT is available. Ready For Takeoff...🚀"
fi
sleep 2
echo ""

# 3. Start up the service
echo "📦 Starting up the service"
docker compose up -d
echo ""

echo "=================================================="
echo "::✨ Deployment Complete"
echo "View Your Site at http://localhost:8093"
echo "=================================================="

