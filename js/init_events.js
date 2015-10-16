var init = function(){
    document.getElementById('gen').addEventListener('click',function(){ navigate('gen'); });
    document.getElementById('the').addEventListener('click',function(){ navigate('the'); });
    document.getElementById('goo').addEventListener('click',function(){ navigate('goo'); });
    document.getElementById('hea').addEventListener('click',function(){ navigate('hea'); });
    document.getElementById('mai').addEventListener('click',function(){ navigate('mai'); });
    document.getElementById('gat').addEventListener('click',function(){ navigate('gat'); });
    document.getElementById('imp').addEventListener('click',function(){ navigate('imp'); });
    document.getElementById('mor').addEventListener('click',function(){ navigate('mor'); });
    document.getElementById('nge').addEventListener('click',function(){ navigate('nge'); });
    document.getElementById('sup').addEventListener('click',function(){ navigate('sup'); });
    document.getElementById('abo').addEventListener('click',function(){ navigate('abo'); });
    document.getElementById('esh').addEventListener('click', reload);
    document.getElementById('eshEI').addEventListener('click', reload);
    document.getElementById('resetButtons').addEventListener('click', cButtonReset);
    document.getElementById('Export').addEventListener('click', function(){ eport('EImain'); });
    document.getElementById('Import').addEventListener('click', function(){ iport('EImain'); });
    document.getElementById('None').addEventListener('click', function(){ eport('EIC_3');iport('EI_0'); });
    document.getElementById('Basics').addEventListener('click', function(){ eport('EIC_3');iport('EI_1'); });
    document.getElementById('Simple').addEventListener('click', function(){ eport('EIC_3');iport('EI_2'); });
    document.getElementById('Crazy').addEventListener('click', function(){ eport('EIC_3');iport('EI_3'); });
    document.getElementById('Custom1').addEventListener('click', function(){ iport('EIC_1'); });
    document.getElementById('Custom2').addEventListener('click', function(){ iport('EIC_2'); });
    document.getElementById('Custom3').addEventListener('click', function(){ iport('EIC_3'); });
    document.getElementById('ResetAll').addEventListener('click', function(){ localStorage.clear();iport('EI_0'); });
};

function reload(){
    chrome.runtime.sendMessage({action: 'reload'}, function(response){});
}

document.addEventListener('DOMContentLoaded', init);

