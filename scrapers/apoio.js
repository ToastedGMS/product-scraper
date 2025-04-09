import fetch from 'node-fetch';

/////////////////////////////////////////////////////////////////
//o mapa vai conter o titulo do produto e seu numero de SKU
//o valor de SKU é retirado da API do supermercado apoio mineiro
//the map contains the product title and its SKU value
//the SKU value is retrieved from the apoio supermarket API
/////////////////////////////////////////////////////////////////

const cafeSKUArray = [
	{
		id: 'cafe_tres_coracoes_500g_tradicional',
		type: 'cafe',
		brand: '3 Corações',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '7645',
	},
	{
		id: 'cafe_pilao_500g_tradicional',
		type: 'cafe',
		brand: 'Pilão',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '6791',
	},
	{
		id: 'cafe_barao_500g_tradicional',
		type: 'cafe',
		brand: 'Barão',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '10420',
	},
	{
		id: 'cafe_nova_suissa_500g_tradicional',
		type: 'cafe',
		brand: 'Nova Suissa',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '18386',
	},
	{
		id: 'cafe_fino_grao_500g_tradicional',
		type: 'cafe',
		brand: 'Fino Grão',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '7618',
	},
	{
		id: 'cafe_caboclo_tradicional_500g',
		type: 'cafe',
		brand: 'Caboclo',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '20147',
	},
	{
		id: 'cafe_dom_pedro_500g_tradicional',
		type: 'cafe',
		brand: 'Dom Pedro',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '128881',
	},
	{
		id: 'cafe_fort_500g',
		type: 'cafe',
		brand: 'Fort',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '75',
	},
	{
		id: 'cafe_uniao_500g_tradicional',
		type: 'cafe',
		brand: 'União',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'pacote',
		market: 'Apoio Mineiro',
		sku: '123323',
	},
	{
		id: 'cafe_pilao_500g_tradicional_vacuo',
		type: 'cafe',
		brand: 'Pilão',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Apoio Mineiro',
		sku: '10534',
	},
	{
		id: 'cafe_tres_coracoes_500g_tradicional_vacuo',
		type: 'cafe',
		brand: '3 Corações',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'vácuo',
		market: 'Apoio Mineiro',
		sku: '7646',
	},
	{
		id: 'cafe_melitta_500g_tradicional',
		type: 'cafe',
		brand: 'Melitta',
		name: 'Cafe Tradicional',
		weight: 500,
		packaging: 'unknown',
		market: 'Apoio Mineiro',
		sku: '5583',
	},
	{
		id: 'fake_product_test',
		type: 'cafe',
		brand: 'Product',
		name: 'Product',
		weight: null,
		packaging: 'unknown',
		market: 'Apoio Mineiro',
		sku: '999999999',
	},
];

const arrozSKUArray = [
	{
		id: 'arroz_branco_fino_camil_tipo1_5kg',
		type: 'arroz',
		brand: 'Camil',
		name: 'Arroz Branco Fino Camil Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '8140',
	},
	{
		id: 'arroz_branco_prato_fino_tipo1_5kg',
		type: 'arroz',
		brand: 'Prato Fino',
		name: 'Arroz Branco Prato Fino Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '10487',
	},
	{
		id: 'arroz_tio_joao_tipo1_graos_nobres_5kg',
		type: 'arroz',
		brand: 'Tio Joao',
		name: 'Arroz Tio João 100% Grãos Nobres Tipo 1 Classe Longo Fino 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '7931',
	},
	{
		id: 'arroz_polido_super_ecco_tipo1_5kg',
		type: 'arroz',
		brand: 'Super Ecco',
		name: 'Arroz Polido Tipo 1 Super Ecco Pacote 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '1783',
	},
	{
		id: 'arroz_polido_pilecco_nobre_tipo1_5kg',
		type: 'arroz',
		brand: 'Pilecco Nobre',
		name: 'Arroz Polido Tipo 1 Pilecco Nobre Pacote 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '597',
	},
	{
		id: 'arroz_agulhinha_carrijo_tipo1_5kg',
		type: 'arroz',
		brand: 'Carrijo',
		name: 'Arroz Agulhinha Tipo 1 Carrijo Pacote 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '12066',
	},
	{
		id: 'arroz_branco_vasconcelos_tipo1_5kg',
		type: 'arroz',
		brand: 'Vasconcelos',
		name: 'Arroz Branco Vasconcelos Tipo 1 Pacote 5Kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '42706',
	},
	{
		id: 'arroz_tia_ju_tipo1_5kg',
		type: 'arroz',
		brand: 'Tia Ju',
		name: 'Arroz Tia Ju Tipo 1 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '20960',
	},
	{
		id: 'arroz_prato_rico_5kg',
		type: 'arroz',
		brand: 'Prato Rico',
		name: 'Arroz Prato Rico 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '126857',
	},
	{
		id: 'arroz_branco_apreco_tipo1_5kg',
		type: 'arroz',
		brand: 'Apreco',
		name: 'Arroz Branco Tipo 1 Apreço 5kg',
		weight: 5,
		parboil: false,
		market: 'Apoio Mineiro',
		sku: '42284',
	},
	{
		id: 'arroz_prato_fino_parboilizado_tipo1_5kg',
		type: 'arroz',
		brand: 'Prato Fino',
		name: 'Arroz Prato Fino Parboilizado Tipo 1 Pacote 5kg',
		weight: 5,
		parboil: true,
		market: 'Apoio Mineiro',
		sku: '291',
	},
	{
		id: 'arroz_tio_joao_parboilizado_tipo1_5kg',
		type: 'arroz',
		brand: 'Tio Joao',
		name: 'Arroz Tio João Parboilizado Tipo 1 Pacote 5 kg',
		weight: 5,
		parboil: true,
		market: 'Apoio Mineiro',
		sku: '7731',
	},
];

