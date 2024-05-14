let a = document.getElementById('a')
let c = document.getElementById('c')
const result = document.querySelector('.result')
c.addEventListener('blur',()=>{
    a = Number(a.value)
    c = Number(c.value)
    d = -c/a
    if (d>0) {
    let x1 = -(d**0.5)
    let x2 = d**0.5
    console.log(x1,x2)
    result.innerHTML = `Два корня x1 = ${x1}  x2 = ${x2}`
}
else if (d<0) {
    result.innerHTML = `Корней нет`
}

    else if (d==0){
    let x1=0
    result.innerHTML = `Один корень x1 = ${x1}`
    }
})