// ==UserScript==
// @name         youtube廣告跳轉
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==
// 改 match 為此 *://*/* ，表示所有網站都用


(function() {
    removeAD();
    removeOverlay();
    $("html").bind("DOMSubtreeModified", function() {
        removeAD();
        removeOverlay();
        autoVideo();
    });

    function removeAD() {
        let skip = $('.ytp-ad-skip-button'); // 跳過廣告
        let preview = $('.ytp-ad-preview-text'); // 等廣告 n 秒提示
        let adShowing = $('.ad-showing'); // 有廣告
        let hasAD = $('.ad-interrupting .ytp-play-progress.ytp-swatch-background-color'); // 廣告軸
        let yitpAdText = $('.ytp-ad-player-overlay-instream-info'); // 廣告有幾則 .ytp-ad-simple-ad-badge .ytp-ad-text
        let drawerEnabled = $('.ytp-iv-drawer-enabled'); // 無廣告
        let playingMode = $('.playing-mode'); // 剛加載
        let video = document.querySelectorAll('video'); // video 位置
        let mute = $('.ytp-mute-button[title~=解除靜音]'); // video 已靜音
        let previewContainer = $('.ytp-ad-preview-container'); // 影片將在廣告結束後撥放

        // 跳轉廣告
        if(yitpAdText.length > 0){
            video[0].currentTime = video[0].duration;
        }
        // 靜音
        if(hasAD.length > 0){
            video[0].muted=true;
        }

        // 結束廣告
        if(skip.length > 0) {
            skip.click();
        }
    }

    function removeOverlay(){
        let message = $('.ytp-ad-message-container');
        let overlay = $('.ytp-ad-overlay-slot');
        let ce = $('.ytp-ce-element');
        let bottom_overlay = $('.ytp-ad-text-overlay');

        // 移除影片上的框
        if(overlay.length > 0) {
            overlay.remove();
        }
        if(message.length > 0) {
            message.remove();
        }
        if(ce.length > 0) {
            ce.remove();
        }
        if(bottom_overlay.length > 0){
            bottom_overlay.remove();
        }
    }

    // TODO 影片自動繼續撥放
    function autoVideo(){
        let confirmDialogRenderer = $('#action-button');
        /*
        if(confirmDialogRenderer.length > 0){
            confirmDialogRenderer.click();
        }
        */
    }

})();