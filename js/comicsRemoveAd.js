// ==UserScript==
// @name         漫畫去廣告
// @namespace
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.cocomanga.com/*
// @icon         
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function () {
  $("html").bind("DOMSubtreeModified", function () {
    $('img').width('60%');
    $('iframe, .website-pc-read-common').remove();
  });


})();