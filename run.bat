@echo off
title Vaibhav Singh 3D Portfolio Server
echo ========================================================
echo   Launching Vaibhav Singh's 3D Portfolio (FastAPI + React)
echo ========================================================
echo.
cd /d "%~dp0"

echo Starting FastAPI server at http://localhost:8000 ...
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload

pause
