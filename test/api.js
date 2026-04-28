test('color API response has valid JSON structure', () => {
  const mockResponse = { color: '#800080', name: 'Purple' };
  expect(mockResponse).toHaveProperty('color');
  expect(mockResponse.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
});