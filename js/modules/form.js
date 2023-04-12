export function form () {
    return `
     <div class="form">
    <form>
    <h3>Регистрация</h3>
    <p>Или свяжитесь со мной по адресу konejo@mail.ru</p>
    <div class="name">
    <input  placeholder="Имя">
    <input placeholder="Фамилия">
    </div>
    <input class="mail" placeholder="Email">
    <textarea class="text" placeholder="Что вас интересует?"></textarea>
    <button class="button">Отправить сообщение</button>
    </form>
     </div>
    `
}
// function test () {
//     let input=document.querySelector(input.value)
//     if (input=="Сергей") {
//         console.log('ok');
//     } 
//     else {
//     alert ("Неверно.Попробуйте еще раз")
// }
// }
// test()