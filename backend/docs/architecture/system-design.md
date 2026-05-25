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
Axios/fetch
↓
Cheerio HTML parsing
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
- Axios - fetching HTML pages before parsing them
- CORS - allow the frontend chat UI to talk to backend API/WebSocket; prevent browser security errors
- dotenv - Loads environment variables from a .env file
- zod - A validation library for checking and typing data; prevents bad input from breaking backend

[MVP 1](../mvp/01-mvp.md)

