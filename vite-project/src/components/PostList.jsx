import React, { useState } from 'react';
import { useFetchPosts } from './hooks/useFetchPosts';
import {PostDetail} from './PostDetail';

export const PostList = () => {
    const { posts, isLoading, error } = useFetchPosts();
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (postId) => {
        setSelectedPost(postId);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <ul className="list-none p-0">
                {posts.map(post => (
                    <li
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        className="p-4 mb-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded transition-all"
                    >
                        <span className="font-bold">{post.title}</span> -
                        <span className="italic text-gray-600"> {post.comments_count} comments</span>
                    </li>
                ))}
            </ul>
            {selectedPost && <PostDetail postId={selectedPost} />}
        </div>
    );
};
