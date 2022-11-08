import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from '../js/rectangle';


test('2 added to 1 then multiplied by 2, equals 6', () => {
  expect(getRectanglePerimeter(2, 1)).toBe(6);
});

test('3 multiplied by 2, equals 6', () => {
  expect(getRectangleArea(3, 2)).toBe(6);
});

test('should generate a valid text output', () => {
  const output = getRectangleInfo(4, 2);
  const perimeter = getRectanglePerimeter(4, 2);
  const area = getRectangleArea (4, 2);
  expect(output).toBe(console.log (`The perimeter of a rectangle is ${perimeter} and the area is ${area}`));
});