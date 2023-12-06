//index.htmlの各要素を取得する
const btnEl = document.getElementById("calculate"); //ボタンを取得
const priceInput = document.getElementById("price"); //商品の金額(税抜)を取得
const discountInput = document.getElementById("discount"); //割引率を取得
const totalSpan = document.getElementById("total"); //金額(税抜)を取得
const totaltaxSpan = document.getElementById("totaltax"); //金額(10％税込)を取得

//ボタンを押した時に計算する関数
function calculateTotal() {
  //入力された金額、割引率を取得する
  const priceValue = priceInput.value;
  const discountValue = discountInput.value;

  //計算した金額を代入する変数
  let totalValue = 0;
  let totaltaxValue = 0;

  /*=====================*/
  //① 割引した金額(税抜)を計算してtotalValueに代入する
  totalValue = priceValue;

  //② 割引した後の金額の税込金額を計算してtotaltaxValueに代入する
  totaltaxValue = priceValue;
  /*=====================*/

  //計算した金額を表示する
  totalSpan.innerText = Math.round(totalValue) + "円";
  totaltaxSpan.innerText = Math.round(totaltaxValue) + "円";
}

//ボタンにイベントを設定する
btnEl.addEventListener("click", calculateTotal);