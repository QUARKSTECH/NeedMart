


// searching js

var db = [
  "ac repair",
  "carpenter",
  "home cleaning",
  "civil work",
  "plumber",
  "tile laying"
];

// function popupClearAndHide() {
//   autocomplete_result.innerHTML = "";
//   autocomplete_result.style.display = "none";
// }

// function updPopup() {
//   if(!autocomplete.value) {
//     popupClearAndHide();
//     return;
//   }
//   var a = new RegExp("^" + autocomplete.value, "i");
//   for(var x = 0, b = document.createDocumentFragment(), c = false; x < db.length; x++) {
//     if(a.test(db[x])) {
//       c = true;
//       var d = document.createElement("p");
//       d.innerText = db[x];
//       d.setAttribute("onclick", "autocomplete.value=this.innerText;autocomplete_result.innerHTML='';autocomplete_result.style.display='none';");
//       b.appendChild(d);
//     }
//   }
//   if(c == true) {
//     autocomplete_result.innerHTML = "";
//     autocomplete_result.style.display = "block";
//     autocomplete_result.appendChild(b);
//     return;
//   }
//   popupClearAndHide();
// }

function updPopup(){
  if(autocomplete.value == ""){
    popupClearAndHide();
  }else{
    gapFetch("/search",{method:"POST",body:JSON.stringify({value:autocomplete.value})},function(err,data){
      if(data){
        popupClearAndHide();
        data.forEach(function(item){
          item = JSON.parse(item);
          let autocomplete_result_item = document.createElement("a");
          autocomplete_result_item.innerText = item[1];
          autocomplete_result_item.setAttribute("onclick","location.href='"+item[2]+"'");
          autocomplete_result.appendChild(autocomplete_result_item);
        });
        autocomplete_result.style.display = "block";
      }
    });
  }
}

function popupClearAndHide(){
  autocomplete_result.innerHTML = "";
  autocomplete_result.style.display = "none";
}

autocomplete.addEventListener("keyup", updPopup);
autocomplete.addEventListener("change", updPopup);
autocomplete.addEventListener("focus", updPopup);
autocomplete.addEventListener("focusout", popupClearAndHide);


var slider = tns({
    container: '.home-slider',
    navContainer: '.thumbnails',
    items: 1,
    autoplay: true,
    controls: false
  });
  
var slider_m = tns({
    container: '.home-slider-m',
    navContainer: '.thumbnails-m',
    items: 1,
    autoplay: true,
    controls: false
  });
