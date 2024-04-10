"use client";
import {BubbleChat} from "flowise-embed-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="pb-10 font-semibold text-3xl z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
        Rocket Loans Customer Service AI
      </div>
      <div
        className="max-w-screen-md rounded-lg border px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Click the blue bubble to chat with the AI chatbot
        </h2>
        <div className={`mx-5 text-md opacity-80 text-balance`}>
          <div className={"text-lg font-semibold"}>Notes: </div>
          <ul className={"list-disc"}>
            <li>The chatbot is built with <a href={"https://flowiseai.com"} target={"_blank"} className={"underline"}>Flowise</a>, with <code>gpt-3.5-turbo</code> as the underlying LLM</li>
            <li>Knowledge regarding Rocket Loans was scraped from <a href={"https://www.rocketloans.com/learn"} target={"_blank"} className={"underline"}>Learning Center</a> </li>
            <li>Scraped info was embedded using OpenAI <code>text-embedding-ada-002</code> and stored in Pinecone vector database to support retrieval-augmented generation (RAG)</li>
            <li>LangChain Agent will first try to utilize info stored in Pinecone to answer questions related to Rocket Loans</li>
            <li>If there is no retrievable info, the Agent will use Serp API to search Google for an answer</li>
            <li>The chatbot will only answer financial-related questions</li>
          </ul>
        </div>
      </div>
      <BubbleChat
        chatflowid="0899c20f-4164-4183-a06e-1dd7fe1b82b4"
        apiHost="https://flowiseai-railway-production-e6a7.up.railway.app"
        theme={{
          chatWindow: {
          "welcomeMessage": "Welcome to Rocket Loans. How can I help you?",
        }
      }}
      />
      <div className={"font-mono pt-10"}>© {new Date().getFullYear()} Qinfeng Wu</div>
    </main>
  );
}
