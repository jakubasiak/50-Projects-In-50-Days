const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const precentage = document.getElementById('precentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => {
        highlightCups(index)
    })
})

function highlightCups(index) {
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    smallCups.forEach((cup, localIndex) => {
        if(localIndex <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        precentage.style.visibility = 'hidden'
        precentage.style.height = 0
    } else {
        precentage.style.visibility = 'visible'
        precentage.style.height = `${fullCups / totalCups * 360}px`
        precentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
