FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/out /srv
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=5 \
  CMD wget -q -O - http://127.0.0.1:8080/_health >/dev/null || exit 1
