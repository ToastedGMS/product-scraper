/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado Carrefour
//the map contains the product title and its SKU value
//the SKU value is retrieved from the Carrefour supermarket API
/////////////////////////////////////////////////////////////////

const cafeSKUArray = [
	{
		id: 'cafe_fort_500g',
		type: 'cafe',
		brand: 'Fort',
		name: 'Café Fort',
		weight: '500g',
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '4578',
	},
	{
		id: 'cafe_fino_grao_500g_tradicional',
		type: 'cafe',
		brand: 'Fino Grão',
		name: 'Café Tradicional',
		weight: '500g',
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '13290',
	},
	{
		id: 'cafe_pilao_500g_extraforte',
		type: 'cafe',
		brand: 'Pilão',
		name: 'Café Extraforte',
		weight: '500g',
		packaging: 'pacote',
		market: 'Carrefour',
		sku: '8973',
	},
	{
		id: 'cafe_pilao_500g_tradicional_vacuo',
		type: 'cafe',
		brand: 'Pilão',
		name: 'Café Tradicional',
		weight: '500g',
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '4536',
	},
	{
		id: 'cafe_tres_coracoes_500g_tradicional_vacuo',
		type: 'cafe',
		brand: '3 Corações',
		name: 'Café Tradicional',
		weight: '500g',
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '7488090',
	},
	{
		id: 'cafe_caboclo_500g_tradicional_vacuo',
		type: 'cafe',
		brand: 'Caboclo',
		name: 'Café Tradicional',
		weight: '500g',
		packaging: 'vácuo',
		market: 'Carrefour',
		sku: '2653',
	},
	{
		id: 'cafe_melitta_500g_tradicional',
		type: 'cafe',
		brand: 'Melitta',
		name: 'Café Tradicional',
		weight: '500g',
		packaging: 'unknown',
		market: 'Carrefour',
		sku: '14726',
	},
];
export default cafeSKUArray;
