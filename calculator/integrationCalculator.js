const CalculatorArea = require("./calculatorArea")
const calculatorArea = new CalculatorArea();

const checkForm =(form, side="", height="") => {
    if (!form)return "Form is empty";
    if(form == "Square")return calculatorArea.calculatorAreaSquare(side);
    if(form == "Rectangle")return calculatorArea.calculatorAreaRectangle(side,height);
    if(form == "Triangle")return calculatorArea.calculatorAreaTriangle(side,height);
    return null
};


module.exports = {checkForm}