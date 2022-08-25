import getAntiCashQuery from 'pineglade-app/lib/getAntiCashQuery.js';
import { isDev } from 'pineglade-app/constants.js';

const BASE_FONT_SIZE = 18;
const models = ['Project', 'Index', 'NotFound'];

export default {
	async getProps(url) {
		const antiCashQuery = getAntiCashQuery();

		const [ProjectModel, IndexModel, NotFoundModel] = await Promise.all(
			models.map(async (Model) => {
				return await import(`./model/${Model}.model.js${antiCashQuery}`).then(
					(data) => data.default
				);
			})
		);

		return {
			isDev,
			name: 'Scandi',
			pages: {
				'/': IndexModel.get(ProjectModel),
				'/404.html': NotFoundModel
			},
			project: ProjectModel,
			url
		};
	},
	postcss: {
		customMedia: {
			importFrom: 'source/styles/common/mq.css'
		},
		functions: {
			rem(value) {
				return `calc(${value}rem / ${BASE_FONT_SIZE})`;
			}
		}
	}
};
