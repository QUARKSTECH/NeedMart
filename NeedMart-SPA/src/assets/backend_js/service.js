let cart = {};
let address_dict = [];
let booking_info = {};
let holiday_dates = ["19/10/2017","20/10/2017","01/11/2017","25/12/2017",]
var counter = 0;
let total_price = 0;
let service_allow = false;
let disabledDates;
var weekday = new Array(7);
window.onload = function() {
  init();
};
function displayShoppingCart(name,description,price,elm){
   
        
    
    checkCart();
    if(elm.checked==true){
     counter += 1;
     let textElm = document.querySelectorAll('input[type="text"][data-sid="'+elm.dataset.sid+'"][data-ssid="'+elm.dataset.ssid+'"][data-category="'+elm.dataset.category+'"]');
     if(textElm[0] && textElm[0].dataset.showquantity == "true"){
          textElm[0].style.display="block";
          textElm[0].value = 1;
     }
    
     var html = '<div class="col-md-12 added cls'+ elm.dataset.sid+elm.dataset.ssid+elm.dataset.category +'" style="margin-top:2px; padding-left:10px ;border-bottom: 1px solid #86a7cf;"><div class="col-md-11" style="display: flex;align-items: center; padding:0;"><div class="col-md-7 col-sm-7 col-xs-7 padding-0"><h4 style="color:rgba(19, 96, 142, 0.92);">'+name+'</h4></div><div class="col-md-5 col-sm-5 col-xs-5 text-right padding-0"><p>'+price+'/unit<p></div></div><div class="delete-item col-md-1" onclick="delitem('+ "'" +elm.dataset.sid+elm.dataset.ssid+elm.dataset.category+ "'" +')">x</div><div class="col-md-11" style="display: flex;align-items: center;padding:0;"><div class="col-md-6 col-sm-6 col-xs-6 padding-0"><p>'+description+'<p></div><div class="col-md-6 col-sm-6 col-xs-6 text-right padding-0"><input type="text" id="dest" value="1" disabled></div></div></div>';
     var parentel = document.getElementById('append');  
     parentel.insertAdjacentHTML('beforeend', html);
     cart[elm.dataset.sid+elm.dataset.ssid+elm.dataset.category] = [name,description,price,{sid:elm.dataset.sid,ssid:elm.dataset.ssid,category:elm.dataset.category, price_val: elm.dataset.price_val},1];
 }
    else{
     counter -= 1; 
     let textElm = document.querySelectorAll('input[type="text"][data-sid="'+elm.dataset.sid+'"][data-ssid="'+elm.dataset.ssid+'"][data-category="'+elm.dataset.category+'"]');
     if(textElm[0]){
     textElm[0].style.display="none";
     }
     var parentNode =  document.getElementById('append');
     var paras = document.getElementsByClassName("cls"+elm.dataset.sid+elm.dataset.ssid+elm.dataset.category);
     paras[0].parentNode.removeChild(paras[0]);
     delete cart[elm.dataset.sid+elm.dataset.ssid+elm.dataset.category];
 }
 
 Cookies.set("gapoonCart",cart);
 checkCart();
    
}

// delete item in list
function delitem(cls_id){
    counter --; 
     // var parentNode =  document.getElementById('append');
     var child = document.getElementsByClassName("cls"+cls_id);
     let textElm = document.querySelectorAll('input[type="text"][data-sid="'+cart[cls_id][3].sid+'"][data-ssid="'+cart[cls_id][3].ssid+'"][data-category="'+cart[cls_id][3].category+'"]');
     let checkElm = document.querySelectorAll('input[type="checkbox"][data-sid="'+cart[cls_id][3].sid+'"][data-ssid="'+cart[cls_id][3].ssid+'"][data-category="'+cart[cls_id][3].category+'"]');
     if(textElm[0]){
     textElm[0].style.display="none";
     }
     if(checkElm[0]){
          checkElm[0].checked = false;
     }
     // var str = child[0].className.split(" ");
     // var ele_id = str[2].substr(3,1);
     // console.log(ele_id);
     // document.getElementById(ele_id);
     
//     var paras = document.getElementsByClassName("cls"+elm.dataset.sid+elm.dataset.ssid+elm.dataset.category);
// console.log(child[1],child[1].parentNode)
if(child[0]){
     child[0].parentNode.removeChild(child[0]);
}
if(child[0]){
     child[0].parentNode.removeChild(child[0]);
}
     delete cart[cls_id];
     Cookies.set("gapoonCart",cart);
    checkCart();
}

