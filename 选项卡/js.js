window.onload = function(){
	addpro();
	initial();
	allchoice();
	out();
	begin();
}


var tr = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];
var all = document.getElementById('all');
var nall = document.getElementById('nall');
var delet = document.getElementById('delet');
var add = document.getElementById('add');
var back = document.getElementById('back');
var check = document.getElementsByClassName('checkbox');

function addtr()  //添加选项
{
	var newtr = document.createElement('tr');
	var newtd_1 = document.createElement('td');
	var newtd_2 = document.createElement('td');
	newtd_1.setAttribute('class','left');
	newtd_2.setAttribute('class','right');
	var newcheckbox = document.createElement('input');
	newcheckbox.setAttribute('type','checkbox');
	newcheckbox.setAttribute('class','checkbox');
	var newtext_1 = document.createElement('input');
	newtext_1.setAttribute('type','text');
	var newtext_2 = document.createElement('input');
	newtext_2.setAttribute('type','text');
	newtd_1.appendChild(newcheckbox);
	newtd_1.appendChild(newtext_1);
	newtd_2.appendChild(newtext_2);
	newtr.appendChild(newtd_1);
	newtr.appendChild(newtd_2);
	table.appendChild(newtr);
}

function addpro() //添加选项
{
	add.onclick = function()
	{
		addtr();
	}
}

function origin(target, firstsentence, secondsentence) //初始化选项
{
	var td_first = target.getElementsByTagName('td')[0].getElementsByTagName('input')[1];
	var td_second = target.getElementsByTagName('td')[1].getElementsByTagName('input')[0];
	td_first.value = firstsentence;
	td_second.value = secondsentence;
}

function initial()  //初始化选项卡
{
	origin(tr[0],'成全','刘若英');
	origin(tr[1],'我管你','华晨宇');
	origin(tr[2],'走马','陈粒');
	origin(tr[3],'房间','刘瑞琦');
	origin(tr[4],'陪我长大','段奥娟');
}


function choice(ys)  //设置checkbox的状态
{
	for(var i = 0; i<tr.length; i++)
	{
		tr[i].getElementsByTagName('td')[0].getElementsByTagName('input')[0].checked = ys;
	}
}

function allchoice() //全选或全不选
{
	all.onclick = function()
	{
		choice(true);
	}
	nall.onclick = function()
	{
		choice(false);
	}
}

function out() //删除功能
{
	delet.onclick = function()
	{
		for(var i = check.length-1; i >= 0; i --)
		{
			if(check[i].checked == true)
			{
				del(i);
			}
		}
	}
}

function del(index)
{
	parent = tr[index].parentNode; //tr代表每一栏
	parent.removeChild(parent.getElementsByTagName('tr')[index]);
}

function begin()
{
	back.onclick = function()
	{
		for(var i = check.length-1; i >= 0; i--) //删除现有的所有选项
		{
			del(i);
		}	
		for(var i = 0; i <5; i++) //重新创建五个选项出来
		{
			addtr();
		}
		initial();  //进行初始化
	}
}