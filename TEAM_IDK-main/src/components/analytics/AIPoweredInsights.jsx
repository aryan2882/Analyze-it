// import { motion } from "framer-motion";
// import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";
// import React, { useState, useRef, useEffect } from 'react';



// const AIPoweredInsights = () => {
//     const [messages, setMessages] = useState([]);
//     const [userInput, setUserInput] = useState("");
//     const chatContainerRef = useRef(null);

//     const handleSendMessage = async () => {
//         if (userInput.trim() !== "") {
//             const userMessage = { text: userInput, sender: "user" };
//             setMessages(prevMessages => [...prevMessages, userMessage]); // Functional update
//             setUserInput("");

//             try {
//                 const aiResponse = await getAIResponse(userInput);
//                 const aiMessage = { text: aiResponse, sender: "ai" };
//                 setMessages(prevMessages => [...prevMessages, aiMessage]); // Functional update
//             } catch (error) {
//                 console.error("Error getting AI response:", error);
//                 const errorMessage = { text: "We are in testing phase only,Error communicating with AI.", sender: "ai" };
//                 setMessages(prevMessages => [...prevMessages, errorMessage]); // Functional update
//             }
//         }
//     };

//     const getAIResponse = async (userMessage) => {
//         const apiUrl = 'YOUR_AI_API_ENDPOINT'; // **REPLACE with your AI API endpoint**
//         const requestBody = {
//             message: userMessage,
//         };

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST', // Or GET, depending on your API
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // Add any necessary API keys or authentication headers here
//                     // Example with a Bearer token:
//                     // 'Authorization': 'Bearer YOUR_API_KEY', // **REPLACE with your API key**
//                 },
//                 body: JSON.stringify(requestBody),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(`API request failed with status ${response.status}: ${errorData.message || response.statusText}`);
//             }

//             const data = await response.json();
//             return data.response; // **Adjust this to match your API's response structure**

//         } catch (error) {
//             console.error("Error fetching from AI API:", error);
//             throw error;
//         }
//     };

//     useEffect(() => {
//         if (chatContainerRef.current) {
//             chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//         }
//     }, [messages]);

//     return (
//         <div className="space-y-4">
//             <motion.div
//                 className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.0 }}
//             >
//                 <h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Chat-Bot-Helpline</h2>
               
//             </motion.div>

//             <motion.div
//                 className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.2 }}
//             >
//                 <h2 className='text-xl font-semibold text-gray-100 mb-4'>Talk to AI</h2>
//                 <div className="chat-container" ref={chatContainerRef}>
//                     {messages.map((msg, index) => (
//                         <div key={index} className={`message ${msg.sender}`}>
//                             {msg.text}
//                         </div>
//                     ))}
//                 </div>
//                 <div className="chat-input-area">
//                     <input
//                         type="text"
//                         className="chat-input"
//                         placeholder="Type your message..."
//                         value={userInput}
//                         onChange={(e) => setUserInput(e.target.value)}
//                         onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
//                     />
//                     <button className="send-button" onClick={handleSendMessage}>Send</button>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default AIPoweredInsights;






import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const AIPoweredInsights = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSendMessage = async () => {
    if (userInput.trim() === "" || isLoading) return;

    const userMessage = { text: userInput.trim(), sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      // Log the user input before sending
      console.log("Sending prompt:", userInput.trim());
      
      const aiResponse = await getAIResponse(userInput.trim());
      setMessages(prev => [...prev, { text: aiResponse, sender: "ai" }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages(prev => [
        ...prev,
        { 
          text: "Sorry, I couldn't process your request. Please try again.", 
          sender: "ai" 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getAIResponse = async (prompt) => {
    // Create the request body
    const requestBody = { prompt: prompt };
    console.log("Request body:", requestBody);

    const response = await fetch("http://localhost:9000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("API Error Response:", data);
      throw new Error(`API error: ${response.status} ${response.statusText} - ${JSON.stringify(data)}`);
    }

    return data.result;
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="space-y-4">
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">AI-Chat-Bot-Helpline</h2>
      </motion.div>

      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Talk to AI</h2>
        
        <div 
          ref={chatContainerRef}
          className="h-96 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="bg-gray-700 text-gray-100 p-3 rounded-lg max-w-[80%]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || userInput.trim() === ""}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AIPoweredInsights;
