export default interface IPost {
    post_id: string
    content: string
    created_at: Date
    user_id: string
    comments_count: number
    is_root: boolean
    is_tailed: boolean
    response_to: string | undefined
    responses_id: string[]
    views_count: number
    likes_count: number
    dislikes_count: number    
    dislikes_by : string []
    likes_by : string []
}