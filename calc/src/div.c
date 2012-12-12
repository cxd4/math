#define INF 0x7FFFFFFF
/* signed 32-bit integer representation of positive infinity */

int main(register int argc, char *argv[])
{
    register int quotient = 0;
    register int i = 0;
    register char digit;

    --argc;
    if (argc == 0) return (quotient);
    digit = argv[argc][i];
    do
    {
        digit &= 0xF;
        digit %= 10;
        quotient *= 10;
        quotient += digit;
        digit  = argv[argc][++i];
    } while (digit);

    while (--argc)
    {
        register int decimal = 0;

        i = 0;
        digit = argv[argc][i];
        do
        {
            digit &= 0x0F;
            digit %= 10;
            decimal *= 10;
            decimal += digit;
            digit  = argv[argc][++i];
        } while (digit);
        if (decimal == 0)
        {
            if (quotient == 0) return (quotient);
            quotient = (quotient > 0) ? INF : ~INF;
            continue;
        }
        quotient /= decimal;
    }

    return (quotient);
}
