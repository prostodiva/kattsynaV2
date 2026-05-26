/*
 * Splits large text into semantic chunks
 */

import { embedText } from "../services/embedding.service.js";

/**
 * Split text into sentences
 */
function splitSentences(text: string): string[] {
    return text
        .split(/(?<=[.!?])\s+/)
        .map(s => s.trim())
        .filter(Boolean);
}

/**
 * Cosine similarity between two vectors
 */
function cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
        throw new Error("Vector dimension mismatch");
    }

    let dot = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
        dot += a[i]! * b[i]!;
        normA += a[i]! * a[i]!;
        normB += b[i]! * b[i]!;
    }

    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Semantic chunking using embeddings
 */
export async function semanticChunkText(
    text?: string,
    {
        threshold = 0.75,
        maxChunkSize = 800,
    }: {
        threshold?: number;
        maxChunkSize?: number;
    } = {}
): Promise<string[]> {

    if (!text) return [];

    const sentences = splitSentences(text);
    if (sentences.length === 0) return [];

    const embeddings = await Promise.all(
        sentences.map(s => embedText(s))
    );

    const firstSentence = sentences[0]!;
    const firstVector = embeddings[0]!;

    const chunks: string[] = [];

    let currentChunk: string = firstSentence;
    let currentVector: number[] = firstVector;

    for (let i = 1; i < sentences.length; i++) {
        const sentence = sentences[i]!;
        const vector = embeddings[i]!;

        const similarity = cosineSimilarity(currentVector, vector);

        console.log("Sentence:", sentence);
        console.log("Similarity:", similarity);
        console.log("Current chunk:", currentChunk);

        const wouldOverflow =
            (currentChunk + " " + sentence).length > maxChunkSize;

        if (similarity >= threshold && !wouldOverflow) {
            currentChunk += " " + sentence;

            currentVector = currentVector.map((v, idx) => {
                const next = vector[idx];
                return (v + (next ?? 0)) / 2;
            });
        } else {
            chunks.push(currentChunk);

            currentChunk = sentence;
            currentVector = vector;
        }
    }

    chunks.push(currentChunk);

    return chunks;
}