# Gemini-Powered-AI-Assistant💬✨

A full-stack AI Assistant with **chat memory**, **LLM switching**, and **zero cost deployment** — built using only **free-tier services**.

👉 [Try it out here](https://d27dsq3yzkj3os.cloudfront.net)

## 📸 Screenshots
![Homepage](Frontend/assets/Home_page.png)
*Homepage*

![Chat Interface](Frontend/assets/Main_Chat_Page.png)
*Main Chat UI*

---

## 🚀 Features

- 🤖 **Primary LLM**: Gemini 1.5 Flash (via Google Generative AI SDK)
- 🔁 **Fallback LLM**: Mixtral 8x7B via HuggingFace Inference API
- 🧠 **Chat Memory**: Stored in PostgreSQL (Neon)
- 🧵 **Contextual Responses**: Messages are remembered per session
- ⚡ **LLM Switch Logic**: Automatically falls back to Mixtral if Gemini quota is exhausted
- 📦 **Full-stack deployment with zero cost**

---

## 🧱 Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on **AWS S3 + CloudFront**

### Backend
- [Flask](https://flask.palletsprojects.com/)
- Gemini SDK (Google Generative AI)
- Hugging Face Inference API
- Deployed on **Render Free Tier**

### Database
- [PostgreSQL (Neon)](https://neon.tech/)  
  Stores per-session message history for memory

---

## 🌐 Live Demo

👉 [Try it out here](https://d27dsq3yzkj3os.cloudfront.net)

⏱ **Note**: First message may take 5–15 seconds due to:
- Render cold start
- LLM spin-up time
- DB context generation

After that, responses are smooth and fast.

---

