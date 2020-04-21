function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [100, 20, 200, 30, 40];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