// checkCart
function checkCart(){
    if(counter > 0){
        console.log(counter);
         $('.cart-empty').hide();
          $('#book-btn-box').show();
    } else {
         $('.cart-empty').show();
         $('#book-btn-box').hide();
    }
    calculateCartValue()

}

function copyText(elm) {
     if(isNaN(elm.value)){
          elm.value = elm.value.substr(0,elm.value.length - 1)
     }else{
          if(elm.value != ""){
               if(parseInt(elm.value) > parseInt(elm.dataset.max_quantity)){
                    elm.value = elm.dataset.max_quantity
               }
              var dest = document.querySelectorAll(".cls"+elm.dataset.sid+elm.dataset.ssid+elm.dataset.category+" #dest");
              if(dest[0]){
               cart[elm.dataset.sid+elm.dataset.ssid+elm.dataset.category][4] = elm.value;
               dest[0].value = elm.value;
              }
              Cookies.set("gapoonCart",cart);
              checkCart();
          }
     }
}

function calculateCartValue(){
     let cartVal = "0 - 0";
     for(let keys in cart){
          if(cart[keys][3].price_val != 0 || !cart[keys][3].price_val){
               if(cartVal != "Upon Inspection"){
                    let cartValMin = parseInt(cartVal.split(" - ")[0]) + (parseInt(cart[keys][3].price_val.split(",")[0]) * parseInt(cart[keys][4]));
                    let cartValMax = parseInt(cartVal.split(" - ")[1]) + ((cart[keys][3].price_val.split(",")[1] ? parseInt(cart[keys][3].price_val.split(",")[1]):parseInt(cart[keys][3].price_val.split(",")[0])) * parseInt(cart[keys][4]));
                    cartVal = cartValMin+" - "+cartValMax
               }
          }else{
               cartVal = "Upon Inspection";
          }
     }
     console.log(cartVal)
}

// FAQ JS
var buttons = document.querySelectorAll('.submenu-toggle-button');

[].forEach.call(buttons, function(button) {
  button.addEventListener('click', function() {
    var submenu = button.parentNode.querySelector('.submenu');
    submenu.classList.toggle('open');
    var buttonState = button.parentNode.querySelector('.submenu-toggle-button');
    buttonState.classList.toggle('open');
  });
});

function toggleItem(elem) {

  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) { 
      var current = this;
      for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove('active');
        } else {
          current.classList.add('active')
        }
      }
      e.preventDefault();
    });
  };
}

