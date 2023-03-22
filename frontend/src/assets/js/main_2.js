let btn=document.getElementsByClassName('btn');

let div=document.getElementsByClassName('hide');

btn[0].onclick=function(){
    div[0].style['opacity'] == 1 ? div[0].style['opacity'] = 0 : div[0].style['opacity'] = 1;
    div[1].style['opacity'] == 1 ? div[1].style['opacity'] = 0 : div[1].style['opacity'] = 1;
    div[2].style['opacity'] == 1 ? div[2].style['opacity'] = 0 : div[2].style['opacity'] = 1;


    setTimeout(() => {

        div[0].style['opacity'] == 0 ? div[0].style['display'] = 'none' : div[0].style['display'] = '';
        div[0].style['opacity'] == 0 ? div[1].style['display'] = 'none' : div[1].style['display'] = '';
        div[0].style['opacity'] == 0 ? div[2].style['display'] = 'none' : div[2].style['display'] = '';
        
    }, 500);

}
