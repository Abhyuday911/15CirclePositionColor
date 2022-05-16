
document.querySelector("#btnColorChange").addEventListener("click", function () {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    document.querySelector("#modal").style.backgroundColor = `rgb(${red},${green},${blue})`;
    document.querySelector("#modal").style.boxShadow = `${0} ${0} ${30}px ${0} rgba(${red},${green},${blue},${0.993}), ${0} ${0} ${100}px ${0} rgb(${red},${green},${blue})`;
    // console.log(`${0} ${0} ${30}px ${0} rgba(${red},${green},${blue},${0.993})`);
    // console.log(`${0 }${0 }${30}px ${0 }rgba(${red},${green},${blue},${0.993})`);
});
var valuev = 0;
document.querySelector("#arrowtop").addEventListener("click", function () {

    valuev = valuev - 20;
    var initial = 50 + valuev;
    var a = "%";
    var final = `${initial}${a}`;
    console.log(final);
    document.querySelector("#modal").style.top = final;
})
var valueh = 0;
document.querySelector("#arrowleft").addEventListener("click", function () {

    valueh = valueh - 20;
    let initial = 50 + valueh;
    let a = "%";
    let final = `${initial}${a}`;
    console.log(final);
    document.querySelector("#modal").style.left = final;
});
document.querySelector("#arrowright").addEventListener("click", function () {

    valueh = valueh + 20;
    let initial = 50 + valueh;
    let a = "%";
    let final = `${initial}${a}`;
    console.log(final);
    document.querySelector("#modal").style.left = final;
});
document.querySelector("#arrowbottom").addEventListener("click", function () {

    valuev = valuev + 20;
    let initial = 50 + valuev;
    let a = "%";
    let final = `${initial}${a}`;
    console.log(final);
    document.querySelector("#modal").style.top = final;
})

