console.log(data);

function start() {
    var mybody = document.getElementsByTagName("body")[0];

    mytable = document.createElement("table");
    mytablebody = document.createElement("tbody");

    for (var j = 0; j < data.length + 1; j++) {
        mycurrent_row = document.createElement("tr");
        for (var i = 0; i <= 4; i++) {
            if (j == 0) {
                mycurrent_cell = document.createElement("th");

                if (i == 0)
                    currenttext = document.createTextNode("Id");
                else if (i == 1)
                    currenttext = document.createTextNode("Phone");
                else if (i == 2)
                    currenttext = document.createTextNode("City");
                else if (i == 3)
                    currenttext = document.createTextNode("State");
                else if (i == 4)
                    currenttext = document.createTextNode("Country");
          


                mycurrent_cell.setAttribute("class", "thClass");
            }
            else {
                mycurrent_cell = document.createElement("td");
                if (i == 0)
                    currenttext = document.createTextNode(data[j - 1].id);
                else if (i == 1)
                    currenttext = document.createTextNode(data[j - 1].phone);
                else if (i == 2)
                    currenttext = document.createTextNode(data[j - 1].city);
                else if (i == 3)
                    currenttext = document.createTextNode(data[j - 1].state);
                else if (i == 4)
                    currenttext = document.createTextNode(data[j - 1].country);
                


                mycurrent_cell.setAttribute("class", "tdClass");
            }
            mycurrent_cell.appendChild(currenttext);
            mycurrent_row.appendChild(mycurrent_cell);
        }
        mycurrent_cell.setAttribute("class", "trClass");
        mytablebody.appendChild(mycurrent_row);
    }

    mytable.appendChild(mytablebody);
    mybody.appendChild(mytable);
    mytable.setAttribute("class", "democlass");
    mytable.setAttribute("id", "myTable");
}


function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    var tds = tr.getElementsByTagName('td');
    for (var i = 0; i < tr.length; i++) {
        var firstCol = tds[2].textContent.toUpperCase();
        var secondCol = tds[3].textContent.toUpperCase();
        var thirdCol = tds[4].textContent.toUpperCase();
        if (firstCol.indexOf(filter) > -1 &&   index == 2|| secondCol.indexOf(filter) > -1 && index==3|| thirdCol.indexOf(filter) > -1 && index==4) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        } 
        }
    }


function myFunction1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function myFunction2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}