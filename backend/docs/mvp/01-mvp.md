## MVP (Phase 1) - Website Knowledge Assistant

Answer questions accurately using ONLY my website content.

The goal:   
Frontend → WebSocket → Backend → Chroma → Ollama → streamed response

### Step 1. Run a simple server
- create .env & .env.example
- load env(dotenv)
- import express & cors
- create an express app
- apply middleware (cors, express.json)
- add /health route
- read PORT from env (fallback default)
- start server with app.listen
- verify http://localhost:PORT/health returns { ok: true }

### Step 2. Add WebSocket layer
add:
- WebSocket server
- echo messages first

### Step 3: Add “fake RAG” 
confirm that LLM streaming works:
- send a hardcoded content 
User question → LLM → response

### Step 4: Add real streaming 
Add Ollama LLM
- integrate Ollama
send prompt → get streamed response

### Step 5: Add embeddings (nomic-embed-text)
input → embedding vector printed in console

### Step 6: Add Chroma 
- Manually insert 3–5 chunks
- check that retrieval works
  query → similarity search → top chunks

### Wire the RAG loop
user question
→ embed
→ chroma search
→ context
→ ollama
→ stream response


3 layers:
1. Transport layer
WebSocket + Express
2. Intelligence layer
Ollama + LangChain
3. Memory layer
ChromaDB 