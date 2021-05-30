
function setPage() {
   
   document.getElementsByClassName('header-wrap')[0].style.top = 0;
   if(document.getElementsByClassName('trusted-seller-wrap').length > 0) {
   document.getElementsByClassName('trusted-seller-wrap')[0].remove();
   }
   if(document.getElementById('titleBeePic') === null) {
        var linkParent = document.getElementsByClassName('store-name-text')[0].getElementsByTagName('a')[0];
        var divParent = linkParent.getElementsByTagName('div')[0];
        divParent.style.float = 'left';   
        divParent.style.fontFamily = 'sans-serif';
        divParent.style.fontStyle = 'italic';
        var img = document.createElement("img");
        img.src = 'https://github.com/sidhupk/api/raw/main/beecart/assets/bee.png';
        img.style.height = '20px';
        img.style.width = '20px';
        img.style.marginLeft = '75px';
        img.style.marginTop = '-7px';
        img.style.float = 'right';
        img.style.position = 'absolute';
        img.setAttribute('id','titleBeePic');
        linkParent.insertBefore(img, divParent);        
     }

     if(document.getElementById('coverPic') === null) {
      
        var coverImg = document.createElement("img");
        coverImg.src = 'https://github.com/sidhupk/api/raw/main/beecart/assets/offer.jpg?time=20';
        coverImg.setAttribute('id','coverPic');
        var parentDiv = document.getElementsByClassName('main-container')[0];
        var searchProdDiv = parentDiv.getElementsByClassName('product-search-bar-wrap')[0];
        
        parentDiv.insertBefore(coverImg, searchProdDiv);
     }
   }
   setPage();

   setInterval(function() {
    if(document.getElementsByClassName('trusted-seller-wrap').length > 0) {
     document.getElementsByClassName('trusted-seller-wrap')[0].remove();
    }
    setPage();
   },100);	  
