const displayToScreen = (data)=>{
    const rows = document.querySelector('table').rows;
    console.log(rows);
    for(let i = rows.length-1; i > 0; i--){
        console.log(rows[i]);
        rows[i].remove();
    }

    const table = document.querySelector('table');
    for(key of Object.keys(data)){
        const tr = document.createElement("tr");
        const tdKey = document.createElement("td");
        const tdVal = document.createElement("td");
        tdKey.innerHTML = key;
        tdVal.innerHTML = data[key];
        tr.appendChild(tdKey);
        tr.appendChild(tdVal);
        table.appendChild(tr);
    }

}


document.getElementById("countBtn").addEventListener("click", (e)=>{
    const text = document.getElementById("userText").value.toLowerCase();
    
    const data = {};
    for(c of text)
        data[c] = data[c]==undefined? 1 : data[c]+=1;
        
    displayToScreen(data);
});

