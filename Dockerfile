# Use the Node.js 20 base image
FROM node:20

# Update system packages and install FFmpeg
RUN apt-get update && apt-get install -y ffmpeg && apt-get clean

# Switch to non-root user
USER node

# Clone the repository
RUN git clone https://github.com/BASHER0706/bookie /home/node/blue

# Set the working directory
WORKDIR /home/node/blue

# Grant full permissions to the directory (optional but helps with permissions)
RUN chmod -R 777 /home/node/blue/

# Install dependencies
RUN yarn install && yarn add http

# Copy server and start script into the directory
COPY server.js .
COPY start.sh .

# Verify FFmpeg installation and print directory contents (for debugging purposes)
RUN ffmpeg -version && ls -la /home/node/blue

# Run the start script
CMD ["bash", "start.sh"]