function restoreCartFromCookie(){
     let gapoonCart = Cookies.get("gapoonCart");
     if(gapoonCart){
          gapoonCart = JSON.parse(gapoonCart);
          cart = gapoonCart;
          for(var keys in gapoonCart){
               $('.cart-empty').hide();
               // displayShoppingCart(gapoonCart[keys][0],gapoonCart[keys][1],gapoonCart[keys][3],"render")
               let elm = document.querySelectorAll('input[type="checkbox"][data-sid="'+gapoonCart[keys][3].sid+'"][data-ssid="'+gapoonCart[keys][3].ssid+'"][data-category="'+gapoonCart[keys][3].category+'"]');
               // console.log(gapoonCart[keys][3])
               if(elm[0]){
                    elm[0].checked = true;
               }
               let textElm = document.querySelectorAll('input[type="text"][data-sid="'+gapoonCart[keys][3].sid+'"][data-ssid="'+gapoonCart[keys][3].ssid+'"][data-category="'+gapoonCart[keys][3].category+'"]');
               if(textElm[0] && textElm[0].dataset.showquantity == "true"){
                    textElm[0].style.display="block";
                    textElm[0].value = gapoonCart[keys][4]
               }
               if(!document.getElementsByClassName("cls"+gapoonCart[keys][3].sid+gapoonCart[keys][3].ssid+gapoonCart[keys][3].category)[0]){
                    // document.getElementById("source").style.display="block";
                    document.getElementById('book-btn-box').style.display="block";
                    var html = '<div class="col-md-12 added cls'+ gapoonCart[keys][3].sid+gapoonCart[keys][3].ssid+gapoonCart[keys][3].category +'" style="margin-top:2px; padding-left:10px ;border-bottom: 1px solid #86a7cf;"><div class="col-md-11" style="display: flex;align-items: center; padding:0;"><div class="col-md-7 col-sm-7 col-xs-7 padding-0"><h4 style="color:rgba(19, 96, 142, 0.92);">'+gapoonCart[keys][0]+'</h4></div><div class="col-md-5 col-sm-5 col-xs-5 text-right padding-0"><p>'+gapoonCart[keys][2]+'/unit<p></div></div><div class="delete-item col-md-1" onclick="delitem('+ "'" + gapoonCart[keys][3].sid+gapoonCart[keys][3].ssid+gapoonCart[keys][3].category + "'" +')">x</div><div class="col-md-11" style="display: flex;align-items: center;padding:0;"><div class="col-md-6 col-sm-6 col-xs-6 padding-0"><p>'+gapoonCart[keys][1]+'<p></div><div class="col-md-6 col-sm-6 col-xs-6 text-right padding-0"><input type="text" id="dest" value="'+gapoonCart[keys][4]+'" disabled></div></div></div>';
                    var parentel = document.getElementById('append');  
                    parentel.insertAdjacentHTML('beforeend', html); 
               }
          }
     }
     counter = Object.keys(cart).length;
     checkCart()
}

function bookService(elm){
     if(booking_info.hasOwnProperty('address_info')){
     let tempText = elm.innerHTML;
     elm.innerHTML = "Processing...";
     elm.disabled = true;
     console.log("booking info is ",booking_info.address_info);
     gapFetch("/bookService",{method:"POST",body:JSON.stringify({cart:cart,booking_info:booking_info})},function(err,data){
          if(data.success == "1"){
               cart = {};
               Cookies.remove('gapoonCart');
               Cookies.set('gapoonBookingId', data.booking_id)
               booking_info = {};
               counter = 0
               checkCart();
               $(".header").append('<noscript><img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=nu8qc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" /><img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=nu8qc&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0" /><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1677966602440722&ev=Lead&noscript=1" /></noscript><iframe src="http://valueleafservices.go2cloud.org/aff_l?offer_id=146" scrolling="no" frameborder="0" width="1" height="1"></iframe>');
               //gtag_report_conversion(window.location.href);
               setTimeout(function(){
                   location.href ="/booking-completed"
               },1000);
               
          }else{
               console.log(data)
               showInputErrors("modal2",data);
          }
     });
     }
     else{
         var error_msg = $("#address_required");
         error_msg.html("Please add an address first.");
         error_msg.css('color', 'red');
         error_msg.show();
          setTimeout(function(){error_msg.hide();},5000);
     }
}

