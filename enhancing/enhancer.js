module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {

  let newItem = item;

  newItem.enhancement < 20
  ? newItem.enhancement++
  : item.enhancement

  return newItem
}

function fail(item) {
  let newItem = item;

  newItem.enhancement < 15
  ? newItem.durability = newItem.durability - 5
  : newItem.durability = newItem.durability - 10

  newItem.enhancement > 16
  ? newItem.enhancement--
  : newItem.enhancement

  return newItem
}

function repair(item) {

  newItem = item;

  newItem.durability = 100;

  return newItem

}

function get(item) {

  newItem = item;

  newItem.enhancement > 0
  ? newItem.name = `${newItem.name} [+${newItem.enhancement}]`
  : newItem
  
  return newItem
}