const feijaoSKUArray = [
	{
		id: 'feijao_carioca_vasconcelos_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Vasconcelos',
		name: 'Feijão Carioca Vasconcelos 1kg',
		weight: 1,
		market: 'Apoio Mineiro',
		sku: '125316',
	},
	{
		id: 'feijao_carioca_tche_banda_sabor_campo_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Sabor Campo',
		name: 'Feijão Carioca Tche Banda Sabor Campo 1kg',
		weight: 1,
		market: 'Apoio Mineiro',
		sku: '22526',
	},
	{
		id: 'feijao_carioca_apreco_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Apreço',
		name: 'Feijão Carioca Apreço 1kg',
		weight: 1,
		market: 'Apoio Mineiro',
		sku: '41951',
	},
	{
		id: 'feijao_carioca_cariri_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Cariri',
		name: 'Feijão Carioca Cariri 1kg',
		weight: 1,
		market: 'Apoio Mineiro',
		sku: '113883',
	},
	{
		id: 'feijao_carioca_pacha_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Pachá',
		name: 'Feijão Carioca Pachá 1kg',
		weight: 1,
		market: 'Apoio Mineiro',
		sku: '14495',
	},
	{
		id: 'feijao_carioca_galante_1kg',
		type: 'feijao',
		variety: 'carioca',
		brand: 'Galante',
		name: 'Feijão Carioca Galante 1kg',
		weight: 1,
		market: 'Apoio Mineiro',
		sku: '8159',
	},
];

async function getPrice(productArray) {
	const results = [];

	for (const query of productArray) {
		const { brand, sku, market } = query;

		try {
			const response = await fetch(
				`https://www.apoioentrega.com/api/catalog_system/pub/products/search?fq=skuId:${sku}`
			);
			const data = await response.json();
			const product = data[0];

			if (!product) {
				console.warn(`Produto não encontrado: ${brand}`);
				continue;
			}

			const item = product.items?.[0];
			const seller = item?.sellers?.[0];
			const offer = seller?.commertialOffer;

			results.push({
				Brand: brand,
				Product: product.productName || 'Desconhecido',
				Price: offer?.Price ?? 'Indisponível',
				Market: market,
			});
		} catch (error) {
			console.error(`Erro ao buscar ${brand} (SKU: ${sku}):`, error.message);
			results.push({
				Brand: brand,
				Product: 'Erro',
				Price: 'Erro',
				Market: market,
			});
		}
	}

	return results;
}

export default async function scrapeAll() {
	const cafeResults = await getPrice(cafeSKUArray);

	const arrozResults = await getPrice(arrozSKUArray);

	const feijaoResults = await getPrice(feijaoSKUArray);
	const allPrices = {
		cafe: cafeResults,
		arroz: arrozResults,
		feijao: feijaoResults,
	};
	console.log(
		'Obs: Os preços dos cafes do tipo extraforte e tradicional são iguais e por isso seus valores sao requisitados juntos.'
	);
	return allPrices;
}

console.log(await scrapeAll());