function init(){
     toggleItem(document.querySelectorAll('.tab'));
     fetchAddress();
     disabledDates = holiday_dates;
     let endTime = moment("02:00p", 'hh:mma')
     if(moment().day() == 0 || moment().isAfter(endTime)){
          disabledDates.push(moment().format("DD/MM/YYYY"))
     }else if(moment().day() == 6){
          disabledDates.push(moment().add(1,'d').format("DD/MM/YYYY"))
     }
     // console.log("here111",disabledDates)
     $('.date_time_slider').on('click', '.date_time_slider_one', function() { 
        var a = $(this).attr("data-date-value")
          $('.datepicker').datepicker('update', a);
          $(".date_time_slider .active").removeClass("active");
          $(this).addClass("active");
          
     });
     
     //date picker start
     var today = new Date();
     var end = new Date();
     end.setDate(end.getDate()+ 60);
     
     weekday[0] = "S";
     weekday[1] = "M";
     weekday[2] = "T";
     weekday[3] = "W";
     weekday[4] = "T";
     weekday[5] = "F";
     weekday[6] = "S";
     
     var n = weekday[end.getDay()];
     var dd = today.getDate();
     var mm = today.getMonth()+1; //January is 0!
     
     var yyyy = today.getFullYear();
     if(dd<10){
         dd='0'+dd;
     } 
     if(mm<10){
         mm='0'+mm;
     } 
     var today = dd+'/'+mm+'/'+yyyy;
         $( ".datepicker" ).datepicker({ 
             format: 'dd/mm/yyyy',
             startDate: today,
             endDate: end,
             autoclose: true,
             datesDisabled: disabledDates
         });
         $('.date_time_slider').slick({
             dots: false,
             infinite: false,
             speed: 300,
             slidesToShow: 7,
             slidesToScroll: 7,
             prevArrow: "<button class='date_time_slider_left'></button>",
             nextArrow: "<button class='date_time_slider_right'></button>"
         });
         $("#booking_datetime_modal").on('shown.bs.modal', function () {
                 $('.date_time_slider').slick('setPosition');
                 var a = $('.service-cart').html();
                 $('.booking_datetime_modallist').empty().html(a);
         });
          $("#booking_datetime_modal").on('show.bs.modal', function () {
                 var a = $('.service-cart').html();
                 $('.booking_datetime_modallist').empty().append(a);
         });
    blockDates();
     
     $('.datepicker').datepicker()
         .on('changeDate', function(e) {
             var a = $("#date_of_service").val();
             var b =  $(".date_time_slider .date_time_slider_one[data-date-value='"+a+"']").attr("data-slick-index");
              $(".date_time_slider .active").removeClass("active");
             $(".date_time_slider .date_time_slider_one[data-date-value='"+a+"']").addClass("active");
             $('.date_time_slider').slick('slickGoTo', b);
             $('.form-adate').val(moment(e.date).format("DD-MM-YYYY"));
             fetchtimeslot();
         });
         
     $($(".date_time_slider_inner")[0]).click();
     //date picker end
     
     $(".next1").click(function() {
         if($(".date_time_slider .date_time_slider_one[data-date-value='"+$("#date_of_service").val()+"']").find(".date").hasClass("date_block")){
            var error_msg = $("#service_blocked");
            error_msg.show();
            setTimeout(function(){error_msg.hide();},5000);
         }
         else{
             $(".date-time-box").hide();
         $(".saved-address-box").show();
         booking_info.adate = $("#adate_info").val();
         booking_info.timeslot = $("#timeslot_info").val();
         }
     });
     $(".add-addrs-btn").click(function() {
         $(".saved-address-box").hide();
         $(".address-box").show();
         init_map();
     });
     $(".next2").click(function() {
         $(".address-box").hide();
          $(".add-address-box").show();
          setUserAddress();
     });
     $(".back1").click(function() {
         $(".date-time-box").show();
         $(".saved-address-box").hide();
          $('.date_time_slider').slick('setPosition');
     });
     
     $(".back2").click(function() {
         $(".address-box").show();
          $(".add-address-box").hide();
     });
     $(".back3").click(function() {
         $(".saved-address-box").show();
          $(".address-box").hide();
     });
     
     // notify msg js

    $('.btn-alert').on('click', function(event) 
	{ 
          checkCouponCode()

	});


// remove coupon code

$('#clear').click(function() {
  $('#input-outer input').val('');
  $(".alert-message .alert").first().fadeOut(1000, function () { $(this).remove(); });
  booking_info.coupon_info = undefined;
});

$('.book-service-btn.bookGap').click(function() {
    blockDates(function(){$("#booking_datetime_modal").modal("show")});
  
});



}

