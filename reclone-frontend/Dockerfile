# Use an official Node.js runtime as a parent image
FROM node:18.15-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install any needed dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Set environment variables
ENV PORT=3000
ENV NODE_ENV=production

# Expose port 3000 to the Docker host
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
