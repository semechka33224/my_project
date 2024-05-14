let a = document.getElementById('a')
let b = document.getElementById('b')
const result = document.querySelector('.result')

function gsd(a, b){
    if(b===0){
        return a;
    }else{
        return gsd(b, a % b)
    }
}


b.addEventListener('blur',()=>{
    a = Number(a.value)
    b = Number(b.value)
    let c = (a*b)/gsd(a, b)
    if (a>0) {
    result.innerHTML = `x=0`
    result.innerHTML = `x=${-c}`
    } else if (a=0){
        result.innerHTML = `x=0`
    }
})

 
