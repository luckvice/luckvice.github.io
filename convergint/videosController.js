/*Inicio Controles de video */
var stopVideoOverlay = document.getElementById("video-overlay");
stopVideoOverlay.addEventListener("click", function() {
    stopVideo();
});
function stopVideo(){
    iframeReset = document.getElementById('video');
    var video = document.getElementById("videoplayer");
  //  video.pause();
  //  video.currentTime = 0;
    iframeReset.innerHTML = '';
}
 /*Fim Controles de video */
/*Inicio Abrir modal dinamicamente*/
function abrirModal(param) {
    console.log(param);
    video = document.getElementById('video');
    const videoLinks = {
    //Agronegocio
    'agroSegurancaVideo'    : 'n_4C-rkDf_s?si=8OVWUcpvbAElVWVG',    
    //Aeroportos
    'aeroportoautomacao'    : '8cJY1QkcF3M?si=5VcmtLh4rx2BmfCb',
    //Educação
    'controledeacesso'      : 'fOv_e7yJ8Vw?si=aqn4Sb01U6oXkoqE',
    'digitalSignageEducacao': 'HraYunw2VOk?si=I7J6sZfgdVbn3T1V',
    'salasHibridas'         : 'RnS4Vedm9yY?si=4mqCcR5TOZTe0dFa',    
    //Escritorios
    'saladecrise'           : '-WJ00fcNcDk?si=4GxjXLkz0Fp9X_VQ',
    'auditorios'            : 'MX5VbYWCEUk?si=22N0SjyocKSjIbS5',
    'gestaoestrategica'     : 'bHe4x1VLq24?si=C1-SDtmI9LeCr1JB',
    'estudiocorporativo'    : '0U6C3pUEB2Y?si=y5RCGjsZrKb3IO_n',
    //industria
    'industrialSalasdereuniao': 'bHe4x1VLq24?si=dZKCLBBiNpJzEh2G',
    //Judiciario
    'sistemavotacao'        : 'lkLV0AnmKn4?si=G43M8LVRNms0L6x3',
    'segurancajudiciario'   : 'nu4I8Ql__iY?si=RuVMgnCV3tg0qiau',
    'salasdereunicaojud'    : '-WJ00fcNcDk?si=IK8ynkNu4wtX-5bT',
    //Saude
    'segurancasaude'        : 'qO3tgE1hJhY?si=oBuiTTUhvI42FJ3C',
    'gravacaicirurgia'      : '3_yraL-jFTA?si=w7PEa6xFPjloNIYz',
    'saudeautomacao'        : 'C6q4VAhhRD8?si=t5PMgIn7KApzFcNO',
    //Varejo
    'digitalsignage'        : 'vNppzHBLQ8M?si=xBmgyr0vKBUjt9Jq',
    'iot'                   : 'vLB1sMhJDDU?si=wX_p7Q_Ee-i2KWdG',
    'heatmap'               : 'pjUL787fzAc?si=uAU7v3tj7jyoAvj0',
    'conectividade'         : 'IYaV_AMeECA?si=OGKgtjA_Q2geJ1YX',
    //Rodovia
    'segurancaRodovia'      : 'VrnXqBGHbAY?si=ATMgY-HsIioA8odf',
    //Banco
    'bancoStudioCorpVideo'  : '0U6C3pUEB2Y?si=wDMHep95aoK1Ii5N',
    'bancoAuditorioVideo'   : 'FlFGkgh-dy0?si=cK7j-_CkiL3vfhxJ',
    'bancoSeguranca'        : 'oGnBrn85Xxo?si=6f6mWmBPsKv-xHpF',
    'bancoInteligente'        : 'bHe4x1VLq24?si=Ro4slkDa5q8Zafr3'
    };
    const videoLink = videoLinks[param] || ''; 
    //video.innerHTML = ' <video id="videoplayer" width="320" height="240" controls> <source src="/videos/'+videoLink+'" type="video/mp4">Your browser does not support the video tag.</video> '
    video.innerHTML = '<iframe width="640" height="480" src="https://www.youtube.com/embed/'+videoLink+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

    MicroModal.show('modal-1'); // [1]
}
 /*Fim Abrir modal dinamicamente*/
 var audio = document.getElementById('click_song');

 const toggleButtons = document.querySelectorAll(".toggle-button");
 
 function toggleButtonHandler() {
     audio.play();
     const parentBox = this.closest(".box");
     const desc = parentBox.querySelector(".desc");
 
     // Fechar todos os elementos abertos antes de abrir o atual
     document.querySelectorAll(".box.aberto").forEach(box => {
         if (box !== parentBox) { // Não fechar o clicado
             box.classList.remove("aberto");
             box.querySelector(".desc").style.display = "none";
             box.querySelector(".toggle-button").classList.remove("btnAberto");
         }
     });
 
     // Alternar o estado do elemento clicado
     parentBox.classList.toggle("aberto");
     this.classList.toggle("btnAberto");
 
     // Alternar a visibilidade do elemento com a classe "desc"
     desc.style.display = (desc.style.display === "block") ? "none" : "block";
 }
 
 toggleButtons.forEach(button => {
     button.addEventListener("click", toggleButtonHandler);
 });
 

 const categorias = {
    aeroportos: {
        titulo: 'Aeroportos',
        links: ['8cJY1QkcF3M?si=xB6ArlasJ0wAPULb', 'VrnXqBGHbAY?si=6H2UPDq1cv3PerVA'],
        legendas: ['Automação de Aeroportos', 'Videomonitoramento em Rodovias']
    },
    bancos: {
        titulo: 'Bancos',
        links: ['cvjANIpDEhM?si=DjyjTH80UBJPHN-w', '0U6C3pUEB2Y?si=wDMHep95aoK1Ii5N', 'FlFGkgh-dy0?si=cK7j-_CkiL3vfhxJ'],
        legendas: ['Modernização da Sala CAD no SICREDI', 'Estúdio Corporativo Implantado no SEBRAE/SP', 'Modernização do Cineteatro do SESC Campina Grande']
    },
    educacao: {
        titulo: 'Educação',
        links: ['eU4AVvharbk?si=9R0Pf-kFTOkkZxA_','fOv_e7yJ8Vw?si=vD7Z_h-ebxxqQYuZ', 'C6q4VAhhRD8?si=MgnPTQP1KUyRgy9J', 'OFMO2CpehO8?si=leMm6rMExQPOpsi7', 'ujUznkUPly8?si=gfgvMI5AqF0qT8nx', '13QlyXH53tg?si=23yPVmbXxgd_atlG'],
        legendas: ['Painel de LED de altaresolução implantado na ESPM','Controle de Acesso no Colégio Ranieri', 'Modernização do Centro de Ensino e Pesquisa Albert Einstein', 'Inteli: Promovendo uma Transformação Digital na Educação', 'Projeto de Smart Building Educacional implantado no Insper', 'Modernização de Salas de Aula na FGV']
    },
    escritorios: {
        titulo: 'Escritórios',
        links: ['QFo2vM9AecA?si=LL2gBmN3SUf81rkV', '1WYkk5tVquU?si=y5HznyJal0K9Br96', 'MX5VbYWCEUk?si=V474nDGOmfz4hWp9', 'bHe4x1VLq24?si=CcQKNIEmVOn_RwHq', '-FqtcgVbv2E?si=RLMX4zuh5Pqdpg4_', '0U6C3pUEB2Y?si=EFobJRxBLejrZFgy'],
        legendas: ['Escritório Inteligente na Blackboard', 'Sala de Gestão Estratégica implantada na Chesf', 'Salas de Reunião Inteligentes', 'Reuniões Híbridas na CBRE', 'Soluções de Áudio e Vídeo Implantadas no Ministério da Justiça', 'Estúdio Corporativo Implantado no SEBRAE/SP']
    },
    governo: {
        titulo: 'Governo',
        links: ['qmRfxqodKoY?si=IMYZn5PbEhOBlRVY', 'nu4I8Ql__iY?si=RuVMgnCV3tg0qiau', 'k8rVy_8gzmQ?si=JMbpfAYViY3KybZm', '3n2C-GiuKUg?si=2dESf-hOADQjwAxU', 'bhlywO8OpAY?si=4PuOMHd7ELjXsziQ', 'KLNJqlenUOQ?si=bYLnWvXYyP5mcf-5', '-WJ00fcNcDk?si=QHftKUxz-3aEDEEU', '5XvG6LnEgOc?si=5rVZsxWvIhaPK85L', 'vl7LamIsef4?si=ymFLwAXHYx7HDzat', 'qscF2B8abEk?si=ooU96vqix8q5IQmu', 'tsunuLJ3hrA?si=QdTtrxh0gc8TyQJ1', 'oGnBrn85Xxo?si=DYfCOVqRVjR1Dtgl', 'U_kZuGwDaLc?si=nPtfoWfe1SLzuT9g', 'mAGXGXfgAB4?si=yg9la5gxwDp-djDZ', 'lkLV0AnmKn4?si=G43M8LVRNms0L6x3'],
        legendas: ['Cerco Digital Implantado em Lorena', 'Projeto de Videomonitoramento no TJRS', 'Modernização da Secretaria de Saúde da Bahia', 'Modernização do sistema de AV na Câmara de Goiânia', 'Museu Digital implantado no Memorial do MPF', 'Sala Multimídia Implantada em Itaipu', 'Sala de reuniões padrão ABNT', 'Videowall Implantado na AMC', 'Modernização do MPCE', 'Videowall Implantado na Fundação Casa', 'Implantação de um dos Maiores Videowalls do País', 'Projeto de modernização da Fecomercio', 'Modernização da ALEGO', 'Projeto de modernização do MIS Ceará', 'Projeto de Modernização do Tribunal de Justiça do Paraná']
    },
    hospitais: {
        titulo: 'Hospitais',
        links: ['qO3tgE1hJhY?si=oBuiTTUhvI42FJ3C'],
        legendas: ['Sistema de segurança implantado no Hospital Santa Cruz']
    },
    industria: {
        titulo: 'Indústria',
        links: ['IYaV_AMeECA?si=OGKgtjA_Q2geJ1YX'],
        legendas: ['Implantação de rede wi-fi outdoor']
    },
    lazer: {
        titulo: 'Lazer',
        links: ['8xh6GcYOV8M?si=WSpaNlsE6usIxpGl', 'vNppzHBLQ8M?si=xBmgyr0vKBUjt9Jq', 'FlFGkgh-dy0?si=QDChbNyDrHq91L9Q'],
        legendas: ['Projeto Multimídia implantado no SESC Guarulhos', 'Painéis de LED para Garantir o Bem-Estar', 'Modernização do Cineteatro do SESC Campina Grande']
    },
    portos: {
        titulo: 'Portos',
        links: ['38sWDt8-u0w?si=l2ap8TFY64mdHyhZ', '-syhrCfXa7s?si=QcgEk1ruKqecoIxB', 'h9U26hFxmeI?si=rKC_gLpoB0Vq9sa4'],
        legendas: ['Projeto de Videomonitoramento no Terminal de Paranaguá', 'Projeto de conectividade no Porto de São Sebastião', 'Projeto de Segurança no TPS']
    },
    varejo: {
        titulo: 'Varejo',
        links: ['vLB1sMhJDDU?si=wX_p7Q_Ee-i2KWdG'],
        legendas: ['Projeto de Eficiência Energética baseado com IoT']
    }
};

