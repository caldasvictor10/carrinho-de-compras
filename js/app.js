let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$0';

function adicionar () {
    let produtoSelecionado = (document.getElementById('produto').value);
    let quantidadeSelecionada = parseInt(document.getElementById('quantidade').value);
    
    let partes = produtoSelecionado.split('R$')
    let precoUnitario = parseInt(partes[1])
    
    let precoTotal = quantidadeSelecionada * precoUnitario

    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeSelecionada}x</span> ${partes[0]} <span class="texto-azul">R$${precoTotal}</span>
        </section>`

    totalGeral = totalGeral + precoTotal;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
}

function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    document.getElementById('quantidade').value = 1;
}

