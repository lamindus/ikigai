let projects = document.querySelectorAll('.item');
function next(items){
    let cur;
    for(let i = 0; i < items.length; i += 1){
        if(items[i].classList.contains('active-item')){
            cur = i;
        }
    }
    if(cur + 1 === items.length){
        items[cur].classList.remove('active-item');
        items[0].classList.add('active-item');
    }
    else{
        items[cur].classList.remove('active-item');
        items[cur + 1].classList.add('active-item');
    }
};
function prev(items){
    let cur;
    for(let i = 0; i < items.length; i += 1){
        if(items[i].classList.contains('active-item')){
            cur = i;
        }
    }
    if(cur - 1 === -1){
        items[cur].classList.remove('active-item');
        items[items.length - 1].classList.add('active-item');
    }
    else{
        items[cur].classList.remove('active-item');
        items[cur - 1].classList.add('active-item');
    }
};