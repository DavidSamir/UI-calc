let res = document.createElement("div"),
    body = document.createElement("div"),
    math = document.createElement("div");

res.className = "res";
body.className = "body";
math.className = "math";

document.querySelector('.Calc').appendChild(res)
document.querySelector('.Calc').appendChild(body)
document.querySelector('.Calc').appendChild(math)

for (var i = 1; i < 10; i++) {
    let num = document.createElement("div")
    let name = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    num.className = "number " + name[i];
    num.setAttribute('onClick', "num(this.innerHTML)")
    num.innerHTML = i;
    document.querySelector('.body').appendChild(num)
}

let zero = document.createElement("div")
zero.className = "number zero"
zero.setAttribute('onClick', "num(this.innerHTML)")
zero.innerHTML = "0"
document.querySelector('.body').appendChild(zero)

let mark = document.createElement("div")
mark.className = "number mark"
mark.setAttribute('onClick', "num(this.innerHTML)")
mark.innerHTML = "."
document.querySelector('.body').appendChild(mark)

function num(number) {
    document.querySelector('.res').innerHTML += number;
}

// set the action btns



rees = document.createElement("div");
rees.className = "rees btn";
rees.innerHTML = "< ";
document.querySelector('.math').appendChild(rees)

plus = document.createElement("div");
plus.className = "plus btn";
plus.innerHTML = "+";
document.querySelector('.math').appendChild(plus)

minus = document.createElement("div");
minus.className = "minus btn";
minus.innerHTML = "-";
document.querySelector('.math').appendChild(minus)

divied = document.createElement("div");
divied.className = "divied btn";
divied.innerHTML = "/";
document.querySelector('.math').appendChild(divied)

mult = document.createElement("div");
mult.className = "mult btn";
mult.innerHTML = "*";
document.querySelector('.math').appendChild(mult)