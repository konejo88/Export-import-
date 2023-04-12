import { info } from "../modules/info.js"
import { contacts } from "../modules/contact.js"
import { form } from "../modules/form.js"


const box=document.querySelector('.box')
function app () {
    return `
    ${info()}
    ${contacts()}
    ${form()}
    `
}
box.innerHTML=app()