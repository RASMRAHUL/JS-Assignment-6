// class create for Rectangle
// i write code Rahul Kumar Singh 
class Rectangle {
    constructor(length, breadth) 
    {
      this.length  = length;
      this.breadth = breadth;
    }
    area()
    {
         
        return this.length * this.breadth ;

    }
    
  }

  // Subclass or derived class create from rectangle 
class Square extends Rectangle {
    constructor( length , breadth) 
    {
        super(length , breadth);

    }
}


function area1()
{
  let l = Math.abs(document.getElementById("l").value);
  let b = Math.abs(document.getElementById("b").value );
  let rectangle = new Rectangle (l , b); //object create for rectangle
  document.getElementById("area1").innerHTML= rectangle.area();
  
}
// I have create two function for getting area after 
//clicking the separate button of each case:
function area2()
{
  let s = Math.abs(document.getElementById("s").value);
  let square = new Square (s, s); //object create for square from rectangle class
  document.getElementById("area2").innerHTML= square.area();
}