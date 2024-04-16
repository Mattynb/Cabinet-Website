
# Build stage
FROM node:alpine as build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve stage
FROM nginx:alpine

# Copy build artifacts from the build stage to nginx serve directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
