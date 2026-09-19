function car(newCar) {
  let make = getMake(newCar);
  let model = getModel(newCar);
  return [make, model];
}

function getMake(newCar) {
  return newCar.split(" ")[0];
}

function getModel(newCar) {
  return newCar.split(" ")[1];
}

let [make, model] = car("Ford Mustang");
console.log(make === "Ford");
console.log(model[0] === 'M');
