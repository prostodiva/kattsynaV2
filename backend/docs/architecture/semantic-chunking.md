# Semantic chunking

What does it mean?
- Split text into small units (sentences)
- Embed each sentence
- Compare embeddings (cosine similarity)
- Group sentences until meaning shifts
- Emit chunks

- Replaced fixed-size chunking with embedding-based semantic chunking
- Added sentence splitting + cosine similarity to detect topic shifts
- Introduced threshold-based grouping to keep related sentences together
- Added max chunk size control to prevent oversized chunks
- Fixed TypeScript issues (undefined handling, vector safety)
- Ensured proper async pipeline execution (await chunking before embedding)
- Improved preprocessing by cleaning and preparing text for meaningful structure
- Verified integration into full RAG flow (fetch → chunk → embed → store in Chroma)