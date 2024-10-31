const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasTransporteParaTrabalho = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_deslocamento_para_trabalho)
    const minutos = Math.round((dados.tempo_medio_deslocamento_para_trabalho - horas) * 60)
    
    const trabalhadoresNoMundo = (dados.total_trabalhadores_mundo / 1e9)
    const porcentagemPessoasTransporteParaTrabalho = ((trabalhadoresNoMundo / pessoasNoMundo) * 100).toFixed(2);

    //const porcentagemPessoasTrabalhandoNoMundo = ((trabalhadoresNoMundo / pessoasNoMundo) * 100).toFixed(2);
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas, e que aproximadamente <span>${trabalhadoresNoMundo} bilhões</span> são trabalhadores e <span>${pessoasTransporteParaTrabalho} bilhões </span>delas necessitam de algum tipo de transporte para o trabalho, passando, em média, <span>${horas} horas</span> e <span>${minutos} minutos</span> em deslocamento? <br>Isso significa que aproximadamente <span>${porcentagemPessoasTransporteParaTrabalho}%</span> das pessoas que trabalham no mundo necessitam de transporte para chegar ao trabalho.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();