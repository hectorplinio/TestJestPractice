// Create a calculator of areas that calculate that areas from square, rectangle and triangle

// Case:

// Calculate the area of ​​a square 5 x 5 and the result will be 25
// Calculate the area of ​​a square 4 x 4 and the result will be 16
// Calculate the area of ​​a rectangle 2 x 4 and the result will be 8
// Calculate the area of ​​a triangle with height 12 and base 20 and the result will be 120

class CalculatorArea {
  calculatorAreaSquare (side) {
    if (side) return side * side
    return null
  }

  calculatorAreaRectangle (side, height) {
    if (side && height) return side * height
    return null
  }

  calculatorAreaTriangle (side, height) {
    if (side && height) return (side * height) / 2
    return null
  }
}

module.exports = CalculatorArea
