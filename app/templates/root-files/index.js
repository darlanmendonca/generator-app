'use strict';

const electron = require('electron');
const app = electron.app;

// report crashes to the Electron project
require('crash-reporter').start({
  productName: '<%= applicationName %>',
  companyName: '<%= applicationName %>',
});

// adds debug features like hotkeys for triggering dev tools and reload
let showDevTools = true;
require('electron-debug')({showDevTools});

// prevent window being garbage collected
let mainWindow;

app.on('window-all-closed', quitApplication);
app.on('activate', activateApplication);
app.on('ready', activateApplication);

function onClosed() {
  // dereference the window
  // for multiple windows store them in an array
  mainWindow = null;
}

function createMainWindow() {
  const win = new electron
    .BrowserWindow({
      width: 800,
      height: 600
    });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', onClosed);

  return win;
}

function quitApplication() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}

function activateApplication() {
  if (!mainWindow) {
    mainWindow = createMainWindow();
  }
}
