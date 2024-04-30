type PostProps = {
    id: string,
    title: string,
    content: string,
    description: string,
    authorName: string
}

const Post = ({ id, title, content ,description, authorName } : PostProps) => {
    return (
        <div className="post-box">
            <h2>{title}</h2>
            <h3>{authorName}</h3>
            <p>{content}</p>
            <p>{description}</p>
        </div>
    )
}

export default Post

