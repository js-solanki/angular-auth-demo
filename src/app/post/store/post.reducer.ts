import { createReducer, on } from "@ngrx/store";
import { initialPostListState, initialPostState } from "../../store";
import { getPost } from "./post.action";


export const postList = initialPostState;
export const PostReducer = createReducer(postList,
    on(getPost, (state) => {
        return {
            ...state,
        }
    }
    ));