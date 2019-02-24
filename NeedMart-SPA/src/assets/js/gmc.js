function onebhk()
{
    document.getElementById('amt1').innerHTML='3,000';
    document.getElementById('amt2').innerHTML='5,000';
    // document.getElementById('amt3').innerHTML='1,800';
    document.getElementsByClassName('amt50')[0].style.display = 'inline';
    document.getElementsByClassName('amt51')[0].style.display = 'none';
    document.getElementsByClassName('amt52')[0].style.display = 'none';
    document.getElementsByClassName('amt53')[0].style.display = 'none';
    document.getElementsByClassName('amt54')[0].style.display = 'none';
    document.getElementById('amt5').innerHTML='4,999';
    document.getElementsByClassName('amt5')[0].style.display = 'inline';
    document.getElementsByClassName('amt-inspection')[0].style.display = 'none';
    document.getElementById('1bhk').classList.add('active');
    document.getElementById('2bhk').classList.remove('active');
    document.getElementById('3bhk').classList.remove('active');
    document.getElementById('3bhkd').classList.remove('active');
    document.getElementById('4bhk').classList.remove('active');
    document.getElementsByClassName('amt41')[0].style.display = 'inline';
    document.getElementsByClassName('amt42')[0].style.display = 'none';
    document.getElementsByClassName('amt43')[0].style.display = 'none';
    document.getElementsByClassName('amt44')[0].style.display = 'none';
    document.getElementsByClassName('amt45')[0].style.display = 'none';
}
function twobhk()
{
    document.getElementById('amt1').innerHTML='3,000';
    document.getElementById('amt2').innerHTML='5,000';
    // document.getElementById('amt3').innerHTML='2,100';
    document.getElementsByClassName('amt50')[0].style.display = 'none';
    document.getElementsByClassName('amt51')[0].style.display = 'inline';
    document.getElementsByClassName('amt52')[0].style.display = 'none';
    document.getElementsByClassName('amt53')[0].style.display = 'none';
    document.getElementsByClassName('amt54')[0].style.display = 'none';
    document.getElementById('amt5').innerHTML='5,999';
    document.getElementsByClassName('amt5')[0].style.display = 'inline';
    document.getElementsByClassName('amt-inspection')[0].style.display = 'none';
    document.getElementsByClassName('amt42')[0].style.display = 'inline';
    document.getElementsByClassName('amt41')[0].style.display = 'none';
    document.getElementsByClassName('amt43')[0].style.display = 'none';
    document.getElementsByClassName('amt44')[0].style.display = 'none';
    document.getElementsByClassName('amt45')[0].style.display = 'none';
    document.getElementById('1bhk').classList.remove('active');     
    document.getElementById('2bhk').classList.add('active');
    document.getElementById('3bhk').classList.remove('active');
    document.getElementById('3bhkd').classList.remove('active');
    document.getElementById('4bhk').classList.remove('active');

}
function threebhk()
{
    document.getElementById('amt1').innerHTML='3,000';
    document.getElementById('amt2').innerHTML='5,000';
    
    // document.getElementById('amt3').innerHTML='2,400';
    document.getElementsByClassName('amt50')[0].style.display = 'none';
    document.getElementsByClassName('amt51')[0].style.display = 'none';
    document.getElementsByClassName('amt52')[0].style.display = 'inline';
    document.getElementsByClassName('amt53')[0].style.display = 'none';
    document.getElementsByClassName('amt54')[0].style.display = 'none';
    document.getElementById('amt5').innerHTML='6,999';
    document.getElementsByClassName('amt5')[0].style.display = 'inline';
    document.getElementsByClassName('amt-inspection')[0].style.display = 'none';
    document.getElementsByClassName('amt43')[0].style.display = 'inline';
    document.getElementsByClassName('amt41')[0].style.display = 'none';
    document.getElementsByClassName('amt42')[0].style.display = 'none';
    document.getElementsByClassName('amt44')[0].style.display = 'none';
    document.getElementsByClassName('amt45')[0].style.display = 'none';
    document.getElementById('1bhk').classList.remove('active');
    document.getElementById('2bhk').classList.remove('active');
    document.getElementById('3bhk').classList.add('active');
    document.getElementById('3bhkd').classList.remove('active');
    document.getElementById('4bhk').classList.remove('active');

}
function threedbhk()
{
    document.getElementById('amt1').innerHTML='4,000';
    document.getElementById('amt2').innerHTML='6,500';
    // document.getElementById('amt3').innerHTML='2,700';
    document.getElementsByClassName('amt50')[0].style.display = 'none';
    document.getElementsByClassName('amt51')[0].style.display = 'none';
    document.getElementsByClassName('amt52')[0].style.display = 'none';
    document.getElementsByClassName('amt53')[0].style.display = 'inline';
    document.getElementsByClassName('amt54')[0].style.display = 'none';
    document.getElementById('amt5').innerHTML='7,999';
    document.getElementsByClassName('amt5')[0].style.display = 'inline';
    document.getElementsByClassName('amt-inspection')[0].style.display = 'none';
    document.getElementsByClassName('amt44')[0].style.display = 'inline';
    document.getElementsByClassName('amt41')[0].style.display = 'none';
    document.getElementsByClassName('amt43')[0].style.display = 'none';
    document.getElementsByClassName('amt42')[0].style.display = 'none';
    document.getElementsByClassName('amt45')[0].style.display = 'none';
    document.getElementById('1bhk').classList.remove('active');
    document.getElementById('2bhk').classList.remove('active');
    document.getElementById('3bhk').classList.remove('active');
    document.getElementById('3bhkd').classList.add('active');
    document.getElementById('4bhk').classList.remove('active');

}
function fourbhk()
{
    document.getElementById('amt1').innerHTML='4,000';
    document.getElementById('amt2').innerHTML='6,500';
    // document.getElementById('amt3').innerHTML='<small style="font-size: 13pt;">Upon Inspection</small>';
    document.getElementsByClassName('amt50')[0].style.display = 'none';
    document.getElementsByClassName('amt51')[0].style.display = 'none';
    document.getElementsByClassName('amt52')[0].style.display = 'none';
    document.getElementsByClassName('amt53')[0].style.display = 'none';
    document.getElementsByClassName('amt54')[0].style.display = 'inline';
    document.getElementById('amt-inspection').innerHTML='Upon Inspection';
    document.getElementsByClassName('amt5')[0].style.display = 'none';
    document.getElementsByClassName('amt-inspection')[0].style.display = 'inline';
    document.getElementsByClassName('amt45')[0].style.display = 'inline';
    document.getElementsByClassName('amt41')[0].style.display = 'none';
    document.getElementsByClassName('amt43')[0].style.display = 'none';
    document.getElementsByClassName('amt44')[0].style.display = 'none';
    document.getElementsByClassName('amt42')[0].style.display = 'none';
    document.getElementById('1bhk').classList.remove('active');
    document.getElementById('2bhk').classList.remove('active');
    document.getElementById('3bhk').classList.remove('active');
    document.getElementById('3bhkd').classList.remove('active');
    document.getElementById('4bhk').classList.add('active');

}

