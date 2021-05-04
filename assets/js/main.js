/**
 * Ho una lista di ingredienti da definire Cheese Egg Mustard Tomato Lettuce Ketchup
 * 
 * Ogni ingrediente avrà un costo da aggiungere a un costo di base del panino -.--> var baseBurgerPrice e var addPrice
 * 
*/


 //QUALI SONO I MIEI ELEMENTI : Ho una lista di ingredienti e prezzi da definire :Cheese Egg Mustard Tomato Lettuce Ketchup, che dovrà essere associata a un form htlm con un'immagine, una label e un check box. Il Forme va ciclato in un for che riproduce questo form tante i volte quanta è la lunghezza "i" dell'array.

 var ingredienti = [
        ["Cheese", "2"],
        ["Fried-egg","3"], 
        ["Mustard","0.5"], 
        ["Tomato","1"], 
        ["Lettuce","1.25"], 
        ["Ketchup","0.5"]
    ]

 

//Inserisco il for in una funzione con un parametro. Il primo legge il primo elemento dell'array, il secondo parametro legge il secondo elemento dell'array che sarà aggiunto all'attributo "data-" nel checkbox_html ".

function arrayOfArrayEl (elem_0, elem_2){

    for(var i=0 ; i < elem_0.length; i++){

        //Mi stampano in console gli i elementi della
        var elementsArrayIngr = elem_0[i][0];
        var elementsArrayPrice = elem_0[i][1];
        console.log(elementsArrayIngr);
        console.log(elementsArrayPrice);
        
        elem_2.insertAdjacentHTML('beforeend',
        
        `
        <div class="form_input">
            <img width="60" src='./assets/img/${elem_0[i][0]+".svg"}' alt="">
            <label for="${elem_0[i][0]}">${elem_0[i][0]}</label>
            <input type="checkbox" name="${elem_0[i][0]}" id="${elem_0[i][0]}" data-price="${elem_0[i][1]}"><span>add</span>
        </div>
        `
        );
    }
}

var printIngr = document.querySelector(".elementi_panino")

arrayOfArrayEl (ingredienti, printIngr);



//Devo costruire una seconda funzione che al click di button mi esegua una somma di: PrezzoBasePanino + Prezzo Aggiunta se selezionata - sconto se inserito.

document.getElementById("calculate").addEventListener("click", calcolaPrezzo);

function calcolaPrezzo(){

    var burgerPriceBase = 8;
    var burgerAddPrice = 0;

    // Definisco una variabile che corrisponde a tutti gli elementi di questo tipo (input) nel mio codice. Successivamente, passo la variabile in un ciclo for per fare una verifica di quali restituiscono valore true. 
    var checks = document.querySelectorAll("input[type='checkbox']");
    

    //Il ciclo passa tutti gli attributi data-price ogni volta che il checkbox è spuntato e restituisce valore booleano true
    for(var i = 0; i < checks.length; i++){

        var ingredBooleanCheck = checks[i]

        if(ingredBooleanCheck.checked === true){

            burgerAddPrice += Number(ingredBooleanCheck.getAttribute('data-price'))

        }

    }
    console.log(burgerAddPrice);

    var burgerTotalPrice = burgerPriceBase  + burgerAddPrice;

    console.log(burgerTotalPrice)

    var couponList = [

    "burger5",
    "burger10%",
    "burger5€"

    ]

    var scontoCoupon = document.getElementById("coupon").value;

    var burgerSalePrice

    if( scontoCoupon == couponList[0]) {

        burgerSalePrice = burgerTotalPrice - ((burgerTotalPrice*5)/100);
        document.getElementById("costo_panino").innerHTML=  "$ " + burgerSalePrice;

    } else if( scontoCoupon == couponList[1]){

        burgerSalePrice = burgerTotalPrice - ((burgerTotalPrice*10)/100);
        document.getElementById("costo_panino").innerHTML= "$ " + burgerSalePrice;

    } else if ( scontoCoupon == couponList[2]) {

        burgerSalePrice = burgerTotalPrice - 5;
        document.getElementById("costo_panino").innerHTML= "$ " + burgerSalePrice;

    } else{
        document.getElementById("costo_panino").innerHTML=  "$ " + burgerTotalPrice;
    }

    console.log(burgerSalePrice)

    
}



 /*     var couponList = [

        "burger5",
        "burger10%",
        "burger5€"

    ]

    var scontoCoupon = document.getElementById("coupon").value;

    for (var i=0; i < couponList.length; i++) {

        if( scontoCoupon == couponList[i]) {

        var burgerSalePrice = burgerTotalPrice - ((burgerTotalPrice*5)/100);

        
        if( scontoCoupon == couponList[i]) {

            var burgerSalePrice = burgerTotalPrice - ((burgerTotalPrice*10)/100);
    
            }
        
    }console.log(burgerSalePrice)*/





// COME CONTEGGIO LA MAGGIORAZIONE ? -->CHECKBOX : il checkbox è un input che se richiamo con il metodo .checked restituisce un valore true o false.
    //con il true devo tenere conto del sovraprezzo, se è falso non ne tengo conto. 

   /*  document.getElementById("calculate").addEventListener('click', calcolaPrezzo);

    function calcolaPrezzo(){
        
        var burgerPriceBase = 8.99;
        var burgerAddPrice = 0;

        console.log(burgerPriceBase);

        // Incremento prezzo panino quando un ingrediente viene selezionato 
        var checks = document.querySelectorAll("input[type='checkbox']");
        
        console.log(checks);
    
        
        for(var i = 0; i < checks.length; i++) {

            var ingredBooleanCheck = checks[i];
            
            if(ingredBooleanCheck.checked){

                burgerAddPrice += Number(ingredBooleanCheck.getAttribute('data-price'))
            }
        }
        console.log(burgerAddPrice);

        var burgerTotalPrice = burgerPriceBase  + burgerAddPrice;

        console.log(burgerTotalPrice.toFixed(2));

        // Definire codici scnto e calcolo prezzo finale scontatato
        var couponsList = [
    
        ];
    
    }; */