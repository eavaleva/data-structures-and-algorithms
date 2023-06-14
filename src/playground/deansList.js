const students = [
    { name: "Paisley Parker", gpa: 4.0 },
    { name: "Lake Herr", gpa: 3.2 },
    { name: "Promise Lansing", gpa: 3.9 },
    { name: "Friar Park", gpa: 2.8 },
    { name: "Mason Amitie", gpa: 3.49 }
]
function getDeansList(studentList) {
    let deansList = [];
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].gpa > 3.5) {
            deansList.push(studentList[i].name);
        }
    }
    return deansList;
}

console.log(getDeansList(students))