function addPest(value) {
var val = document.getElementById('Valuep1');
var add = document.getElementById('addPest');
var subs = document.getElementById('minusPest');
var currentValue = parseInt(val.innerText);

var newValue = currentValue + value;
    val.innerText = newValue;
// 	val2.innerText = newValue;
    if(newValue == 2) {
        subs.disabled = true;
        add.disabled = false;
        document.getElementsByClassName('amt50')[0].innerHTML = '1,800';
        document.getElementsByClassName('amt51')[0].innerHTML = '2,100';
        document.getElementsByClassName('amt52')[0].innerHTML = '2,400';
        document.getElementsByClassName('amt53')[0].innerHTML = '2,700';
        document.getElementsByClassName('amt54')[0].innerHTML = 'Upon Inspection';
        
    }
    if(newValue == 3){
    	subs.disabled = false;		
        add.disabled = false;
    	document.getElementsByClassName('amt50')[0].innerHTML = '2,400';
        document.getElementsByClassName('amt51')[0].innerHTML = '2,800';
        document.getElementsByClassName('amt52')[0].innerHTML = '3,200';
        document.getElementsByClassName('amt53')[0].innerHTML = '3,600';
        document.getElementsByClassName('amt54')[0].innerHTML = 'Upon Inspection';
        
        
    }
    else if(newValue == 4){
    	subs.disabled = false;
    	add.disabled = true;
    	document.getElementsByClassName('amt50')[0].innerHTML = '2,800';
        document.getElementsByClassName('amt51')[0].innerHTML = '3,300';
        document.getElementsByClassName('amt52')[0].innerHTML = '3,800';
        document.getElementsByClassName('amt53')[0].innerHTML = '4,300';
        document.getElementsByClassName('amt54')[0].innerHTML = 'Upon Inspection';
        
    }   
};

