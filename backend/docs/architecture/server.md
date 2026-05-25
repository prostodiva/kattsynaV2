# Server documentation

### Purpose
    Turn a pile of modules into one running process.
    Wire everything together

### Summary
    The file serves as an entry point for the program

### Runtime Role
    - loads environment variables (dotenv)
    - initializes Express and WebSocket servers
    - initializes database/vector store connections
    - constructs repositories and AI services
    - initializes LangChain RAG pipeline
    - listens for incoming chat requests
    - streams LLM responses to frontend clients
    - gracefully closes connections on SIGINT

### Ownership

- What .start() exists
- What runs forever
