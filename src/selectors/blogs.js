const visibleBlogs = (blogs, filters) => {
    return blogs.filter((blog) => {
        const textMatch = blog.title.toLowerCase().includes(filters.text.toLowerCase())
        return textMatch
    }).sort((a, b) => {
        if (filters.sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
}

export default visibleBlogs;