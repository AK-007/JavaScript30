const inputs=document.querySelectorAll('.controller input');

function update()
{	const suffix=this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.id}`,this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change',update));
inputs.forEach(input => input.addEventListener('mousemove',update));