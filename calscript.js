let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "이름";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "총 지출액";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "상호 부담액";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "상호 부채";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "조현규";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "A";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "(A + B) / 2";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "if A < B, <br>{(A + B) / 2} - A<br> else 0";


row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "김하영";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "B";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "(A + B) / 2";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "if A > B, <br>{(A + B) / 2} - B<br> else 0";


row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
tbody.appendChild(row_3);
