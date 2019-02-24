function facebookLogin(){
     window.open('/userfbLogin','Gapoon Login','resizable,height=260,width=370');
}

function loginCallBack(method,username){
     if (method) {
          if (method == 'getEmail') {
               console.log("Email needed");
               document.getElementById("login_modal_login").style.display="none";
               document.getElementById("login_modal_signup").style.display="block";
               document.getElementById('signup_mobile').disabled = false;
          }else if (method == 'getMobile') {
               // Ask for mobile
               console.log("Mobile needed");
               document.getElementById("login_social").style.display="none";
          }
     }else{
          //Login success
          location.reload();
     }
}

function checkLoginStatus(){
     gapFetch("/checkLoginStatus",{method:"POST"},function(err,data){
          if(data.success == "1"){
          
          }else{
               
          }
     });
}


function logout(){
     gapFetch("/userLogout",{method:"POST"},function(err,data){
          if(data.success == "1"){
               location.reload();
          }
     });
}

function signup(){
     document.getElementById('login_mobile').value = document.getElementById('signup_mobile').value;
     let data = {
          mobile:document.getElementById('login_mobile').value,
          email:document.getElementById('signup_email').value,
          name:document.getElementById('signup_name').value
     }
     gapFetch("/userSignup",{method:"POST",body:JSON.stringify(data)},function(err,data){
          if(data.success == "1"){
               // verify otp
               document.getElementById("login_modal_signup").style.display="none";
               document.getElementById("login_modal_otp").style.display="block";
          }else{
               console.log(data)
               showInputErrors(document.getElementsByClassName("login-form")[0],data);
          }
     });
}

function verifyOTP() {
     let data = {
          mobile:document.getElementById('login_mobile').value,
          otp:document.getElementById('login_otp').value
     }
     gapFetch("/verifyotp",{method:"POST",body:JSON.stringify(data)},function(err,data){
          if(data.success == "1"){
               location.reload();
          }else{
               console.log(data)
               showInputErrors(document.getElementsByClassName("login-form")[0],data);
          }
     });
}

function resendotp() {
     let body = {
          mobile: document.getElementById('login_mobile').value
     }
     console.log("called")
     gapFetch("/resendotp",{method:"POST",body:JSON.stringify(body)},function(err,data){
          console.log(data,data.success)
          if(data.success == "1"){
               // verify otp
               console.log("verifyOTP");
               document.getElementById("login_modal_login").style.display="none";
               document.getElementById("login_modal_otp").style.display="block";
          }else{
               if(data.result && data.result =="Register"){
                    //show register
                    document.getElementById("login_modal_login").style.display="none";
                    document.getElementById("login_modal_signup").style.display="block";
                    document.getElementById('signup_mobile').value = document.getElementById('login_mobile').value;
                    document.getElementById('signup_mobile').disabled = true;
               }else{
                    showInputErrors(document.getElementsByClassName("login-form")[0],data);
               }
          }
     });
}

function resendotp1() {
     let body = {
          mobile: document.getElementById('package_mobile').value,
          email: document.getElementById('package_email').value,
          name: document.getElementById('package_name').value,
          type: document.getElementById('package_type').value
     }

     //      console.log(data,data.success)
     //      if(data.success == "1"){
     //           // verify otp
     //             let body = {
     //      mobile: document.getElementById('login_mobile').value
     // }
     // console.log("called")
     if(body.mobile != "" && body.email != "" && body.name != "" && body.type != ""){
          gapFetch("/resendotp1",{method:"POST",body:JSON.stringify(body)},function(err,data){
          console.log(data,data.success)
          if(data.success == "1"){
               // verify otp
               console.log("verifyOTP");
                     $('.get_quote-2').addClass('animated fadeOutLeft');
                        setTimeout(()=>{
                            $('.get_quote-2').hide();
                            $('.get_otp').show();
                            $('.get_otp').addClass('animated fadeInRight');
                        },300)
          }else{
               
          }
     });
     }
     else{
          let data = {};
          if(body.mobile == ""){
               data.mobile = "This field is required"
          }
          if(body.email == ""){
               data.email = "This field is required"
          }
          if(body.type == ""){
               data.type = "This field is required"
          }
          if(body.name == ""){
               data.name = "This field is required"
          }
          showInputErrors("get_quote-2",data)
     }
          
     
}

function verifyotp1() {
     let body = {
          mobile: document.getElementById('package_mobile').value,
          email: document.getElementById('package_email').value,
          name: document.getElementById('package_name').value,
          type: document.getElementById('package_type').value,
          otp: document.getElementById('login_otp-1').value
     }
     $.ajax({
        url: "/verifyotp1",
        type: 'post',
        data: body,
        dataType: 'html',
        beforeSend: function() {

        },
        complete: function() {

        },
        success: function(data){
          data = JSON.parse(data);
          if(data.success == "1"){
               location.href="/package-completed";
          }
          else{
               console.log("called");
               showInputErrors("get_otp",{otp:"Please enter valid otp"});
          }
     }
    })
     // gapFetch("/verifyotp1",{method:"POST",body:JSON.stringify(body)},function(err,data){
     //      // data = JSON.parse(data);
     //      console.log('DATA',data)
     //      data = JSON.parse(JSON.stringify(data));
     //      if(data.success == "1"){
     //           window.location("/package-completed");
     //      }
     //      else{
     //           showInputErrors(document.getElementsByClassName("login-form")[0],data);
     //      }
     // });
}

function changeMobile(){
     document.getElementById("login_social").style.display="none";
     document.getElementById("login_modal_login").style.display="block";
     document.getElementById("login_modal_otp").style.display="none";
     document.getElementById('login_otp').value = "";
}