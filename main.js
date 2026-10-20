const { app, BrowserWindow, Notification, ipcMain, screen } = require('electron');
const path = require('node:path');

app.setAppUserModelId('com.mochi.timer');

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 380, height: 480, minWidth: 340, minHeight: 430,
    useContentSize: true, frame: false, transparent: true, roundedCorners: true, resizable: true,
    maximizable: false, fullscreenable: false, autoHideMenuBar: true,
    backgroundColor: '#00000000', show: false,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false }
  });
  // Keep the compact app proportions when the user resizes it.
  win.setAspectRatio(380 / 480);
  win.loadFile('index.html');
  win.once('ready-to-show', () => win.show());
  win.on('maximize', () => win.unmaximize());
}
app.whenReady().then(() => { createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
ipcMain.on('mochi:notify', (_event, payload) => {
  if (!Notification.isSupported()) return;
  new Notification({ title: String(payload?.title || 'Mochi'), body: String(payload?.body || 'Your session has ended.'), silent: false }).show();
});
ipcMain.on('mochi:close', () => win?.close());
ipcMain.on('mochi:minimize', () => win?.minimize());
