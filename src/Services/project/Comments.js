import { API } from '../../API/Config'

const Comments = {
    async POST(postid, comment) {
        const { data } = await API.post(`/comments/add/${postid}`, comment)
        return data
    },
    async GET(postid) {
        const { data } = await API.get(`/comments/get/${postid}`)
        return data
    }
}


export default Comments;