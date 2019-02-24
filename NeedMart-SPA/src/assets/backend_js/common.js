// Common Functions
function gapFetch(url,option,calllback){
    option.credentials = "same-origin";
    option.headers =  {
      'Content-Type': 'application/json'
    };
//    console.log(option)
    fetch(url, option).then(function(response){
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    }).then(function(result){
      calllback(undefined,result)
    }).catch((error) => {
        calllback(error,undefined)
    });
}

//form data builder
function gapDataBuilder(elm){
    let data = {};
    if(typeof(elm)=="string"){
        elm = document.getElementById(elm);
    }
    let inputList = elm.getElementsByTagName('input');
    // console.log(inputList);
    for(let i = 0; i < inputList.length; i++){
        let item = inputList[i];
        if (item.type == 'checkbox' && item.name && item.name!="")
        {
            console.log(item)
            if(item.checked){
                if(data[item.name] && typeof(data[item.name]) != "object"){
                    let temp = data[item.name];
                    data[item.name] = [temp];
                }
                if(data[item.name] && typeof(data[item.name]) == "object"){
                    data[item.name].push(item.value);
                }else{
                   data[item.name] = item.value;    
                }
            }
            
        }else if(item.type != 'checkbox' && item.name && item.name!=""){
            if(data[item.name] && typeof(data[item.name]) != "object"){
                let temp = data[item.name];
                data[item.name] = [temp];
            }
            if(data[item.name] && typeof(data[item.name]) == "object"){
                data[item.name].push(item.value);
            }else{
               data[item.name] = item.value;    
            }
        }else if(item.name && item.name!=""){
          if(data[item.name] && typeof(data[item.name]) != "object"){
                let temp = data[item.name];
                data[item.name] = [temp];
            }
            if(data[item.name] && typeof(data[item.name]) == "object"){
                data[item.name].push(item.value);
            }else{
               data[item.name] = item.value;    
            }
        }
    }
    console.log(data)
    inputList = elm.getElementsByTagName('select');
    for(let i = 0; i < inputList.length; i++){
        let select = inputList[i];
        let selectval = [];
        if(select.name && select.name!=""){
            for (let i=0; i < select.options.length; i++) {
                if (select.options[i].selected) {
                    selectval.push(select.options[i].value);
                }
            }
            data[select.name] = select.value;
        }
    }
    inputList = elm.getElementsByTagName('textarea');
    for(let i = 0; i < inputList.length; i++){
        let item = inputList[i];
        if(item.name && item.name!=""){
            data[item.name] = item.value;
        }
    }
    return data;
}
    
function showInputErrors(elm,errData){
     // console.log(elm,errData)
     if(typeof(elm)=="string"){
        elm = document.getElementById(elm);
    }
     for(var key in errData){
          if(key!="success"){
               let item  = elm.querySelectorAll('[name="'+key+'"]')[0];
               if(item){
                    item.style.borderColor = "#a94442";
                    item.style.marginBottom= "0";
                    item = item.nextElementSibling;
                    item.innerHTML = errData[key];
                    item.style.display = "block";
               }
          }
     }
     setTimeout(function(){
         for(var key in errData){
            if(key!="success"){
              let item  = elm.querySelectorAll('[name="'+key+'"]')[0];
              if(item){
                   item.style.borderColor = "#ddd";
                   item.style.marginBottom= "16px";
                   item = item.nextElementSibling;
                   item.innerHTML = '';
                   item.style.display = "none";
              }
            }
         }
     }, 5000);
}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $( ".tab a.tab-title" ).click(function(e) {
       e.preventDefault();
  $(this).parents(".tab").next(".tab-content").toggle();
}); 
}
  
function fadeinout(){
    $('.get_quote-1').addClass('animated fadeOutLeft');
    setTimeout(()=>{
        $('.get_quote-1').hide();
        $('.get_quote-2').show();
        $('.get_quote-2').addClass('animated fadeInRight');
    },300)
    
}