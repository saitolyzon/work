/*=====================================================*/
/* 課題 */
//index.htmlの<div class="buttons">を取得する
const buttons = document.querySelectorAll("button");
//index.htmlの<p id="result">を取得する
const resultText = document.getElementById("result");
/*=====================================================*/
/* 追加課題1用 */
let playerScore = 0;    //プレイヤーの得点を保存する変数
let computerScore = 0;  //コンピューターの得点を保存する変数

//index.htmlの<span id="user-score">を取得する
const playerScoreText = document.getElementById("user-score");
//index.htmlの<span id="computer-score">を取得する
const computerScoreText = document.getElementById("computer-score");
/*=====================================================*/
/* 追加課題2用 */
//index.htmlの<span id="user-score-percentage">を取得する
const playerScorePercentage = document.getElementById("user-score-percentage");
//index.htmlの<span id="computer-score-percentage">を取得する
const computerScorePercentage = document.getElementById("computer-score-percentage");
/*=====================================================*/

//じゃんけんボタンをクリックした時の動きを設定する
buttons.forEach((button) => {   //ボタンの数だけ処理を繰り返す

  //ボタンがクリックされたら…
  button.addEventListener("click", () => {  

    //押されたボタンのIDをjankenメソッドに渡して実行する＆コンピューターの手も決める
    const result = janken(button.id, computerPlay());  
    
    //勝敗結果のテキストを書き換える
    resultText.textContent = result;    
  });
});

/*=====================================================*/
//コンピューターが出す手をランダムで決める関数
function computerPlay() {
  const choices = ["rock", "scissors", "paper"];    //グー、チョキ、パー
  const randomChoice = Math.floor(Math.random() * choices.length);  //ランダムで選ぶ
  return choices[randomChoice]; //選んだ手を返す
}

/*=====================================================*/
//じゃんけん結果を判定する関数
function janken(playerSelection, computerSelection) {

  //プレイヤーとコンピューターの手が一緒だったら…
  if (playerSelection === computerSelection) {
    return "あいこです (あなた):" + playerSelection + " (コンピューター):" + computerSelection;
  }

  //プレイヤーの手の方が強かったら…
  else if (
    //グー vs チョキ
    (playerSelection === "rock" && computerSelection === "scissors")
    //チョキ vs パー

    //パー vs グー

  ) {
      /* 追加課題1 */
      //プレイヤーのスコア(playerScore)に点数を1点追加したい
      
      //プレイヤーのスコアを表示をしている部分(playerScoreText)に点数を表示する
      playerScoreText.textContent = playerScore;

    /* 追加課題2 */
    //プレイヤーのスコアとコンピューターのスコアを足した試合数に応じて勝率を出したい(勝率＝プレイヤーのスコア÷(プレイヤーのスコア ＋ コンピューターのスコア) ✕ 100)
    //※あいこは勝負回数にカウントしない
    //小数点四捨五入はMath.round(数字)を使う

    return "勝ちました！ (あなた):" + playerSelection + " (コンピューター):" + computerSelection;

  //それ以外だったら…
  } else {
    /* 追加課題1 */
    //コンピューターのスコア(computerScore)に点数を1点追加したい

    //コンピューターのスコアを表示をしている部分(computerScoreText)に点数を表示する
    computerScoreText.textContent = computerScore;

    /* 追加課題2 */
    //プレイヤーのスコアとコンピューターのスコアを足した試合数に応じて勝率を出したい
    // プレイヤーの勝率 ＝ プレイヤーの勝利数 ÷ (プレイヤーの勝利数 ＋ コンピューターの勝利数) ✕ 100
    // コンピューターの勝率 ＝ コンピューターの勝利数 ÷ (プレイヤーの勝利数 ＋ コンピューターの勝利数) ✕ 100
    //※あいこは勝負回数にカウントしない
    //小数点四捨五入はMath.round(数字)を使う
    //playerScorePercentage.textContent = 
    //computerScorePercentage.textContent = 

    return "負けました… (あなた):" + playerSelection + " (コンピューター):" + computerSelection;
  }
}
/*=====================================================*/