function blockDates(cb){
    console.log("called1");
    $('.date_time_slider').slick('removeSlide', null, null, true);
    
    
    service_allow = false;
    for(var keys in cart){
              if(cart[keys][3].sid == "5" || cart[keys][3].sid == "7" || cart[keys][3].sid == "10" || cart[keys][3].ssid == "112")
                service_allow = true;
    }
     for (i = 1; i <= 60; i++) { 
          var date1 = new Date();
          date1.setDate(date1.getDate()+ i);
          var dd = date1.getDate();
          var n = weekday[date1.getDay()];
          var dd = date1.getDate();
          var mm = date1.getMonth()+1; //January is 0!
          
          var yyyy = date1.getFullYear();
          if(dd<10){
              dd='0'+dd;
          } 
          if(mm<10){
              mm='0'+mm;
          } 
          var date2 = dd+'/'+mm+'/'+yyyy;
          
          if(disabledDates.indexOf(date2) == -1){
            // if((date1 - new Date()) / (24*60*60*1000) <= 7 && !service_allow)
            //   $('.date_time_slider').slick('slickAdd', '<div class="date_time_slider_one" data-date-value="'+date2+'" onclick="setTimeSlot('+"'"+moment(date1).format("DD-MM-YYYY")+"'"+')"><div class="date_time_slider_inner"><div class="day">'+n+'</div><div class="date date_block">'+dd+'</div></div></div>');
            // else
              $('.date_time_slider').slick('slickAdd', '<div class="date_time_slider_one" data-date-value="'+date2+'" onclick="setTimeSlot('+"'"+moment(date1).format("DD-MM-YYYY")+"'"+')"><div class="date_time_slider_inner"><div class="day">'+n+'</div><div class="date">'+dd+'</div></div></div>');
          }
     }
     $(".date_time_slider .date_time_slider_one[data-date-value='"+$("#date_of_service").val()+"']").click();
     if(cb)
        cb();
}

function setTimeSlot(date){
      $('.form-adate').val(date);
      fetchtimeslot();
 }

function fetchtimeslot(){
    
    // if(((new Date($('.form-adate').val().split("-")[2], $('.form-adate').val().split("-")[1] - 1, $('.form-adate').val().split("-")[0]) - new Date()) / (24*60*60*1000) <= 7) && !service_allow){
    //     $('.menue_spinner').hide();
    //     $(".date-tim-time-select-inner").html("<div style='width:80%;margin:0px auto;text-align: center'>No slots available  for this date</div>");
    // }
        
    // else{
        var data = [];
      data.push({name: 'adate',value: $('.form-adate').val()});
      $.ajax({
        url: '/fetchtimeslot',
        type: 'POST',
       data: data,
        dataType: 'json',
        beforeSend: function() {
           $('.date-tim-time-select-inner').hide();
            $('.menue_spinner').show();
        },
        complete: function() {
      
        },
        success: function(json) {
            $('.date-tim-time-select-inner').empty();
           
            for(var keys in json.timeslot){
               $(".date-tim-time-select-inner").append('<div class="date-time-time-one" onclick="$('+"'"+".form-timeslot"+"'"+').val('+keys+')"> '+json.timeslot[keys]+' </div>')
           }
           $( ".date-time-time-one" ).click(function() {
             $(".date-tim-time-select-inner .active").removeClass("active");
             $(this).addClass("active");
     });
           $($(".date-time-time-one")[0]).click();
           $('.menue_spinner').hide();
           $('.date-tim-time-select-inner').show();
       }
     });
    
     
}

function google_init(){
     // console.log("called")
     init_Autocomplete();
     init_map();
}

