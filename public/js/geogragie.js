
$(function() {

    let mesta = [];
    fetch('http://localhost:8080/api/mesta')
    .then(response => { return response.json() })
    .then(json => { mesta = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    let pamatky = [];
    fetch('http://localhost:8080/api/pamatky')
    .then(response => { return response.json() })
    .then(json => { pamatky = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });


    $('rect').on('click', function () {
        $('.mesta').fadeOut(800);
        $('rect').css('fill', '#0045ff');
        $(this).css('fill', 'red');
        let id = $(this).attr('id');
        let podrobnosti = mesta.find(item => {return item.id == id});
        $('.mesta').fadeIn(800, function() {
            $('.mesta').html(`
                    <h1 class="mesta-jmeno">${podrobnosti.jmeno}</h1>
                    <p class="mesta-text">${podrobnosti.text}</p>
                    <p>Více zde: <a href="${podrobnosti.odkaz}">${podrobnosti.odkaz}</a></p>
                    <img src="../img/${podrobnosti.obrazek}" alt="${podrobnosti.jmeno}">
            `);
        });
    });
    

    $('ellipse').on('click', function () {
        $('.pamatky').fadeOut(800);
        $('ellipse').css('fill', 'yellow');
        $(this).css('fill', 'green');
        let id1 = $(this).attr('id');
        let podrobnosti = pamatky.find(item => {return item.id == id1});
        $('.pamatky').fadeIn(800, function() {
            $('.pamatky').html(`
                    <h1 class="pamatky-jmeno">${podrobnosti.jmeno}</h1>
                    <p class="pamatky-text">${podrobnosti.text}</p>
                    <p>Více zde: <a href="${podrobnosti.odkaz}">${podrobnosti.odkaz}</a></p>
                    <img src="../img/${podrobnosti.obrazek}" alt="${podrobnosti.jmeno}">
            `);
        });
    });

})