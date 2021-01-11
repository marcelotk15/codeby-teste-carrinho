const acima10Reais = require('./acima-10-reais.json')
const abaixo10Reais = require('./abaixo-10-reais.json')

const getCarrinho = (index) => {
  switch (index) {
    case 'acima':
      return acima10Reais;
    case 'abaixo':
      return abaixo10Reais;
    default:
      return {}
  }
}

export default getCarrinho