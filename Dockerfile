# Use Node.js as base image
FROM node:20-alpine AS development

# Set working directory
WORKDIR /usr/src/app

RUN mkdir ./frontend
RUN mkdir ./backend

# Copy package.json and package-lock.json
COPY ./package*.json .

COPY ./frontend/package*.json ./frontend
COPY ./backend/package*.json ./backend

RUN CI=TRUE

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose the port that the React application will run on
EXPOSE 5173
EXPOSE 3000

# Command to run the React application with Vite
CMD ["npm", "run", "start:dev"]