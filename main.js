function addRow() {
  console.log(" addRow function called");
  let tbody = document.getElementById("tbody");
  const rows = tbody.getElementsByTagName("tr");
  const rowCount = rows.length + 1;
  let row = document.createElement("tr");
  let col1 = document.createElement("td");
  col1.innerHTML = `<input name="arr[${rowCount}]['col1']"/>`;

  let col2 = document.createElement("td");
  col2.innerHTML = `<input name="arr[${rowCount}]['col2']"/>`;
  let col3 = document.createElement("td");
  col3.innerHTML = `<input name="arr[${rowCount}]['col3']"/>`;
  let col4 = document.createElement("td");
  col4.innerHTML = `<button onclick="deleteRowData(this)"> Delete </>`;

  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);

  tbody.appendChild(row);
}

function submitRowData() {
  const tbody = document.getElementById("tbody");
  const rows = tbody.getElementsByTagName("tr");


  //   let rowData  = rows.forEach((row) => {
  //     let rowInputData = rows.querySelector("input").value
  //     console.log("rowInputData : ",rowInputData )
  //     let colData = {};

  //     return colData;
  // });

  for (let i = 0; i < rows.length; i++) {
    let inputs = rows[i].querySelectorAll("input");
    if (inputs.length == 0) {
      continue;
    }

    for (let j = 0; j < inputs.length; j++) {
      let value = inputs[j].value;
      console.log("Row Value: ", value);
    }

   
   
  }
}

function deleteRowData(button) {
  const row = button.parentNode.parentNode;
  console.log("Deleted row : ", row)
  row.parentNode.removeChild(row);
}