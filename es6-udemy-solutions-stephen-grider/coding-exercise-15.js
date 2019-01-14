var desks = [{
    type: 'sitting'
  },
  {
    type: 'standing'
  },
  {
    type: 'sitting'
  },
  {
    type: 'sitting'
  },
  {
    type: 'standing'
  }
];

var deskTypes = desks.reduce(function (total, desk) {
  if (desk.type == 'sitting') {
    total.sitting += 1;
  } else {
    total.standing += 1;
  }
  return total;
}, {
  sitting: 0,
  standing: 0
});