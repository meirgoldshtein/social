
export default interface IUser {
    user_id: string
    name: string
    email: string
    phone: string
    password: string
    created_at: Date
    followers_id: string[]
    following_id: string[]
    posts_id: string[]
    like_posts_id : string []
    dislike_posts_id : string []
    nickname: string
    description : string
    image_url : string
}