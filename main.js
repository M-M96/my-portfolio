// リスト作ってhtmlに反映したいー
// const mizuki = {
//   home : "福井県"
//   university : "同志社大学"
//   major : "心理学部"
//   hobby : ["漫画","お絵かき","散歩","スノボー"]
// }

// 現在時刻の内容
var weeks = new Array("日", "月", "火", "水", "木", "金", "土");

function showClock2() {
  var now = new Date();
  var month = now.getMonth() + 1; // 月
  var day = now.getDate(); // 日
  var week = weeks[now.getDay()]; // 曜日
  var hour = now.getHours(); // 時
  var min = now.getMinutes(); // 分
  var sec = now.getSeconds(); // 秒

  // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("nowTime").innerHTML =
    "現在：" +
    month +
    "/" +
    day +
    "(" +
    week +
    ")" +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec;
}
setInterval("showClock2()", 1000);
// 現在時刻の内容終わり

// 花びらの内容
const flower = document.getElementById("flower");
const section = document.querySelector(".cherry-blossom-container");

flower.onclick = function () {
  // 花びらを生成する関数
  const petalEl = document.createElement("span");
  petalEl.className = "petal";
  const minSize = 10;
  const maxSize = 30;
  const size = Math.random() * (maxSize + 1 - minSize) + minSize;
  petalEl.style.width = `${size}px`;
  petalEl.style.height = `${size}px`;
  petalEl.style.left = Math.random() * innerWidth + "px";
  section.appendChild(petalEl);

  // 一定時間が経てば花びらを消す
  setTimeout(() => {
    petalEl.remove();
  }, 3000);
};
// 花びらの内容終わり

// 応援するボタンの内容
const ouen = document.getElementById("ouen");
const hako = document.getElementById("hako");

const yaruki = document.createElement("p");
yaruki.className = "yaruki";

let count = 0;

ouen.onclick = function () {
  count += 1;

  if (count == 50) {
    yaruki.textContent = "やる気 : " + count + " %" + " 感謝！！";
    hako.appendChild(yaruki);
  } else if (count == 100) {
    yaruki.textContent = "やる気 : " + count + " %" + " やります！！";
    hako.appendChild(yaruki);
  } else {
    yaruki.textContent = "やる気 : " + count + " %";
    hako.appendChild(yaruki);
  }

  setTimeout(() => {
    yaruki.remove();
  }, 10000);
  //↑不完全っぽい
};
// 応援するボタンの内容終わり

// 投げ銭の内容
const zeni = document.getElementById("zeni");

zeni.onclick = function () {
  const coin = document.createElement("div");
  coin.className = "coin";
  hako.appendChild(coin);

  setTimeout(() => {
    coin.remove();
  }, 2000);
};
// 投げ銭の内容終わり
