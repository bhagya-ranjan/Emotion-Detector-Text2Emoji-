# 🧠 Text2Emoji – AI Emotion Detector

Convert text into expressive emojis using **AI-powered emotion detection**.

This application analyzes the emotion in a sentence using a **HuggingFace NLP model** and converts it into relevant emojis for intuitive visualization.

---

## 🚀 Features

* Detects emotions from user text
* Converts detected emotions into emojis
* Real-time emotion analysis
* Clean and responsive UI
* AI-powered NLP model integration

---

## 🧠 How It Works

1. User enters a sentence.
2. Frontend sends the text to the backend server.
3. Backend calls the **HuggingFace Emotion Detection API**.
4. API returns emotion probabilities.
5. The dominant emotion is mapped to an emoji and displayed.

---

## 🛠 Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**AI / NLP**

* HuggingFace Transformers API

---

## 📂 Project Structure

```
Emotion-Detector-Text2Emoji
│
├── backend
│   ├── server.js
│   ├── package.json
│
├── index.html
├── script.js
├── style.css
├── .env
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/Emotion-Detector-Text2Emoji.git
```

### 2️⃣ Install dependencies

```
cd backend
npm install
```

### 3️⃣ Add HuggingFace API key

Create a `.env` file:

```
HF_API_KEY=your_huggingface_api_key
```

### 4️⃣ Run the server

```
node server.js
```

---

## 🎯 Example

Input:

```
I am extremely happy today!
```

Output:

```
😊 🎉
```

---

## 📸 Demo

<img width="1886" height="918" alt="image" src="https://github.com/user-attachments/assets/046939ab-9035-4574-b4f4-d01cadb06ae7" />


---

## 🔮 Future Improvements

* Emotion probability visualization
* Emotion history tracking
* Multiple emoji suggestions
* Deployment with cloud hosting

---

## 👨‍💻 Author

**Bhagya Ranjan Singh**

GitHub: https://github.com/bhagya-ranjan
