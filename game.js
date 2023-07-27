const attack = document.querySelector('.attackBtn');
const enemyHealth = document.querySelector('.enemyHealthBar');
const yourHealth = document.querySelector('.yourHealth');
const enemyPokemon = document.querySelector('.enemyPokemonPicture')
let startingHP = 100
let musicPlaying = false
let yourStartingHp = 100


attack.addEventListener('click', () => {
    
    let damage = Math.ceil(Math.random() * 10);
    let enemyDamage = Math.ceil(Math.random() * 10);
    attackPower(damage);
    damageHit(damage);
    enemyDamageAnimation();
    enemyAttack(enemyDamage);
    enemyDamageHit(enemydamage);
    // playSound();
});
// your attack 

function attackPower(damage) { 
   
    if (damage >= 9) {
       damage = damage * 4
        console.log("You hit for " + damage);
    } else if (damage > 7 && damage < 9) {
        damage = damage * 2
        console.log("You hit for " + damage);
    } else {
        damage = damage
        console.log("You hit for " + damage);
    }
}

function damageHit(damage) {
    startingHP = startingHP - damage;
    enemyHealth.innerHTML = startingHP
    if (startingHP <= 0) {
        alert("You win Pokemon Master!")
    }
}

function enemyDamageAnimation() {
    $(enemyPokemon).fadeIn(100).fadeOut(100).fadeIn(100);
}   
// Enemy Pokemon attack 


function enemyAttack(enemyDamage) {
    if (enemyDamage >= 9) {
        enemydamage = enemyDamage * 4 
        console.log("Mewtwo hit for " + enemydamage)
    } else if (enemyDamage > 7 && enemyDamage < 9) {
        enemydamage = enemyDamage * 2 
        console.log("Metwo hit for " + enemydamage)
    } else {
        enemydamage = enemyDamage
        console.log("Mewtwo hit for " + enemydamage)
    }

};

function enemyDamageHit(enemydamage) {
    yourStartingHp = yourStartingHp - enemydamage
    yourHealth.innerHTML = yourStartingHp
        if (yourStartingHp <= 0) {
            alert("You died :(")
        }
    
}

// play theme on button click 
function playSound() {
    let audio = new Audio("Battle/battle_theme.mp3");
    if (!musicPlaying) {
        audio.play();
        musicPlaying = true
    }
    
}

// We need to create a function that will roll a random number and multiply it by 10
// We need to create a console log that says how much you attacked for
// have the value of attack be subtracted by the health of enemy pokemon