function add(value) {
var val = document.getElementById('Value');
var val2 = document.getElementById('Value2');
var add = document.getElementById('add');
var subs = document.getElementById('minus');
var currentValue = parseInt(val.innerText);

var newValue = currentValue + value;
    val.innerText = newValue;
	val2.innerText = newValue;

    if(newValue == 2) {
        subs.disabled = true;
        add.disabled = false;
        document.getElementsByClassName('amt41')[0].innerHTML = '7,999';
        document.getElementsByClassName('amt42')[0].innerHTML = '9,499';
        document.getElementsByClassName('amt43')[0].innerHTML= '10,999';
        document.getElementsByClassName('amt44')[0].innerHTML = '12,999';
        document.getElementsByClassName('amt45')[0].innerHTML = 'Upon Inspection';
    }
    else if(newValue == 3){
    	subs.disabled = false;		
        add.disabled = false;
    	document.getElementsByClassName('amt41')[0].innerHTML = '10,999';
        document.getElementsByClassName('amt42')[0].innerHTML = '13,499';
        document.getElementsByClassName('amt43')[0].innerHTML = '15,999';
        document.getElementsByClassName('amt44')[0].innerHTML = '17,999';
        document.getElementsByClassName('amt45')[0].innerHTML = 'Upon Inspection';
        
    }
    else if(newValue == 4){
    	subs.disabled = false;
    	add.disabled = true;
    	document.getElementsByClassName('amt41')[0].innerHTML = '12,499';
        document.getElementsByClassName('amt42')[0].innerHTML = '15,999';
        document.getElementsByClassName('amt43')[0].innerHTML = '18,499';
        document.getElementsByClassName('amt44')[0].innerHTML = '22,999';
        document.getElementsByClassName('amt45')[0].innerHTML = 'Upon Inspection';	
    }   
};

var val1 = 1;
function addb(action)
{
    if(action == true)
    {
        val1++;
    }
    else
    {
        val1--;
    }
    load(val1);
}
function load(value) {
var text = document.getElementById('text-value');
var add = document.getElementById('addb');
var subs = document.getElementById('minusb');

switch (value) {
    case 1:
        document.getElementById('num-value').innerText = "1";
        text.innerText = "BHK";
        subs.disabled = true;
        add.disabled = false;
        document.getElementById('amt1').innerHTML='3,000';
        break;
    case 2:
        document.getElementById('num-value').innerText = "2";
        text.innerText = "BHK";
        subs.disabled = false;
        add.disabled = false;
        document.getElementById('amt1').innerHTML='3,000';
        break;
    case 3:
        document.getElementById('num-value').innerText = "3";
        text.innerText = "BHK";
        subs.disabled = false;      
        add.disabled = false;
        document.getElementById('amt1').innerHTML='3,000';
        break;
    case 4:
        document.getElementById('num-value').innerText = "3";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = false;
        document.getElementById('amt1').innerHTML='4,000';
        
        break;
    case 5:
        document.getElementById('num-value').innerText = "4";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = true;
        document.getElementById('amt1').innerHTML='4,000'; 
        break;
    default:  subs.disabled = false;
        add.disabled = false;
}

};

