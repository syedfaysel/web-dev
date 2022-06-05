


// Continue: 


for (var i=1; i<10; i++){

    if(i==5){
        continue;
        // when i==5, the iteration will be skipped to the next step
    }
    console.log("i is now = ",i);
}


//Break: 

for (var j=1; j<10; j++){
    if(j==5){
        break;
        //when j==5, the iteration will be stopped & get out of the innermost loop. 
    }
    console.log("j is now = ",j);
}