@echo off
start cmd /k "cd server && python api.py"
start cmd /k "cd client && npm run dev"
echo Both server and client are starting...