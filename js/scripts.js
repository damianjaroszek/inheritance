/*

Shape
    Rectangle
        Square
    Triangle

 */
    //KLASA BAZOWA SHAPE ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function Shape(sideLengths){
        this._name;                 // nazwa figury - pole będzie nadpisywane
        this._sideLengths=sideLengths; // tablica będzie przechowywała długości max 4 boków dlatego [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]] => a+b+a+b (prostokąt)       
    }

    Shape.prototype.getPerimeter = function(){ // metoda klasy Shape licząca pole (sumująca wszystkie boki) --> sumuje wszystkie wartości tablicy - dostępna dla wszystkich obiektów
        return this._sideLengths.reduce(function(prevVal, val){
            return prevVal+val;
        });
    };

    Shape.prototype.getArea = function(){
        return this._sideLengths[0]*this._sideLengths[1];
    };

    Shape.prototype.toString = function(){  //dodanie funkcji toString, której nie ma na tym obiekcie
        return "[object " + this.name +"]";
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // PROSTOKĄT /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function Rectangle(sideLengths){
        Shape.call(this, [sideLengths[0], sideLengths[1], sideLengths[0], sideLengths[1]]);
        this.name="Prostokąt";
    }

    Rectangle.prototype=Object.create(Shape.prototype); //przypisanie zupełnie nowego obiektu, którego prototypem jest Shape, nie kieruje bezpośrenio na Shape ale pośrednio nie ingerując w rodzica
    Rectangle.prototype.constructor=Rectangle; //stworzenie nowego konstruktora

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // KWADRAT /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function Square(sideLengths){//                                                                                                                 0,1
        Shape.call(this, [sideLengths, sideLengths]); //nie wysyłam wybranych elementów tablicy tylko dwie takie same tablice z tą samą wartością [20,20] więc 
        this.name="Kwadrat";                          // w getArea też będzie działało this._sideLengths[0]*this._sideLengths[1] --> 20*20
    }

    Square.prototype=Object.create(Shape.prototype);
    Square.prototype.constructor=Square;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //TRÓJKĄT RÓWNOBOCZNY
    function Triangle(sideLengths){
        Shape.call(this, [sideLengths, sideLengths, sideLengths]);
        this.name="Trójkat";
    }

    Triangle.prototype=Object.create(Shape.prototype);
    Triangle.prototype.constructor=Triangle;

    function getArea(sideLengths){
        var a = sideLengths[0];
        return +((a*a*Math.sqrt(3))/4).toFixed(2);

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var prostokat = new Rectangle([200, 10]);
    var kwadrat = new Square(20);
    var trojkat = new Triangle(10);
