## MVP (Phase 1) - Website Knowledge Assistant

Answer questions accurately using ONLY my website content.

### Runtime Chat Pipeline
The goal:   
Frontend → WebSocket → Backend → Chroma → Ollama → streamed response

### Step 1. Run a simple server 
[server](../../src/server.ts)
- create .env & .env.example
- load env(dotenv)
- import express & cors
- create an express app
- apply middleware (cors, express.json)
- add /health route
- read PORT from env (fallback default)
- start server with app.listen
- verify http://localhost:PORT/health returns { ok: true }

### Step 2. Add WebSocket layer (transport layer)
add:
- WebSocket server
- echo messages first
[socket](../../src/websocket/socket.ts)

### Step 3: Add “fake RAG” 
confirm that LLM streaming works:
- send a hardcoded content 
User question → LLM → response
[service layer - AI logic (RAG / LLM)](../../src/services/llm.service.ts)

### Step 4: Add real streaming 
Add Ollama LLM
- integrate Ollama
send prompt → get streamed response

so far I have:
Frontend
↓
WebSocket
↓
Node backend
↓
LangChain ChatOllama
↓
Ollama LLM
↓
stream tokens back

### Step 5: Add embeddings (nomic-embed-text)
input → embedding vector printed in console
[embedding](../../src/services/embedding.service.ts)

User input
↓
nomic-embed-text (Ollama)
↓
768-dimensional vector
↓
Printed in backend

### Step 6: Add Chroma 
- Manually insert 3–5 chunks
- check that retrieval works
  query → similarity search → top chunks
[chroma db](../../src/db/chroma.ts)
[retrieval](../../src/services/retrieval.service.ts)

User query
↓
Embedding (nomic-embed-text)
↓
ChromaDB similarity search
↓
Top-3 relevant chunks returned

### Wire the RAG loop
user question
→ embed
→ chroma search
→ context
→ ollama
→ stream response
[rag](../../src/services/rag.service.ts)

User query
↓
Ollama embedding (768d)
↓
Chroma similarity search
↓
Top chunks retrieved
↓
Injected into prompt
↓
Ollama LLM response

3 layers:
1. Transport layer
WebSocket + Express
2. Intelligence layer
Ollama + LangChain
3. Memory layer
ChromaDB 

# Content Ingestion Pipeline
