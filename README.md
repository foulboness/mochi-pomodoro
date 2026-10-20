# Mochi — Your Cozy Focus Companion

<p align="center">
  A cozy little Pomodoro timer to make studying, working, and everyday tasks feel a little sweeter. ♡
</p>

<p align="center">
  **Focus a little. Rest a little. Repeat.**
</p>

---


<p align="center">
  <a href="YOUR-VERCEL-WEBSITE-URL">
    Visit the Mochi Website
  </a>
  <br><br>
  <a href="https://github.com/foulboness/mochi-pomodoro/releases/latest">
    Download Mochi for Windows
  </a>
</p>

## About Mochi

**Mochi** is a cute desktop Pomodoro timer designed to help you stay focused without making productivity feel overwhelming.

Featuring a cozy pixel-art room, an adorable cat companion, customizable themes, and focus sessions with built-in breaks, Mochi gives you a little space to concentrate, recharge, and get things done.

Whether you're studying for exams, coding your next project, reading a book, or working on something creative, Mochi is here to keep you company. 🐱

## Features

- **Pomodoro Timer** — Work in focused intervals followed by refreshing breaks.
- **Short & Long Breaks** — Take regular breaks, with a longer break after every fourth focus session.
- **Desktop Notifications** — Receive notifications when a focus session or break ends.
- **Cute Themes** — Switch between pink and blue themes to personalize your workspace.
- **Desktop Experience** — Use Mochi directly on your Windows computer.
- **Cozy Interface** — A soft, playful design made for everyday focus sessions.

## Installation

### Windows

The easiest way to get started is to download the latest installer.

1. Visit the [**Mochi Releases**](https://github.com/foulboness/YOUR-REPO-NAME/releases/latest) page.
2. Under **Assets**, download `Mochi Setup 1.0.0.exe` or the installer provided with the latest release.
3. Open the downloaded `.exe` file.
4. Follow the installation instructions.
5. Launch Mochi and start your first focus session!

> **Note:** Mochi is distributed as a Windows desktop application. The installer filename and available operating systems may change between releases.

### Windows security notice

If Windows displays a security warning, verify that you downloaded the installer from the official Mochi GitHub Releases page. Only run software you trust. An unsigned application may trigger a Microsoft Defender SmartScreen warning.

## How the Pomodoro Timer Works

Mochi follows the Pomodoro technique, a time-management method that alternates focused work with regular breaks.

| Session | Duration |
|---|---:|
| Focus | 25 minutes |
| Short break | 5 minutes |
| Long break | 15 minutes |

After four focus sessions, take a longer break to recharge before continuing.

## Built With

- **Electron** — Desktop application framework
- **HTML** — Application structure
- **CSS** — Styling and interface design
- **JavaScript** — Timer functionality and interactions
- **Node.js and npm** — Development tools and package management

## Run From Source

Want to explore the code or run Mochi in development mode?

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) — preferably the version specified in the project's `package.json`, if applicable.
- npm — included with Node.js.
- [Git](https://git-scm.com/) — optional, if you want to clone the repository.

### 1. Clone the repository

```bash
git clone https://github.com/foulboness/mochi-pomodoro.git
```

### 2. Open the project directory

```bash
cd mochi-pomodoro
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start Mochi

```bash
npm start
```

If your `package.json` uses a different development script, use the corresponding command defined in its `scripts` section.

## Build the Application

To build Mochi for Windows, use the build script configured in your `package.json`.

For example, if the project uses electron-builder and defines a `build` script:

```bash
npm run build
```

The generated installer and other build artifacts will usually appear in the `dist/` directory.

The exact command depends on your project's build configuration.

## Troubleshooting

**The installer won't open**
- Make sure the download completed successfully.
- Download the installer again from the official Releases page.
- Check that your Windows version is compatible with the build.

**Windows displays a security warning**
- Verify the source of the installer before proceeding.
- Unsigned installers can trigger SmartScreen warnings.

**Desktop notifications aren't appearing**
- Check your Windows notification settings.
- Ensure notifications are enabled for your application where supported.

**The app doesn't start during development**
- Confirm that Node.js and npm are installed.
- Run `npm install` from the project directory.
- Check the terminal for error messages after running `npm start`.

If you encounter an issue, please [open a GitHub issue](https://github.com/foulboness/YOUR-REPO-NAME/issues) and include a description of the problem and any relevant error messages.


## Privacy

Mochi is intended to be a local desktop productivity application. Review the source code and application permissions for details about any data collection, network access, or external integrations before making privacy claims about a particular release.

## Release History

### v1.0.0 — First Release

- Initial public Windows release.
- Pomodoro focus and break timer.
- Cozy pixel-art interface.
- Theme options and desktop notifications, where supported.

See [**all releases**](https://github.com/foulboness/YOUR-REPO-NAME/releases) for available downloads and release notes.

## 🤍 Contributing

Suggestions, bug reports, and ideas are welcome!

1. Open an issue describing your suggestion or the problem you found.
2. Explain how the proposed change would improve Mochi.
3. If you're contributing code, submit a pull request with a clear description of your changes.


<p align="center">
  Made with ♡ and a little pixel magic.
</p>
