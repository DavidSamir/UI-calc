let valOne = ""
let valTwo = ""
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
$(".clear").click(function() {
    // clear the data 
    mainRes.innerHTML = "";
    topRes.innerHTML = "";
})
$(".dat").click(function() {
    if ((this.classList.contains('num'))) {
        // set values right 
        valOne = this.innerHTML;
        attrTwo += valTwo;
        attrOne += valOne;
        topRes.innerHTML = attrOne;
        mainRes.innerHTML = attrOne;
        topRes.setAttribute("val", attrOne);;
        mainRes.setAttribute("val", attrTwo);;
    } else {
        if ((this.classList.contains('res'))) {
            // the = sign
            mainRes.innerHTML = combine(entryArray[0], entryArray[1], this.innerHTML)
            topRes.innerHTML = "";
        } else {
            // handel the calc
            topRes.innerHTML += this.innerHTML;
            mainRes.innerHTML = "";
            console.log(this.innerHTML)
            entry = topRes.innerHTML
            entryArray = entry.split(this.innerHTML);
            if (entryArray[1] !== "") {
                mainRes.innerHTML = combine(entryArray[0], entryArray[1], this.innerHTML)
                topRes.innerHTML = "";
            }
        }
    }
    console.log(entryArray)
})