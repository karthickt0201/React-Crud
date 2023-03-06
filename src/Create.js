import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export const Create = () => {
    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [discription, setdiscription] = useState("");
    const [price, setprice] = useState("");
    const [qty, setqty] = useState("");

    const submit = (e) => {
        e.preventDefault();
            axios.post("http://localhost:1337/api/products", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3NzMzOTQ1LCJleHAiOjE2ODAzMjU5NDV9.fU-MBcNfqIe3oeOjOZJiOfdtNX7lfVt-TQ4OAHwRGGE'
                },                               
                }).then((Response)=>{
                    console.log(Response.data);
                }) 

    }
    return (
        <div className="rolex">
            <h2 className="text-center"> Add a Brand</h2>
            <div className="text-start col  container mt-3">
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label> <h6> Image url</h6></label>
                        <div >
                            <i className="fa fa-image"></i>
                            <input id="image" value={image} onChange={e => { setimage(e.target.value) }} className="form-control" type={"text"} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> <h6> Title</h6></label>
                        <div className="d-flex">

                            <input id="title" value={title} onChange={e => { settitle(e.target.value) }}className="form-control" type={"text"} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> <h6> Discription</h6></label>

                        <textarea id="discription" value={discription} onChange={e => { setdiscription(e.target.value) }} className="form-control " type={"text"} />
                    </div>
                    <div className="form-group">
                        <label> <h6> Image url</h6></label>
                        <div >
                            <i className="fa fa-indian-rupee-sign   "></i>
                            <input id="price" value={price} onChange={e => { setprice(e.target.value) }} className="form-control" type={"number"} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> <h6> Image url</h6></label>
                        <div >
                            <i className="fa fa-ranking-star"></i>
                            <input id="qty" value={qty} onChange={e => { setqty(e.target.value) }} className="form-control" type={"number"} />
                        </div>
                    </div>
                    <Link to="/" className="btn btn-primary">
                        Back
                    </Link>
                    <button type="submit" className="btn btn-success ms-3" >
                        Add Brand
                    </button>
                </form>
            </div>
        </div>
    );
}
