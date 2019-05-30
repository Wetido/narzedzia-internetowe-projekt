
function zapisz() {

    localStorage.clear();

    localStorage.setItem('imie', document.getElementById('imie').value);
    localStorage.setItem('nazwisko', document.getElementById('nazwisko').value);
    localStorage.setItem('mail', document.getElementById('mail').value);
    localStorage.setItem('tel', document.getElementById('tel').value);
    localStorage.setItem('miasto', document.getElementById('miasto').value);
    localStorage.setItem('kod', document.getElementById('kod').value);

    var select = document.getElementById("wojewodztwo");
    localStorage.setItem('wojewodztwo', select.options[select.selectedIndex].value );

    localStorage.setItem('textfield', document.getElementById('textfield').value);


    alert("Zapisano dane do Local Storage");
}

function pokaz() {




    document.getElementById('imie').value = localStorage.getItem('imie');
    document.getElementById('nazwisko').value = localStorage.getItem('nazwisko');
    document.getElementById('mail').value = localStorage.getItem('mail');
    document.getElementById('tel').value = localStorage.getItem('tel');
    document.getElementById('miasto').value = localStorage.getItem('miasto');
    document.getElementById('kod').value = localStorage.getItem('kod');

    var select = document.getElementById("wojewodztwo");
    var selectOption = select.options[select.selectedIndex].value;
    lastSelected = localStorage.getItem('wojewodztwo');


    if(lastSelected) {
        select.value = lastSelected;
    }

    document.getElementById('textfield').value = localStorage.getItem('textfield');

    alert("Dane wczytane z Local Storage");
}

function wyczysc() {

    localStorage.clear();


    alert("Wyczyszczono Local Storage")
}

