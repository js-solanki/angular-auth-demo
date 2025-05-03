import { createAction } from "@ngrx/store";

export const getPost = createAction('[Post page] : get post');
export const addPost = createAction('[Post page] : add post');
export const updatePost = createAction('[Post page] : update post');
export const editPost = createAction('[Post page] : edit post');
export const deletePost = createAction('[Post page] : delete post');