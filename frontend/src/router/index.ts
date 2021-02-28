import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Announcements from '../components/Announcements.vue';
import News from '../components/News.vue';
import Search from '../components/Search.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Home,
		children: [
			{
				path: '',
				name: 'Announcements',
				component: Announcements
			},
			{
				path: 'news',
				name: 'News',
				component: News
			},
			{
				path: 'find',
				name: 'Search',
				component: Search
			}
		]
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
