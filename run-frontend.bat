@echo off

echo Abriendo el navegador...
start chrome http://localhost:5173

cd .\Frontend
echo Iniciando el servidor de desarrollo...
npm run dev
