import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Detail() {
    const param = useParams();
    const [tour, setUser] = useState('')
    console.log(param);
    useEffect(() => {
        axios.get('http://localhost:3000/tuors/'+param.id)
        .then(res =>{setUser(res.data)})}
    ,[param.id])
    
    return (
        <div>
        <h2>Chi tiết tour</h2>
        <p>Tour du lịch {tour.title}</p>
        <p>Giá: {tour.price}</p>
        <p>Mô tả: {tour.description}</p>
        </div>
    )
}