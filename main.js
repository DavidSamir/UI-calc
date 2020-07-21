let allVal = null;
const topOut = $('.top--res');
const main = $('.main--res');


let newVal = null,
    mainVal = null;

$(".dat").click(function() {
    allVal += $(this).attr('value');
    // console.log(allVal)
    topOut.html(allVal);

    parseInt(allVal);

});

$(".num").click(function() {
    mainVal += parseInt($(this).attr('value'));
    main.html(mainVal);
})
$(".muin").click(function() {
    newVal = parseInt(mainVal);
    let rese = newVal + mainVal;
    mainVal = null
    main.html(rese);

})