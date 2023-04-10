import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';



const Read = () => {
    const [modal, setModal] = useState(false)

    const [data, setData] = useState([])
    const [tabledark, setTableDark] = useState('')
    const [rs, setrs] = useState({})


    // const [open, setOpen] = React.useState(false);
    // const [viewData, setViewData] = React.useState("");
    // const [show, setShow] = React.useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    // function getData() {
    //     axios
    //         .get("https://6385c2c4875ca3273d449ef1.mockapi.io/api/crud/crud-ramnish")
    //         .then((res) => {
    //             console.log(res.data)
    //             setData(res.data)
    //         });
    // }


    const getData = () => { 
        fetch(`https://6385c2c4875ca3273d449ef1.mockapi.io/api/crud/crud-ramnish`)
            .then(resp => resp.json())
            .then(resp => setData(resp))
    }

    const showDetail = (id) => {
        fetch(`https://.mockapi.io/api/crud/crud-ramnish/${id}`)
            .then(resp => resp.json())
            .then(res => setrs(res))
    }


    function handleDelete(id) {
        axios.delete(
            `https://6385c2c4875ca3273d449ef1.mockapi.io/api/crud/crud-ramnish/${id}`
        ).then(() => {
            getData()
        })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(() => {
        getData();
    }, []);

console.log(rs)
    return (
        <>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox"
                    onClick={() => {
                        if (tabledark === 'table-dark') setTableDark("")
                        else setTableDark("table-dark")
                    }}
                />
            </div>
            <div className='d-flex justify-content-between'>
                <h2>Read Operation</h2>
                <Link to="/">
                    <button className='btn btn-info'>Create</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Details</th>
                        <th scope="col">Modal</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                {
                    data.map((eachData, index) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button className='btn btn-warning'
                                                    onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}
                                                >Edit</button>
                                            </Link>
                                        </td>
                                      

                                        <td>
                                            < button className="btn btn-primary" onClick={() => { showDetail(eachData.id); setModal(true) }}>view</button>
                                        </td>
                                        <td>
                                            <button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
                                        </td>
                                        <td>
                                            <Modal
                                                size='lg'
                                                isOpen={modal}
                                                toggle={() => setModal(!modal)}>
                                                <ModalHeader toggle={() => setModal(!modal)} >
                                                    Details</ModalHeader>
                                                <ModalBody>
                                                    <tr key={index} >   
                                                        <td style={{ padding: '20px' }}>Id: {rs.id}</td>
                                                        </tr>
                                                       <tr> <td style={{ padding: '20px' }}>{rs.name}</td></tr>
                                                       <tr><td style={{ padding: '20px' }}>{rs.email}</td></tr>
                                                    
                                                </ModalBody>
                                            </Modal>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })

                }
            </table>
        </>
    )
}

export default Read;