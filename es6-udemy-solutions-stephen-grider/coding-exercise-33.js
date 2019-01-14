const classes = [
  ['Chemistry', '9AM', 'Mr. Darnick'],
  ['Physics', '10:15AM', 'Mrs. Lithun'],
  ['Math', '11:30AM', 'Mrs. Vitalis']
];

const classesAsObject = classes.map(item => {
  var [subject, time, teacher] = item;
  return {
    subject,
    time,
    teacher
  };
})