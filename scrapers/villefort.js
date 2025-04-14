import fetch from 'node-fetch';
import getVillefortToken from '../utils/getVillefortToken.js';

async function getPrice(productArray) {
	let token = await getVillefortToken();
	const results = [];

	for (const product of productArray) {
		let response = await fetch(
			`https://services.vipcommerce.com.br/api-admin/v1/loja/produtos/${product.sku}/filial/1/centro_distribuicao/1/detalhes`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					authority: 'services.vipcommerce.com.br',
					'Content-Type': 'application/json',
					Origin: 'https://www.villefortentrega.com.br',
					Referer: 'https://www.villefortentrega.com.br/',
					organizationid: '120',
					Domainkey: 'villefortentrega.com.br',
				},
			}
		);

		if (response.status === 403) {
			token = await getVillefortToken();
			return getPrice(productArray);
		}

		const res = await response.json();
		results.push({
			Brand: product.brand,
			Product: res.data.produto.descricao,
			Price: Number(res.data.produto.preco),
			Market: product.market,
		});
	}
	return results;
}

export default getPrice;