var val2=1;
function addb2(action)
{
    if(action == true)
    {
        val2++;
    }
    else
    {
        val2--;
    }
    load2(val2);
}
function load2(value) {
var text = document.getElementById('text-value2');
var add = document.getElementById('addb2');
var subs = document.getElementById('minusb2');
console.log(value);
switch (value) {
    case 1:
        document.getElementById('num-value2').innerText = "1";
        text.innerText = "BHK";
        subs.disabled = true;
        add.disabled = false;
        document.getElementById('amt2').innerHTML='5,000';
        break;
    case 2:
        document.getElementById('num-value2').innerText = "2";
        text.innerText = "BHK";
        subs.disabled = false;
        add.disabled = false;
        document.getElementById('amt2').innerHTML='5,000';
        break;
    case 3:
        document.getElementById('num-value2').innerText = "3";
        text.innerText = "BHK";
        subs.disabled = false;      
        add.disabled = false;
        document.getElementById('amt2').innerHTML='5,000';

        break;
    case 4:
        document.getElementById('num-value2').innerText = "3";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = false;
        document.getElementById('amt2').innerHTML='6,500';
        
        break;
    case 5:
        document.getElementById('num-value2').innerText = "4";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = true;
        document.getElementById('amt2').innerHTML='6,500'; 
        break;
    default:  subs.disabled = false;
        add.disabled = false;
}

};


var val3=1;
function addb3(action)
{   
    if(action == true)
    {
        val3++;
    }
    else
    {
        val3--;
    }
    load3(val3);
}
function load3(value) {
var text = document.getElementById('text-value3');
var add = document.getElementById('addb3');
var subs = document.getElementById('minusb3');
var serv = document.getElementById('Valuep1').innerHTML.trim();
console.log(value);
switch (value) {
    case 1:
        document.getElementsByClassName('amt50')[0].style.display = 'inline';
        document.getElementsByClassName('amt51')[0].style.display = 'none';
        document.getElementsByClassName('amt52')[0].style.display = 'none';
        document.getElementsByClassName('amt53')[0].style.display = 'none';
        document.getElementsByClassName('amt54')[0].style.display = 'none';
        document.getElementById('num-value3').innerText = "1";
        text.innerText = "BHK";
        subs.disabled = true;
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt50')[0].innerHTML = '1,800';
        }
        if(serv==3){
        document.getElementsByClassName('amt50')[0].innerHTML = '2,400';
        }
        if(serv==4){
        document.getElementsByClassName('amt50')[0].innerHTML = '2,800';
        }
        break;
    case 2:
        document.getElementsByClassName('amt50')[0].style.display = 'none';
        document.getElementsByClassName('amt51')[0].style.display = 'inline';
        document.getElementsByClassName('amt52')[0].style.display = 'none';
        document.getElementsByClassName('amt53')[0].style.display = 'none';
        document.getElementsByClassName('amt54')[0].style.display = 'none';
        document.getElementById('num-value3').innerText = "2";
        text.innerText = "BHK";
        subs.disabled = false;
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt51')[0].innerHTML = '2,100';
        }
        if(serv==3){
        document.getElementsByClassName('amt51')[0].innerHTML = '2,800';
        }
        if(serv==4){
        document.getElementsByClassName('amt51')[0].innerHTML = '3,300';
        }
        break;
    case 3:
        document.getElementsByClassName('amt50')[0].style.display = 'none';
        document.getElementsByClassName('amt51')[0].style.display = 'none';
        document.getElementsByClassName('amt52')[0].style.display = 'inline';
        document.getElementsByClassName('amt53')[0].style.display = 'none';
        document.getElementsByClassName('amt54')[0].style.display = 'none';
        document.getElementById('num-value3').innerText = "3";
        text.innerText = "BHK";
        subs.disabled = false;      
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt52')[0].innerHTML = '2,400';
        }
        if(serv==3){
        document.getElementsByClassName('amt52')[0].innerHTML = '3,200';
        }
        if(serv==4){
        document.getElementsByClassName('amt52')[0].innerHTML = '3,800';
        }
        break;
    case 4:
        document.getElementsByClassName('amt50')[0].style.display = 'none';
        document.getElementsByClassName('amt51')[0].style.display = 'none';
        document.getElementsByClassName('amt52')[0].style.display = 'none';
        document.getElementsByClassName('amt53')[0].style.display = 'inline';
        document.getElementsByClassName('amt54')[0].style.display = 'none';
        document.getElementById('num-value3').innerText = "3";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt53')[0].innerHTML = '2,700';
        }
        if(serv==3){
        document.getElementsByClassName('amt53')[0].innerHTML = '3,600';
        }
        if(serv==4){
        document.getElementsByClassName('amt53')[0].innerHTML = '4,300';
        }
        break;
    case 5:
        document.getElementsByClassName('amt50')[0].style.display = 'none';
        document.getElementsByClassName('amt51')[0].style.display = 'none';
        document.getElementsByClassName('amt52')[0].style.display = 'none';
        document.getElementsByClassName('amt53')[0].style.display = 'none';
        document.getElementsByClassName('amt54')[0].style.display = 'inline';
        document.getElementById('num-value3').innerText = "4";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = true;
        if(serv==2){
        document.getElementsByClassName('amt54')[0].innerHTML = 'Upon Inspection';
        }
        if(serv==3){
        document.getElementsByClassName('amt54')[0].innerHTML = 'Upon Inspection';
        }
        if(serv==4){
        document.getElementsByClassName('amt54')[0].innerHTML = 'Upon Inspection';
        }
        break;
    default:  subs.disabled = false;
        add.disabled = false;
}

};


