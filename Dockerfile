# Build stage
FROM oven/bun:latest as build

# # Build arguments
# ARG VITE_GENERATE_SOURCEMAP=false
# ARG VITE_ENVIRONMENT_NAME=production
# ARG VITE_APPLICATION_NAME=roadmap-fe-test
# ARG VITE_APPLICATION_VERSION=1.0.0

# # Set environment variables for build
# ENV VITE_GENERATE_SOURCEMAP=${VITE_GENERATE_SOURCEMAP}
# ENV VITE_ENVIRONMENT_NAME=${VITE_ENVIRONMENT_NAME}
# ENV VITE_APPLICATION_NAME=${VITE_APPLICATION_NAME}
# ENV VITE_APPLICATION_VERSION=${VITE_APPLICATION_VERSION}

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Build the app
RUN bun run build

# Production stage
FROM nginx:alpine

# Port arguments
ARG PORT=81

# Expose ports untuk HTTP dan HTTPS
EXPOSE ${PORT}
EXPOSE 443

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]