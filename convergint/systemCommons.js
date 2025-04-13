/*
    Seal Telecom Map controller
    Troupe
    Dev: Luck
*/
/* DEBUG
window.addEventListener('DOMContentLoaded', function () {
    alert('Resolução da tela: ' + window.innerWidth + 'x' + window.innerHeight);
});*/
/*
window.addEventListener("orientationchange", function() {
    // Verificar a nova orientação
    if (window.orientation === 0) {
        alert("Retrato");
    } else if (window.orientation === 90 || window.orientation === -90) {
        alert("Paisagem");
    }
  });
*/


MicroModal.init();//Inicia configs de modal default


//Funcao de clicar nos botoes do mapa
function clickAct(categoria) {
    panzoom.reset(); // Reset Resize
    const categoriaTexto = {
        'agronegocio': 'Agronegócio',
        'aeroportos': 'Aeroportos',
        'escritorios': 'Escritórios',
        'industria': 'Indústria',
        'judiciario': 'Judiciário',
        'saude': 'Saúde',
        'educacao': 'Educação',
        'varejo': 'Varejo',
        'tuneis': 'Túneis',
        'rodovia': 'Rodovia',
        'banco': 'Bancos',
        'mandalasd': 'Soluções digitais em TI',
        'mandalaps': 'Portfólio de soluções'
    };
    // Atualize o texto do breadcrumb
    var breadContent = document.getElementById('breadContent');
    breadContent.innerHTML = categoriaTexto[categoria];
    // Reproduzir áudio
    audio.play();
    // Ocultar todos os elementos com classe "sealcitymap"
    var elements = document.querySelectorAll('.sealcitymap');
    elements.forEach(element => {
        element.style.display = 'none';
    });
    // Exibir a seção específica
    if (categoria !== 'geral') {
        var categorySection = document.querySelector('.sealcitymap.' + categoria);
        categorySection.style.visibility = 'visible';
        categorySection.style.animation = 'fade 0.5s';
        categorySection.style.display = 'block';
        document.querySelector('.boasvindas').style.display = 'none';
    } else {
        // Mostrar a seção "sealcitymap geral"
        document.querySelector('.boasvindas').style.display = 'block';
        var geralSection = document.querySelector('.sealcitymap.geral');
        geralSection.style.display = 'block';
        var galeria = document.getElementById('galeria');
        galeria.innerHTML = ""; // Limpa galeria
    }
    // Atualizar a visibilidade do breadcrumb
    document.querySelector('.bread').style.display = (categoria === 'geral') ? 'none' : 'block';
}

/*Full Screen mode*//*
function toggleFullscreen() {
    const message_rotate = document.querySelector('.rotate-message');
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    overlay.style.zindex = '0';
    message_rotate.style.display = 'none';
    overlay.classList.remove("overlay");;
    overlay.classList.remove("loaded");;
    overlay.innerHTML = '';
    var elem = document.documentElement;
    var requestMethod = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
    var exitMethod = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;

    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        exitMethod.call(document);
    } else {
        requestMethod.call(elem);
    }
}*/

function toggleFullscreen() {
    const message_rotate = document.querySelector('.rotate-message');
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    overlay.style.zIndex = '0';
    message_rotate.style.display = 'none';
    overlay.classList.remove("overlay");
    overlay.classList.remove("loaded");
    overlay.innerHTML = '';

    var elem = document.documentElement;
    var requestMethod = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
    var exitMethod = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;

    // Detectar se o dispositivo é móvel
    var isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            exitMethod.call(document);
        } else {
            requestMethod.call(elem);
        }
    }
}
const element = document.getElementById('panzoom')
const panzoom = Panzoom(element, {
    animate:true,
    disableZoom: false,
    disablePan: false,
    panOnlyWhenZoomed: false,
});

// enable mouse wheel
const parent = element.parentElement
parent.addEventListener('wheel', panzoom.zoomWithWheel);
