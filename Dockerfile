FROM node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/tsconfig*.json ./

CMD ["npm", "run", "start:dev"]
