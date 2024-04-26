export type todoItemT = {
	text: string;
	isDone: boolean;
	id: number;
};

export type todoListT = todoItemT[];

export type filterT = 'ALL' | 'DONE' | 'ACTIVE';
