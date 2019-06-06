
var nazwa = 'item_1';

function menu1() {

    nazwa = 'item_1';
    alert("Formularz 1");
}

function menu2() {

    nazwa = 'item_2';
    alert("Formularz 2")
}

function menu3() {

    nazwa = 'item_3';
    alert("Formularz 3");

}

function menu4() {

    nazwa = 'item_4';
    alert("Formularz 4");
}

function menu5() {


    nazwa = 'item_5';
    alert("Formularz 5")

}

function menu6() {

    nazwa = 'item_6';
    alert("Formularz 6")

}


function pokaz1() {

    var item = JSON.parse(localStorage.getItem(nazwa));


    document.getElementById('imie').value = item.imie;
    document.getElementById('nazwisko').value = item.nazwisko;
    document.getElementById('mail').value = item.mail;
    document.getElementById('tel').value = item.tel;
    document.getElementById('miasto').value = item.miasto;
    document.getElementById('kod').value = item.kod;

    var select = document.getElementById("wojewodztwo");
    var selectOption = select.options[select.selectedIndex].value;
    lastSelected = item.wojewodztwo;


    if(lastSelected) {
        select.value = lastSelected;
    }

    document.getElementById('textfield').value = item.textfield;

    alert("Dane wczytane z Local Storage");
}

function pokaz2() {

    document.getElementById('imie').value = localStorage.getItem('imie2');
    document.getElementById('nazwisko').value = localStorage.getItem('nazwisko2');
    document.getElementById('mail').value = localStorage.getItem('mail2');
    document.getElementById('tel').value = localStorage.getItem('tel2');
    document.getElementById('miasto').value = localStorage.getItem('miasto2');
    document.getElementById('kod').value = localStorage.getItem('kod2');

    var select = document.getElementById("wojewodztwo");
    var selectOption = select.options[select.selectedIndex].value;
    lastSelected = localStorage.getItem('wojewodztwo2');


    if(lastSelected) {
        select.value = lastSelected;
    }

    document.getElementById('textfield').value = localStorage.getItem('textfield2');

    alert("Dane wczytane z Local Storage");
}




function zapisz1() {

    var item = {};

    var select = document.getElementById('wojewodztwo');

    item.imie = document.getElementById('imie').value;
    item.nazwisko = document.getElementById('nazwisko').value;
    item.mail = document.getElementById('mail').value;
    item.tel = document.getElementById('tel').value;
    item.miasto = document.getElementById('miasto').value;
    item.kod = document.getElementById('kod').value;
    item.wojewodztwo = select.options[select.selectedIndex].value;
    item.textfield = document.getElementById('textfield').value;


    localStorage.setItem( nazwa , JSON.stringify(item));

    alert("Zapisano dane do Local Storage");
}



function wyczysc() {

    localStorage.removeItem(nazwa);

    alert("Wyczyszczono Local Storage")
}

