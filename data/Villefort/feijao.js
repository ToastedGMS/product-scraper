/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado Villefort
//the map contains the product title and its SKU value
//the SKU value is retrieved from the Villefort supermarket API
/////////////////////////////////////////////////////////////////

//villefort usa productId e não SKUs, porém para deixar o codigo uniforme decidi manter a mesma estrutura de dados
//villefort uses productId and not SKUs, but I opted on keeping the same data structure to keep the code uniform

const feijaoSKUArray = [
	{
		id: 'feijao_carioca_dona_de_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Dona Dê',
		name: 'Feijão Carioca Dona Dê 1kg',
		weight: '1kg',
		market: 'Villefort',
		sku: '9863', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'feijao_carioca_camil_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Camil',
		name: 'Feijão Carioca Camil 1kg',
		weight: '1kg',
		market: 'Villefort',
		sku: '9080', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'feijao_carioca_vasconcelos_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Vasconcelos',
		name: 'Feijão Carioca Vasconcelos 1kg',
		weight: '1kg',
		market: 'Villefort',
		sku: '8614', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'feijao_carioca_codil_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Codil',
		name: 'Feijão Carioca Codil 1kg',
		weight: '1kg',
		market: 'Villefort',
		sku: '1081', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'feijao_carioca_codil_premium_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Codil',
		name: 'Feijão Carioca Codil Premium 1kg',
		weight: '1kg',
		market: 'Villefort',
		sku: '3054', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'feijao_carioca_pacha_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Pachá',
		name: 'Feijão Carioca Pachá 1kg',
		weight: '1kg',
		market: 'Villefort',
		sku: '3051', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'feijao_carioca_galante_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Galante',
		name: 'Feijão Carioca Galante 1kg',
		weight: '1kg',
		market: 'Villefort',
		sku: '3046', //productId in villefort's system | productId no sistema do villefort
	},
];

export default feijaoSKUArray;
