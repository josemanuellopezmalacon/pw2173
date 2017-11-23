
// const app=require('electron').app;
// const BrowserWindow=require('electron').BrowserWindow;
const {app,BrowserWindow} = require('electron');
const path = require('path'); //Muestra la ruta del archivo
const url = require('url'); //Carga una página

//constantes para PDF
const electron = require('electron');
//Sistema de archivos
const fs = require('fs');
//acceso al sistema operativo
const os = require('os');
//para declarar una funcion remota
const ipc = electron.ipcMain;
//acceso a la terminal-linea de comandos
const shell = electron.shell


// ECMASCRIPT = 6
let PantallaPrincipal;
//objeto global para compartir datos entre pantallas
global.infoUsuarios = {
	nombre:'',
	genero:'',
	foto:'',
	direccion:'',
	telefono:''
}
function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:320,height:425});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	//PantallaPrincipal.webContents.openDevTools();
	PantallaPrincipal.show();
}

//evento para pdf
ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')//en windows cambia c://print.pdf...
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if(error){
				throw error
			}
			shell.openExternal('file://'+pdfPath)
			win.close()
		})
	})
});


app.on('ready',muestraPantallaPrincipal)








