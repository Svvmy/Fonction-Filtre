function filtre(t, callback){ 
    const newTab =[];
    for (let i=0; i<t.length;i++){
            tmp = callback(t[i]);
        if(tmp == true){
            newTab.push(t[i]);
        }
    
    }   
    return newTab;
};

const tab = [9, 8, -1, 6, -2];

const tabfiltre = filtre(tab, (v) => {
    if(v>0)
    return true;
});
console.log(tabfiltre);