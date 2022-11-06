

const getRectanglePerimeter = require('../js/rectangle');


test('adds 2 + 1 and multiply to 2 equal 6', () => {
  expect(getRectanglePerimeter(2, 1)).toBe(6);
});

const getRectangleArea = require('../js/rectangle');

test('3 multiply to 2  equal 6', () => {
  expect(getRectangleArea(3, 2)).toBe(6);
});

