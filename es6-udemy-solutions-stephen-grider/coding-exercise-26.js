const color = 'red';

const Car = {
  color,
  drive: function () {
    return 'Vroom!';
  },
  getColor: function () {
    return this.color;
  }
};