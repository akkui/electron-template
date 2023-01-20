const { app, BrowserWindow } = require("electron");

let win = null;
const render = () => {
  win = new BrowserWindow({
    width: 1280,
    height: 768,
    resizable: false,
    autoHideMenuBar: true,
    title: "Button Status",
    icon: "./img/icon.ico",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("./src/index.html");
};

app.whenReady().then(render);