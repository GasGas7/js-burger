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

    for(var i=0 ; i < elem_0.length; i++ ){

        //Mi stampano in console gli i elementi della
        var elementsArrayIngr = elem_0[i][0];
        var elementsArrayPrice = elem_0[i][1];
        console.log(elementsArrayIngr);
        console.log(elementsArrayPrice);
        
        elem_2.insertAdjacentHTML('beforeend',
        
        `
        <div class="form">
            <img width="40" src='./assets/img/${elem_0[i][0]+".svg"}' alt="">
            <label for="${elem_0[i][0]}">${elem_0[i][0]}</label>
            <input type="checkbox" name="${elem_0[i][0]}" id="${elem_0[i][0]}" data-price = ${elem_0[i][1]}>
        </div>
        `
        );
        }
}

var printIngr = document.querySelector(".elementi_panino")

arrayOfArrayEl (ingredienti, printIngr);


//COME ASSOCIO LA LISTA ARRAY AL FOMR ? Richiamo elementi dell'array e li associo a una variabile po

// COME CONTEGGIO LA MAGGIORAZIONE ? -->CHECKBOX : il checkbox è un input che se richiamo con il metodo .checked restituisce un valore true o false.
    //con il true devo tenere conto del sovraprezzo, se è falso non ne tengo conto. 
