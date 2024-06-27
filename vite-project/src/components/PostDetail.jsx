import React from 'react';
import { useFetchPostDetail } from './hooks/useFetchPostDetail';

export const PostDetail = ({ postId }) => {
    const { post, isLoading, error } = useFetchPostDetail(postId);

    if (isLoading) return <div className="p-5">Loading...</div>;
    if (error) return <div className="p-5">Error: {error.message}</div>;

    return (
        <div className="p-5 mt-5 border-t border-gray-300">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-lg mb-4">{post.content}</p>
            <div className="comments">
                <h3 className="text-xl font-semibold mb-2">Comments</h3>
                <ul className="list-none p-0">
                    {post.comments && post.comments.length > 0 ? (
                        post.comments.map(comment => (
                            <li key={comment.id} className="p-3 mb-2 bg-gray-50 border rounded">
                                {comment.content}
                            </li>
                        ))
                    ) : (
                        <li className="p-3 mb-2 bg-gray-50 border rounded">No comments</li>
                    )}
                </ul>
            </div>
        </div>
    );
};
