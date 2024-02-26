// console.log(d);
document.onclick = (e) => {
    let d = new Date();
    document.querySelector('#clientX').textContent = e.clientX;
    document.querySelector('#clientY').textContent = e.clientY;
    document.querySelector('#h').textContent = d.getHours();
    document.querySelector('#m').textContent = d.getMinutes();
    document.querySelector('#s').textContent = d.getSeconds();
    document.querySelector('#mi').textContent = d.getMilliseconds();
    // console.log(e)
}
// console.log(d.getFullYear());