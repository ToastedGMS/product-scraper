/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado Villefort
//the map contains the product title and its SKU value
//the SKU value is retrieved from the Villefort supermarket API
/////////////////////////////////////////////////////////////////

//villefort usa productId e não SKUs, porém para deixar o codigo uniforme decidi manter a mesma estrutura de dados
//villefort uses productId and not SKUs, but I opted on keeping the same data structure to keep the code uniform

const arrozSKUArray = [
	{
		id: 'arroz_agulhinha_tipo1_longo_paranaiba_5kg',
		type: 'arroz',
		brand: 'Paranaíba',
		name: 'Arroz Agulhinha Tipo 1 Longo Paranaíba 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '3026', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_carrijo_longo_tipo1_5kg',
		type: 'arroz',
		brand: 'Carrijo',
		name: 'Arroz Agulhinha Carrijo LT1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '13744', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_santa_amalia_tipo1_5kg',
		type: 'arroz',
		brand: 'Santa Amalia',
		name: 'Arroz Agulhinha Santa Amalia Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '12709', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_prato_rico_tipo1_5kg',
		type: 'arroz',
		brand: 'Prato Rico',
		name: 'Arroz Agulhinha Prato Rico Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '11871', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_primus_tipo1_5kg',
		type: 'arroz',
		brand: 'Primus',
		name: 'Arroz Agulhinha Primus Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '10455', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_codisul_tipo1_5kg',
		type: 'arroz',
		brand: 'Codisul',
		name: 'Arroz Agulhinha Codisul Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '8307', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_patosul_longo_tipo1_5kg',
		type: 'arroz',
		brand: 'Patosul',
		name: 'Arroz Agulhinha Patosul Longo Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '5454', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_camil_longo_tipo1_5kg',
		type: 'arroz',
		brand: 'Camil',
		name: 'Arroz Agulhinha Camil Longo Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '1026', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_villefort_tipo1_5kg',
		type: 'arroz',
		brand: 'Villefort',
		name: 'Arroz Agulhinha Villefort Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '1040', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_prato_fino_longo_tipo1_5kg',
		type: 'arroz',
		brand: 'Prato Fino',
		name: 'Arroz Agulhinha Prato Fino Longo Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '1027', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_reserva_codil_plus_5kg',
		type: 'arroz',
		brand: 'Codil',
		name: 'Arroz Agulhinha Reserva Codil Plus 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '1036', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_agulhinha_premium_codil_longo_tipo1_5kg',
		type: 'arroz',
		brand: 'Codil',
		name: 'Arroz Agulhinha Premium Codil Longo Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Villefort',
		sku: '1034', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_parboilizado_prato_fino_longo_tipo1_5kg',
		type: 'arroz',
		brand: 'Prato Fino',
		name: 'Arroz Parboilizado Prato Fino Longo Tipo 1 5kg',
		weight: 5,
		parboil: true,
		market: 'Villefort',
		sku: '4850', //productId in villefort's system | productId no sistema do villefort
	},
	{
		id: 'arroz_parboilizado_codil_gold_longo_tipo1_5kg',
		type: 'arroz',
		brand: 'Codil',
		name: 'Arroz Parboilizado Codil Gold Longo Tipo 1 5kg',
		weight: 5,
		parboil: true,
		market: 'Villefort',
		sku: '1035', //productId in villefort's system | productId no sistema do villefort
	},
];

export default arrozSKUArray;
