FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npx", "hardhat", "run", "--network", "besu", "./scripts/deploy.ts"]
