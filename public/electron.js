const { app, BrowserWindow, dialog, ipcMain, Menu, Tray } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow = null;
let tray = null;
let contextMenu = null;
let iconPath = null;

function forceCloseMainWindow() {
  app.isQuiting = true;
  app.quit();
}

function renderTrayBar(mainWindow) {
  iconPath = path.join(__dirname, './iconclock.png');
  tray = new Tray(iconPath);
  contextMenu = Menu.buildFromTemplate([
    {
      label: 'Abrir',
      click() {
        mainWindow.show();
      },
    },
    {
      label: 'Minimizar',
      click() {
        mainWindow.minimize();
      },
    },
    {
      label: 'Maximizar',
      click() {
        mainWindow.maximize();
      },
    },
    {
      label: 'Fechar',
      click() {
        forceCloseMainWindow();
      },
    },
  ]);

  tray.setToolTip('Time Show Electron.');
  tray.setContextMenu(contextMenu);
}

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`,
  );

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.setMenuBarVisibility(false);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    renderTrayBar(mainWindow);
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function onCloseWindow(e, options) {
  const window = BrowserWindow.getFocusedWindow();
  const ret = dialog.showMessageBoxSync(window, options);

  if (ret === 0) {
    e.preventDefault();
    forceCloseMainWindow();
  }
}

ipcMain.on('confirm-close', (event, options) => {
  onCloseWindow(event, options);
});

function openFileToRenderer(event) {
  dialog
    .showOpenDialog(mainWindow, {
      properties: ['openFile', 'openDirectory'],
    })
    .then(result => {
      console.log(result.canceled);
      console.log(result.filePaths);
    })
    .catch(err => {
      console.log(err);
    });
}

ipcMain.on('open-file', event => {
  openFileToRenderer(event);
});
