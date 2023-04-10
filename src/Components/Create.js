import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const history = useNavigate();
    // const header ={"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        axios.post('https://6385c2c4875ca3273d449ef1.mockapi.io/api/crud/crud-ramnish', {
            name: name,
            email: email,
            // header,
        })
            .then(() => {
                history("/read");
            })
    }
    return (
        <>

            <div className='d-flex justify-content-between'>
                <h2>create</h2>
                <Link to="/read">
                    <button className='btn btn-primary'>Show Data</button>
                </Link>
            </div>

            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                {/* {name}
                {email} */}



                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>

        </>
    )
}
export default Create;