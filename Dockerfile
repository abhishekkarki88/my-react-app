# Use the official Node.js image as a base
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .


EXPOSE 3000


# Default command to start Nginx
CMD ["npm", "start"]
