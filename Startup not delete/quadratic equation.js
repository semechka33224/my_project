let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
const result = document.querySelector('.result')

c.addEventListener('blur',()=>{
    a = Number(a.value)
    b = Number(b.value)
    c = Number(c.value)
    let D = b**2-4*a*c;
    if (D>0) {
    x1 = (-b+D**0.5)/(2*a);
    x2 = (-b-D**0.5)/(2*a);
    result.innerHTML = `Два корня x1 = ${x1}  x2 = ${x2}`
    }

    else if (D==0) {
    x1 = -b/2;
    result.innerHTML = `Один корень x1 = ${x1}`
    }
    else {
        result.innerHTML = `Корней нет`
    }
})







