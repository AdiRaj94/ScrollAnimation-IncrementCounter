const box = document.querySelectorAll('.class');
const counters = document.querySelectorAll('.counter');


window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/5 * 4;
    box.forEach(boxes =>{
        const boxTop = boxes.getBoundingClientRect().top;
        if(boxTop<triggerBottom){
            boxes.classList.add('show')
        }else{
            boxes.classList.remove('show')
        }
    })
}

counters.forEach(counter =>{
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')

        const c = +counter.innerText

        const increment = target/1000

        if(c < target){
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }
    updateCounter()
});
