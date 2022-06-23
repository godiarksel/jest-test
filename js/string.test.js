const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const capitalize = require('./capitalize');
const Calc = require('./calculator');
// Task 1
test('check string length accuracy', () =>{
  expect(stringLength('books')).toBe(5);
});

test('check string length requirements',() => {
  expect(()=> stringLength('goodnessgracious')).toThrow(/String must be at least one character long and not more than ten./);
  expect(()=> stringLength('')).toThrow(Error);
});
// Task 2
test('check if string is properly reversed',() => {
  expect(reverseString('rabbit')).toBe('tibbar');
});
// Task 3
describe('Calculator Tests', () => {
  const testCase = new Calc(8, 4);
  test('add numbers',() => {
    expect(testCase.add()).toEqual(12);
  });
  test('subtract numbers',() => {
    expect(testCase.subtract()).toEqual(4);
  });
  test('divide numbers',() => {
    expect(testCase.divide()).toEqual(2);
  });
  test('multiply numbers',() => {
    expect(testCase.multiply()).toEqual(32);
  });
});
// Task 4
test('check if the first character is capitalized',() => {
  expect(capitalize('happy')).toBe('Happy');
});