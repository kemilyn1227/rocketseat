
const body = document.querySelector('body')

const button = document.querySelector('button')

const modal = document.querySelector('.modal-wrapper')



button.addEventListener('click' ,function click(){
    modal.classList.remove('invisible')
}
)




button.addEventListener('keydown', function(event){ 
    
    /*foi usado o event para analisar qual tecla foi acionada */

    const isEsckey = event.key === 'Escape'

    if(isEsckey){
        modal.classList.toggle('invisible')
    }
})
