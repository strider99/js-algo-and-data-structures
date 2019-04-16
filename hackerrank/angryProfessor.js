function angryProfessor(k, a) {

  let studentsOnTime = a.filter(student => student <= 0);
  console.log("total students in time ", studentsOnTime.length);

  let res = k > studentsOnTime.length ? 'YES' : 'NO';
  return res;
}
