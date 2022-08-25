const addressData = 'г. Санкт-петербург, ул. Большая Конюшенная, 19';

export default {
	contacts: {
		address: `<a href="https://yandex.ru/maps/2/saint-petersburg/house/bolshaya_konyushennaya_ulitsa_19_8/Z0kYdQVjSEQPQFtjfXVyeXpgYQ==/?ll=30.324157%2C59.937550&utm_medium=mapframe&utm_source=maps&z=16.63">${addressData}</a>`,
		addressData,
		company: 'ИП Королёва А.А.',
		companyUrl: 'fake',
		phone: '+7 (981) 857-46-24',
		phoneNumber: '+79818574624'
	},
	lang: 'ru',
	logo: {
		alt: 'Лого SCANDI',
		height: 25,
		images: [
			{
				url: '/images/logo.svg'
			}
		],
		width: 91
	},
	name: 'SCANDI',
	nav: [
		{
			alias: 'about',
			title: 'О компании'
		},
		{
			alias: 'portfolio',
			title: 'Портфолио'
		},
		{
			alias: 'team',
			title: 'Команда'
		},
		{
			alias: 'process',
			title: 'Как мы работаем'
		},
		{
			alias: 'reviews',
			title: 'Отзывы клиентов'
		},
		{
			alias: 'ticket',
			title: 'Оставить заявку'
		}
	]
};
