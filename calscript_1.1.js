let title = {
  "name" : "이름",
  "fullexp" : "총 지출액",
  "halffullexp" : "상호 부담액",
  "eachdebt" : "상호 부채"
}
let listObj = [
  {
    "name" : "조현규",
    "fullexp" : "A",
    "halffullexp" : "(A + B) / 2",
    "eachdebt" : "if A > B, {(A + B) / 2} - A, else 0"
  },
  {
    "name" : "김하영",
    "fullexp" : "B",
    "halffullexp" : "(A + B) / 2",
    "eachdebt" : "if A < B, {(A + B) / 2} - B, else 0"
  },
]

let $table = document.createElement('table');

for(let i in title){
  let $th = document.createElement('th');
  let $tr = document.createElement('tr');
  $tr.innerHTML = title[i];
  $th.appendChild($tr);
  $table.appendChild($th);
}

listObj.map(list=>{
  let $tr = document.createElement('tr');
        for(let i in list){
                let $td = document.createElement('td');
                $td.innerHTML = list[i];
                $tr.appendChild($td);
                $table.appendChild($tr);}
})
document.body.appendChild($table);





//<script src="calscript_1.1.js"></script>
