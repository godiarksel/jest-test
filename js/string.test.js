const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
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
