import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        icon: path.join(__dirname, "../dist/mail-client/assets/icon.png"),
        webPreferences: {
            nodeIntegration: true, // Allows IPC and other APIs
        }
    });
    mainWindow.loadFile(path.join(__dirname, "../dist/mail-client/index.html"));
});

app.on("window-all-closed", () => {app.quit()});
