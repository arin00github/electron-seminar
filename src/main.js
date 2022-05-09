const { app, BrowserWindow, ipcMain }  = require('electron')
const path = require('path');

const { SEND_MAIN_PING } = require('./constant');


function createWindow (){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
}