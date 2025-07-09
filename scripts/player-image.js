let fixed = false;

function fixCover()
{
	if (fixed){
		return ;
	}
	const player = document.getElementById("player");
	const image_wraper = document.getElementById("song-image")
	const image = image_wraper.getElementsByTagName("img")[0];

	fixed = true;
	player.appendChild(image);
	image_wraper.remove();
}

const observer = new MutationObserver(() => {
  fixCover();
});

let playing_title;

function titleFinder (){
	playing_title = document.getElementsByClassName("middle-controls")[0].getElementsByClassName("title")[0];
	if (playing_title) {
		observer.observe(playing_title, {childList:true, subtree:true});
		return;
	}
	setTimeout(titleFinder, 1000);
};

titleFinder();
