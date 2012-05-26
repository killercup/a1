// be responsive and shit
document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');

/*!
  * domready (c) Dustin Diaz 2012 - License MIT
  */
!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("domready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}});

function move_into(container, thing) {
  document.getElementById(container).appendChild(document.getElementById(thing));
}

function insertAfter( referenceNode, newNode ) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

domready(function () {
  // move sidebar to bottom
  move_into("main", "sidebar");
  // move search into top nav
  move_into("top-menu", "quick-search");

  // nav toggle button
  (function(){
    var title = document.getElementById("header").getElementsByTagName("h1")[0];
    var button = document.createElement('a');
    button.innerHTML = "nav";
    button.setAttribute("class", "toggle-button for-topmenu");
    button.onclick = function() {
      var t = document.getElementById("top-menu");
      if (t.hasClassName('open')) {
        // t.slideUp();
        t.removeClassName('open');
      }
      else {
        // t.slideDown();
        t.addClassName('open');
      }
    }

    insertAfter(title, button);
  })();
})