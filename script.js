// 数据同步函数
function syncData() {
  var visits = localStorage.getItem("counter");
  if (!visits) {
    visits = 1;
  } else {
    visits = parseInt(visits) + 1;
  }
  localStorage.setItem("counter", visits);
  return visits;
}

// 显示访问次数
function displayCounter() {
  var counterText = document.getElementById("counter-text");
  var visits = syncData();
  counterText.innerHTML = "总访问量：" + visits;
}

// 页面加载完成后调用显示访问次数函数
window.addEventListener("load", displayCounter);// JavaScript Document