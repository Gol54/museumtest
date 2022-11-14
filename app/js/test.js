/*
let today = new Date();
let hourHow = today.getHours();
let getting;

evening = "Добрый вечер";
morning = "Доброе утро";
day = "Добрый день";
night = "Добрый ночь";

if(hourHow<12 && hourHow>=6){
    document.write('<h3>'+ morning +'</h3>');
}
if(hourHow<18 && hourHow>=12){
    document.write('<h3>'+ day +'</h3>');
}
if(hourHow<=24 && hourHow>=18){
    document.write('<h3>'+ morning +'</h3>');
}
if(hourHow<6 && hourHow>0){
    document.write('<h3>'+ morning +'</h3>')
}
*/

let _helloText = 'Hellow';
let _name = 'romaLox';
let _massage = 'Please check your prise!';
let _ban = _helloText +' '+ _name +' '+ _massage
let _priseChar = 5;

let _costBan =_ban.length;
let _cost = _priseChar * _costBan

let n = _ban + ' ' + 'cost: ' + _costBan;

let _welcomeText = document.getElementById("WelcomeText");
_welcomeText.textContent = _ban + '!';

let _welcomeText2 = document.getElementById("WelcomeText2");
_welcomeText2.textContent = _cost;


alert(n);