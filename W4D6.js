//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function each(coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
        }
    } else {
        for (var key in coll) {
            func(coll[key], key);
        }
    }
}
function filter(coll, predicate) {
    var acc = [];
    if (!Array.isArray(coll)) {
        acc = {};
    }
    each(coll, function (element, key) {
        if (predicate(element)) {
            acc[key] = element;
        }
    });
    return acc;
}
/////////////////////////////////////////////////////
function Student(name, dateOfBirth, gender, age){
    var x ={}
    x.name = name;
    x.dateOfBirth = dateOfBirth;
    x.gender = gender;
    x.age = age;
    return x;
}

var stu1 = Student("Sam", "february 18", "F", 22);
var stu2 = Student("Lina", "august 25", "F", 25);
var stu3 = Student("Rami", "march 13", "M", 28);
var stu4 = Student("Hamad", "june 3", "M", 21);
var stu5 = Student("Diana", "july 17", "F", 20);

function create(student){
    var studentsArray = [];
    arr.push(student);
    return studentsArray;
}

function display(student) {
    str = `${student.name}: ${student.dateOfBirth}, ${student.gender}, ${student.age}`
    return str;
}

function sortAge(array){
    var arr = [];
    each(sort(array), function (value, index) {
        each(array, function (element, indec) {
            if (value === element.age) {
                arr[index] = element
            }
        });
    });
    return arr;
}
function sort(array) {
    var arr = [];
    each(array, function (element, index) {
        arr.push(element.age);
    });
    arr.sort(function (a, b) { return a - b });
    return arr;
}

function displayGender (array, string){
    return filter(array, function(element, index){
        return element.gender === string;
    });
}
