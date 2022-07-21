import axios from "axios"
axios.defaults.withCredentials = true
const serverURL = ''

export const postForm = async (data) => {
    try {
        const resp = await axios.post('/forms/', {
            ...data
        })
        // console.log(resp.data)
        return { ...resp.data, data: { error: false } }
    } catch (error) {
        // console.log(error.response.data)
        return error.response
    }
}

export const handleLogin = () => {
    window.open(`${serverURL}/auth/google`, '_self')
}
export const handleLogout = () => {
    window.open(`${serverURL}/auth/logout`, '_self')
}

export const isAdminCheck = async () => {
    try {
        const resp = await axios.get('/auth/admin/')
        console.log(resp.data.admin)
        if (resp.data.admin === true) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

export const getSchema = async () => {
    try {
        const resp = await axios.get('/forms/schema/')
        // console.log(resp.data)
        return resp.data
    } catch (error) {
        console.log(error)
        return false
    }
}
export const postSchema = async (data) => {
    try {
        const resp = await axios.post('/forms/schema/', { ...data })
        return resp.data
    } catch (error) {
        return error.response.data
    }
}

export const getMyPatients = async () => {
    try {
        const resp = await axios.get('/forms')
        // console.log(resp.data)
        return resp.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getAllPatients = async () => {
    try {
        const resp = await axios.get('/forms/all')
        // console.log(resp.data)
        return resp.data
    } catch (error) {
        // console.log(error)
        return null
    }
}

export const addNewUser = async (email) => {
    try {
        console.log(email)
        const resp = await axios.post('/admin/users', { email: email })
        return { ...resp.data, error: false }
    } catch (error) {
        return { ...error.response.data, error: true }
    }
}

export const getResults = async () => {
    try {
        const resp = await axios.get('/admin/results')
        console.log(resp.data)
        return { ...resp.data, error: false }
    } catch (error) {
        return { ...error.response.data, error: true }
    }
}

export const getAllUsers = async () => {
    try {
        const resp = await axios.get('/admin/users')
        return resp.data
    } catch (error) {
        return { ...error.response.data, error: true }
    }
}