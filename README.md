# Weight Tracker

A personal weight and calorie tracker with accountability streaks, progress charts, and optional calorie goals. Data persists locally in the browser.

## Local Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Railway

1. Create a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/weight-tracker.git
   git branch -M main
   git push -u origin main
   ```

2. Go to [railway.app](https://railway.app)

3. Click "New Project" → "Deploy from GitHub repo"

4. Select your repo, connect, and Railway auto-deploys

Your tracker will be live at the Railway URL. Each visitor's data stays in their browser (localStorage).

## Features

- Weight tracking with streaks and trend charts
- Daily calorie counter with optional goals
- Progress toward weight goal as a percentage
- BMI display (if height provided)
- All data persists locally in the browser
- No backend required

## Data

Data is stored in browser localStorage. To back it up:
1. Open DevTools (F12)
2. Go to Application → Local Storage
3. Find `ledger-tracker-state` and copy the value

To restore, paste it back into that same key.
