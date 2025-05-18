import { createReducer, on, props } from "@ngrx/store";
import { initialPostListState, initialPostState } from "../../store";
import { addPost, deletePost, getPost, updatePost } from "./post.action";


export const postList = initialPostState;
export const PostReducer = createReducer(postList,
    on(getPost, (state) => {
        return state;
    }),
    on(addPost, (state,props) => {
        let data = [{id : state.length+1 , title : props.name , description : props.description}];
        let list =  [ ...state , ...data];
        return list;
    }),
    on(deletePost, (state,props) => {
        let data = state.filter((item:any) => {
           return item.id != props?.id;
        });
        return data;
    })
);