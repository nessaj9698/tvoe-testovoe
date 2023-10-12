import React from 'react'
import PostCard from './PostCard/PostCard'

import s from './PostCards.module.scss'

function PostCards({ posts }) {
  return (
    <div className={s.postsWrapper}>
        {posts.map(item => (
            <PostCard 
                key={item.title}
                post={item}/>
        ))}
    </div>
  )
}

export default PostCards