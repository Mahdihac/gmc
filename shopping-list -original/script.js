let like=document.getElementsByClassName('like');
for (let i=0;i<like.length;i++){
    let heart=like[i];
    heart.addEventListener('click',func);
    function func(){
        let el=heart.firstElementChild;
       if(el.style.color=="black"){
        el.style.color="red";}
        else{
            el.style.color="black";}
    }
};
let minus=document.getElementsByClassName('minus-btn');
for (let i=0; i<minus.length;i++){
    let min=minus[i];
    min.addEventListener('click',fn);
    function fn(){
        if(min.nextElementSibling.value==0){
            min.nextElementSibling.value=0;
        }else{
            min.nextElementSibling.value--;
        }
}
};
let plus=document.getElementsByClassName('plus-btn');
for (let i=0; i<plus.length;i++){
    let pls=plus[i];
    pls.addEventListener('click',fn);
    function fn(){
            pls.previousElementSibling.value++;
        }
};
let remove=document.getElementsByClassName('delete');
for (let i=0; i<remove.length;i++){
    let rmv=remove[i];
    rmv.addEventListener('click',fnc);
    function fnc(){
        c=document.getElementById('child');
        c.parentNode.removeChild(c);
        }
};
/* function tottal() {
 var   p1 = document.getElementById("p1").value;
 var   q1 = document.getElementById("q1").value;
 var pr1= p1*q1;
 document.getElementById("p1")=pr1;
 var   p2 = document.getElementById("p2").value;
 var   q2 = document.getElementById("q2").value;
 var pr2= p2*q2;
 document.getElementById("p2")=pr2;
 var   p3 = document.getElementById("p3").value;
 var   q3 = document.getElementById("q3").value;
 var pr3= p3*q3;
 document.getElementById("p3")=pr3;
 var total;
 total = +pr1 + +pr2 + +pr3;
     document.getElementById("finalPrice").value = total;
}*/

function n1(){
    let pr = document.getElementById("p1");
    let q = document.getElementById("q1");
    pr.innerHTML=1379*q.value;
    }
function n2(){
    let pr = document.getElementById("p2");
    let q = document.getElementById("q2");
    pr.innerHTML=176.80*q.value;
    }
function n3(){
    let pr = document.getElementById("p3");
    let q = document.getElementById("q3");
    pr.innerHTML= 249*q.value;
    }
function totalN(){
    let pt=document.getElementById("finalPrice");
    let p1 = document.getElementById("p1").innerHTML;
    let p2 = document.getElementById ("p2").innerHTML;
    let p3 = document.getElementById("p3").innerHTML;

    pt.value=parseInt(p1)+parseInt(p2)+parseInt(p3);
    }