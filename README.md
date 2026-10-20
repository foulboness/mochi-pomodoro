# Mochi ♡

A tiny, rounded Pomodoro desktop app built with Electron, HTML, CSS, and vanilla JavaScript.

## Features
- Compact, frameless desktop window, initially 380 × 480 px
- Rounded pink UI with a draggable top bar and aspect-locked resizing
- 25-minute focus sessions, 5-minute short breaks, and a 15-minute long break after every fourth focus session
- Pause/resume, reset, and skip controls
- Native desktop notifications when a session ends
- Overlay settings popup for session lengths and light/dark themes
- Custom Mochi app icon for the window and Windows installer

## Run locally
1. Install Node.js LTS from https://nodejs.org/.
2. Extract this folder and open a terminal in the project folder.
3. Run:

   ```bash
   npm install
   npm start
   ```

## Build a Windows installer
In the project folder, run:

```bash
npm install
npm run dist
```

The installer will be created in `dist/` as `Mochi-Setup-1.0.0.exe`.

## Icon files
- `assets/icon.png` is used for the running Electron window.
- `assets/icon.ico` is used by Electron Builder for the Windows app and installer.

If Windows continues to show the old Electron icon, uninstall the previous build, close any running Mochi instance, rebuild with `npm run dist`, and install the newly generated installer. Windows may cache icons temporarily.

## Notes
- Google Fonts are loaded online; system font fallbacks are included.
- Windows native notifications may depend on Windows notification settings.
- Exact aspect-ratio resizing can vary slightly by operating system/window manager.