function init_Autocomplete(){
     // let initialize = function() {
     //   var mapOptions = {
     //    zoom: 10,
     //    center: new google.maps.LatLng(20.6726166, -100.3846899)
     //   };
     //   map = new google.maps.Map(document.getElementById('map-canvas'),
     //       mapOptions);
     //       var marker = new google.maps.Marker({
     //         map: map,
     //         icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/justice.png",
     //         title: "Mi marcador",
     //         position: map.getCenter()
     //       });
     //       var marker2 = new google.maps.Marker({
     //         map: map,
     //         icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/smokingarea.png",
     //         title: "Otro marker",
     //         position: new google.maps.LatLng(20.727167, -100.3846889)
     //       });
     //       var marker3 = new google.maps.Marker({
     //         map: map,
     //         icon: "https://cdn3.iconfinder.com/data/icons/mapicons/icons/days-sex.png",
     //         title: "Otro marker mas",
     //         position: new google.maps.LatLng(20.725167, -100.4946789)
     //       });
     
     
     
     //       var infowindow = new google.maps.InfoWindow();
     //       infowindow.setContent('<b>Mi marcador</b><br>Tel: 46546545');
     
     //       var infowindow2 = new google.maps.InfoWindow();
     //       infowindow2.setContent('<b>Otro marker</b><br>Tel: 46546545');
     
     //       var infowindow3 = new google.maps.InfoWindow();
     //       infowindow3.setContent('<b>Otro marker mas</b><br>Tel: 46546545');
     
     //       infowindow.open(map, marker);
     
     
     //       google.maps.event.addListener(marker, 'click', function() {
     //         infowindow.open(map, marker);
     //       });
     //       google.maps.event.addListener(marker2, 'click', function() {
     //         infowindow2.open(map, marker2);
     //       });
     //       google.maps.event.addListener(marker3, 'click', function() {
     //         infowindow3.open(map, marker3);
     //       });
     // }
     
     // google.maps.event.addDomListener(window, 'load', initialize);
      var input = document.getElementById('user_location');
      var autocomplete = new google.maps.places.Autocomplete(input);
     //  init_map();
     google.maps.event.addDomListener(document.getElementById('map-dcanvas'), 'focus', getautolocation);
}

function saveAddress(elm){
     let tempText = elm.innerHTML;
     elm.innerHTML = "Processing..."
     elm.disabled = true;
     let Data = JSON.stringify(gapDataBuilder("save_address_form"));
     gapFetch("/saveUserAddress",{method:"POST",body:Data},function(err,data){
          if(data.success == "1"){
               // Show Success
               console.log("success",data);
               elm.innerHTML = tempText
               elm.disabled = false;
               renderAddress(data);
          $(".add-address-box").hide();
           $(".saved-address-box").show();
          }else{
               elm.innerHTML = tempText
               elm.disabled = false;
               showInputErrors("save_address_form",data);
          }
     });
}

function fetchAddress(){
     let Data = JSON.stringify(gapDataBuilder("save_address_form"));
     gapFetch("/fetchUserAddress",{method:"POST",body:Data},function(err,data){
          if(data.success == "1"){
               // Show Success
               // console.log("success",data);
               renderAddress(data)
          }else{
               console.log(data)
               // showInputErrors("modal2",data);
          }
     });
}

function renderAddress(data){
     $("#saved-address-wrap").empty();
     for(let i = 0; i<data.user_address.length; i++){
          $("#saved-address-wrap").append('<div class="saved-address-content " onclick="setAddress(this,'+"'"+data.user_address[i]._id+"'"+')"> <div style="display:none"> <span class="home-box">HOME</span> </div> <p> <span class="name-field"><b>'+data.user_info.name+'</b></span> <span><b>'+data.user_info.mobile+'</b></span> </p> <span class="margin-top-10"><span class="grey">'+data.user_address[i].flat_no +", "+ data.user_address[i].locality_name+'</span> </span> </div>')
     }
     address_dict = data.user_address;
     if($(".saved-address-content")[0]){
          $($(".saved-address-content")[0]).click();
     }
}

function setAddress(elm,address_id){
     $(".saved-address-content").removeClass("active");
     $(elm).addClass("active");
     for(let i = 0; i<address_dict.length; i++){
          if(address_id == address_dict[i]._id){
               booking_info.address_info = address_dict[i];
          }
     }
}

function reverseAddress(latlng){
        // console.log("in reverse address")
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    // console.log("result1",results[1])
                    document.getElementById("user_location").value=(results[0].formatted_address);
                    $('#user_lat').val(results[1].geometry.location.lat())
                    $('#user_long').val(results[1].geometry.location.lng())
                }else{
                    window.alert('No results found');
                }
            }else{
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }

function setUserAddress(){
   var user_location_array = $('#user_location').val().split(',');
   $('#city').val(user_location_array[user_location_array.length - 3])
   $('#pincode').val(user_location_array[user_location_array.length - 2].split(' ')[2])
   $('#address').val($('#user_location').val())
}

