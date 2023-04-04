const body= document.querySelector('body')

const div = document.createElement('div')

div.innerText = 'olá devs'

const script = body.querySelector('script')

body.insertBefore(div,script)

/*depois

const header = body.querySelector('header')

body.insertBefore(div, header.nextElementSibling)





*/