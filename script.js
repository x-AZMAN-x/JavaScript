let choice = prompt(`Welcome To Area Calculator: \n1. Square Area \n2. Rectangle Area \n3. Circle Area \n4. Parelellogram Area`)

if (choice == `1`){
    let side = prompt(`Enter The Length Of The Side:`);
    let result = Number(side)*Number(side);
    alert(`The Result Of The Square Area Is ${result}.`)
}
else if (choice == `2`){
    let length = prompt(`Enter The Length Of One Side:`);
    let base = prompt(`Enter The Length Of Another Side:`);
    let result = Number(length)*Number(base);
    alert(`The Result Of The Rectangle Area Is ${result}.`)
}
else if (choice == `3`){
    let radius = prompt(`Enter The Length Of The Radius Of The Circle:`);
    let result = 3.14159*Number(radius)*Number(radius);
    alert(`The Result Of The Circle Area Is ${result}.`)
}
else if (choice == `4`){
    let h = prompt(`Enter The Length Of The Height Of The Parelellogram:`);
    let b = prompt(`Enter The Length Of The Base Of The Parelellogram:`)
    let result = Number(h)*Number(b)
    alert(`The Result Of The Parelellogram Area Is ${result}.`)
}
else{
    alert(`Please Enter A Valid Input (1 or 2 or 3 or 4)`)
}