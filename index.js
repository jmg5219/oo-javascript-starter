/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
*/

//Creating a Person Class
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // Describe Method
    describe(){
        console.log(`${name}, ${age} years old`)
    }
  
}
// Instance of Person Class
const Jai = new Person("Jai",32)

//Extending the Person Class as Teacher class
class Teacher extends Person {
    //Static Method
    static instruction() {
      console.log (`How much teach would a teacher teach if a teacher could teach teach?`) ;
    }
    //Instance Method
    teach(subject){
        console.log(`${this.name} teaches ${subject}.`)
    }
  
};
//Instances cannot access static methods
//Tom a teacher instance accesses the instance method from teacher
const Tom = new Teacher ("Tom")
Teacher.instruction()
Tom.teach("math")

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/
