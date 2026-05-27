# After Installing docker.io, You need to start the service and enable it on boot.

set -e "Exits immediately if a command exits with a non-zero status"

# Ensures the script is run as root
if [ "$EUID" -ne 0 ]; then
    echo "Please run the script as root (sudo) for a smooth docker setup"
    exit 1
fi

# Detect Linux Distribution
if [ -f /etc/os-release ]; then
    . /etc/os-release
    Os=$ID
else
    echo "Could not detect the operating system version."
    exit 1
fi

echo -e "\n================================"
echo -e "     Initiating Docker Setup"
echo -e "=================================="

echo -e "\n--- [ Installing docker ] ---"

#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo "Please run this script with sudo or as root."
  exit 1
fi

# Detect Linux Distribution
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
else
    echo "Could not detect the operating system version."
    exit 1
fi

echo "Detected OS: $OS"

case "$OS" in
    ubuntu|debian)
        echo "Setting up Docker for Ubuntu/Debian..."
        # Install Docker Engine, Compose, and Buildx
        apt-get update
        apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        ;;

    arch)
        echo "Setting up Docker for Arch Linux..."
        # Arch bundles Buildx and Compose as separate native packages
        pacman -Syu --noconfirm docker docker-buildx docker-compose
        ;;

    rhel|centos|rocky|almalinux)
        echo "Setting up Docker for RHEL-based system..."
        yum install -y yum-utils
        yum-config-manager --add-repo https://docker.com
        # Install Docker Engine, Compose, and Buildx
        yum install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
        ;;

    *)
        echo "Unsupported Linux distribution: $OS"
        exit 1
        ;;
esac

echo "----------------------------------------"
echo "Installation complete! Verifying versions:"
docker --version
docker compose version
docker buildx version
echo "----------------------------------------"


echo -e "\n--- [ Starting the Docker Daemon ] ---"
	sudo systemctl start docker 	# Starts the docker daemon
sleep 1

echo -e "\n--- [ Enabling docker ] ---"
	sudo systemctl enable docker	# Starts docker automatically after restarts
sleep 1

echo -e "\n--- [ Checking Status ] ---"
	sudo systemctl status docker 	# Verify the service status

echo -e "\n--- [ Changing permissions on communication socket ] ---"
	sudo chmod 666 /var/run/docker.sock # Makes sure the current user can read the communication socket.	

echo -e "\n================================"
echo -e "	Docker Setup Complete!"
echo -e "\n================================"

