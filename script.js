document.getElementById('todo1').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText1");
  
  if (this.checked)
  {
    textTodo.innerHTML = "Giàu hơn về tình cảm";
  }
  else
  {
    textTodo.innerHTML = "Giàu hơn";
  }
}


document.getElementById('todo2').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText2");

  if (this.checked)
  {
    textTodo.innerHTML = "Du lịch tại gia";
  }
  else
  {
    textTodo.innerHTML = "Du lịch";
  }
}

document.getElementById('todo3').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText3");

  if (this.checked)
  {
    textTodo.innerHTML = "Thấy <del>Thay</del> điện thoại mới ra mắt";
  }
  else
  {
    textTodo.innerHTML = "Thay điện thoại mới";
  }
}

document.getElementById('todo4').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText4");

  if (this.checked)
  {
    textTodo.innerHTML = "Nỗ lực <del>Giảm</del> béo thành công";
  }
  else
  {
    textTodo.innerHTML = "Nỗ lực giảm béo thành công";
  }
}

document.getElementById('todo5').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText5");

  if (this.checked)
  {
    textTodo.innerHTML = "Sống <del>cuộc sống an nhàn</del>";
  }
  else
  {
    textTodo.innerHTML = "Sống cuộc sống an nhàn";
  }
}
