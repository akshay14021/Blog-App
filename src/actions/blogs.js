import firebase from '../firebase/firebase';

export const addBlog = (blog) => {
    return {
        type: 'ADD_BLOG',
        blog
    }
}

export const startAddBlog = (title = '', body = '', createdAt = 0) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/blogs`).push({ title, body, createdAt }).then((ref) => {
            dispatch(addBlog({ id: ref.key, title, body, createdAt }))
        })
    }
}

export const removeBlog = (id) => {
    return {
        type: 'REMOVE_BLOG',
        id
    }
}

export const startRemoveBlog = (id) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/blogs/${id}`).remove().then((ref) => {
            dispatch(removeBlog(id))
        })
    }
}

export const editBlog = (id, updates) => {
    return {
        type: 'EDIT_BLOG',
        id,
        updates
    }
}

export const startEditBlog = (id, updates) => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/blogs/${id}`).update({...updates}).then((ref) => {
            dispatch(editBlog(id, updates))
        })
    }
}

export const setBlogs = (blogs) => {
    return {
        type: 'SET_BLOGS',
        blogs
    }
}

export const startSetBlogs = () => {
    return (dispatch, getState) => {
        return firebase.database().ref(`users/${getState().auth.uid}/blogs`).once('value').then((snapshot) => {
            const blogs = []
            snapshot.forEach((childSnapshot) => {
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setBlogs(blogs))
        })
    }
}