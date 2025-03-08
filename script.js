const moves = ["Kick", "Slap", "Punch"];
let playerHealth = 100;
let opponentHealth = 100;

function playerAttack(move) {
    let opponentMove = moves[Math.floor(Math.random() * moves.length)];

    document.getElementById("result").textContent = `You used ${move}, Opponent used ${opponentMove}`;

    applyAttackEffects("player-img");
    applyAttackEffects("opponent-img");

    let winner = determineWinner(move, opponentMove);
    updateHealth(winner);
}

function determineWinner(player, opponent) {
    if (player === opponent) {
        return "Draw";
    } 
    if (
        (player === "Kick" && opponent === "Slap") ||
        (player === "Slap" && opponent === "Punch") ||
        (player === "Punch" && opponent === "Kick")
    ) {
        return "Player";
    } 
    return "Opponent";
}

function updateHealth(winner) {
    if (winner === "Player") {
        opponentHealth -= 20;
    } else if (winner === "Opponent") {
        playerHealth -= 20;
    }

    document.getElementById("player-health").style.width = playerHealth + "%";
    document.getElementById("opponent-health").style.width = opponentHealth + "%";

    if (playerHealth <= 0) {
        document.getElementById("result").textContent = "You Lose!";
    } else if (opponentHealth <= 0) {
        document.getElementById("result").textContent = "You Win!";
    }
}

function applyAttackEffects(character) {
    let img = document.getElementById(character);
    img.classList.add("attack");
    setTimeout(() => img.classList.remove("attack"), 200);
}
