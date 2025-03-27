// ボタンを取得
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result");

// じゃんけんの手を定義
const hands = ["グー", "パー", "チョキ"];

// 勝敗判定
function judge(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return "引き分けです！";
    }
    if (
        (playerHand === "グー" && computerHand === "チョキ") ||
        (playerHand === "チョキ" && computerHand === "パー") ||
        (playerHand === "パー" && computerHand === "グー")
    ) {
        return "あなたの勝ちです！";
    }
    return "あなたの負けです！";
}

// コンピュータの手をランダムに選ぶ
function getComputerHand() {
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}

// ボタンをクリックしたときの動作を設定
function playGame(playerHand) {
    const computerHand = getComputerHand();
    const result = judge(playerHand, computerHand);
    resultText.textContent = `あなたの手: ${playerHand}, コンピュータの手: ${computerHand} -> ${result}`;
}

rockButton.addEventListener("click", () => playGame("グー"));
paperButton.addEventListener("click", () => playGame("パー"));
scissorsButton.addEventListener("click", () => playGame("チョキ"));
