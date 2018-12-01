const $amount = document.querySelector('.amount_input')
const $style = document.querySelector('.style_input')
const $button = document.querySelector('.send')

$button.addEventListener('click',(event)=>{
    let packet = {
        amount:$amount.value,
        style:$style.value
    }
    //send to server
    console.log(packet)
})