// const express = require("express");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const userRouter = require("./routes/userroute");

// dotenv.config();

// // Create Express app
// const app = express();

// const corsOptions = {
//     origin: ['http://localhost:5173'],  // Allow frontend
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//     optionsSuccessStatus: 204
// };

// // Use CORS middleware with options
// app.use(cors(corsOptions));

// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log("Connected to DB"))
//     .catch((err) => console.log("MongoDB connection failed", err));

// // Routes
// app.use("/api/users", userRouter);

// // Start Server
// const port = process.env.PORT || 9000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));


require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const userRouter = require("./routes/userroute");

// Create Express app
const app = express();

// CORS options
const corsOptions = {
    origin: ['http://localhost:5173'],  // Allow frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use(express.json());

// Check if API key exists
if (!process.env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY not found in environment variables");
    process.exit(1);
}

// Initialize Google Generative AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Connect to MongoDB with proper error handling
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Exit the process if DB connection fails
});

// Routes
app.use("/api/users", userRouter);

// Root route
app.get("/", (req, res) => {
    res.json({ 
        message: "Server is running",
        endpoints: {
            root: "GET /",
            generate: "POST /generate"
        }
    });
});

// Generate content route
app.post("/generate", async (req, res) => {
    const { prompt } = req.body;
    
    if (!prompt) {
        return res.status(400).json({
            error: "Missing prompt",
            message: "Please provide a prompt in the request body"
        });
    }

    try {
        // Ensure correct model name
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        res.json({ 
            success: true,
            result: text 
        });
    } catch (error) {
        console.error("❌ Error generating content:", error);
        res.status(500).json({
            error: "Failed to generate content",
            message: error.message
        });
    }
});

// Handle 404s
app.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: "The requested URL was not found on this server.",
        path: req.path
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Something went wrong!",
        message: err.message
    });
});

// Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`🌍 Test the server at http://localhost:${PORT}`);
});
