require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const GROQ_KEY = process.env.GROQ_API_KEY;

// ── startup check ──────────────────────────────────────────
if (!GROQ_KEY || GROQ_KEY === 'your_groq_api_key_here') {
  console.error('\n❌ ERROR: GROQ_API_KEY not set in .env file!');
  console.error('   1. Go to https://console.groq.com');
  console.error('   2. Sign up free → API Keys → Create key');
  console.error('   3. Open .env file and paste it as: GROQ_API_KEY=your_key\n');
  process.exit(1);
}

console.log('✅ Groq API key found:', GROQ_KEY.substring(0, 8) + '...');

app.get('/api/test', (req, res) => {
  res.json({ status: 'Server is working!', keyLoaded: !!GROQ_KEY });
});

app.post('/api/claude', async (req, res) => {
  try {
    const { system, messages } = req.body;

    const groqMessages = [];
    if (system) groqMessages.push({ role: 'system', content: system });
    if (messages && messages.length > 0) {
      messages.slice(-6).forEach(m => groqMessages.push(m));
    }

    console.log('\n📤 Sending to Groq...');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + GROQ_KEY
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: groqMessages,
        max_tokens: 800,
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (data.error) {
      console.error('❌ Groq error:', data.error);
      return res.status(400).json({ error: '❌ Groq said: ' + data.error.message });
    }

    const text = data.choices[0].message.content;
    console.log('✅ Got reply (' + text.length + ' chars)');
    res.json({ text });

  } catch (err) {
    console.error('❌ Server crash:', err.message);
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('\n🚀 Move Well AI server running!');
  console.log('   Website  → http://localhost:' + PORT + '/login.html');
  console.log('   Test API → http://localhost:' + PORT + '/api/test\n');
});
