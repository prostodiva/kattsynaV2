# Project Setup
````
npm init -y
npm install typescript tsx @types/node --save-dev
npx tsc --init
````

add scripts for package.json
````
 "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "lint": "eslint .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ````

## MVP (phase 1 dependency needed)
````
npm install @langchain/core@latest @langchain/community@latest langchain@latest
npm install express cors dotenv@^16.4.5 zod@^3.23.8  ws
npm install chromadb
npm install @langchain/ollama
npm install cheerio axios
ollama pull nomic-embed-text
npm install typescript tsx @types/node @types/express @types/ws --save-dev
````

