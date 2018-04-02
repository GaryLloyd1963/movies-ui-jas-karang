echo ---- Start Uninstall
%~d0
cd %~p0
cd ..
sc stop grlmoviesui.exe
timeout /t 5 /nobreak
sc delete grlmoviesui.exe
rmdir /s /q daemon
echo ---- Uninstall Completed