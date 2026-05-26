import { ChatOllama } from "@langchain/ollama";

const llm = new ChatOllama({
    model: "llama3.1",
    streaming: true,
});

export async function streamLLMResponse(
    prompt: string,
    onToken: (token: string) => void,
    onEnd: () => void,
    onError: (err: any) => void
) {
    try {
        const stream = await llm.stream([
            {
                role: "user",
                content: prompt,
            },
        ]);

        for await (const chunk of stream) {
            const token = chunk.content;

            if (typeof token === "string") {
                process.stdout.write(token);
                onToken(token);
            }
        }

        onEnd();
    } catch (err) {
        console.error("LLM stream error:", err);
        onError(err);
    }
}