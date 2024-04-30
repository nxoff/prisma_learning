import prisma from "@/lib/prisma"
import Post from "@/components/Post"

import Link from "next/link"

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { username: true }
      }
    }
  })

  return posts
}

const Home = async() => {

  const posts = await getPosts()

  console.log(posts[0].content)

  return (
    <div>
      <header>
        <Link href='./create-post'>create your own post</Link>
        <h1>Posts</h1>
      </header>
        {
          posts.map(post => {
            return (
              <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              description={post.description}
              authorName={post.author.username} />
            )
          })
        }
    </div>
  )
}

export default Home