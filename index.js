$(document).ready(() => {
    // Dane stałe
    const cena_m2 = 5.49;
    const cena_polozenia = 20;
    const tryb_standard = 100;
    const tryb_express = 200;

    // Dopisanie nominału do wartości
    $('#cena-za-m2').text(cena_m2 + " zł");
    $('#cena-za-polozenie').text(cena_polozenia + " zł");

    $('#tryb-standard').text(tryb_standard + " zł");
    $('#tryb-express').text(tryb_express + " zł");

    // Funkcjonalność przycisków '+', '-'
    $('#add-button').on('click', ()=>{
        add_one();
        process();
    });

    $('#substract-button').on('click', ()=>{
        substract_one();
        process();
    });

    // Liczenie w przypadku zmiany wartości wprowadzanej
    $('#ilosc-m2').on('change', () => {
        process();
    });

    $('#tryb').on('change', () => {
        process();
    });

    const process = () => {
        let ilosc_m2 = $('#ilosc-m2').val();
        let tryb = $('#tryb').val();
        let wynik = policz(ilosc_m2, cena_m2, cena_polozenia, tryb === "standard" ? tryb_standard : tryb_express);
        wynik = Math.round(wynik * 100) / 100;
        $('#wynik').text(wynik + " zł");
        check_value();
    }
});

const add_one = () => {
    $('#ilosc-m2').val(+$('#ilosc-m2').val()+1);
}

const substract_one = () => {
    $('#ilosc-m2').val(+$('#ilosc-m2').val()-1);
}

const check_value = () => {
    if($('#ilosc-m2').val() <= 0){
        $('#wynik').text("0 zł");
        $('#ilosc-m2').val(0);
    }
}

const policz = (ile_m2, cena_za_m2, cena_polozenia, cena_trybu) => {
    return ((ile_m2 * cena_za_m2) + (ile_m2 * cena_polozenia) + cena_trybu);
}