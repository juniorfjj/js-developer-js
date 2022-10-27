
var infoContents = document.get

function openInfos(idInfo){
    let infos = document.getElementsByClassName('info');
    for (let i = 0; i < infos.length; i++) {
        infos[i].style.display = 'none'
    }
    document.getElementById(idInfo).style.display = 'block';
    }

