import { getRectanglePerimeter, getRectangleArea } from '../js/rectangle';


test('adds 2 + 1 and multiply to 2 equal 6', () => {
  expect(getRectanglePerimeter(2, 1)).toBe(6);
});

test('3 multiply to 2  equal 6', () => {
  expect(getRectangleArea(3, 2)).toBe(6);
});

