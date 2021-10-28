// ==UserScript==
// @name         bilibili 自訂影片按鈕
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.bilibili.com/*
// @icon         https://static.hdslb.com/images/favicon.ico
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==
// 改 match 為此 *://*/* ，表示所有網站都用


(function () {

  addElement();

  function addElement() {
    let style =
      "position: absolute;" +
      "left: 10px;" +
      "z-index: 1000;" +
      "width: 40px;" +
      "height: 40px;" +
      "text-align: center;" +
      "color: white;" +
      "border: 4px solid black;" +
      "border-radius: 50%;"
      ;

    // adProperty
    // 暫停
    $('body').on('click', '.stop', function () {
      $('.stop').click(function () {
        vodeoInitialization();
      });
    });
    // 播放
    $('body').on('click', '.play', function () {
      $('.play').click(function () {
        playVideo();
      });
    });
    // 暫停
    $('body').on('click', '.pause', function () {
      $('.pause').click(function () {
        pauseVideo();
      });
    });

    let image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5oHSG-yspALyMklape1-LbAAllLM4MGCcrSH6jy1LC4H7fILASpsAE2C6N7RG89KcTY&usqp=CAU";
    let image2 = "https://cdn.icon-icons.com/icons2/2226/PNG/512/play_icon_134504.png";
    let image3 = "http://simpleicon.com/wp-content/uploads/pause.png";

    // addElement
    // 停止
    $('body').append("<div class='stop' " +
      "style='" + style +
      "top: 20%;" +
      "background-image: url(" + image1 + ");" +
      "background-size: 24px;" +
      "background-position: center;" +
      "background-repeat: no-repeat;" +
      "'></div>");
    // 播放
    $('body').append("<div class='play' " +
      "style='" + style +
      "top: 26%;" +
      "background-image: url(" + image2 + ");" +
      "background-size: 22px;" +
      "background-position: center;" +
      "background-repeat: no-repeat;" +
      "'></div>");
    // 暫停
    $('body').append("<div class='pause' " +
      "style='" + style +
      "background-image: url(" + image3 + ");" +
      "top: 32%;" +
      "background-size: cover;" +
      "background-position: center;" +
      "background-repeat: no-repeat;" +
      "'></div>");
  }
  function vodeoInitialization() {
    let video = $('video');
    video.trigger('pause'); // 暫停
    video.prop('currentTime', 0); // 設定初始時間
    $('.squirtle-volume-active-state').click() // 暫停聲音
  }
  function playVideo() {
    let video = $('video');
    video.trigger('play'); // 播放
  }
  function pauseVideo() {
    let video = $('video');
    video.trigger('pause'); // 暫停
  }
})();