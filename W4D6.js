//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}

function Student(name, birth, gender, age) {
    var student = {}
    student.name = name
    student.dateOfBirth = birth
    student.gender = gender
    student.age = age

    return student


}

function info(student) {

    var str = " she"
    if (student.gender === "male")
        str = " he"

    return (student.name + " Born in " + student.dateOfBirth + str + "'s " + student.age + " years old")
}

function sortByAge(array) {

    var result = array.sort(function (s1, s2) {
        return s1.age - s2.age
    })

    return result
}

function meleOrFemale(array, str) {
    var result = []
    each(array, function (student) {
        if (str === "M" && student.gender === "male")
            result.push(student)
        else if (str === "F" && student.gender === "female")
            result.push(student)
    })
    return result
}

var studentsArray = [Student("Qamar", "Jan 19 1997", "female", 24),
Student("Leen", "May 7 1993", "female", 28), Student("Ameen", "Jan 26 1991", "male", 30),
Student("Areej", "Sep 3 2003", "female", 17), Student("Yousof", "Jan 6 1996", "male", 25)]

info(studentsArray[0])
sortByAge(studentsArray)
meleOrFemale(studentsArray, "F")

