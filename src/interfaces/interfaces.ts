
interface IProfile {
    nickname: string
    description : string
    image_url : string
}


interface IUser {
    user_id: string
    name: string
    email: string
    phone: string
    password: string
    createdAt: Date
    followers_id: string[]
    following_id: string[]
    posts_id: string[]
    likes_id: string[]
    dislikes_id: string[]
    profile : IProfile
}


interface IPost {
    post_id: string
    content: string
    createdAt: Date
    user_id: string
    comments_count: number
    is_root: boolean
    is_tailed: boolean
    response_to: string
    responses_id: string[]
    views_count: number
    likes_count: number
    dislikes_count: number    
    likes_id: string[]
    dislikes_id: string[]
}

interface ILike {
    like_id: string
    post_id: string
    user_id: string
}


class Post implements IPost {
    post_id: string
    content: string
    createdAt: Date
    user_id: string
    comments_count: number
    is_root: boolean
    is_tailed: boolean
    response_to: string
    responses_id: string[]
    views_count: number
    likes_count: number
    dislikes_count: number
    likes_id: string[]
    dislikes_id: string[]

    constructor(post: IPost) {
        this.post_id = post.post_id     
        this.content = post.content
        this.createdAt = post.createdAt
        this.user_id = post.user_id
        this.comments_count = post.comments_count
        this.is_root = post.is_root
        this.is_tailed = post.is_tailed
        this.response_to = post.response_to
        this.responses_id = post.responses_id
        this.views_count = post.views_count
        this.likes_count = post.likes_count
        this.dislikes_count = post.dislikes_count
        this.likes_id = post.likes_id
        this.dislikes_id = post.dislikes_id
    }
}