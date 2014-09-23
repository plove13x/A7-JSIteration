//1.


//2.

WAY 3
var costArray = items.map(function(item) {
return item.price;
}).filter(function(num) {
return num <= 14 && num >= 18;  
}).forEach(function(item) {
  if item.price >= 14 && <= 18 {
    return item.title;
  };
});
console.log("Item that cost between $14.00 USD and $18.00 USD: " + costArray.title);

WAY 2
var costArray = items.map(function(item) {
return item.price;
}).filter(function(num) {
return num <= 14 && num >= 18;  
});
console.log("Item that cost between $14.00 USD and $18.00 USD: " + costArray.title);

WAY 1
var costArray = items.forEach(function(item) {
  if item.price >= 14 && <= 18 {
    return item.price;
  }
});
console.log("Item that cost between $14.00 USD and $18.00 USD: " + costArray);


//3.

if currency_code === "GBP"???


//4.
WAY 6

var woodStuff = items.map(function(item) {
  return item.materials;
});
console.log(woodStuff);

WAY 5
woodStuff.filter(function(item) {

for (var i = 0; i < item.length; i++) {
return item[i] === "wood";
};
}).forEach(function(item) {
console.log("Yay");
});

WAY 4
return item[0] === "wood" || item [1] === "wood" || item [2] === "wood";
}).forEach(function(item) {
console.log("Yay");
});

WAY 3
.map(function(item){
  if item === "wood" {
    console.log(item);
  }
});

WAY 2
var woodStuff = items.map(function(item) {
  return item.materials;
}).filter(function(item){
  return item.contains("wood");
});

WAY 1
if item.contains("wood") {
    return item;
  }


//5.

	var numMaterials = items.map(function(item) {
  return item.materials;
}).filter(function(item) {
  return item.length >= 8;
  }).forEach(function(bla) {
  console.log(item.materials);
});


