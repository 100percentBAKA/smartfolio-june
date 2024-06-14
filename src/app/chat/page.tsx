"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import { RiRobot2Line } from "react-icons/ri";

interface Message {
    sender: "human" | "ai";
    text: string;
}

function Chat() {
    const [inputValue, setInputValue] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSuggestionClick = (text: string) => {
        setInputValue(text);
    };

    const handleBtnClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim() !== "") {
            const newMessage: Message = { sender: "human", text: inputValue };
            setMessages([
                ...messages,
                newMessage,
                generateAiResponse(newMessage.text),
            ]);
            setInputValue("");
        }
    };

    const generateAiResponse = (humanMessage: string): Message => {
        const aiResponses: { [key: string]: string } = {
            "When is Adarsh's birthday? 🎉": "July 1st 🤩",
            "How do I contact you 👋":
                "You can contact me via email at example@example.com.",
            "Do you have any work experience ⚒️":
                "Yes, I have experience in web development.",
            "What is your github account 👁️": `
[100percentBAKA](https://www.github.com/100percentBAKA)
        `,
        };

        //! React Markdown has some issues with initial white spaces, remove initial white space beforehand

        return {
            sender: "ai",
            text: aiResponses[humanMessage] || "I'm not sure about that.",
        };
    };

    const suggestions = [
        "When is Adarsh's birthday? 🎉",
        "How do I contact you 👋",
        "Do you have any work experience ⚒️",
        "What is your github account 👁️",
    ];

    return (
        <section className="max-w-7xl w-full h-full flex flex-col px-4 md:px-8 mx-auto">
            <div>
                <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Playground</h1>
                <p className="leading-7 text-muted-foreground mt-2">
                    Chat with my portfolio!
                </p>
            </div>

            <div className="rounded-md border border-gray-200 w-full h-full mt-8 flex flex-col">
                {/* Suggestion Windows */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center p-4 gap-6 border-b border-gray-200">
                    {suggestions.map((text, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 p-2 rounded-md cursor-pointer transition-colors duration-150 hover:border-blue-300"
                            onClick={() => handleSuggestionClick(text)}
                        >
                            {text}
                        </div>
                    ))}
                </div>

                {/* Chat Window */}
                <div className="flex-1 p-4 overflow-y-auto min-h-[60vh] flex flex-col">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`my-2 max-w-xs p-2 rounded-md ${
                                message.sender === "human"
                                    ? "bg-blue-100 self-end"
                                    : "bg-gray-100 self-start"
                            }`}
                        >
                            <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                    ))}

                    {/* Fall back for empty chat window */}
                    <div className="flex-1 min-h-[60vh] w-full flex items-center justify-center">
                        {messages.length === 0 && (
                            <div className="flex flex-col space-y-4 items-center">
                                <RiRobot2Line className="w-[24px] h-[24px]" />
                                <p>Send a message to start chatting with my portfolio</p>
                                <p>Feel free to use the above suggestions</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Input Field goes here . . . */}
                <div className="p-4 border-t border-gray-200">
                    <form
                        className="flex items-center space-x-2"
                        onSubmit={handleBtnClick}
                    >
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInputValue(e.target.value)}
                            className="flex-1 border border-gray-300 p-2 rounded-md"
                            placeholder="Type a message..."
                        />
                        <Button className="rounded-md flex items-center" type="submit">
                            <span className="hidden lg:flex">Send</span>
                            <IoSend className="lg:hidden" />
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Chat;
