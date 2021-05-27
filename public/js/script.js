const osobnostiTabulkaTh = [
    {
        "trida":"napoleon",
        "name":"Napoleon Bonaparte"
    },
    {
        "trida":"julesverne",
        "name":"Jules Verne"
    },
    {
        "trida":"moliere",
        "name":"Molière"
    },
    {
        "trida":"voltaire",
        "name":"Voltaire"
    }
];

const osobnostiTabulkaTd = [
    
    {
        "trida":"janazarku",
        "name":"Jana z Arku"
    },
    {
        "trida":"ludvik",
        "name":"Ludvík XIV."
    },
    {
        "trida":"victorhugo",
        "name":"Victor Hugo"
    },
    {
        "trida":"blaisepascal",
        "name":"Blaise Pascal"
    }
];


$(function() {


    function udalostiBlock(udalosti) {
        udalosti.forEach((event)=>{
        $("#udalosti .udalosti").append(`
            <ul>
                <li class="udalost-rok">${event.rok}</li>
                <li class="udalost-vpravo">
                    <p class="udalost-jmeno"> <a href="${event.url}" target="_blank">${event.udalost}</a>  </p>
                    <p class="udalost-podrobnosti">${event.podrobnosti}</p>
                </li>
            </ul>
            `);
    });
        $(".udalost-podrobnosti").hide();

        $(".udalost-jmeno").on("mouseover", function() {
            $(".udalosti ul").removeClass("udalosti-pozadi");
            $(this).parents("ul").addClass("udalosti-pozadi");
            $(this).parents().siblings().find(".udalost-podrobnosti").hide();
            $(this).next().show(500);
        });
    
        $(".udalosti ul").on("click", function() {
            $(this).siblings().removeClass("udalosti-pozadi");
            $(this).toggleClass("udalosti-pozadi");
            $(this).siblings().find(".udalost-podrobnosti").hide(500);
            $(this).find(".udalost-podrobnosti").toggle(500);
        });
    
    }

    fetch('../data/udalosti.json')
   .then(response => {
      console.log(response);
      return response.json()
   })
   .then(json => {
      console.log(json);
      udalostiBlock(json);
   })
   .catch(function (error) {
      console.error('Chyba: \n', error);
   });


    osobnostiTabulkaTh.forEach((tabulkaTh)=>{
        $(".osobnosti table .th").append(`
            <th class="${tabulkaTh.trida} removeAktivni">${tabulkaTh.name}</th>
        `);
    });

    osobnostiTabulkaTd.forEach((tabulkaTd)=>{
        $(".osobnosti table .td").append(`
            <td  class="${tabulkaTd.trida} removeAktivni">${tabulkaTd.name}</td>
        `);
    });

    
    function osobnostiBlock(osobnosti) {
        osobnosti.forEach((osobnost)=>{
        $(".leftside").append(`
            <li class="${osobnost.trida} removeAktivni">${osobnost.jmeno}</li>
        `);

        $(".rightside").append(`
            <ul class="${osobnost.trida}Karta hide">
                <li class="osobnosti-data"> ${osobnost.datumNarozeni} -  ${osobnost.datumUmrti}</li>
                <li class="osobnosti-jmeno">${osobnost.jmeno}</li>
                <li class="osobnosti-podrobnosti">${osobnost.podrobnosti}</li>
                <li class="osobnosti-url">Více informací najdete zde: <a href="${osobnost.url}" target="_blank">${osobnost.url}</a></li>
                <div class="osobnosti-obrazky"></div>
            </ul>
        `);

        
        
    });
    function pouzitiObrazku(person) {
        let osobnost = osobnosti.find(item => {return item.jmeno === person});
        $(".osobnosti-obrazky").empty();
        for (let i = 0; i < osobnost.obrazky.length; i++) {
            $(".osobnosti-obrazky").append(`<img src="../img/${osobnost.obrazky[i]}" alt="${osobnost.jmeno}" class="img-fluid">`);
        }
    }

    $(function() {
        $(".napoleon").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".napoleon").addClass("aktivni");
            pouzitiObrazku(osobnosti[0].jmeno);
            $(".hide").hide(800);
            $(".napoleonKarta").show(800);
        });

        $(".julesverne").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".julesverne").addClass("aktivni");
            pouzitiObrazku(osobnosti[1].jmeno);
            $(".hide").hide(800);
            $(".julesverneKarta").show(800);
        });

        $(".moliere").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".moliere").addClass("aktivni");
            pouzitiObrazku(osobnosti[2].jmeno);
            $(".hide").hide(800);
            $(".moliereKarta").show(800);
        });

        $(".voltaire").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".voltaire").addClass("aktivni");
            pouzitiObrazku(osobnosti[3].jmeno);
            $(".hide").hide(800);
            $(".voltaireKarta").show(800);
        });

        $(".janazarku").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".janazarku").addClass("aktivni");
            pouzitiObrazku(osobnosti[4].jmeno);
            $(".hide").hide(800);
            $(".janazarkuKarta").show(800);
        });

        $(".ludvik").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".ludvik").addClass("aktivni");
            pouzitiObrazku(osobnosti[5].jmeno);
            $(".hide").hide(800);
            $(".ludvikKarta").show(800);
        });

        $(".victorhugo").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".victorhugo").addClass("aktivni");
            pouzitiObrazku(osobnosti[6].jmeno);
            $(".hide").hide(800);
            $(".victorhugoKarta").show(800);
        });

        $(".blaisepascal").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".blaisepascal").addClass("aktivni");
            pouzitiObrazku(osobnosti[7].jmeno);
            $(".hide").hide(800);
            $(".blaisepascalKarta").show(800);
        });
        $(".zpetnatabulku").on("click", function() {
            $(".removeAktivni").removeClass("aktivni");
            $(".hide").hide(800);
            $(".rightside").hide(800);
            $(".leftside").hide(800);
            $("table").delay(800).show(500);
        });
    });
    }

    

    fetch('../data/osobnosti.json')
   .then(response => {
      console.log(response);
      return response.json()
   })
   .then(json => {
      console.log(json);
      osobnostiBlock(json);
   })
   .catch(function (error) {
      console.error('Chyba: \n', error);
   });

    $(function hide() {
        $(".hide").hide();
        $(".rightside").hide();
        $(".leftside").hide();
    });
    


    $(".schovat").on("click", function() {
        $(this).nextAll().toggle(800);
        $(this).parents(".row").next().find(".udalost-podrobnosti").hide(500);
        $(this).parents(".row").next().find("ul").removeClass("udalosti-pozadi");
        $(this).parents(".row").next().toggle(800);
    });

    $(".schovatpomaleji").on("click", function() {
        $(this).nextAll().toggle(2000);
        $(this).parents(".row").next().toggle(2000);
    });


    $("table tr th, table tr td").on("click", function() {
        $(this).parents("table").hide(700);
        $(".rightside").delay(900).show(700);
        $(".leftside").delay(700).show(700);
    });



})
