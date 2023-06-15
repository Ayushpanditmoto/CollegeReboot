# Use a node alpine image as base
FROM node:16-alpine

# Sets the working directory for following commands
WORKDIR /app

# Copy application files into docker environment
COPY . .

# Runs a clean install of dependencies
RUN npm ci

RUN npm run build

# Expose port 8000
EXPOSE 8000

# Start the application
CMD ["npm", "run", "start"]