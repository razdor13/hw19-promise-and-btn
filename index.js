const btn = document.querySelectorAll('.box')

const evenBtn = []
const notEvenBtn = []

function getEvenBtn(){
    btn.forEach((item,i)=>{
        if((i+1) % 2 === 0) {
            evenBtn.push(item)
            
        }else{
            notEvenBtn.push(item)
            
        }
    })
}
getEvenBtn()
console.log(notEvenBtn, 'not')
console.log(evenBtn)