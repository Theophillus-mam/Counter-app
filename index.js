var count = 0 ;

function increment(){


   count = count + 1 ;
    document.getElementById('count').innerHTML = count;
}
function decrement(){
    if(count==0){
        document.getElementById('count').innerHTML = 0;
    }
    else{
        count = count - 1;
        document.getElementById('count').innerHTML = count;
    }
    
}
function reset(){
    document.getElementById('count').innerHTML = 0;
}