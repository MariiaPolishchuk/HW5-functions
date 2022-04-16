function log(val) {
    console.log(val);
}

log('---# 4')
function nums(a, b) {
    if (a > b) {
        return;
    }
    log(a)
    nums(a + 1, b);
}
nums(1, 9);




log('---# 5 Часы')
function clockInit (){
    const tim = new Date();
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
    let clock = document.getElementById ('clock');
    clock.innerHTML = tim.toLocaleTimeString('en', options);
}
setInterval(clockInit, 1000);