# Etapa 1: build
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
# El build valida los secretos vía astro:env; se usa un dummy que se reemplaza en runtime
ENV OPENROUTER_API_KEY=dummy
COPY . .
RUN npm run build

# Etapa 2: runtime Node SSR (standalone)
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
EXPOSE 4321
CMD ["node", "dist/server/entry.mjs"]
