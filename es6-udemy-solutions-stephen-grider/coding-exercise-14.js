var trips = [{
  distance: 34
}, {
  distance: 12
}, {
  distance: 1
}];

var totalDistance;

totalDistance = trips.reduce((total, trip) => total + trip.distance, 0);