@echo off
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  start "" "%~dp0index.html"
  exit /b
)

start "Grand Large Quiz" /min cmd /c "node .quiz-server.cjs"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173"
