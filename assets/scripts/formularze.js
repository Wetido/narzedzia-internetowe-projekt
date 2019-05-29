
nazwa = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]{3,12}$/;
telefon = /^[1-9]{1,1}[0-9]{2,10}$/;
email = /^([\w\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
miejsce = /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ -]{3,30}$/;
kod_pocztowy = /^[0-9]{2}-[0-9]{3}$/;

function sprawdz(id, pattern) {


    var obiektPole = document.getElementById( id );

    if( pattern.test( obiektPole.value ) )
    {

        obiektPole.classList.add('is-valid');
        obiektPole.classList.remove('is-invalid');

    } else {

        obiektPole.classList.remove('is-valid');
        obiektPole.classList.add('is-invalid');
    }
    return true;

}

function sprawdzSelect()
{
    var select = document.getElementById("wojewodztwo");

    var selectedValue = select.options[select.selectedIndex].value;

    if (selectedValue == "Wybierz województwo")
    {
        select.classList.remove('is-valid');
        select.classList.add('is-invalid');
    } else {

        select.classList.add('is-valid');
        select.classList.remove('is-invalid');
    }
}




