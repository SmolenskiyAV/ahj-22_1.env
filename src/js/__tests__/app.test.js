import demo from '../app';

// проверка функции demo
test('shoud check func demo', () => {
  const value = 55;
  const result = demo(value);
  expect(result).toBe(55);
});