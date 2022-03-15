import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setPlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}])
    };

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost}}>{children}</BlogContext.Provider>;
};

export default BlogContext;