var jsVersion = 1;  

if((typeof appVersion === 'undefined' || appVersion !== jsVersion)) {
  //   document.getElementsByTagName("html")[0].style.visibility = "hidden";
     document.getElementsByTagName("body")[0].innerHTML = "<br/>&nbsp;&nbsp;";
    var link = document.createElement('a');
    // link.href = 'https://play.google.com/store/apps/details?id=com.cowinindiaslotalert.sidhupk';
    link.target = '_blank';
     link.innerHTML = 'New Version Avaliable Click here to Update App';
    document.body.appendChild(link);     
    setTimeout(()=>{ link.click(); document.getElementsByTagName("html")[0].style.visibility = "visible"; },2000);
	
} else {
   setPage();
   setInterval(function() {
    setPage();
   },100);
}

function setPage() {   
   document.getElementsByClassName('header-wrap')[0].style.top = 0;
   if(document.getElementsByClassName('trusted-seller-wrap').length > 0) {
   	document.getElementsByClassName('trusted-seller-wrap')[0].remove();
   }
}
   

