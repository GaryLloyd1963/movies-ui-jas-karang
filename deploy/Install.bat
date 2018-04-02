echo ---- Start Install
%~d0
cd %~p0
cd ..
set HOMEDIR=%~dp0%
set HOMEDIR=%HOMEDIR:\=\\%
set HOMEDIR=%HOMEDIR:deploy\\=%
@echo off
@echo // Code to run up simple http server > serveup.js
@echo const server=require('node-http-server');>> serveup.js
@echo server.deploy(>> serveup.js
@echo     {>> serveup.js
@echo         port:86,>> serveup.js
@echo         root:'%HOMEDIR%'>> serveup.js
@echo     },>> serveup.js
@echo     serverReady>> serveup.js
@echo );>> serveup.js
@echo function serverReady(server){>> serveup.js
@echo    console.log( `Server on port ${server.config.port} is now up`);>> serveup.js
@echo }>> serveup.js
@echo
@echo var Service = require('node-windows').Service; > winservice.js
@echo
@echo // Create a new service object>> winservice.js
@echo var svc = new Service({>> winservice.js
@echo  name:'[GRL] Movies UI',>> winservice.js
@echo  description: 'Movies UI.',>> winservice.js
@echo  script: '%HOMEDIR%serveup.js'>> winservice.js
@echo });>> winservice.js
@echo 
@echo // Listen for the "install" event, which indicates the>> winservice.js 
@echo // process is available as a service.>> winservice.js 
@echo svc.on('install',function(){>> winservice.js
@echo  svc.start();>> winservice.js
@echo });>> winservice.js
@echo 
@echo svc.install();>> winservice.js
@echo on
node winservice.js
