const db = {
	projects: [{
		id: 0,
		category: 'Showreel',
		title: 'The Great Wall of China',
		description: 'Короткий шоурил о Великой Китайской стене',
		videoId: 'hz-5LijlF8o',
		date: new Date(2017, 8, 1)
	}, {
		id: 1,
		category: 'Музыкальный клип',
		title: 'Lucky Dee & Джерин – ID',
		description: 'Красивый и живой музыкальный клип, снятый в городе Костроме',
		videoId: 'xvU3nEK_0mg',
		date: new Date(2017, 4, 6)
	}, {
		id: 2,
		category: 'Showreel',
		title: 'Ярославская трикотажная фабрика',
		description: 'Большой шоурил, показывающий процесс производства на ЯРТФ',
		videoId: 'zQt1zOj3qpM',
		date: new Date(2017, 3, 24)
	}]
}

export default db;
export const projects = db.projects;