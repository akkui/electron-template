const electron = require("electron");
const { app, BrowserWindow } = require("electron");

app.on('ready', () => {
  function render() {
    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    win = new BrowserWindow({
      width: width,
      height: height,
      resizable: false,
      autoHideMenuBar: true,
      fullscreen: true,
      title: "Button Status",
      icon: "./img/icon.ico",
      webPreferences: {
        nodeIntegration: true,
      },
    });

    win.loadFile("./src/index.html");
  }

  render();
})

//electron-packager ./ "nome" --icon=./img/icon.ico
