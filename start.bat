@echo off
title Portfolio - dev server
cd /d "%~dp0redesign"
echo Node version:
call node -v
if errorlevel 1 goto nonode

echo.
echo Checking dependencies...
call npm install
if errorlevel 1 echo npm install reported a problem - trying to start anyway...

echo.
echo Starting the portfolio on http://localhost:5173 ...
call npm run dev

echo.
echo The dev server stopped. If you see an error above, copy it and send it to Claude.
pause
exit /b

:nonode
echo Node.js was not found. Install it from https://nodejs.org and try again.
pause
