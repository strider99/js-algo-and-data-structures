function lonelyinteger(a) {
  return a.reduce((accum, ele) => accum ^ ele);

}