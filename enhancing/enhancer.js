module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item, 
    enhancement: upgradeELvl(item.enhancement)
  };
}

function fail(item) {
  return { ...item, 
    enhancement: downgradeELvl(item.enhancement), 
    durability: ferghus(item) 
  };
}

function repair(item) {
  return { ...item, 
    durability: 100 
  };
}

function get(item) {
  return { ...item,
    name: showELvl(item) 
  };
}

//helpers

function upgradeELvl(enhancement) {
  enhancement < 20
  ? enhancement + 1
  : enhancement
}

function ferghus(item) {
  item.enhancement < 15
  ? item.durability - 5
  : item.durability - 10
}

function downgradeELvl(enhancement) {
  enhancement > 16
  ? enhancement - 1
  : enhancement
}

function showELvl(item){
  item.enhancement > 0
  ? `${item.name} [+${item.enhancement}]`
  : item.name
}