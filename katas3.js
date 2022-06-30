const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let arr = []
    for(i=1;i<=25;i++){
        arr.push(i)
    }
    return arr
}
console.log(kata1())

function kata2() {
    let arr = []
    for(i=25;i>=1;i--){
        arr.push(i)
    }
    return arr
}
console.log(kata2())

function kata3() {
    let arr = []
    for(i=-1;i>=-25;i--){
        arr.push(i)
    }
    return arr
}
console.log(kata3())

function kata4() {
    let arr = []
    for(i=-25;i<=-1;i++){
        arr.push(i)
    }
    return arr
}
console.log(kata4())

function kata5() {
    let arr = []
    for(i=25;i>=-25;i--){
        arr.push(i)
    }
    return arr
}
console.log(kata5())


function kata6() {
    let arr = []
    for(i=1;i<=100;i++){
        if(i%3 === 0){
            arr.push(i)
        }
    }
    return arr
}
console.log(kata6())


function kata7() {
    let arr = []
    for(i=1;i<=100;i++){
        if(i%7 === 0){
            arr.push(i)
        }
    }
    return arr
}
console.log(kata7())

function kata8() {
    let arr = []
    for(i=100;i>1;i--){
        if(i%3 === 0 || i%7 === 0 ){
            arr.push(i)
        }
    }
    return arr
}
console.log(kata8())

function kata9() {
    let arr = []
    for(i=1;i<=100;i++){
        if(i%2 !== 0 && i%5 === 0 ){
            arr.push(i)
        }
    }
    return arr
}
console.log(kata9())

function kata10() {
    let arr = []
    for(i=0;i<sampleArray.length;i++){
        
        arr.push(sampleArray[i])
        
    }
    return arr
}
console.log(kata10())

function kata11() {
    let arr = []
    for(i=0;i<sampleArray.length;i++){
       if(sampleArray[i]%2 === 0) {
        arr.push(sampleArray[i])
       }
    }
    return arr
}
console.log(kata11())

function kata12() {
    let arr = []
    for(i=0;i<sampleArray.length;i++){
       if(sampleArray[i]%2 !== 0) {
        arr.push(sampleArray[i] )
       }
    }
    return arr
}
console.log(kata12())

function kata13() {
    let arr = []
    for(i=0;i<sampleArray.length;i++){
       if(sampleArray[i]%8 === 0) {
        arr.push(sampleArray[i] )
       }
    }
    return arr
}
console.log(kata13())

function kata14() {
    let arr = []
    for(i=0;i<sampleArray.length;i++){

        arr.push(sampleArray[i]*sampleArray[i])
       
    }
    return arr
}
console.log(kata14())

function kata15() {
    let sum = 0
    for(i=0;i<=20;i++){

        sum+= i
       
    }
    return sum
}
console.log(kata15())

function kata16() {
    let sum = 0
    for(i=0;i<sampleArray.length;i++){

       sum+= sampleArray[i]
       
    }
    return sum
}
console.log(kata16())

function kata17() {
    let menorElemento = +Infinity
    for(i=0;i<sampleArray.length;i++){

        if(sampleArray[i]<menorElemento){
            menorElemento = sampleArray[i]
        }
       
    }
    return menorElemento
}
console.log(kata17())

function kata18() {
    let maiorElemento = -Infinity
    for(i=0;i<sampleArray.length;i++){

        if(sampleArray[i]>maiorElemento){
            maiorElemento = sampleArray[i]
        }
       
    }
    return maiorElemento
}
console.log(kata18())

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
