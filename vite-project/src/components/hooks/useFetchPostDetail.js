import { useEffect, useState } from 'react';

export const useFetchPostDetail = (postId) => {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPostDetail = async () => {
        try {
            const response = await fetch(`http://laboratorio.test/api/posts/${postId}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setPost(data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPostDetail();
    }, [postId]);

    return { post, isLoading, error };
};
