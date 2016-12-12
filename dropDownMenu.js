
function setPlusIcon(){
    var allLis = document.getElementsByTagName("li");
    for(var i=0;i< allLis.length;i++){
        var li = allLis[i];
        var allUls = li.getElementsByTagName("ul");
        if(allUls.length){
            li.style.listStyleImage = "url('img/plus.gif')";
        }
    }
    var allA = document.getElementsByTagName("a");
    for(var i=0;i< allA.length;i++){
        allA[i].addEventListener("click", aClick);
    }
}

window.onload = setPlusIcon();

function aClick(e){
    var ulChild = e.target.parentNode.getElementsByTagName("ul");

    if(ulChild.length){
        e.preventDefault();
        if(ulChild[0].style.display == "block"){
            ulChild[0].style.display = "none";
            e.target.parentNode.style.listStyleImage = "url('img/plus.gif')";
        }else{
            ulChild[0].style.display = "block";
            e.target.parentNode.style.listStyleImage = "url('img/minus.gif')";
        }
    }
}
