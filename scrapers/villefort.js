import fetch from 'node-fetch';
import getVillefortToken from '../utils/getVillefortToken.js';

async function getProductDetails(productId) {
	let token = await getVillefortToken();

	let response = await fetch(
		`https://services.vipcommerce.com.br/api-admin/v1/loja/produtos/${productId}/filial/1/centro_distribuicao/1/detalhes`,
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
		return getProductDetails(productId);
	}

	const res = await response.json();
	return {
		Product: res.data.produto.descricao,
		Price: res.data.produto.preco,
	};
}

console.log(await getProductDetails(5401));
