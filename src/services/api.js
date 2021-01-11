const acima10Reais = require('./acima-10-reais.json')
const abaixo10Reais = require('./abaixo-10-reais.json')

const getCarrinho = (index) => {
  switch (index) {
    case 'acima':
      return acima10Reais;
      break;
    case 'abaixo':
      return abaixo10Reais;
      break;
    default:
      return {}
      break;
  }
}

export default getCarrinho