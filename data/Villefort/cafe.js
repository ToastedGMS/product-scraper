/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado Villefort
//the map contains the product title and its SKU value
//the SKU value is retrieved from the Villefort supermarket API
/////////////////////////////////////////////////////////////////

//villefort usa productId e não SKUs, porém para deixar o codigo uniforme decidi manter a mesma estrutura de dados
//villefort uses productId and not SKUs, but I opted on keeping the same data structure to keep the code uniform

const cafeSKUArray = [
	{
		id: 'cafe_tradicional_vasconcelos_500g',
		type: 'cafe',
		brand: 'Vasconcelos',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '10177', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_tradicional_barao_500g',
		type: 'cafe',
		brand: 'Barão',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '4196', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_tradicional_uniao_500g',
		type: 'cafe',
		brand: 'União',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '10072', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_tradicional_pilao_500g',
		type: 'cafe',
		brand: 'Pilão',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '13649', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_tradicional_caboclo_500g',
		type: 'cafe',
		brand: 'Caboclo',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '13650', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_tradicional_melitta_500g',
		type: 'cafe',
		brand: 'Melitta',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '4179', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_tradicional_fino_grao_500g',
		type: 'cafe',
		brand: 'Fino Grão',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '4109', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_fort_500g',
		type: 'cafe',
		brand: 'Fort',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '4099', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_villefort_tradicional_500g',
		type: 'cafe',
		brand: 'Villefort',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '14944', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_tres_coracoes_tradicional_500g',
		type: 'cafe',
		brand: '3 Corações',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Villefort',
		sku: '4237', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'cafe_extra_forte_pilao_500g_vacuo',
		type: 'cafe',
		brand: 'Pilâo',
		name: 'Cafe Extra Forte',
		weight: 500,
		packaging: 'vacuo',
		market: 'Villefort',
		sku: '13651', //productId in villefort's system | productId no sistema do villefort
	},
];

export default cafeSKUArray;
