# System Architecture Overview

**Stack: Node.js · TypeScript · LangChain · Llama · ChromaDB · SQLite**

## Summary
AI agent that powers two primary capabilities on my portfolio website:

1. **Meeting Scheduler** — A conversational agent that checks my Google Calendar availability, collects visitor info(only name/purpose/email), books calls/remote meetings, and sends confirmations.
2. **Website Knowledge Assistant** — A RAG-powered chatbot that answers visitor questions about my work, projects, skills, and services by grounding responses in indexed website content.

## MVP (Phase 1) - Website Knowledge Assistant

Answer questions accurately using ONLY my website content.

### Content Ingestion Pipeline (indexing pipeline)
Website Pages
↓ 
Playwright Scraper
↓
Clean text extraction
↓
Chunk text
↓
Generate embeddings
↓
Store vectors + metadata in ChromaDB

### Runtime Chat Pipeline
Frontend Chat UI
↓
WebSocket message
↓
Express backend
↓
Zod request validation
↓
Embed user query
↓
ChromaDB similarity search
↓
Retrieve relevant chunks
↓
Build RAG prompt
↓
Send prompt to Ollama (Llama 3)
↓
LLM generates streamed response
↓
WebSocket token streaming
↓
Frontend renders live response


MVP packages:
- Web socket connection - Persistent connection stays open. low latency; real-time streaming; token-by-token responses
- Express - a server-side web application framework built on top of Node.js
- LangChain - orchestration for RAG pipelines and LLM interaction
- Ollama - an open-source app that allows to run LlaMa localy
- nomic-embed-text - embedding model
- Chroma db - vector db to build AI apps
- Cheerio - parses and extracts structured text from HTML documents
- Axios - fetching HTML pages before parsing them (replaced by - Playwright Scraper)
- CORS - allow the frontend chat UI to talk to backend API/WebSocket; prevent browser security errors
- dotenv - Loads environment variables from a .env file
- zod - A validation library for checking and typing data; prevents bad input from breaking backend

[MVP 1](../mvp/01-mvp.md)

# Upgrade for later:

1. [semantic chunking](./semantic-chunking.md)
2. metadata filtering
3. multi-page ingestion
4. batching embeddings
5. prompt compression
6. reranking retrieval
7. caching embeddings


* smart DOM extraction (not just innerText)
* section-based scraping (About / Projects / Skills separately)
* semantic chunking (not fixed split)
* metadata-aware retrieval (filter by section)


fetchPage
remove hardcoded strings: 
GET IN TOUCH
DOWNLOAD MY RESUME
Send Message
- replace with semantic filtering.
