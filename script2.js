let i = 1;
while(i<=10){
    if( i === 8){
        break;
    }
    if( i === 5){
        i++
        continue;
    } 
    console.log(i);
    i++;

}


//* 6 */

function sommeEntiers(n){
    let i3=1;

    let somme=0;

    while(i3<=n){

        somme=somme+i;

        console.log(i3);

        i3++
    }
    return somme;
}
console.log(sommeEntiers(5));
//* 7 */
function afficher1a10() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
afficher1a10();
//* 8 */
function calculS(B){
    let i5 = 1;
    let somme = 0;
    while(i5<=20){
        somme=somme+i5;
        console.log(i5);
        i5++;
    }
    return somme;
    
}
console.log("La somme est : "+ calculS(5));
//* 9 */
function Factorielle(A){
    let i7=1;
    let resultat = 1;
    while(i7<=5){
        resultat = resultat*i7;
        i7++;


    }
    return resultat;



} console.log("La factorielle est : " + Factorielle(5));
//* 10 */
     function CompterN(D){
        let i8 = 1;
        let compteur = 0 ;
        while(i8<=100){
            if(i8 % 3 === 0){
                compteur = compteur + 1;

            }
            i8++;
            

        }
        return compteur;
     } 
     console.log( "Le nombre est : " + CompterN(5));
  //* u */
  function Tablemultiplication(n9){
    let i10=1;
    while( i10<=10){
        console.log( " 5 x " + i10 + " = " + (5 * i10));
        i10++;
    }
   }
   Tablemultiplication(5);
   function PairImpair(T){
    let j=1;
   }
   //* MINI-PROJET */
   function compter0ccurrences(tableau , codeChoisie){
    for(let I=0 ; I<tableauLenght)

   }



