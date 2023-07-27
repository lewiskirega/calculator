function dis(val){
    document.getElementById("results").value+=val
    
}

function solve(){
    let x= document.getElementById("results").value
    let y = eval(x)
    document.getElementById("results").value = y
}

function clr(){
    document.getElementById("results").value =""
}

