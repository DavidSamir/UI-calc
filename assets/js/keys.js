document.onkeypress = function(e) {
    e = e || window.event;
    let list = [

        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        47,
        13,
        45,
        43,
        42,
        48,
        32,
        127
    ]
    for (let i = 0; i < list.length; i++) {
        if (list[i] == e.keyCode) {
            document.querySelector(`.btns .n${i+1}`).click()
        }

    }
};