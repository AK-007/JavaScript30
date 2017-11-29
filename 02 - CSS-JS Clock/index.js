const second=document.querySelector('.sec');
const minute=document.querySelector('.min');
const hr=document.querySelector('.hour');

function SetDate()
{
	const current=new Date();

	const seconds=current.getSeconds();
	const secdegree=((seconds/60)*360)+90;
	second.style.transform=`rotate(${secdegree}deg)`;

	const minutes=current.getMinutes();
	const mindegree=((minutes/60)*360) + ((seconds/60)*6)+90;
	minute.style.transform=`rotate(${mindegree}deg)`;

	const hours=current.getHours();
	const hrdegree=((hours/12)*360)+ ((minutes/60)*30)+90;
	hr.style.transform=`rotate(${hrdegree}deg)`;


}

setInterval(SetDate,1000);

SetDate();