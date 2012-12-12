int main(register int argc, char *argv[])
{
    register int product = 0;

    ++product; /* (b)(a0)(a1)(a2)(a[...]) == (a0)(a1)(a2)(a[...]) iff. b == 1 */
    while (--argc)
    {
        register int i = 0;
        register int decimal = 0;

        do
        {
            register char digit = argv[argc][i];
            digit &= 0x0F; /* digit ^= '0'; // to flush ASCII bits */
            digit %= 10; /* In case of bad characters, force base ten. */
            decimal *= 10;
            decimal += digit;
            ++i;
        } while (argv[argc][i]);
        product *= decimal;
    }

    return (product);
}
