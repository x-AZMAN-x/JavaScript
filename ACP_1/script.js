let choice = prompt(`Wecome To The Perimeter Calculator! \n1. Square Perimeter \n2. Rectangle Perimeter \n3. Circle Perimeter \n4. Parelellogram Perimeter`)

if (choice == `1`){
    let side = prompt(`Enter The Side Of The Square:`)
    let result = (Number(side)+Number(side)+Number(side)+Number(side))
    alert(`The Perimeter Of The Square Is ${result}.`)
}

if (choice == `2`){
    let length = prompt(`Enter The First Side Of The Rectangle:`)
    let base = prompt(`Enter The Second Side Of The Rectangle:`)
    let result = (Number(length)+Number(length)+Number(base)+Number(base))
    alert(`The Perimeter Of The Rectangle Is ${result}.`)
}

if (choice == `3`){
    let radius = prompt(`Enter The Radius Of The Circle:`)
    let result = (3.14196*Number(radius)*2)
    alert(`The Perimeter Of The Circle Is ${result}.`)
}

if (choice == `4`){
    let l = prompt(`Enter The Length Of The Parelellogram:`)
    let b = prompt(`Enter The Base Of The Parelellogram:`)
    let result = (Number(l)+Number(l)+Number(b)+Number(b))
    alert(`The Perimeter Of The Parelellogram Is ${result}.`)
}