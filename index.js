function add(){
    const type =document.getElementById("input-type").value;
    const name =document.getElementById("input-name").value;
    const date = document.getElementById("input-date").value;
    const amount =document.getElementById("input-amount").value;
    // const date1 = date.toStrings();
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=type;
    cell2.innerHTML=name;
    cell3.innerHTML=date;
    cell4.innerHTML=amount;

    addid();
}

 function addid(){
    var tables = document.getElementsByTagName("table");
    var orws = document.getElementById("table");
    for(let i=0;i<(tables.length);i++){
        var table =tables[i];
        table.setAttribute("class",i+1);
    }
}