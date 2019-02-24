function customGMCSubmit(elm) {
     let data = JSON.stringify(gapDataBuilder(elm));
     gapFetch("/customGMCSubmit",{method:"POST",body:data},function(err,data){
          if(data.success == "1"){
               // Show Success
               document.getElementById("form-error").style.display = 'inline-block';
               //document.getElementById("customgmcsubmitBtn").disabled = true;
               document.getElementById("customgmcsubmitBtn").style.display = "none";
          }else{
               // console.log(data)
               showInputErrors("modal2",data);
          }
     });
}

function submitPackageOne(elm){
     let Data = JSON.stringify(gapDataBuilder(elm));
     console.log('data',Data);
     gapFetch("/submitPackageOne",{method:"POST",body:Data},function(err,data){
          if(data.success == "1"){
               // Show Success
               // console.log("success",data);
               location.href ="/gmc-completed"
          }else{
               console.log(data)
               // showInputErrors("modal2",data);
          }
     });
}