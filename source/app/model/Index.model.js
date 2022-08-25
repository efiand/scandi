const mapTitle = 'Адрес на карте';

export default {
	get({ nav, contacts: { address } }) {
		const ticketLink = nav.find(({ alias }) => alias === 'ticket');

		return {
			alias: 'Index',
			generate: true,
			promo: {
				description:
					'Подбираем текстиль, мебель и аксессуары под ваш интерьер, находим магазины и&nbsp;помогаем организовать доставку',
				slogan: 'Поможем сделать вашу квартиру уютнее',
				ticketLink
			},
			sections: [
				{
					achievements: [
						{
							key: 'лет опыта',
							value: 5
						},
						{
							key: 'проектов',
							value: 100
						},
						{
							key: 'наград',
							value: 10
						}
					],
					alias: 'about',
					content:
						'<p>Премиальный европейский текстиль — одно из самых главных направлений работы коллектива. Создавать неповторимые интерьеры для наших дорогих клиентов, уделяя внимание мельчайшим деталям — вот то,  что по-настоящему вдохновляет дизайнеров нашей студии.</p><p>Наш коллектив сделает все, чтобы после сотрудничества с нами, Вам было приятно сказать:<br>«Да! Это именно то, что действительно достойно моего дома!»</p>',
					picture: {
						alt: 'Премиальный европейский текстиль',
						height: 465,
						images: [
							{
								url: '/images/about.webp'
							}
						],
						width: 444
					},
					title: 'О нас'
				},
				{
					alias: 'portfolio',
					cases: [
						{
							content:
								'В квартире были светлые стены и тёплые цвета. Мы сконцентрировались<br>на отсылках к природе и сделали ребятам уютный интерьер, отсылающий к виллам островов Бали.',
							picture: {
								alt: 'Изображение 1',
								height: 451,
								images: [
									{
										url: '/images/case-1.webp'
									}
								],
								width: 488
							},
							title: 'Квартира-студия<br>30 кв.м.'
						},
						{
							content:
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos magnam pariatur doloribus error accusantium mollitia exercitationem iure? Aliquam dolorum esse ex. Beatae dignissimos mollitia magnam optio! Laborum ab libero doloremque optio beatae qui commodi id repudiandae, suscipit error, vitae a voluptatem quia dolores doloribus possimus quam, cumque alias. Earum aliquam odit explicabo nisi harum totam dicta autem temporibus et, quibusdam adipisci ex commodi ut voluptatem incidunt molestiae reiciendis praesentium eaque est molestias? Quisquam dolore corrupti itaque adipisci cupiditate laboriosam blanditiis veniam asperiores a, aut nulla incidunt, odio optio vitae. Culpa earum, expedita adipisci nemo provident perferendis. Quaerat corporis consequatur obcaecati necessitatibus porro! Nesciunt, eligendi natus. Vero reprehenderit nemo molestiae autem beatae laborum laboriosam commodi fugiat, eveniet quia aliquam ducimus ullam quibusdam quo quisquam quae non consequuntur voluptatibus et. Eum optio voluptates omnis nisi sapiente fugit! Alias delectus incidunt eaque optio voluptatibus voluptatum porro error, ea est atque sunt, accusamus repudiandae vel dolores ipsum illo quam dolorum vero, iure nihil assumenda consequatur ratione animi excepturi. Dolore quae ut totam molestias cupiditate, consequatur corrupti architecto accusamus obcaecati, exercitationem ipsa eveniet? Necessitatibus nam voluptatibus ipsam modi placeat repudiandae excepturi in molestias eum sequi libero assumenda, ab commodi similique molestiae rerum nobis nisi, repellendus nemo recusandae et soluta accusantium laboriosam exercitationem. Quaerat incidunt eius corporis totam amet commodi expedita repellat sit reprehenderit a in veritatis velit consectetur, voluptates excepturi fugiat consequuntur dolore tempora ratione, error at inventore harum nesciunt asperiores? Veniam iure asperiores deleniti tenetur sequi voluptatibus impedit debitis fugit. Quae corporis officiis est et quas veniam, expedita rem quaerat sequi eaque. Eius nemo, veritatis omnis soluta eaque perspiciatis recusandae odio sit minus repellat exercitationem ut numquam. Cupiditate repellendus impedit illum quidem. Excepturi vel est, quam repellat assumenda a eveniet veritatis, temporibus similique cum quis sunt inventore esse at iste suscipit earum ipsa aspernatur ea cupiditate doloribus ratione. Qui veritatis harum fugit, provident corrupti expedita delectus aliquam voluptatibus quam atque odio? Tempore temporibus rerum enim amet quidem ea numquam obcaecati ab debitis impedit?',
							picture: {
								alt: 'Изображение 2',
								height: 451,
								images: [
									{
										url: '/images/case-2.webp'
									}
								],
								width: 692
							},
							title: 'Квартира-студия<br>40 кв.м.'
						},
						{
							content:
								'В квартире были светлые стены и тёплые цвета. Мы сконцентрировались на отсылках к природе и сделали ребятам уютный интерьер, отсылающий к виллам островов Бали.',
							picture: {
								alt: 'Изображение 3',
								height: 451,
								images: [
									{
										url: '/images/case-3.webp'
									}
								],
								width: 692
							},
							title: 'Квартира-студия<br>50 кв.м.'
						},
						{
							content:
								'В квартире были светлые стены и тёплые цвета. Мы сконцентрировались на отсылках к природе и сделали ребятам уютный интерьер, отсылающий к виллам островов Бали.',
							picture: {
								alt: 'Изображение 4',
								height: 451,
								images: [
									{
										url: '/images/case-4.webp'
									}
								],
								width: 488
							},
							title: 'Квартира-студия<br>60 кв.м.'
						}
					].map((item) => ({ ...item, url: '#!' })),
					moreLink: {
						title: 'Смотреть ещё',
						url: '#!'
					},
					title: 'Наши работы'
				},
				{
					alias: 'team',
					people: [
						{
							content:
								'Это Маша, наш главный дизайнер. Она отвечает за дизайн-проект, приезжает к вам домой, общается<br>и помогает сделать вашу квартиру красивой и уютной.',
							name: 'Маша',
							photo: {
								alt: 'Маша',
								height: 249,
								images: [
									{
										url: '/images/stuff-1.webp'
									}
								],
								width: 320
							}
						},
						{
							content:
								'С нашим менеджером Сашей вы познакомитесь в первую очередь. Она проконсультирует вас, соберёт все документы и&nbsp;ответит на все вопросы.',
							name: 'Саша',
							photo: {
								alt: 'Саша',
								height: 251,
								images: [
									{
										url: '/images/stuff-2.webp'
									}
								],
								width: 320
							}
						},
						{
							content:
								'Катя тоже занимается дизайном. Она всегда находит общий язык с&nbsp;клиентами и точно знает,<br>как обустроить дом так, чтобы вам понравилось.',
							name: 'Катя',
							photo: {
								alt: 'Катя',
								height: 253,
								images: [
									{
										url: '/images/stuff-3.webp'
									}
								],
								width: 320
							}
						}
					],
					title: 'Команда'
				},
				{
					alias: 'process',
					steps: [
						'Знакомимся, выезжаем на&nbsp;объект, утверждаем концепцию, подписываем договор.',
						'Подбираем мебель, текстиль, аксессуары. Делаем 3D-визуализацию.',
						'Находим нужные магазины, помогаем с доставкой и&nbsp;оплатой товаров.',
						'Воплощаем проект в жизнь: расставляем мебель и цветы, вешаем шторы, находим места для мелочей'
					],
					title: 'Как мы работаем'
				},
				{
					alias: 'reviews',
					list: [
						{
							content:
								'<p>«Восторг! Спасибо, за комфортную жизнь. Очень рада, что выбрала вашу студию для украшения своего дома.</p><p>Работа шла быстро, было очень приятно общаться и взаимодествовать с&nbsp;сотрудниками. Не ожидала, что это будет так легко!</p><p>Буду советовать и своим друзьям к вам обращаться!»</p>',
							images: [
								{
									alt: 'Изображение 1',
									height: 272,
									images: [
										{
											url: '/images/review-1-1.webp'
										}
									],
									width: 407
								},
								{
									alt: 'Изображение 2',
									height: 272,
									images: [
										{
											url: '/images/review-1-2.webp'
										}
									],
									width: 407
								}
							],
							name: 'Анна Беловская'
						},
						{
							content: '<p>Восторг!</p>',
							images: [
								{
									alt: 'Изображение 1',
									height: 272,
									images: [
										{
											url: '/images/review-1-1.webp'
										}
									],
									width: 407
								},
								{
									alt: 'Изображение 2',
									height: 272,
									images: [
										{
											url: '/images/review-1-2.webp'
										}
									],
									width: 407
								}
							],
							name: 'Беловская'
						},
						{
							content: 'Спасибо, за комфортную жизнь',
							images: [
								{
									alt: 'Изображение 1',
									height: 272,
									images: [
										{
											url: '/images/review-1-1.webp'
										}
									],
									width: 407
								},
								{
									alt: 'Изображение 2',
									height: 272,
									images: [
										{
											url: '/images/review-1-2.webp'
										}
									],
									width: 407
								}
							],
							name: 'Анна'
						}
					],
					title: 'Отзывы'
				},
				{
					alias: 'ticket',
					content:
						'Оставьте свои контакты. Менеджер перезвонит в&nbsp;удобное вам время и ответит на все вопросы.',
					form: {
						action:
							'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe5VL6pU7QG91GMmn26A2oOK7fAGNaUTWIinNuOc3u-90_dXg/formResponse',
						fields: [
							{
								id: 'ticket-name',
								label: 'Ваше имя',
								message: 'Не менее двух букв',
								minlength: 2,
								name: 'entry.1148251147',
								required: true
							},
							{
								id: 'ticket-phone',
								label: 'Введите телефон',
								message: 'Не менее трёх цифр',
								name: 'entry.495378340',
								pattern: '.*\\d{3}.*',
								required: true,
								type: 'tel'
							}
						],
						submitTitle: 'Оставить заявку'
					},
					title: 'Оставить заявку'
				},
				{
					address,
					alias: 'map',
					background: '/images/case-bg.webp',
					frame: {
						height: 400,
						title: mapTitle,
						url: 'https://yandex.ru/map-widget/v1/-/CCURu-dWkD',
						width: 560
					},
					title: mapTitle
				}
			]
		};
	}
};
