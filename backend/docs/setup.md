# Project Setup
````
npm init -y
npm install -D typescript tsx @types/node
npx tsc --init
````

add scripts for package.json
````
 "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
  },
  ````

## MVP (phase 1 dependency needed)
````
npm install express cors dotenv zod ws axios cheerio chromadb playwright
npm install @langchain/core @langchain/community langchain @langchain/ollama
npm install -D @types/express @types/ws @types/cors
ollama pull nomic-embed-text
````

