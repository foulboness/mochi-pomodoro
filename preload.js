const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('mochi', {
  notify: (payload) => ipcRenderer.send('mochi:notify', payload),
  close: () => ipcRenderer.send('mochi:close'),
  minimize: () => ipcRenderer.send('mochi:minimize')
});
