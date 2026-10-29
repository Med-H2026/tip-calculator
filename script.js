const amount = document.getElementById('amount');
const guests = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

calculate = () =>{
    let tips = ((amount.value * quality.value) / guests.value).toFixed(2);
    console.log(tips);
    amount.value='';
    guests.value='';
    quality.value='';
    if(tips === 'NaN'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    }  
    else{
        tipAmount.innerHTML = 'Tip $'+tips+' each';
        showTipAmount();
    }  
}
showTipAmount = () =>{
    tipAmount.className = 'show';
    setTimeout(() => {
        tipAmount.className = tipAmount.className.replace('show','');
    }, 3000);
}