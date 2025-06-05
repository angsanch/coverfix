function fixCover()
{
	let player = document.getElementById("player");
	let image_wraper = document.getElementById("song-image")
	let image = image_wraper.getElementsByTagName("img")[0];

	console.log(player, image_wraper, image);

	player.appendChild(image);
	image_wraper.remove();
}

fixCover();
