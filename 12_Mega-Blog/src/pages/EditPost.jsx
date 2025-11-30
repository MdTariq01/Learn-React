import React , {useEffect , useState} from "react";
import {container , PostForm} from "../components";
import appwriteService from "../appwrite/config"
import { useParams , useNavigate } from "react-router-dom";

const EditPost = () => {
    const [post , setPost] = useState(null)
    const {slug} = useParams
    const navigate = useNavigate();

    useEffect(() => {
       if(slug) {
        appwriteService.getPost(slug).then((post) => {
            if(post) {
                setPost(post.document)
            }
        })
       }
    } , [slug , navigate])

    return (
        <div>he</div>
    )
}

export default EditPost;