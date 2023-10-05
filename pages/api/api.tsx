import axios from "axios";

const BASE_URL = 'http://vra.local';

export const fetchPosts = async (token: any) => {
    try {
        const response = await axios.get(`${BASE_URL}/wp-json/wp/v2/posts`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.data) {
            return response.data;
        } else {
            throw new Error('No data received from the API');
        }
    } catch (error) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
};

export const getBlogPostBySlug = async (token: string | undefined, slug: string | string[] | undefined) => {
    try {
        const response = await axios.get(`${BASE_URL}/wp-json/wp/v2/posts?slug=${slug}`, {
            params: {
                slug,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
            return response.data[0];
        } else {
            throw new Error('No post found with the provided slug');
        }
    } catch (error) {
        throw new Error(`Error fetching post by slug: ${error.message}`);
    }
};