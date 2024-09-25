export default interface IPost {
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