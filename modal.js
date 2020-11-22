document.querySelectorAll('[data-click-modal]').forEach( function(element){
    element.addEventListener('click', function(){
        OnModalClick();
    } 
    )
}

)
function OnModalClick(){
    document.querySelector('.modal').classList.toggle("modal_show");
    document.querySelector('.wrapper').classList.toggle("wrapper-on");
}