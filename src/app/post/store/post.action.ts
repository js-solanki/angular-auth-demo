import { createAction, props } from "@ngrx/store";

export const GET_POST_ACTION = "[Post page] : get post";
export const ADD_POST_ACTION = "[Post page] : add post";
export const UPDATE_POST_ACTION = "[Post page] : update post";
export const EDIT_POST_ACTION = "[Post page] : edit post";
export const DELETE_POST_ACTION = "[Post page] : delete post";

export const getPost = createAction(GET_POST_ACTION);
export const addPost = createAction(ADD_POST_ACTION,props<{name : string,description :string}>());
export const updatePost = createAction(UPDATE_POST_ACTION,props<{id: number}>());
export const editPost = createAction(EDIT_POST_ACTION);
export const deletePost = createAction(DELETE_POST_ACTION,props<{id: number}>());