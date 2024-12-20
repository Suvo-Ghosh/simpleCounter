const counter = document.querySelector ('.counter')
const plusBtn = document.querySelector ('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')
const changeBy =document.querySelector(".changeBy")
const rst = document.querySelector(".rst")

plusBtn.addEventListener( "click", () => {
   const counterValue = parseInt(counter.innerText)
   const changeByValue = parseInt(changeBy.value)
   counter.innerText= counterValue + changeByValue
})
minusBtn.addEventListener( "click", () => {
   const counterValue = parseInt(counter.innerText)
   const changeByValue = parseInt(changeBy.value)
   counter.innerText = counterValue - changeByValue
})

rst.addEventListener("click",()=>{
    counter.innerText= 0
})
