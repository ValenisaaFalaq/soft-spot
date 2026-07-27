import { app, BrowserWindow } from "electron";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    center: true,
    autoHideMenuBar: true,
    frame: true,
    titleBarStyle: "hidden",
    titleBarOverlay: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Mempermudah MVP tanpa file preload
    },
  });

  mainWindow.setMenu(null);

  // URL ini mengarah ke server React (Vite)
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
