import fetch from 'node-fetch';
import getVillefortToken from '../utils/getVillefortToken.js';

async function getPrice(productArray) {
	let token = await getVillefortToken();
	const results = [];
	for (const product of productArray) {
		try {
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
				continue;
			}

			const contentType = response.headers.get('content-type');
			if (!contentType || !contentType.includes('application/json')) {
				console.error(
					`Response is not JSON for product ${product.id}. Status: ${response.status}`
				);
				continue;
			}

			const res = await response.json();

			if (!res.data.produto) {
				console.error(
					`Error during price retrieval for product ${product.brand} at ${product.market}`
				);
			}

			results.push({
				Brand: product.brand,
				Product: res.data.produto.descricao,
				Price: Number(res.data.produto.preco),
				Market: product.market,
			});
		} catch (error) {
			console.error(error);
		}
	}
	return results;
}
export default getPrice;
