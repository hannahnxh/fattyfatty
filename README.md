# Weight Tracker

A personal weight and calorie tracker with accountability streaks, progress charts, and optional calorie goals. Pure static site — data persists locally in the browser.

## Run locally

Just open `index.html` in your browser (double-click it, or `open index.html`). No build step, no server.

## Deploy to GitHub Pages

1. Create a repo on GitHub (e.g. `weight-tracker`), then push:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/weight-tracker.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)** → Save

3. After ~1 minute your tracker is live at
   `https://YOUR_USERNAME.github.io/weight-tracker/`

`index.html` is served automatically as the index page.

## Features

- Weight tracking with streaks and trend charts
- Daily calorie counter with optional goals
- Progress toward weight goal as a percentage
- BMI display (if height provided)
- All data persists in browser localStorage — no backend

## Data

Data is stored in browser localStorage (per browser/device). To back it up:

1. Open DevTools (F12)
2. Application → Local Storage
3. Copy the value of `ledger-tracker-state`

To restore, paste it back into that same key.
