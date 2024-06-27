import { useEffect, useState } from 'react';

export const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPosts = async () => {
        try {
            const response = await fetch('http://laboratorio.test/api/posts');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return { posts, isLoading, error };
};
