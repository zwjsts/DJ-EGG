// 音をまとめて管理する
const sounds = {
  base: new Audio("sounds/base.mp3"),
  drum: new Audio("Egg beat.m4a"),
  bass: new Audio("Egg bass.m4a"),
  synth: new Audio("Egg lead.m4a"),
};

// すべてループ再生にする
for (let key in sounds) {
  sounds[key].loop = true;
}

// ボタンと音をつなぐ関数
function toggleSound(id) {
  const audio = sounds[id];
  const button = document.getElementById(id);

  if (audio.paused) {
    audio.play();
    button.classList.add("active");
  } else {
    audio.pause();
    audio.currentTime = 0;
    button.classList.remove("active");
  }
}

// 各ボタンにクリックイベントを設定
document.getElementById("base").onclick = () => toggleSound("base");
document.getElementById("drum").onclick = () => toggleSound("drum");
document.getElementById("bass").onclick = () => toggleSound("bass");
document.getElementById("synth").onclick = () => toggleSound("synth");
