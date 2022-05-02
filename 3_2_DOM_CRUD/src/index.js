// div タグの生成
const divEl = document.createElement("div");

// pタグの生成
const pEl = document.createElement("p");

// h2タグの生成
const h2El = document.createElement("h2");

// divタグ配下にpタグを追加
divEl.prepend(pEl);

// divタグ配下にpタグを追加
divEl.prepend(h2El);

console.log(divEl);

// button タグの生成
const buttonEl = document.createElement("button");

//ボタンのラベル設定
buttonEl.textContent = "ボタン";

// エリア１のdivタグを取得
const divEl2 = document.querySelector(".container");

// div タグ配下にbutton タグを追加
divEl2.appendChild(buttonEl);