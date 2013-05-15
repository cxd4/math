	.file	"FUCK.c"
	.def	main
	.scl	2
	.type	32
	.endef
	.section	.text.startup,"x"
	.globl	_main
	.def	_main
	.scl	2;
	.type	32
	.endef
main:
	pushl	%ebp
	movl	%esp, %ebp
	andl	$-16, %esp
	call	main
	movl	8(%ebp), %eax
	addl	12(%ebp), %eax
	leave
	ret
