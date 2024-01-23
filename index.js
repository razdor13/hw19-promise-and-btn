const btn = document.querySelectorAll('.box')

const evenBtn = []
const oddBtn = []

function getSortBtn(){
    btn.forEach((item,i)=>{
        if((i+1) % 2 === 0) {
            evenBtn.push(item)
            
        }else{
            oddBtn.push(item)
            
        }
    })
}
getSortBtn()


const evenBtnPromise = evenBtn.map(btn => {
    return new Promise(resolve => {
        btn.onclick = () => resolve(btn.classList.add('active'))
    })
})
const OddBtnPromise = oddBtn.map(btn => {
    return new Promise(resolve => {
        btn.onclick = () => resolve(btn.classList.add('active'))
    })
})

const allPromiseEvenBtn = Promise.all(evenBtnPromise)
.then(()=>{
    alert('even digits are all active')
})

const allPromiseOddBtn = Promise.all(OddBtnPromise)
.then(()=>{
    alert('odd digits are all active')
})


Promise.all([allPromiseEvenBtn,allPromiseOddBtn])
    .then(()=>{
        alert('all digits are active')
    }) 