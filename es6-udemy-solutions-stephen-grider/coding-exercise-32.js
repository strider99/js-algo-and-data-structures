const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
  var {title, department} = profile;

  return title === 'Engineer' && department === 'Engineering';
}