function abreGaleria(galeriaCategoria) {
    audio.play();
    const {titulo, links, legendas } = categorias[galeriaCategoria];
    const galeria = document.getElementById('galeria');
    const videoGrid = document.querySelector('.video-grid');
    
    galeria.innerHTML = "";
    videoGrid.innerHTML = links.map((linkText, index) => `
        <div class="video">
            <iframe width="440" height="246" src="https://www.youtube.com/embed/${linkText}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class='legenda'><br><span>${legendas[index] || ''}</span></div>
        </div>
    `).join("");

    // Ocultar mapas abertos
    const categoriasMapas = ['agronegocio', 'aeroportos', 'escritorios', 'industria', 'judiciario', 'saude', 'educacao', 'varejo', 'tuneis', 'rodovia', 'banco', 'mandalasd', 'geral'];
    categoriasMapas.forEach(category => document.querySelector(`.sealcitymap.${category}`).style.display = 'none');

    // Exibir galeria
    const galleryList = document.querySelector('.sealcitymap.gallery-list');
    galleryList.style.visibility = 'visible';
    galleryList.style.animation = 'fade 0.5s';
    galleryList.style.display = 'flex';

    // Atualizar breadcrumb
    document.getElementById('breadContent').innerHTML = titulo;
    console.log(categorias[galeriaCategoria]);
    document.querySelector('.bread').style.display = 'block';
    document.querySelector('.boasvindas').style.display = 'none';
}