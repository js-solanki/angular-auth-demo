export interface CounterState {
    count: number;
}
export const initialCounterState: CounterState = {
    count: 0
};

export interface Post {
    id: number;
    title : string;
    description: string
}

export interface postState {
        list : Post[]
        add : Post
}


export const initialPostListState : Post[] = [
    {
        id: 1,
        title : "Test post 1",
        description : "Test post description 1"
    },
    {
        id: 1,
        title : "Test post 2",
        description : "Test post description 1"
    },
    {
        id: 1,
        title : "Test post 3",
        description : "Test post description 1"
    }
]

export const initialPostState = {
    list : initialPostListState,
    add : {
        id : 0,
        title : 0,
        description : 0
    }
}

export const AppState = {
    counter: initialCounterState
};

