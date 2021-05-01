var op1 = 'i', op2 = 0, opt = 1;
var sign = '';
var temp = '0';
document.getElementById("input").value = sign + temp;


function numclick(c){
    if(temp.length >= 8){
        document.getElementById("input").value = sign + temp;
    }
    else{
        if( c != '0' && temp == '0') temp = c;
        else if(temp != '0') temp += c;
       document.getElementById("input").value = sign + temp;
    }
}

function dotclick(){
    temp += '.';
    document.getElementById("input").value = sign + temp;
}

function delnum(){
    if(temp.length > 1){
        temp = temp.slice(0,temp.length-1);
        document.getElementById("input").value = sign + temp;
    }
    else{
        temp = '0';
        sign = '';
        document.getElementById("input").value = sign + temp;
    }
}


function cl(){
    temp = '0';
    op1 = 'i';
    op2 = 0;
    opt = 1;
    sign = '';
    document.getElementById("input").value = sign + temp;
}

function optclick(s){
    if(temp == '0' && s == 2){
        sign = '-';
        document.getElementById("input").value = sign;
        return;
    }
    op2 = parseFloat(temp);
    if(sign == '-') op2 = op2 * -1;
    if(op1 == 'i'){
        op1 = op2;
    }
    else if(op2 == 0 && opt == 4 && op1 == 0){
        cl();
        document.getElementById("input").value = 'NaN';
        return;
    }
    else if(op2 == 0 && opt == 4){
        cl();
        document.getElementById("input").value = 'Infinity';
        return;
    }
    else if(opt == 1) op1 = op1 + op2;
    else if(opt == 2) op1 = op1 - op2;
    else if(opt == 3) op1 = op1 * op2;
    else if(opt == 4) op1 = op1 / op2;
    if(s == 5){
        res = op1;
        cl();   
        if(res == 'i') document.getElementById("input").value = '0';
        else document.getElementById("input").value = parseFloat(res.toFixed(8));
        return;
    }
    temp = '0';
    op2 = 0;
    opt = s;
    sign = '';
    document.getElementById("input").value = sign + temp;
}