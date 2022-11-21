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

msg='<h2>окно брузера</h2><p>ширина'+window.innerHeight+'</p>';
msg+='<p> высота:+window.innerHeight +</p>';
msg+= '<h2> история </h2> <p> элементов' +window.history.length + '</p>';
msg +='<h2>экран </h2> <p> высота '+screen.height +'</p>';
msg += '<p> ширина ' + screen.width + '</p>';

let el =document.getElementById('info');
el.innerHTML =msg;
alert('Текущая страница:'+window.Location);


let _randomText ='ydyfyyfyfyfyf'
