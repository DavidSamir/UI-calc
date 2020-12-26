const store = $("#vals");
store.attr({
    valOne: "",
    valTwo: "",
    opr: ""
})

let attrOne = ""
let attrTwo = ""

const topRes = document.querySelector(".top--res")
const mainRes = document.querySelector(".main--res")
const timeDiv = document.querySelector(".time")

// get the time 
let d = new Date();
let time = `${d.getHours()}:${d.getMinutes()}`
timeDiv.innerHTML = time

const combine = (one, two, obr) => {
    one = parseInt(one);
    two = parseInt(two);
    obr == "+" && one + two;
    if (obr == "+") {
        return one + two
    }
    if (obr == "-") {
        return one - two
    }
    if (obr == "*") {
        return one * two
    }
}

// clear the data 
$(".clear").click(function() {
    mainRes.innerHTML = "";
    topRes.innerHTML = "";
    store.attr({
        valOne: "",
        valTwo: "",
        opr: ""
    })
})

$(".dat").click(function() {
    if ((this.classList.contains('num'))) {
        if (store.attr('opr')) {
            store.attr('valTwo', store.attr('valTwo') + this.innerHTML)
            mainRes.innerHTML = store.attr('valTwo')
        } else {
            store.attr('valOne', store.attr('valOne') + this.innerHTML)
            mainRes.innerHTML = store.attr('valOne')
        }
    }
    if ((this.classList.contains('opr'))) {
        if (
            store.attr('opr') &&
            store.attr("valOne")

        ) {
            console.log("if")
            let resAl = combine(store.attr("valOne"), store.attr("valTwo"), store.attr("opr"))
            mainRes.innerHTML = resAl
            store.attr({
                valOne: resAl,
                valTwo: "",
                opr: this.innerHTML
            })

        } else if (store.attr('opr') && store.attr('opr') == this.innerHTML) {
            console.log("esleif")
        } else {
            store.attr('opr', this.innerHTML)
            mainRes.innerHTML = ""
        }

    }
    if ((this.classList.contains('dat'))) {
        // console.log(this)
    }
    topRes.innerHTML = store.attr("valOne") + store.attr("opr") + store.attr("valTwo");
})