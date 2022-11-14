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
    document.write('<h3>'+ morning +'</h3>');
}