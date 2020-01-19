const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
let tray = null;
let contextMenu = null;
let iconPath = null;

function renderTrayBar(mainWindow) {
	iconPath = path.join(__dirname, './iconclock.png');
  tray = new Tray(iconPath);
	contextMenu = Menu.buildFromTemplate([
		{
			label: 'Abrir',
			click() {
				mainWindow.show();
			}
    },
    {
			label: 'Minimizar',
			click() {
				mainWindow.minimize();
			}
		},
    {
			label: 'Maximizar',
			click() {
				mainWindow.maximize();
			}
		},
		{
			label: 'Fechar',
			click() {
        app.isQuiting = true; app.quit()
			}
		}
	]);

	tray.setToolTip('Time Own Electron.');
	tray.setContextMenu(contextMenu);
}

function createWindow() {
	mainWindow = new BrowserWindow({
		show: false,
		width: 1024,
		height: 720,
		webPreferences: {
			nodeIntegration: true
		}
	});

	mainWindow.loadURL(
		isDev ? 'http://localhost:3000' : `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`
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
