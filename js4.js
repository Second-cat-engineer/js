
var test = function (a, b) {
    return a+b;
};
console.log(test);


var item = {
    material: 'glass',
};

function Table(legs) {
    this.legs = legs;
    this._proto_ = item;
}

var table = new Table(4);
console.log(table.material);


/*
var item = {
    material: 'glass',
};

var table = {
    legs: 4,
};

table._proto_ = item;

for (let key in item) {
    console.log(table);
}

var empty = Object.create(null);*/