var val4=1;
function addb4(action)
{   
    if(action == true)
    {
        val4++;
    }
    else
    {
        val4--;
    }
    load4(val4);
}
function load4(value) {
var text = document.getElementById('text-value4');
var add = document.getElementById('addb4');
var subs = document.getElementById('minusb4');
var serv = document.getElementById('Value').innerHTML.trim();
switch (value) {
    case 1:
        document.getElementsByClassName('amt41')[0].style.display = 'inline';
        document.getElementsByClassName('amt42')[0].style.display = 'none';
        document.getElementsByClassName('amt43')[0].style.display = 'none';
        document.getElementsByClassName('amt44')[0].style.display = 'none';
        document.getElementsByClassName('amt45')[0].style.display = 'none';
        document.getElementById('num-value4').innerText = "1";
        text.innerText = "BHK";
        subs.disabled = true;
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt41')[0].innerHTML = '7,999';
        }
        if(serv==3){
        document.getElementsByClassName('amt41')[0].innerHTML = '10,999';
        }
        if(serv==4){
        document.getElementsByClassName('amt41')[0].innerHTML = '12,499';
        }
        break;
    case 2:
        document.getElementsByClassName('amt41')[0].style.display = 'none';
        document.getElementsByClassName('amt42')[0].style.display = 'inline';
        document.getElementsByClassName('amt43')[0].style.display = 'none';
        document.getElementsByClassName('amt44')[0].style.display = 'none';
        document.getElementsByClassName('amt45')[0].style.display = 'none';
        document.getElementById('num-value4').innerText = "2";
        text.innerText = "BHK";
        subs.disabled = false;
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt42')[0].innerHTML = '9,499';
        }
        if(serv==3){
        document.getElementsByClassName('amt42')[0].innerHTML = '13,499';
        }
        if(serv==4){
        document.getElementsByClassName('amt42')[0].innerHTML = '15,999';
        }
        break;
        // document.getElementById('amt4').innerHTML='4000';
        // break;
    case 3:
        document.getElementsByClassName('amt41')[0].style.display = 'none';
        document.getElementsByClassName('amt42')[0].style.display = 'none';
        document.getElementsByClassName('amt43')[0].style.display = 'inline';
        document.getElementsByClassName('amt44')[0].style.display = 'none';
        document.getElementsByClassName('amt45')[0].style.display = 'none';
        document.getElementById('num-value4').innerText = "3";
        text.innerText = "BHK";
        subs.disabled = false;      
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt43')[0].innerHTML = '10,999';
        }
        if(serv==3){
        document.getElementsByClassName('amt43')[0].innerHTML = '15,999';
        }
        if(serv==4){
        document.getElementsByClassName('amt43')[0].innerHTML = '18,499';
        }
        break;
        // document.getElementById('amt4').innerHTML='6000';
        // break;
    case 4:
        document.getElementsByClassName('amt41')[0].style.display = 'none';
        document.getElementsByClassName('amt42')[0].style.display = 'none';
        document.getElementsByClassName('amt43')[0].style.display = 'none';
        document.getElementsByClassName('amt44')[0].style.display = 'inline';
        document.getElementsByClassName('amt45')[0].style.display = 'none';
        document.getElementById('num-value4').innerText = "3";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = false;
        if(serv==2){
        document.getElementsByClassName('amt44')[0].innerHTML = '12,999';
        }
        if(serv==3){
        document.getElementsByClassName('amt44')[0].innerHTML = '17,999';
        }
        if(serv==4){
        document.getElementsByClassName('amt44')[0].innerHTML = '22,999';
        }
        break;
        // document.getElementById('amt4').innerHTML='8000';
        // break;
    case 5:
        document.getElementsByClassName('amt41')[0].style.display = 'none';
        document.getElementsByClassName('amt42')[0].style.display = 'none';
        document.getElementsByClassName('amt43')[0].style.display = 'none';
        document.getElementsByClassName('amt44')[0].style.display = 'none';
        document.getElementsByClassName('amt45')[0].style.display = 'inline';
        document.getElementById('num-value4').innerText = "4";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = true;
        if(serv==2){
        document.getElementsByClassName('amt45')[0].innerHTML = 'Upon Inspection';
        }
        if(serv==3){
        document.getElementsByClassName('amt45')[0].innerHTML = 'Upon Inspection';
        }
        if(serv==4){
        document.getElementsByClassName('amt45')[0].innerHTML = 'Upon Inspection';
        }
        break;
        // document.getElementById('amt4').innerHTML='10000'; 
        // break;
    default:  subs.disabled = false;
        add.disabled = false;
}

};


