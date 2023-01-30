import { API } from "../../API/Config";

const Project = {
    async GET() {
        const { data } = await API.get('/posts/get')
        return data
    },
    async POST(userid, formdata) {
        const { data } = await API.post(`/posts/add/${userid}`, formdata)
        return data
    },
    async DELETE(postid, userid) {
        const { data } = await API.delete(`/posts/delete/${postid}/${userid}`)
        return data
    }
}

export default Project