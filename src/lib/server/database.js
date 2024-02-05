// @ts-nocheck
// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

export function createTodo(userid, description) {

	// if (!db.has(userid)) {
	// 	db.set(userid, new Map());
	// }
    
    if(description === ''){
        throw new Error('todo must have a description');
    }
	const todos = db.get(userid);
//   console.log("before todos")
//     if([...db.values()].find((todo)=> todo.description === description)){
//         throw new Error('todo must be unique');
//     }

	const id = crypto.randomUUID();
	db.set(id, {
		id,
		description,
		done: false
	});

	return {
		id
	};
}

export function toggleTodo({userid,id,done}){
	const todos = db.get(userid);
	todos.get(id).done = done;
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
