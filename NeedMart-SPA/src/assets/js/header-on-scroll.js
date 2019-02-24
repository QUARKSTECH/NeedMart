
// top close button
document.getElementById('closeButton').addEventListener('click', function(e) {
e.preventDefault();
this.parentNode.style.display = 'none';
document.querySelector('.hero-section').style.height="401px";
}, false);


  // MODAL JS
function modaljs(id) {
    var body = document.querySelector("body");
    body.classList.add("overflow-hiddenb");
    var parent = document.querySelector(id);
    parent.style.display = "block";
    parent.classList.toggle('on');
    var bg = document.createElement("div");
    var close = document.createElement("div");
    bg.className = "modal-js-overlay";
    close.className = "modal-js-close";
    close.innerHTML = "x";
    close.addEventListener('click', function () {
    body.classList.remove("overflow-hiddenb");
        var overlay = body.querySelector(".modal-js-overlay");
        var closebtn = parent.querySelector(".modal-js-close");
        body.removeChild(overlay);
        parent.classList.toggle('on');
        parent.removeChild(closebtn);
        parent.style.display = "none";
    });
    body.appendChild(bg);
    parent.appendChild(close);
}
window.addEventListener('load', function () {
    var els = document.querySelectorAll('.modaljs');
    for (var i = 0; i < els.length; i++) {
        els[i].style.display = "none";
    }
});


function closelogin(){
  document.getElementById('modallogin').style.display="none";
}
function closesignup(){
  document.getElementById('modalsignup').style.display="none";
}
// window.addEventListener('load', function(){
//     var allimages= document.getElementsByTagName('img');
//     for (var i=0; i<allimages.length; i++) {
//         if(this.complete) $(this).load();
//     }
// }, false)

var rightSidebarjs = new SidebarJS.SidebarElement({
component: document.querySelector('[sidebarjs="rightSidebarName"]'),
position: 'right',
});
function sidebarDisplay(){
  document.getElementById("idmobilesidebar").style.visibility='visible';
}