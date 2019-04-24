"use strict";

function addOnWheel(elem, handler) {
  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+
      elem.addEventListener("wheel", handler);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener("mousewheel", handler);
    } else {
      // 3.5 <= Firefox < 17, более старое событие DOMMouseScroll пропустим
      elem.addEventListener("MozMousePixelScroll", handler);
    }
  } else { // IE8-
    text.attachEvent("onmousewheel", handler);
  }
}

let scale = 1;
let ItemsZoomableArray = document.getElementsByClassName("mouseScrollZoom");

for (let i = 0; i < ItemsZoomableArray.length; i++) {
  let text = ItemsZoomableArray[i];

  addOnWheel(text, function (e) {

    let delta = e.deltaY || e.detail || e.wheelDelta;

    // отмасштабируем при помощи CSS
    if (delta > 0) scale += 0.05;
    else scale -= 0.05;

    text.style.transform = text.style.WebkitTransform = text.style.MsTransform = 'scale(' + scale + ')';

    // отменим прокрутку
    e.preventDefault();
  });
}

