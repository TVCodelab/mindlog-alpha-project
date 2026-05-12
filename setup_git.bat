@echo off
echo Configurando Git para MindLog...
git init
git config user.name "TVCodelab"
git config user.email "tvbuildings.code@gmail.com"
git add .
git commit -m "feat: MindLog complete platform implementation"
echo.
echo Tudo pronto! Seu site inteiro foi commitado com sucesso.
pause
