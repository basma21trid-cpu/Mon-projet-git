function calculatrice(a,b, operation){
        if(operation === "+"){
            return a+b;
        }else if(operation === "-"){
            return a-b;
        }else if(operation === "*"){
            return a*b;
        }else if(operation === "/"){
            return a/b;
        }else{
            return "operation invalide";
        }
    }
    console.log(calculatrice(5,5, "+"));
    console.log(calculatrice(5,5, "-"));
    console.log(calculatrice(5,5, "*"));
    console.log(calculatrice(5,5, "/"));
    //* BOUCLES ( for )*/
 for(let i=1 ; i<=5 ; i++){
    console.log(i);
    }
    //* WHILE */
    let i = 1;
    while(i>=5){
        console.log("Mon tour numero : " + i);
        i++
    }
    //* 2 */
    let I=10;
    while(I>=1){
        console.log("Countdown :" + I);
        I--
    }
    //* 3 */
    let i1=1;
    let somme = 0;
    while(i1<=5){
        somme=+i1;
        i1++
        
    }
    console.log("La somme : " + somme);
    //* 4 */
    let i2=1;
    while(i2 <= 10){
        if( i2 % 2 === 0){
            
            console.log(i2);
        }
        i2++;

    }
    //* 5 */
     let i3=1;
     while(i3<=20){
        if(i3 % 2 === 1){
            console.log(i3);
        }
        i3++;
     }
     //* 6 */
     let i4=20;
     while( i4>=1){
        if( i4 % 2 === 0){
            console.log(i4);
        }
        i4--;

     }
     //* 7 */
      let i5=1;
      while(i5 <= 10){
        if( i5 === 6){
            break;
        }
        console.log(i5);
        i5++
      }
//* 8 */
let i6 = 1;

while(i6<=10){

    if(i6===5){
    i6++;
        continue;
    }
    console.log(i6);
    i6++;
    
}
//* 9 */
let i7=1;
let N=10;
while( i7<=10){
    console.log(i7);
    i7++
}
//* 10 */