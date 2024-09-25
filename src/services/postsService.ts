import fs from 'fs/promises';
import  Post  from '../models/post';
import postDTO from '../interfaces/postDTO';
import { getFileData, writeFileData } from '../config/fileDAL';
import User from '../models/user';
import editPostDTO from '../interfaces/editPostDTO';

export default class PostService {
    public static async savePost(post: postDTO) : Promise<boolean | string> {
        
        const {user_id, content, response_to} = post;
        const newPost: Post = new Post(user_id, content, response_to);
        const data = await getFileData<Post>('posts');
        if (!data) {
            const res = await writeFileData<Post>('posts', [newPost]);
            return res ? newPost.post_id : res;
        }
        data.push(newPost);
        const res = await writeFileData<Post>('posts', data);
        return res ? newPost.post_id : res;
    }

    public static async getPosts() : Promise<boolean|Post[]> {
        const data = await getFileData<Post>('posts');
        return data ? data : false;
    }

    public static async searchPost(filterString: string) : Promise<boolean|Post[]> {
        const data = await getFileData<Post>('posts');
        return data ? data.filter((post) => post.content.includes(filterString)) : false;
    }


    public static async addLikeToPost(post_id: string, user_id: string) : Promise<boolean> {
        const data = await getFileData<Post>('posts');
        if (!data) {
            return false;
        }
        const index  = data.findIndex((post) => post.post_id === post_id);
        if (index === -1) {
            return false;
        }
        const post = data[index];
        if (post.likes_by.includes(user_id)) {
            return false;
        }
        post.likes_by.push(user_id);
        post.likes_count += 1;
        const res = await writeFileData<Post>('posts', data);
        return res;
    }


    public static async addDislikeToPost(post_id: string, user_id: string) : Promise<boolean> {
        const data = await getFileData<Post>('posts');
        if (!data) {
            return false;
        }
        const index  = data.findIndex((post) => post.post_id === post_id);
        if (index === -1) {
            return false;
        }
        const post = data[index];
        if (post.dislikes_by.includes(user_id)) {
            return false;
        }
        post.dislikes_by.push(user_id);
        post.dislikes_count += 1;
        const res = await writeFileData<Post>('posts', data);
        return res;
    }


    public static async registerLikeInUser(post_id: string, user_id: string) : Promise<boolean> {
        const data = await getFileData<User>('users');
        if (!data) {
            return false;
        }
        const index  = data.findIndex((user) => user.user_id === user_id);
        if (index === -1) {
            return false;
        }
        const user = data[index];
        if (user.like_posts_id.includes(post_id)) {
            return false;
        }
        user.like_posts_id.push(post_id);
        const res = await writeFileData('users', data);
        return res;
    }


    public static async registerDislikeInPost(post_id: string, user_id: string) : Promise<boolean> {
        const data = await getFileData<Post>('posts');
        if (!data) {
            return false;
        }
        const index  = data.findIndex((post) => post.post_id === post_id);
        if (index === -1) {
            return false;
        }
        const post = data[index];
        if (post.dislikes_by.includes(user_id)) {
            return false;
        }
        post.dislikes_by.push(user_id);
        const res = await writeFileData('posts', data);
        return res;
    }


    public static async registerDislikeInUser(post_id: string, user_id: string) : Promise<boolean> {
        const data = await getFileData<User>('users');
        if (!data) {
            return false;
        }
        const index  = data.findIndex((user) => user.user_id === user_id);
        if (index === -1) {
            return false;
        }
        const user = data[index];
        if (user.dislike_posts_id.includes(post_id)) {
            return false;
        }
        user.dislike_posts_id.push(post_id);
        const res = await writeFileData('users', data);
        return res;
    }


    public static async deletePost(post_id: string) : Promise<boolean> {
        const data = await getFileData<Post>('posts');
        if (!data) {
            return false;
        }
        const index  = data.findIndex((post) => post.post_id === post_id);
        if (index === -1) {
            return false;
        }
        data.splice(index, 1);
        const res = await writeFileData<Post>('posts', data);
        return res;
    }


    public static async editPost(updatedPost: editPostDTO ) : Promise<boolean> {
        const {post_id, content} = updatedPost;
        const data = await getFileData<Post>('posts');
        if (!data) {
            return false;
        }
        const index = data.findIndex((post) => post.post_id === post_id);
        if (index === -1) {
            return false;
        }
        data[index].content = content;
        const res = writeFileData<Post>('posts', data);
        return res;
    }

}