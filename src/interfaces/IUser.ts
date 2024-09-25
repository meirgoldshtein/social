
export default interface IUser {
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
    nickname: string
    description : string
    image_url : string
}