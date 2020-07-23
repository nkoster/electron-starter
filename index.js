const electron = require('electron')
const ffmpeg = require('fluent-ffmpeg')
const { app, BrowserWindow, ipcMain } = electron

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('submit', (evt, path) => {
    ffmpeg.ffprobe(path, (err, data) => {
        mainWindow.webContents.send('duration', data.format.duration)
    })
})
