let pictures=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
let descriptions=
['description for Picture 1',
'description for Picture 2',
'description for Picture 3',
'description for Picture 4',
'description for Picture 5',
];

let picture=document.getElementById('pic');
let description=document.getElementById('desc');
let index=0;

function rightClick(){
    if(index<pictures.length-1){
        index++;
    }
    else index=0;
    showPicture();
}

function leftClick(){
    if(index<=0){
        index=pictures.length-1;
    }
    else 
        index--;
    showPicture();
}


function showPicture(){
    description.innerHTML=descriptions[index];
}
