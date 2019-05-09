
    $(document).ready(

        function () {
        $('.nastepne').click( function () {

            $
            ('.przesuwanie').find('div.pierwszy').next().addClass('pierwszy');
            $
            ('.przesuwanie').find('div.pierwszy').prev().removeClass('pierwszy');

        })
        $('.poprzednie').click( function () {

            $
            ('.przesuwanie').find('div.pierwszy').prev().addClass('pierwszy');
            $
            ('.przesuwanie').find('div.pierwszy').next().removeClass('pierwszy');
        })
    })