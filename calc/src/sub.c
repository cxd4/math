int main(register int argc, char *argv[])
{
    register int difference = 0;
    register int i = 0;
    register char digit;

    --argc;
    if (argc == 0) return (difference);
    digit = argv[argc][i];
    do
    {
        digit &= 0xF;
        digit %= 10;
        difference *= 10;
        difference += digit;
        digit  = argv[argc][++i];
    } while (digit);

    while (--argc)
    {
        register int decimal = 0;

        i = 0;
        digit = argv[argc][i];
        do
        {
            digit &= 0x0F; /* digit ^= '0'; // to flush ASCII bits */
            digit %= 10; /* In case of bad characters, force base ten. */
            decimal *= 10;
            decimal += digit;
            digit  = argv[argc][++i];
        } while (digit);
        difference -= decimal;
    }

    return (difference);
}
