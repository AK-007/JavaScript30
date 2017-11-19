function playIt(e)
{
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!audio)return;
	key.classList.add('playing');
	audio.currentTime=0;
	audio.play();
	}
function remove(e)
{	if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const k = Array.from(document.querySelectorAll('.key'));
k.forEach( key => key.addEventListener('transitionend', remove));
window.addEventListener('keydown',playIt);
