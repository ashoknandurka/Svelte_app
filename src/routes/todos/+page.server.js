// @ts-nocheck
import * as database from '$lib/server/database.js';

export function load({ cookies }) {
	let userid = cookies.get('userid');

	if (!userid) {
		userid = crypto.randomUUID();
		cookies.set('userid', userid, { path: '/todos' });
	}

	return {
		todos: database.getTodos(userid)
	};
}
