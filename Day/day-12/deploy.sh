# Automating the deployment Instead of running manual Commands on the terminal
echo "🚀 JADE DESIGN DEPLOYMENT...."
sleep 1
echo ""

# Check if ".dockerignore" file exist
if [ ! -f .dockerignore ]; then
	echo "🛠️ Generating .dockerignore..."
	sleep 1
	echo -e "*.tar\n*.zip\n.env\n.git\nnode_modules\n*.txt" > .dockerignore
fi
echo ""

# 1. Check if "docker-compose.yml" exist
if [ -f "docker-compose.yml" ]; then
	echo "✅ YAML found. Proceeding...."
else
	echo "❌ ERROR: 'docker-compose.yml' MISSING!"
	sleep 1
	echo "⚠️⚠️ Please Create a 'docker-compose.yml' file to proceed....|"
	exit 1
fi
echo ""

# 2. Clean up old container.
echo "🧹 Cleaning up old Containers...."
docker compose down
sleep 1
echo ""

# 3. Smart Port Check.
PORT=8092
echo "🕵️‍♂️ Checking if port $PORT is available...."
if ss -tulpn | grep -q ":$PORT"; then
	echo "⚠️ WARNING! Port $PORT is already in use by another service."
	sleep 1
	echo "🔎 Checking what's running there..."
	sleep 1
	ss -tulpn | grep ":$PORT"
	echo "❌ Please! Stop the conflicting service or change the Port assigned."
	exit 1
else
	echo "✅ Port $PORT is available. Ready for Takeoff....🚀"
fi

sleep 2
echo ""

# 4. Backup files
# Backing up all files in the current folder as a tar archive to your preferred location.
echo "📂 Backing up files...."
tar -czf ../../backups/calculator_day-12_$(date +%F).tar.gz ./
sleep 1
echo ""

# 5. Starting up the service
echo "📦 Starting up the service...."
docker compose up -d
sleep 1
echo ""

echo "============================================================"
echo "::✨Deployment Complete::"
echo "View Your Site at localhost:8092"
echo "============================================================"
