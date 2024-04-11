# Specify the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install dependencies
RUN npm i 

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080 
  
# Command to run the server
CMD ["node", "index.js"]
