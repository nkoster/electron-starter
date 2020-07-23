const electron = require('electron')

const { app, BrowserWindow } = electron

app.on('ready', _ => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})
