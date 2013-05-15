@ECHO OFF
TITLE MinGW Compiler Suite Invocation
CD C:\MINGW\BIN\

ECHO AS.EXE:  Assembling compiled sources...
AS.EXE --statistics -o ../asm_test/asm/add.o ../asm_test/asm/add.asm
ECHO.

ECHO LD.EXE:  Linking assembled object file...
LD.EXE -s -Bdynamic -o ../asm_test/add.exe ../asm_test/add.o
PAUSE
