const getRectanglePerimeter = (length, width) => {
    return 2 * (length + width);
}

const getRectangleArea = (length, width) => {
    return length * width;
}

const getRectangleInfo = (length, width) => {
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`)
}


export { getRectanglePerimeter, getRectangleArea, getRectangleInfo }
