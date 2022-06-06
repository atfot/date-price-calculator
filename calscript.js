var A = document.getElementById('A');
var B = document.getElementById('B');
function halfsum(){
    var chohs = document.getElementsByName('x');
    var resultA= 0;
    for(var i=0; i<chohs.length;i++){
        if(parseInt(chohs[i].value))
        resultA += parseInt(chohs[i].value);
    }
    document.getElementById('haplb').value = (resultA)/2;
}

function DEPT()
{
    var DEPTA = document.getElementById('debtA');
    var DEPTB = document.getElementById('debtB');
};
