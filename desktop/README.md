# Creator Hub for Windows

## Easiest: let GitHub build it
1. On GitHub open the **Actions** tab, choose **Build Windows installer**, click **Run workflow**.
2. After about 4 minutes open the finished run and download **Creator-Hub-Windows-Installer**.
3. Unzip it and double-click the `.exe`. Windows may warn about an unknown publisher: choose More info, then Run anyway.

## Or build on your own PC
1. Install Node.js (nodejs.org, LTS).
2. In this folder run `npm install` then `npm run dist`.
3. The installer appears in `dist/`.

To just try it without installing: `npm install` then `npm start`.
Needs internet the first time each session to load fonts and the PDF library.
