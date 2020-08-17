
let div = document.getElementById("container")
let p1 = document.createElement("p")
let ul = document.createElement("ul")
let p3 = document.createElement("p")
const addtext1 = function(){
    p1.innerHTML = " "
    ul.innerHTML = " "
    p3.innerHTML = " "
    p1.innerHTML = "We are a company"
    div.appendChild(p1)
}
const addtext2 = function(){
    p1.innerHTML = " "
    ul.innerHTML = " "
    p3.innerHTML = " "
    ul.innerHTML = "<il>item 1</il><il>item 2</il><il>item 3</il><il>item 4</il>"
    div.appendChild(ul)
}
const addtext3 = function(){
    p1.innerHTML = " "
    ul.innerHTML = " "
    p3.innerHTML = " "
    p3.innerHTML = "these are the items you have inside your cart!"
    div.appendChild(p3)
}