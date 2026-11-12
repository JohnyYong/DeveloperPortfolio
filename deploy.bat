@echo off
setlocal
cd /d "%~dp0"
title Portfolio - build ^& deploy

echo === 1/3 Building production bundle ===
call npm run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED - nothing was deployed.
  pause
  exit /b 1
)

echo.
echo === 2/3 Copying build\ into docs\ (GitHub Pages folder) ===
robocopy build docs /MIR /NFL /NDL /NJH /NJS /NP >nul
if errorlevel 8 (
  echo Copy to docs failed.
  pause
  exit /b 1
)

echo.
echo === 3/3 Committing and pushing to GitHub ===
git add -A
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Rebuild and deploy %date% %time:~0,5%"
  git push origin master
  if errorlevel 1 (
    echo PUSH FAILED - check your GitHub login / network.
    pause
    exit /b 1
  )
) else (
  echo No changes to deploy.
)

echo.
echo Done. Live site updates in a minute or two:
echo https://johnyyong.github.io/DeveloperPortfolio
pause
