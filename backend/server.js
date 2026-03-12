import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const HF_TOKEN = process.env.HF_TOKEN;

app.post("/emotion", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/j-hartmann/emotion-english-distilroberta-base",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: text })
      }
    );

    const data = await response.json();

    console.log("HF RAW RESPONSE 👉", data); // 👈 VERY IMPORTANT

    // 🔹 Case 1: Model loading
    if (data?.error) {
      return res.status(503).json({
        error: "Model is loading, try again in a few seconds"
      });
    }

    let emotion = null;

    // 🔹 Case 2: Nested array format
    if (Array.isArray(data) && Array.isArray(data[0])) {
      emotion = data[0][0]?.label;
    }
    // 🔹 Case 3: Flat array format
    else if (Array.isArray(data) && data[0]?.label) {
      emotion = data[0].label;
    }

    if (!emotion) {
      return res.status(500).json({
        error: "Unexpected Hugging Face response format"
      });
    }

    res.json({ emotion });

  } catch (err) {
    console.error("BACKEND CRASH ❌", err);
    res.status(500).json({ error: "Emotion detection failed" });
  }
});



app.listen(3000, () => {
  console.log("✅ Backend running on http://localhost:3000");
});
