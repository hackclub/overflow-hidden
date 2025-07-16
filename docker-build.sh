#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t overflow-hidden .

# Run the container
echo "Starting container on port 9994..."
docker run -d -p 9994:80 --name overflow-hidden-container overflow-hidden

echo "✅ Container is running at http://localhost:9994"
echo "To stop: docker stop overflow-hidden-container"
echo "To remove: docker rm overflow-hidden-container" 