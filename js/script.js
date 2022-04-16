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
    let clock = document.getElementById ('clock');
    clock.innerHTML = tim.getHours()+':'+tim.getMinutes()+':'+tim.getSeconds();
    }
    setInterval(clockInit, 1000);
    clock.addEventListener('click', () => {
    formatFull = !formatFull;
    clockInit(); });

   