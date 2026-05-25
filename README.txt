# Move Well — AI Physiotherapy Assistant (FREE using Google Gemini)
=======================================================================

## HOW TO GET YOUR FREE API KEY (100% free, no credit card)
-----------------------------------------------------------------------
1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with any Google account
3. Click "Create API Key"
4. Copy the key (looks like: AIzaSy...)

That's it! You get 1500 FREE requests per day forever.


## SETUP STEPS
-----------------------------------------------------------------------

STEP 1 — Install Node.js
   Download from: https://nodejs.org  (click the "LTS" button)
   Install it, then RESTART your computer.

STEP 2 — Add your API key
   Open the file named  .env  in this folder
   Replace the placeholder:

     GEMINI_API_KEY=AIzaSy_YOUR_KEY_HERE

   Save the file.

STEP 3 — Open terminal IN this folder
   Windows: Right-click the folder → "Open in Terminal"
   Mac: Right-click → "New Terminal at Folder"

STEP 4 — Install packages (only once)
   Type this and press Enter:

     npm install

STEP 5 — Start the server
   Type this and press Enter:

     node server.js

   You'll see:  ✅ Move Well server running at http://localhost:3000

STEP 6 — Open your website
   Go to your browser and type:

     http://localhost:3000/login.html

   Fill in your name, age etc. and click Continue.
   ALL AI features now work for FREE! 🎉


## FILES IN THIS FOLDER
-----------------------------------------------------------------------
  server.js    → backend server (connects to Gemini AI)
  index.html   → main website
  login.html   → user profile page
  .env         → your secret API key (never share this file!)
  README.txt   → this file


## AI FEATURES
-----------------------------------------------------------------------
  🤖 Floating Chatbot     → ask any physio question (bottom-right)
  🔍 Symptom Analyzer     → describe pain → get AI exercise plan
  📊 Smart BMI Insight    → personalized AI advice after BMI check


## TROUBLESHOOTING
-----------------------------------------------------------------------
  "node is not recognized"   → Node.js not installed, redo Step 1
  "AI not responding"        → Check your API key in .env is correct
  "Cannot GET /"             → Open /login.html not just /
  Port 3000 busy             → Add PORT=3001 in .env

