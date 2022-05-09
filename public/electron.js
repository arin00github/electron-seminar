const electron = require("electron");

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');



let mainWindow;


function createWindow (){
    mainWindow = new BrowserWindow({ //새 창을 생성
        width: 900,
        height: 680,
        webPreferences:{
            nodeIntegration: true,
            devTools: isDev,
        }
    })

    mainWindow.loadURL(isDev ?"http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
    //BrowserWindow에 노출시킬 url 혹은 html 파일을 셋팅
        )

        if(isDev){
            mainWindow.webContents.openDevTools({mode: 'detach'})
        }

        mainWindow.setResizable(true)
        mainWindow.on('closed', () => (mainWindow = null));
}


app.on('ready', createWindow);

app.on('window-all-closed', ()=> {
    // Electron app의 창이 모두 종료되었을 때 App을 종료시킨다.
    if(process.platform !== "darwin"){
        app.quit()
    }
})

app.on('activate', ()=> {
    if(mainWindow ===null){
        createWindow()
    }
})