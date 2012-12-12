int main(register int argc, char *argv[])
{
    register int i = 0;
    register char digit;
    register int exponent = 1;
    register int base = 0;
    register int power = 0;

    --argc;
    if (argc == 0) return (exponent);
    digit = argv[argc][i];
    do
    {
        digit &= 0xF;
        digit %= 10;
        base *= 10;
        base += digit;
        digit  = argv[argc][++i];
    } while (digit);

    ++power;
    while (--argc)
    {
        register int power_buffer = 0;

        i = 0;
        digit = argv[argc][i];
        do
        {
            digit &= 0x0F; /* digit ^= '0'; // to flush ASCII bits */
            digit %= 10; /* In case of bad characters, force base ten. */
            power_buffer *= 10;
            power_buffer += digit;
            digit  = argv[argc][++i];
        } while (digit);
        power *= power_buffer; /* (z)^a^b^c^d^e == z^(a*b*c*d*e) */
    }

    if (power < 0)
    {
        base = 1 / base; /* reciprocal */
        while (power++)
            exponent *= base;
    }
    else if (power == 0) return (exponent); /* Assume pow(0, 0) is +1. */
    else /* if (power > 0) */
        while (power--)
            exponent *= base;

    return (exponent);
}
