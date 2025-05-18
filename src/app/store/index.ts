export const STATE_COUNTER = 'counter';

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

export const STATE_POST = "post";

export const initialPostListState : Post[] = [
    {
        id: 1,
        title : "Test post 1",
        description : "Test post description 1"
    },
    {
        id: 2,
        title : "Test post 2",
        description : "Test post description 2"
    },
    {
        id: 3,
        title : "Test post 3",
        description : "Test post description 3"
    }
]

export const initialPostState =  initialPostListState


export const AppState = {
    counter: initialCounterState
};

