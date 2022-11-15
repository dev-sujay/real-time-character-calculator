const textArea = document.querySelector("textarea")
const writtenChar = document.querySelector("#total-characters")
const remainingChar = document.querySelector("#remaining-characters")
let totalChar = textArea.getAttribute("maxlength")



textArea.addEventListener('keyup', () => {
    updateCounter()

})

const updateCounter = () => {
    writtenChar.innerHTML = `Total Characters : ${textArea.value.length}`
    remainingChar.innerHTML = `Remaining Characters : ${totalChar - textArea.value.length}`
}