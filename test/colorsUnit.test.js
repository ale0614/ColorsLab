const validateColor = (color) => {
    return color.startsWith('#') && color.length === 7;
};

test('validates that hex color starts with # and is 7 characters long', () => {
    expect(validateColor('#FFFFFF')).toBe(true);
    expect(validateColor('FFFFFF')).toBe(false);
});
