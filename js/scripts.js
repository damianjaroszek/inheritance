/*

Shape
    Rectangle
        Square
    Triangle

 */

    function Shape(sideLengths){
        this._name = "";
        this._sideLengths = sideLengths;
    }

    Shape.prototype.getPerimeter = function(){ //oblicz obwód
        return this._sideLengths.reduce(function(prevVal, val) { //sumowanie wartości z tablicy
            return prevVal + val;
        });
    };

    Shape.prototype.getArea = function(){ //oblicz pole
        return this._sideLengths[0] * this._sideLengths[1]; //a*b
    };

    function Rectangle(sideLengths) {
        Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]]); //pożyczenie konstruktora
        this._name = "Prostokąt";
    }

    function Square(sideLength){
        Rectangle.call(this, [sideLength, sideLength]);

        this._name = "Kwadrat"
    }


    var shape1 = new Square(20);
