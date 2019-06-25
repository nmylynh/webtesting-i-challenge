module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item, enhancement: checkLevel(item.enhancement)};
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}

function checkLevel (enhancement) {
  enhancement < 20
  ? enhancement + 1
  : enhancement
}