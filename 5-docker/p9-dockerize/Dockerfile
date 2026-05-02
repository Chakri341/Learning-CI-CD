# Use small Node image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies (clean install)
RUN npm ci --only=production

# Copy rest of code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]