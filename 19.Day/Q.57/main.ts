let grades = [85, 92, 75, 98, 58, 79];

let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);