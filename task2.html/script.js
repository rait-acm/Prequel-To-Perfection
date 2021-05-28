$(document).ready(function(){
 $('#one').click(functio(){
     document.forms.display.value +=1;
});
$('#two').click(functio(){
    document.forms.display.value +=2;
});
$('#three').click(functio(){
    document.forms.display.value +=3;
});
$('#four').click(functio(){
    document.forms.display.value +=4;
});
$('#five').click(functio(){
    document.forms.display.value +=5;
});
$('#six').click(functio(){
    document.forms.display.value +=6;
});
$('#seven').click(functio(){
    document.forms.display.value +=7;
});
$('#eight').click(functio(){
    document.forms.display.value +=8;
});
$('#nine').click(functio(){
    document.forms.display.value +=9;
});
$('#zero').click(functio(){
    document.forms.display.value +=0;
});
$('#equal').click(functio(){
    document.forms.display.value +==;
});
$('#dot').click(functio(){
    document.forms.display.value +=.;
});
$('#add').click(functio(){
    document.forms.display.value +=+;
});
$('#divide').click(functio(){
    document.forms.display.value +=/;
});
$('#multi').click(functio(){
    document.forms.display.value +=*;
});
$('#subs').click(functio(){
    document.forms.display.value +=-;
});
$('#equal').click(functio(){
    if (display.value == ""){
     alert("please enter any numbers to calculate");
    }else{
        document.forms.display =
        eval(document.forms.display);
    }
});
$('#clear').click(function(){
    document.forms.display.value=".";
});
})