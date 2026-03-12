const emotionEmojiMap = {
  joy: "😊🎉❤️",
  sadness: "😢😭💔",
  anger: "😠💢🔥",
  fear: "😨😱👻",
  disgust: "🤢🤮😖",
  surprise: "😲😮🎁"
};

let ip = document.querySelector("#ip");
let btn = document.querySelector("#btn");
let op = document.querySelector(".emoji");

btn.onclick = () => {
  generateEmojis();
};

async function detectEmotion(text) {
  const response = await fetch("http://localhost:3000/emotion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  // 🔴 HANDLE MODEL LOADING (503)
  if (response.status === 503) {
    const data = await response.json();
    throw new Error(data.error || "Model is loading");
  }

  // 🔴 OTHER ERRORS
  if (!response.ok) {
    throw new Error("Backend error");
  }

  const data = await response.json();
  return data.emotion;
}


async function generateEmojis() {
  const userInput = ip.value.trim();

  if (!userInput) {
    op.innerText = "❗ Please enter some text!";
    return;
  }

  op.innerText = "🔍 Analyzing...";

  try {
    const emotion = await detectEmotion(userInput);
    const emojis = emotionEmojiMap[emotion] || "🤔";
    op.innerText = `Detected Emotion: ${emojis}`;
  }catch (error) {
  console.error(error);

  if (error.message.toLowerCase().includes("loading")) {
    op.innerText = "⏳ Model is loading... please try again in a few seconds";
  } else {
    op.innerText = "❌ Error in detecting emotion.";
  }
}

}

