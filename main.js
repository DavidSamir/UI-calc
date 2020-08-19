let valOne = ""
    // let valTwo = ""
const topRes = document.querySelector(".top--res")
const mainRes = document.querySelector(".main--res")
const timeDiv = document.querySelector(".time")

// get the time 
let d = new Date("2011-04-20T09:30:51.01");

let time = `${d.getHours()}:${d.getMinutes()}`
timeDiv.innerHTML = time
const combine = (one, two, obr) => {
    one = parseInt(one);
    two = parseInt(two);
    // obr == "+" && one + two;
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
    mainRes.innerHTML = "";
    topRes.innerHTML = "";
})
$(".dat").click(function() {
    if ((this.classList.contains('num'))) {
        valOne = this.innerHTML;
        // console.log(valOne);
        topRes.innerHTML += valOne;
        mainRes.innerHTML += valOne;
    } else {
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
    console.log(entryArray)
})