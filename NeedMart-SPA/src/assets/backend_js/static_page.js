function submitContactUsForm(elm){
  document.getElementById("form-error").style.display = 'none';
     let Data = JSON.stringify(gapDataBuilder(elm));
     // console.log('Data',Data);
     gapFetch("/submitContactUsForm",{method:"POST",body:Data},function(err,data){
          if(err){
               console.log(err);
          }
          else{
               if(data.success == "1"){
                    document.getElementById("form-error").style.display = 'inline-block';
                    document.getElementById("submitContactUsFormbtn").disabled = true;
               }
               else{
                    showInputErrors(elm,data);
               }
          }
     });
}

function submitFeedbackForm(elm){
document.getElementById("form-error").style.display = 'none';
     let Data = JSON.stringify(gapDataBuilder(elm));
     //console.log('Data',Data);
     gapFetch("/submitFeedbackForm",{method:"POST",body:Data},function(err,data){
          if(err){
               console.log(err);
          }
          else{
               if(data.success == "1"){
                    document.getElementById("form-error").style.display = 'inline-block';
                    document.getElementById("submitFeedbackFormbtn").disabled = true;
                }
               else{
                    showInputErrors(elm,data);
               }
          }
     });
}

function submitPartnerRegForm(elm){
    document.getElementById("form-error").style.display = 'none';
     let Data = JSON.stringify(gapDataBuilder(elm));
     // console.log('Data',Data);
     gapFetch("/submitPartnerRegForm",{method:"POST",body:Data},function(err,data){
          if(err){
               console.log(err);
          }
          else{
               if(data.success == "1"){
                    document.getElementById("form-error").style.display = 'inline-block';
                    document.getElementById("submitPartnerRegFormbtn").disabled = true;
          }
               else{
                    showInputErrors(elm,data);
               }
          }
     });
}


