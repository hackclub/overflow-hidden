#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t overflow-hidden .

# Run the container
echo "Starting container on port 3000..."
docker run -d -p 3000:80 --name overflow-hidden-container overflow-hidden

echo "✅ Container is running at http://localhost:3000"
echo "To stop: docker stop overflow-hidden-container"
echo "To remove: docker rm overflow-hidden-container" 