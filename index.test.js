const { header, batch } = require('./index');

describe('easy-sticky-header', () => {
  test('should process string input', () => {
    expect(header('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => header(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = header('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
