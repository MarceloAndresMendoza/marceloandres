#!/bin/bash
echo "================================================"
echo "This script will install my personal portafolio"
echo "================================================"

# Check if node.js is installed
if ! [ -x "$(command -v node)" ]; then
    echo "====================================================" >&2
    echo "CRITICAL ERROR: node.js is not installed." >&2
    echo "Install it via npm. " >&2
    echo "====================================================" >&2
    exit 1
fi

# Specify the source directory of the node.js app
SOURCE_DIR="./"

# Specify the target directory where the app will be copied and run
TARGET_DIR="/opt/marceloandres"

# Get node path on PATH env
NODE_PATH=$(which node | grep 'node')
NPM_PATH=$(which npm | grep 'npm')

# Get the current username
CURRENT_USER=$(whoami)
CURRENT_GROUP=$(id -gn)

# Check if the env file exists
if [ -f "$TARGET_DIR/.env" ]; then
    # Update the program
    echo "Program already installed, updating..."
    # Copy your app files to the target directory
    echo "Copying files..."
    sudo cp -r "$SOURCE_DIR"/* "$TARGET_DIR/"
    # Navigate to the target directory
    cd "$TARGET_DIR"
    sudo chown -R $CURRENT_USER:$CURRENT_GROUP .

    # Install your app's dependencies (if needed)
    echo "Installing dependencies..."
    npm install
    # Building
    echo "Building..."
    npm run build
    # Restart the service
    echo "Restarting the service..."
    sudo systemctl restart marceloandres
    sudo systemctl status marceloandres
    echo "Update finished."
else
    # Copy your app files to the target directory
    echo "Copying files..."
    sudo mkdir -p "$TARGET_DIR"
    sudo cp -r "$SOURCE_DIR"/* "$TARGET_DIR/"
    # Navigate to the target directory
    cd "$TARGET_DIR"
    sudo chown -R $CURRENT_USER:$CURRENT_GROUP .

    # Install your app's dependencies (if needed)
    echo "Installing dependencies..."
    npm install

    
    # Configure the service
    echo "CONFIGURING THE SERVICE..."
    echo "Please, take your time to configure properly the service."
    echo "========================================================="

    read -p "Enter the OPENAI API key: " OPENAI_API_KEY
    read -p "Enter the MongoDB URI: " MONGODB_URI
    read -p "Enter the port: " PORT
    
    # Create the .env file
    echo "Creating the .env file..."
    cat << EOF > .env
    # Configuration file generated by install.sh
    OPENAI_API_KEY=$OPENAI_API_KEY
    DB_NAME=$MONGODB_URI
EOF

#    Building
    echo "Building..."
    npm run build

    # Generate the service file
    echo "Generating the service file..."
    echo "[Unit]
Description=Marcelo Andres personal portafolio
After=network.target

[Service]
Type=simple
User=$CURRENT_USER
Group=$CURRENT_GROUP
WorkingDirectory=$TARGET_DIR
ExecStart=$NODE_PATH $TARGET_DIR/node_modules/.bin/next start -p $PORT
Restart=always

[Install]
WantedBy=multi-user.target" > marceloandres.service

    # Create a systemd service file
    echo "Creating the service..."
    sudo cp marceloandres.service /etc/systemd/system/marceloandres.service
    sudo systemctl daemon-reload
    sudo systemctl enable marceloandres
    sudo systemctl start marceloandres
    sudo systemctl status marceloandres
fi

echo "===================================================="
echo "Installation finished."
echo "Check the above result of the service status."
echo "===================================================="
echo If everything is ok, you can safely delete this folder.
echo - Installation location: $TARGET_DIR
echo - To stop the service: systemctl stop marceloandres
echo - To disable the service: systemctl disable marceloandres
echo "==========================================================="