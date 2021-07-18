//
//#region Required Modules ...
const url = require('url');
const path = require('path');
const { app, shell, Tray, BrowserWindow, Menu } = require('electron');
//#endregion

//
//#region Prepare Required Config Data ...
//
// Set Environment ...
process.env.NODE_ENV = 'production';

//
const isDevelopment = process.env.NODE_ENV !== 'production' ? true : false; // app.isPackaged;
const isMac = process.platform === 'darwin' ? true : false;

//
const iconPath = path.join(__dirname, 'www/assets/icon/favicon.png');
const trayIconPath = path.join(__dirname, 'www/assets/icon/icon-16x16.png');
//#endregion

//
//#region Global Objects ...
let tray;
let mainWindow;
let mainUrl;
//#endregion

//
//#region Creator Fuctions ...
/**
 * Creat SysTray Object for using in app ...
 */
function createTray() {
  //
  // Create Tray Instance ...
  tray = new Tray(trayIconPath);

  //
  // Attach Event Listener to Tray Click ...
  tray.on('click', () => {
    toggleMainWindow();
  });

  //
  // Attach Event Listener to Tray RightClick ...
  tray.on('right-click', () => {
    //
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'quit',
        click: () => {
          //
          app.isClosing = true;
          app.quit();
        },
      },
    ]);

    //
    tray.popUpContextMenu(contextMenu);
  });
}

/**
 * Create Main Window Instance ...
 */
function createWindow() {
  //
  // Create Main Window ...
  mainWindow = new BrowserWindow({
    show: false,
    icon: iconPath,
    width: isDevelopment ? 1200 : 800,
    height: isDevelopment ? 800 : 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  //
  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    shell.openExternal(url);
  });

  //
  mainWindow.webContents.on('will-navigate', function(e, url) {
    e.preventDefault();
    mainWindow.loadURL(mainUrl);
  });

  //
  // Prepare Main Url ...
  mainUrl = url.format({
    pathname: path.join(__dirname, '/www/index.html'),
    protocol: 'file',
    slashes: true,
  });

  //
  // Load Content on Main Window ...
  mainWindow.loadURL(
    mainUrl
  );

  //
  // Remove Browser Window Default menu ...
  mainWindow.removeMenu();

  //
  // Open Dev Tools on Development environment ...
  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  //
  // Handle Window Closed ...
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  //
  // Handle Window Close ...
  mainWindow.on('close', (e) => {
    //
    if (!app.isClosing) {
      //
      e.preventDefault();
      mainWindow.hide();
    }

    //
    return true;
  });
}

function toggleMainWindow() {
  //
  if (!mainWindow) {
    return;
  }

  //
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    mainWindow.show();
  }
}
//#endregion

//
//#region Event Emitters ...
/**
 * attach event to call when it's ready, to app object ...
 */
app.whenReady().then(() => {
  //
  createTray();
  createWindow();
});

/**
 * attach event to call when all application Windows closed, to app object ...
 */
app.on('window-all-closed', () => {
  //
  if (!isMac) {
    app.quit();
  }
});

/**
 * attach event to call when application activated, to app object ...
 */
app.on('activate', () => {
  //
  if (!mainWindow) {
    createWindow();
  }
});
//#endregion
