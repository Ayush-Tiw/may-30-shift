import Person from "./person";

class Teacher extends Person{
    constructor(name,subject2){
      super(name);
      this.subject1='maths';//this is one way of assigning values to variable in this we dont need to define values at time of calling function 
      this.subject2=subject2;//this is another way in which we have to assign value athe time of calling of function
    }

teach(){
    console.log(`Teacher teaches ${this.subject1} and ${this.subject2}`)
}

}

export default Teacher;//if we export it by default keyword than we can import in other file by any name
//and in one js file we can export only one class by using default keyword ,if we use default with other class than the default will be consider for the other class only not for previous one
//to import class which does not have default keyword we cannot use other name for that imported class and it will be called as object destructuring {like this(inside itv we write same class which is exported without default keyword)}




//we cannot call constructor of child class without calling constructor of parent class and constructor of parent class is called by super keyword in child class and if we are using methods of parent class than we have to pass same parameters of parent class to child class in constructor and super
//when we call child class constructor of parent class is called first .