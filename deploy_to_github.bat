@echo off
title Deploy Portfolio to GitHub
echo ========================================================
echo Pushing portfolio to GitHub...
echo Repository: https://github.com/himelshikdar0/portfolio.git
echo ========================================================
cd /d "%~dp0"
git push origin main
echo.
echo ========================================================
if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Pushed to GitHub successfully!
    echo GitHub Actions is now deploying your portfolio to GitHub Pages.
) else (
    echo [FAILED] Push failed. If prompted, please complete GitHub sign-in.
)
echo ========================================================
pause
