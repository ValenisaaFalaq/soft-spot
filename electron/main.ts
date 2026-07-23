import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 720,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    center: true,
    autoHideMenuBar: true,
    titleBarStyle: "hidden", // Opsional: membuat tampilan lebih modern
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  mainWindow.setMenu(null); // Menghilangkan menu bar

  // Sesuaikan dengan port environment React kamu (biasanya 5173 untuk Vite)
  mainWindow.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
