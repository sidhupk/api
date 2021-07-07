
setInterval(()=> {
	// document.getElementsByTagName('body')[0].innerHTML = " <br/> &nbsp;  &nbsp; Under Maintanance , Will back Soon in few days, </br>  &nbsp;  &nbsp; Clear App data & Cache and Try again </br> &nbsp;  &nbsp; Thank You";
    
    if(document.getElementById('newVersion') === null) {
    document.getElementsByTagName("body")[0].innerHTML = "<br/>&nbsp;&nbsp;";
    var link = document.createElement('a');
    link.href = 'https://play.google.com/store/apps/details?id=com.cowinindiaslotalert.sidhupk';
    link.target = '_blank';
    link.id = "newVersion"
     link.innerHTML = 'New Version Avaliable, Click here to Update App';
    document.body.appendChild(link);
    setTimeout(()=>{ 
            link.click(); 
		    // document.getElementsByTagName("html")[0].style.visibility = "visible";
    },2000);

    }     
    
}, 100);
