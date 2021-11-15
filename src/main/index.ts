import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;

app.whenReady().then(async () => {
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
  await createWindow();
});

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: './preload.js',
    },
  });

  await mainWindow.loadURL('http://localhost:8080/index.html');
}
