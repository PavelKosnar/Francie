
$(function() {

    function mestaBlock(mesta) {
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
    }
    
    fetch('../data/mesta.json')
   .then(response => {
      console.log(response);
      return response.json()
   })
   .then(json => {
      console.log(json);
      mestaBlock(json);
   })
   .catch(function (error) {
      console.error('Chyba: \n', error);
   });

/*
   function regionyBlock(regiony) {
        $('path').on('click', function () {
            $('path').removeClass('aktivniPath');
            $(this).css('fill', '#333');
            $('.regiony').hide(800);
            let id = $(this).attr('id');
            let podrobnosti = regiony.find(item => {return item.id == id});
            $('.regiony').show(800, function() {
                $('.regiony').html(`
                    <ul class="${podrobnosti.id}">
                        <li class="regiony-jmeno">${podrobnosti.jmeno}</li>
                        <li class="regiony-text">${podrobnosti.text}</li>
                    </ul>
                `);
            });
        });
        $('path').on('mouseover', function() {
            $('path').css('fill', puvodniPath);
            $(this).css('fill', '#555');
        });
        $('path').on('mouseleave', function() {
            $(this).css('fill', puvodniPath);
        });
    };

    fetch('../data/regiony.json')
    .then(response => {
    console.log(response);
    return response.json()
    })
    .then(json => {
    console.log(json);
    regionyBlock(json);
    })
    .catch(function (error) {
    console.error('Chyba: \n', error);
    });

*/

    function pamatkyBlock(pamatky) {
        $('ellipse').on('click', function () {
            $('.pamatky').fadeOut(800);
            $('ellipse').css('fill', 'yellow');
            $(this).css('fill', 'green');
            let id2 = $(this).attr('id');
            let podrobnosti2 = pamatky.find(item => {return item.id == id2});
            $('.pamatky').fadeIn(800, function() {
                $('.pamatky').html(`
                        <h1 class="pamatky-jmeno">${podrobnosti2.jmeno}</h1>
                        <p class="pamatky-text">${podrobnosti2.text}</p>
                        <p>Více zde: <a href="${podrobnosti2.odkaz}">${podrobnosti2.odkaz}</a></p>
                        <img src="../img/${podrobnosti2.obrazek}" alt="${podrobnosti2.jmeno}">
                `);
            });
        });
    }


    fetch('../data/pamatky.json')
   .then(response => {
      console.log(response);
      return response.json()
   })
   .then(json => {
      console.log(json);
      pamatkyBlock(json);
   })
   .catch(function (error) {
      console.error('Chyba: \n', error);
   });
})