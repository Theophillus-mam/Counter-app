var count = 0 ;

function increment() {

    if (count>=20) {
        count = count + 2;
        document.getElementById('count').innerHTML = count;
        
    } else {
        count = count + 1;
        document.getElementById('count').innerHTML = count;
      }
    if (count>=30 && count==38){
        count = count + 2.5;
        document.getElementById('count').innerHTML = count;
    }
}

    
    
        


function decrement(){
    if(count<=30 && count>=20){
        count = count - 2;
        document.getElementById('count').innerHTML = count;
    }
    else{
        count = count - 1;
        document.getElementById('count').innerHTML = count;
    }
    if (count<=40 && count>=30){
        count = count - 2.5;
        document.getElementById('count').innerHTML = count;
    }
    
}
function reset(){
    count = count - count
    document.getElementById('count').innerHTML = count;
}