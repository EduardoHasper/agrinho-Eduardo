function simular(tipoPratica) {
    const resultadoDiv = document.getElementById('resultado-simulador');
    
    let mensagem = "";

    switch(tipoPratica) {
        case 'tradicional':
            mensagem = `
                <div style="text-align: left;">
                    <strong style="color: #c0392b;">⚠️ ALERTA:</strong><br>
                    <strong>Produção:</strong> Alta a curto prazo, mas cai com o tempo devido ao esgotamento do solo.<br>
                    <strong>Meio Ambiente:</strong> Alto desgaste do solo, poluição de rios por excesso de químicos e perda de biodiversidade. 
                </div>`;
            break;
            
        case 'tecnologica':
            mensagem = `
                <div style="text-align: left;">
                    <strong style="color: #2980b9;">🚀 RESULTADO:</strong><br>
                    <strong>Produção:</strong> Maximizada e muito eficiente.<br>
                    <strong>Meio Ambiente:</strong> Redução significativa do desperdício de água e insumos devido à aplicação precisa por drones e sensores.
                </div>`;
            break;
            
        case 'sustentavel':
            mensagem = `
                <div style="text-align: left;">
                    <strong style="color: #27ae60;">🌱 EQUILÍBRIO PERFEITO:</strong><br>
                    <strong>Produção:</strong> Estável, segura e com alta qualidade biológica.<br>
                    <strong>Meio Ambiente:</strong> Recuperação do solo (pela rotação de culturas), sequestro de carbono da atmosfera e convivência harmônica com florestas nativas.
                </div>`;
            break;
            
        default:
            mensagem = "<p><em>Escolha uma prática para simular.</em></p>";
    }

    // Insere o resultado com uma leve animação de opacidade
    resultadoDiv.style.opacity = 0;
    setTimeout(() => {
        resultadoDiv.innerHTML = mensagem;
        resultadoDiv.style.opacity = 1;
    }, 150);
}