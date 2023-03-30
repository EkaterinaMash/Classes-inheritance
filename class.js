
function BaseClass(data) {
    this.data = data;
}

BaseClass.prototype.plus = function (...args) {
    this.data = args.reduce((sum, current) => sum + current, this.data);
    return this;
}
BaseClass.prototype.minus = function(...args) {
    this.data = args.reduce((difference, current) => difference - current, this.data);
    return this;
}
BaseClass.prototype.multiply = function(number) {
    this.data = this.data * number;
    return this;
}
BaseClass.prototype.divide = function(number) {
    this.data = Math.trunc(this.data / number);
    return this;
}
BaseClass.prototype.get = function () {
    return this.data;
}

class IntBuilder extends BaseClass {
    constructor(data) {
        super(data);
    }

    mod(number) {
        this.data = this.data % number;
        return this;
    }

    static random(from, to) {
        let randomNumber;
        randomNumber = Math.floor(Math.random()*(to - from)) + from;
        return randomNumber;
    }
}

let intBuilder = new IntBuilder(10);
intBuilder
    .plus(1, 2, 3)
    .minus(3, 4)
    .multiply(2)
    .divide(3)
    .mod(2)
    .get()

function StringBuilder(data) {
    BaseClass.call(this, data);
}

StringBuilder.prototype = Object.create(BaseClass.prototype);

StringBuilder.prototype.minus = function (number) {
    this.data = this.data.slice(0, this.data.length - number);
    return this;
};
StringBuilder.prototype.multiply = function (integer) {
    this.data = this.data.repeat(integer);
    return this;
};
StringBuilder.prototype.divide = function(number) {
    let lettersAmount = Math.floor(this.data.length/number);
    this.data = this.data.substr(0, lettersAmount);
    return this;
}
StringBuilder.prototype.remove = function(string) {
    this.data = this.data.split(string).join("");
    return this;
}
StringBuilder.prototype.sub = function (from, to) {
    this.data = this.data.substr(from, to);
    return this;
};

let stringBuilder = new StringBuilder('Hello');
    stringBuilder
        .plus('all', '!')
        .minus(3)
        .multiply(2)
        .divide(1)
        .remove("H")
        .sub(0, 2)
        .get();