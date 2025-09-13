let dice ={
    total_sides: 6,
    roll: function(){
        let randomNumber = Math.floor(Math.random()*this.total_sides+1);
        return randomNumber;
    }
}

let button = document.getElementById('button');

button.onclick = function(){
    let result = dice.roll();
    document.getElementById('diceholder').innerHTML = result;
};
