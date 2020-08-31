//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.
cart2 = "wisdom-мудрость excel-превосходить forsake-покидать abandoned-брошенный persue-уговаривать stagnand-застой contrary-против overwhelm-подавлять unfulfilled-невыполненный restore-восстановить \
cocoa-кокао outcome-результат vague-расплывчатый column-столбец scorecard-оценочнаяКарта metric-метрика pursue-уговаривать stall-стойло abandoned-заброшенный dawn-рассвет invocation-вызов slurring-невнятный prop-подпирать through-сквозь unanswerable-неопровержимый \
thread-нить turn=up-поверни canvass-вербовать \
ruse-уловка stage-этап worn-изношенный sprang-прыгнул retrieve-получить sigh-вздох adorable-очаровательны spare-запасной\
offer-предложение agree-согласна refuse-отказываться decide-решать plan-планa arrange-устроить \
manage-управлять fail-потерпетьпоражение deserve-заслужить afford-позволитьCебе forget-забыть \
promise-обещание threaten-угрожать threaten-угрожать Learn-учиться";


myarray = cart2.split(" ");

let size = 5; //размер подмассива
let subarray = []; //массив в который будет выведен результат.
for (let i = 0; i < 18; i++) {
    subarray[i] = myarray.slice((i * size), (i * size) + size);
    var str1 = "demo";
    var str2 = (i + 1);
    var res = str1.concat(str2);
    document.getElementById(res).innerHTML = subarray[i];
    subarray2 = subarray[i];
}
//отделяем перевод от англ слова
function MySeparet(d) {
    var Engsummer = [];
    for (let f = 0; f < 5; f++) {
        firstwords = subarray[d][f].split("-");
        firstword = firstwords[0];
        Engsummer = Engsummer.concat(firstword);
    }
    var text1 = "demo";
    d++;
    var text3 = text1.concat(d);
    document.getElementById(text3).innerHTML = Engsummer;
    // document.getElementById("demo5").innerHTML = text3;
};
// последовательно показываем отедльные слова
var nword = 0;

function Nextword(dd) {
    if (nword > 4) { nword = 0; }
    var text1 = "demo";
    var text3 = text1.concat(dd);
    document.getElementById(text3).innerHTML = subarray[dd - 1][nword];
    nword += 1;
}
// последовательно выводим только Английское слова, без перевода
var nword = 0;

function NextEngWord(dd) {
    if (nword > 4) { nword = 0; }
    var text1 = "demo";
    var text3 = text1.concat(dd);
    var biword = subarray[dd - 1][nword];
    var biword1 = biword.split("-");
    var rusword = biword1[1];

    var engword = biword1[0];
    document.getElementById(text3).innerHTML = engword;
    nword += 1;
    var engword = biword1[1];
}
// выводим перевод одного слова
function Translate(dd) {

    var text1 = "demo";
    var text3 = text1.concat(dd);
    var biword = subarray[dd - 1][(nword = nword - 1)];
    var biword1 = biword.split("-");
    var rusword = biword1[1];

    var engword = biword1[1];
    document.getElementById(text3).innerHTML = engword;

}