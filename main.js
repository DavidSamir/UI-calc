// let valOne = ""
// let valTwo = ""

const store = $("#vals");
store.attr({
    valOne: "",
    valTwo: "",
    opr: ""
})

// localStorage.setItem("TempResFull", "");
// localStorage.setItem("TempRes", "");

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
        store.attr({
            valOne: "",
            valTwo: "",
            opr: ""
        })
    })
    // $(".dat").click(function() {
    //     if ((this.classList.contains('num'))) {
    //         // set values right 
    //         valOne = this.innerHTML;
    //         attrOne += valOne;
    //         attrTwo += valTwo;
    //         topRes.innerHTML = attrOne;
    //         mainRes.innerHTML = attrOne;
    //         topRes.setAttribute("val", attrOne);
    //         mainRes.setAttribute("val", attrTwo);
    //     } else {
    //         if ((this.classList.contains('res'))) {
    //             // the = sign
    //             mainRes.innerHTML = combine(entryArray[0], entryArray[1], this.innerHTML)
    //             topRes.innerHTML = "";
    //         } else {
    //             // handel the calc
    //             topRes.innerHTML += this.innerHTML;
    //             mainRes.innerHTML = "";
    //             console.log(this.innerHTML)
    //             entry = topRes.innerHTML
    //             entryArray = entry.split(this.innerHTML);
    //             if (entryArray[1] !== "") {
    //                 mainRes.innerHTML = combine(entryArray[0], entryArray[1], this.innerHTML)
    //                 topRes.innerHTML = "";
    //             }
    //         }
    //     }
    //     console.log(entryArray)
    // })


// $(".dat").click(function() {

//     /* for number and opr Buts */
//     if ((this.classList.contains('dat'))) {
//         topRes.innerHTML += this.innerHTML
//         mainRes.innerHTML += this.innerHTML
//     }
//     /* for number  */
//     if ((this.classList.contains('num'))) {
//         localStorage.setItem("TempRes", mainRes.innerHTML);

//     }
//     if ((this.classList.contains('opr'))) {
//         localStorage.setItem("Opr", this.innerHTML);
//         localStorage.setItem("One", this.innerHTML);
//         localStorage.setItem("Two", this.innerHTML);

//     }
//     if ((this.classList.contains('res'))) {}

// })


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
        if (store.attr('opr')) {
            let resAl = combine(store.attr("valOne"), store.attr("valTwo"), store.attr("opr"))
            mainRes.innerHTML = resAl

        } else {
            store.attr('opr', this.innerHTML)
            mainRes.innerHTML = ""
        }

    }
    if ((this.classList.contains('dat'))) {
        console.log(this)
    }
    topRes.innerHTML = store.attr("valOne") + store.attr("opr") + store.attr("valTwo");
})