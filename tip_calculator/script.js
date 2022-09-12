const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const peopleInputt = document.getElementById('numberOfPeople')
const totalElement = document.getElementById('perPersonTotal')

let people = parseFloat(peopleInputt.innerText)

function calculateBill() {
    const bill = Number(billInput.value)
    const tip = Number(tipInput.value) / 100
    let total = (bill + bill * tip) / people

    totalElement.innerText = '$' + total.toFixed(2)
}

function increasePeople() {
    
    people += 1
    peopleInputt.innerText = people
    calculateBill()
}

function decreasePeople() {
    if (people == 1) {
        return
    }
    people -= 1
    peopleInputt.innerText = people
    calculateBill()
}
