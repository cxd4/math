#include <math.h>
#include <stdio.h>

unsigned ASCII_to_WORD(char ASCII[5]);
/* For ASCII[5], '65535' is the maximum useful value. */

int main(int argc, char *argv[])
{
    register unsigned a;
    register unsigned b;
    register unsigned c;
    register double R;
    char string[16] = {
        251, '(', '%', 'u', ' ', '-', ' ', '%',
        'u', 251, '%', 'u', ')', 0xD, 0xA, 0x0
    }; /* sqrt(a + b * sqrt(c)) ... */
    char answer[16] = {
        251, '%', 'u', '/', '2', ' ', '-', ' ',
        251, '%', 'u', '/', '2', 0xD, 0xA, 0x0
    }; /* ... == sqrt(m / 2) - sqrt(n / 2) */

    if (argv[1] == NULL)
    {
        printf("Command syntax missing domain.\n");
        return 1;
    }
    a = ASCII_to_WORD(argv[1]);

    if (argv[2] == NULL)
    {
        printf("Unknown variable:  (b == NULL)\n");
        return 1;
    }
    b = ASCII_to_WORD(argv[2]);

    if (argv[3] == NULL)
    {
        c = b;
        b = 1;
    } /* sqrt(a - sqrt(c)), where the coefficient of sqrt(c) is b = -1. */
	else
	{
        c = ASCII_to_WORD(argv[3]);
	}

    printf(string, a, b, c);
    b = b * b;
    b = b * c;
    c = a * a;
    c = c - b;
    R = sqrt(c);
    c = (unsigned) R;
    if (R == c)
    {
        b = a + c;
        c = a - c;
        printf(answer, b, c);
        return 0;
    }
    else
    {
        printf("Not possible to cut (R == %f).\n", R);
        return 1;
    }
}

unsigned ASCII_to_WORD(char ASCII[5])
{
    register unsigned decimal = ASCII[0] & 0x0F;
    register unsigned digit;

    if (ASCII[1] == '\0') return (decimal);
    digit = ASCII[1] & 0x0F;
    decimal = decimal * 10;
    decimal = decimal + digit;
    if (ASCII[2] == '\0') return (decimal);
    digit = ASCII[2] & 0x0F;
    decimal = decimal * 10;
    decimal = decimal + digit;
    if (ASCII[3] == '\0') return (decimal);
    digit = ASCII[3] & 0x0F;
    decimal = decimal * 10;
    decimal = decimal + digit;
    if (ASCII[4] == '\0') return (decimal);
    digit = ASCII[4] & 0x0F;
    decimal = decimal * 10;
    decimal = decimal + digit;
    return (decimal);
}
