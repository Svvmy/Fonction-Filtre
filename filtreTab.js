
function filtre(t,fx){ 
    const newTab =[];
    for (let i=0; i<t.length;i++){
            tmp = fx(t[i])
        if(tmp == true){
            newTab.push(t[i]);
        }
    
    }   
    return newTab;
};

function positif(v){
    if (v>0){
        //console.log(v);
        return true;
    }
}


const tab = [5,-3,-6, 9, 10];
console.log(filtre(tab,positif));


