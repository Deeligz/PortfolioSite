FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy bot code
COPY bot.js ./

# Start the bot
CMD ["node", "bot.js"]

