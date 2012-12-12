@ECHO OFF
TITLE MinGW Compiler Suite Invocation
cd C:\MINGW\BIN\

echo Compiling ADD...
gcc -s -O3 -fomit-frame-pointer -o ../calc/add.exe ../calc/src/add.c
echo.
echo Compiling SUB...
gcc -s -O3 -fomit-frame-pointer -o ../calc/sub.exe ../calc/src/sub.c
echo.
echo Compiling MUL...
gcc -s -O3 -fomit-frame-pointer -o ../calc/mul.exe ../calc/src/mul.c
echo.
echo Compiling DIV...
gcc -s -O3 -fomit-frame-pointer -o ../calc/div.exe ../calc/src/div.c
echo.
echo Compiling POW...
gcc -s -O3 -fomit-frame-pointer -o ../calc/pow.exe ../calc/src/pow.c
echo.
pause
