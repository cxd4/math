;.intel_mnemonic
;.intel_syntax noprefix /*
.386
.model flat, C
;*/
;/*
.code
;*/.text # GNU assembler calls the section `.text`
;.global _main /*
_main PROC;*/
    MOV     ax, 19;# BIOS video display mode
    INT     16
    MOV     ah, 12;# drawing pixels
    XOR     cx, cx
    XOR     dx, dx
fill_column:
    INT     16
    INC     dx
    INT     16
    INC     dx
    INT     16
    INC     dx
    INT     16
    INC     dx
    INT     16
    INC     dx
    INT     16
    INC     dx
    INT     16
    INC     dx
    INT     16
    INC     dx
    CMP     dx, 200;# Fill 8 pixels per loop iteration.
    JL      fill_column;# if (row < 200) keep drawing column
swap_colors:
    INC     cx
    CMP     cx, 320
    JGE     clamp_pxcol
next_column:
    XOR     dx, dx
    INC     al
    CMP     al, 56
    JL      fill_column
    MOV     al, 32
    JMP     fill_column
clamp_pxcol:
    XOR     cx, cx
    JMP     next_column
;/*
_main ENDP
END;*/
