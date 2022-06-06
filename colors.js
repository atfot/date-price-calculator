var links ={setColor:function(color){
//var link = document.querySelectorAll('a');
//var i = 0;
//while(i < link.length){
//  link[i].style.color = color;
//  i = i + 1;}
$('a').css('color', color);
}
}
var pagecolor = {
setColor : function(color){
  //document.querySelector('body').style.color=color;
  $('body').css('color', color);
},
setBackgroundColor : function(color){
  //document.querySelector('body').style.backgroundColor=color;
  $('body').css('backgroundColor', color);
}
}
function toggle(self){
var target = document.querySelector('body');
if(self.value === '전등 켜짐'){
  pagecolor.setBackgroundColor('black');
  pagecolor.setColor('white');
  self.value = '전등 꺼짐';
  links.setColor('white');
} else {
  pagecolor.setBackgroundColor('white');
  pagecolor.setColor('black');
  self.value = '전등 켜짐';
  links.setColor('black');
}
}
