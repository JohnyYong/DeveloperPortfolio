@echo off
cd /d "%~dp0"
title Portfolio dev server
netstat -ano | findstr /r /c:":3000 .*LISTENING" >nul
if errorlevel 1 (
  echo Starting dev server on http://localhost:3000 ...
  call npm start
) else (
  echo Dev server already running - opening http://localhost:3000
  start "" http://localhost:3000
  timeout /t 3 >nul
)