function reversemapAddress(lat,long){
   console.log(lat,long)
   var geocoder  = new google.maps.Geocoder();             // create a geocoder object
   var location  = new google.maps.LatLng(lat, long);    // turn coordinates into an object
   geocoder.geocode({'latLng': location}, function (results, status) {
       if(status == google.maps.GeocoderStatus.OK) {          // if geocode success
           // console.log("rev",results,results[0].formatted_address)
           document.getElementById("user_location").value=(results[0].formatted_address);
       }
   })
}

function init_map(lat,long,position){
   lat = (typeof(lat) == "object" || typeof(lat) == "undefined") ? '12.971599' : lat;
   long = (typeof(long) == "undefined") ? '77.594563' : long;
   position = (typeof(position) == "undefined") ? 'Bangalore' : position;

   markerPosition = new google.maps.LatLng(lat,long);
   $('#user_lat').val(lat)
   $('#user_long').val(long)
    console.log(position)
   if(position == 'Bangalore') document.getElementById("user_location").value=(position);

   var myOptions = {
       zoom:11,
       scrollwheel: false,
       center:new google.maps.LatLng(lat,long),
       mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   map = new google.maps.Map(document.getElementById('map-dcanvas'), myOptions);

   var marker = new google.maps.Marker( {
       map     : map,
       title: position,
       draggable: true,
       position:new google.maps.LatLng(lat,long)
   });
   map.setCenter(new google.maps.LatLng(lat, long));

   marker.setMap(map);
   google.maps.event.addListener(marker, "mouseup", function (event) {
       markerPosition = this.position;
       reverseAddress(this.position);
   });
     // console.log("here2")
   setTimeout(function(){
     //    console.log("here1")
       google.maps.event.trigger(map, 'resize');
       map.setCenter(new google.maps.LatLng(lat, long));
       console.log(lat,long)
       if(position == 'Bangalore'){
           reversemapAddress(lat,long)
       }
       getautolocation();
   }, 1000);


}

function codeAddress(){
   var lat = autocomplete.getPlace().geometry.location.lat();
   var long = autocomplete.getPlace().geometry.location.lng();
   var position = autocomplete.getPlace().vicinity;
   // console.log(lat,long,position,"in code address")
   reversemapAddress(lat,long)
   init_map(lat,long,position);
}

function getautolocation(){
   var input = document.getElementById('user_location');
    console.log(input)
   autocomplete = new google.maps.places.Autocomplete(input);
   // console.log("in this field")
   autocomplete.addListener("place_changed", function(){codeAddress();})
}

function checkCouponCode(){
     let Data = JSON.stringify({cart:cart, coupon: $("#coupon").val()});
     gapFetch("/checkCouponCode",{method:"POST",body:Data},function(err,data){
          console.log(data)
          $(".alert-message").empty();
          if(data.success == "1"){
               // Show Success
               if($("#alert1").attr('id')=='alert1')
		{
	//	alert('alert1 clicked');
		var type = 'success';
		var message = 'Coupan code applied!'
	
		//
		}
		
        var alertType = 'alert-'+ type
        
       // alert('alert type is: '+ alertType);
        
        var htmlAlert = '<div class="alert '+ alertType +'"><p>'+ message +'</p></div>';
        
       // alert(htmlAlert);
        
        $(".alert-message").prepend(htmlAlert);
               booking_info.coupon_info = {coupon: $("#coupon").val().toUpperCase(), ssid: data.ssid};
          }else{
               console.log(data)
               // showInputErrors("modal2",data);
               if($("#alert1").attr('id')=='alert1')
		{
	//	alert('alert1 clicked');
		var type = 'info';
		var message = data.result
	
		//
		}
		
        var alertType = 'alert-'+ type
        
       // alert('alert type is: '+ alertType);
        
        var htmlAlert = '<div class="alert '+ alertType +'"><p>'+ message +'</p></div>';
        
       // alert(htmlAlert);
        
        $(".alert-message").prepend(htmlAlert);
          }
     });
}

restoreCartFromCookie();
