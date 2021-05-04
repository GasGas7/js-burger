/**
 * Ho una lista di ingredienti da definire Cheese Egg Mustard Tomato Lettuce Ketchup
 * 
 * Ogni ingrediente avrà un costo da aggiungere a un costo di base del panino -.--> var baseBurgerPrice e var addPrice
 * 
*/


 //QUALI SONO I MIEI ELEMENTI : Ho una lista di ingredienti e prezzi da definire :Cheese Egg Mustard Tomato Lettuce Ketchup, che dovrà essere associata a un form htlm con un'immagine, una label e un check box. Il Forme va ciclato in un for che riproduce questo form tante i volte quanta è la lunghezza "i" dell'array.

 var ingredienti = [
        ["Cheese", "2"],
        ["Egg","3"], 
        ["Mustard","0.5"], 
        ["Tomato","1"], 
        ["Lettuce","1"], 
        ["Ketchup","0.5"]
    ]

 for(i=0 ; i < ingredienti.length; i++ ) {

    var ElementsArrayIngr = ingredienti[i][0];

    console.log(ElementsArrayIngr);
    
}


//COME ASSOCIO LA LISTA ARRAY AL FOMR ? Richiamo elementi dell'array e li associo a una variabile po

// COME CONTEGGIO LA MAGGIORAZIONE ? -->CHECKBOX : il checkbox è un input che se richiamo con il metodo .checked restituisce un valore true o false.
    //con il true devo tenere conto del sovraprezzo, se è falso non ne tengo conto. 
