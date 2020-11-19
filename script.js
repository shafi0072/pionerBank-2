console.log('Hello world')
let loginButton = document.getElementById('loginBUton');
loginButton.addEventListener('click', function (event) {

    if(document.getElementById('email').value ==""){
        alert('please insert your email')
    }
else{
    document
    .getElementById('LoginMain')
    .style
    .display = "none";
document
    .getElementById('BankDetailsMain')
    .style
    .display = "block";
}
    event.preventDefault();
})
let Deposit = document.getElementById('DepostiBtn');
Deposit.addEventListener('click', function (event) {
    let depositValue = document
        .getElementById('despistValue')
        .value;
    let depositValueToNumber = parseFloat(depositValue);
    let DepostiAMount = document
        .getElementById('depostiAmount')
        .innerText;
    let depostiAmountToNumber = parseFloat(DepostiAMount);
    let totalDepost = depositValueToNumber + depostiAmountToNumber;
document.getElementById('depostiAmount').innerText = totalDepost;
let Balance = document.getElementById('balance').innerText;
let BalanceToNumber = parseFloat(Balance);
let totalBalance = totalDepost + BalanceToNumber;
document.getElementById('balance').innerText = totalBalance;
});
let Withdarw = document.getElementById('withdrawButton');
Withdarw.addEventListener('click', function(event){
    let Withdarw = document.getElementById('withdarwInput').value;
    let withdarwToNumber = parseFloat(Withdarw);
    let withdrawAmount = document.getElementById('withDrawAmount').innerText;
    let withdrawAmounttoNumber = parseFloat(withdrawAmount);
    let totalWithdraw = withdarwToNumber + withdrawAmounttoNumber;
    document.getElementById('withDrawAmount').innerText = totalWithdraw;
    let Balance = document.getElementById('balance').innerText;
    let BalanceToNumber = parseFloat(Balance);
    let totalbalance = BalanceToNumber - totalWithdraw;
    document.getElementById('balance').innerText= totalbalance;
    
})