var val5=1;
function addb5(action)
{   
    if(action == true)
    {
        val5++;
    }
    else
    {
        val5--;
    }
    load5(val5);
}
function load5(value) {
var text = document.getElementById('text-value5');
var add = document.getElementById('addb5');
var subs = document.getElementById('minusb5');
console.log(value);
switch (value) {
    case 1:
        document.getElementById('num-value5').innerText = "1";
        text.innerText = "BHK";
        subs.disabled = true;
        add.disabled = false;
        document.getElementById('amt5').innerHTML='4,999';
        break;
    case 2:
        document.getElementById('num-value5').innerText = "2";
        text.innerText = "BHK";
        subs.disabled = false;
        add.disabled = false;
        document.getElementById('amt5').innerHTML='5,999';
        break;
    case 3:
        document.getElementById('num-value5').innerText = "3";
        text.innerText = "BHK";
        subs.disabled = false;      
        add.disabled = false;
        document.getElementById('amt5').innerHTML='6,999';

        break;
    case 4:
        document.getElementById('num-value5').innerText = "3";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = false;
        document.getElementById('amt5').innerHTML='7,999';
        
        break;
    case 5:
        document.getElementById('num-value5').innerText = "4";
        text.innerText = "BHK + DUP";
        subs.disabled = false;
        add.disabled = true;
        document.getElementById('amt5').innerHTML='Upon Inspection'; 
        break;
    default:  subs.disabled = false;
        add.disabled = false;
}

};


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

// scroll to particular id
function ScrollTo(name) {
  //init thread
  ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .1);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() {
      ScrollToResolver(elem);
    }, "60");
  } else {
    elem.lastjump = null;
  }
}



// customize package

function property(e,bhk){
 var elems = document.querySelectorAll(".property-box");
    document.getElementById('property_type').value = bhk;
 [].forEach.call(elems, function(el) {
    el.classList.remove("active");
  });
  e.classList.add('active');
}
