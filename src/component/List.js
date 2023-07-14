import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function List() {
    const { state } = useLocation();
    console.log(state);

    const [list, setList] = useState([]);
    // const [classRoom, setListClass] = useState({});
    useEffect (() => {
        axios.get('http://localhost:3000/tuors')
            .then(Response => {setList(Response.data)})
            .catch(error => {
                console.error(error);

            })

        // axios.get('http://localhost:8080/api/classroom/all')
        // .then(Response => {setListClass(Response.data)})
    },[])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/tuors/'+id)
            .then(() => {
                alert("Xóa thành công");
                const updatedList = list.filter(student => student.id !== id);
                setList(updatedList);
            }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <h2>Danh sách Tour du lịch</h2>
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Giá</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((tour, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{tour.title}</td>
                            <td>{tour.price}</td>
                            <td className="button-group">
                                <Link to={'/edit/'+tour.id}><button>Update</button></Link>
                                <Link to={'/detail/'+tour.id}><button>Detail</button></Link>
                                <button onClick={() => handleDelete(tour.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}