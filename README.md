# Emotion-Detector-Text2Emoji-
This project is a fun, interactive web app that converts user-written text into a set of relevant emojis based on the emotional tone of the message. It uses a machine learning model (hosted on Hugging Face) to analyze the emotion behind the text, and then maps that emotion to a suitable set of emojis.

How It Works:
The user types any message (e.g., “I’m feeling great today!”) into a textarea.

On clicking a button, the app:
1.
Sends the text to the Hugging Face Emotion Detection API using fetch().
2.
Gets back the most likely emotion (like joy, sadness, etc.).
3.
Uses a JavaScript map to convert that emotion into related emojis.
4.
The resulting emojis (e.g., 😊🎉❤️) are displayed on the screen.


