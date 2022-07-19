// class is a collection of members and methods(blueprint for object) or its an virtual representation of objects

class Person {
//class members 
//class methods
//constructor comes under groups of method which is called automatically after object create
//first function to execute in a class
//called automatically when we cretae object
constructor(name){
this.personName=name
}

walk(){
    console.log(`Person name is ${this.personName}`)
}

}

export default Person;