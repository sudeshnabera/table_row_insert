
function addRow() {
    console.log("function called");
    let table = document.getElementById("myTable");
    console.log("table",table);
    let tbody = document.getElementById('tbody')
    const rows = tbody.getElementsByTagName("tr"); 
    const rowCount = rows.length+1; 
    console.log("rowCount",rowCount)
    let row = document.createElement('tr');
    console.log("row",row);
    let col1 = document.createElement("td");
        col1.innerHTML = `<input name="arr[${rowCount}]['col1']"/>`;
    let col2 =  document.createElement("td");
         col2.innerHTML = `<input name="arr[${rowCount}]['col2']"/>`;
    let col3 =  document.createElement("td");
         col3.innerHTML = `<input name="arr[${rowCount}]['col3']"/>`;

     row.appendChild(col1);
     row.appendChild(col2);
     row.appendChild(col3);
     tbody.appendChild(row);

}

function submitColData(){
    localStorage.setItem('calValu1',)
}
