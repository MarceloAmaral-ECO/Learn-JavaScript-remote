// .map()
// const updatedStudents = students.map((student) => {
//   student.role = "student";
//   return student;
// });

// console.log(updatedStudents);

// .filter()
// const highScores = students.filter((student) => {
//   if (student.score >= 80) return student;
//   // return student.score >= 80;
// });

// console.log(highScores);

// .find()
// const specificId = students.find((student) => {
//   if (student.id === 3) return student;
// });

// console.log(specificId);

// .reduce()
// const averageScore =
//   students.reduce((scoreTotal, student) => {
//     scoreTotal += student.score;
//     return scoreTotal;
//   }, 0) / students.length;

// console.log(averageScore);

// .reduce() pt2
// const survey = students.reduce((survey, student) => {
//   const favoriteSubject = student.favoriteSubject;

//   if (survey[favoriteSubject]) {
//     survey[favoriteSubject] += 1;
//   } else {
//     survey[favoriteSubject] = 1;
//   }

//   return survey;
// }, {});

// console.log(survey);
