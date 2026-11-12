@echo off
title Portfolio - build and deploy
cd /d "%~dp0redesign"

echo === 1/3 Checking dependencies ===
call npm install
if errorlevel 1 echo npm install reported a problem - trying to build anyway...

echo.
echo === 2/3 Building the site into docs ===
call npm run build
if errorlevel 1 goto buildfail

cd /d "%~dp0"
echo.
echo === 3/3 Committing and pushing to GitHub ===
git add -A
git diff --cached --quiet
if not errorlevel 1 goto nochanges
git commit -m "Deploy portfolio %date% %time:~0,5%"
git push origin master
if errorlevel 1 goto pushfail

echo.
echo Done! The live site updates in a minute or two:
echo https://johnyyong.github.io/DeveloperPortfolio
pause
exit /b

:nochanges
echo No changes to deploy - the live site is already up to date.
pause
exit /b

:buildfail
echo.
echo BUILD FAILED - nothing was deployed. Copy the error above and send it to Claude.
pause
exit /b

:pushfail
echo.
echo PUSH FAILED - check your GitHub login or internet connection.
pause
exit /b
