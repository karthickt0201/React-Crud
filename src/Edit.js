import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
export const Edit = () => {
    const { id } = useParams();
    const[image, setimage] = useState("");
    const[title, settitle] = useState("");
    const[discription, setdiscription] = useState("");
    const[price, setprice] = useState("");
    const[qty, setqty] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        let data=[{image,title,discription,price,qty}];
        console.log(data);
      axios.put("http://localhost:1337/api/products/" + id,{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3NTkwNjAxLCJleHAiOjE2ODAxODI2MDF9.37Yk9yU8U7P2qg619VLoPSYz9P44YASAd4dQCqnoDyE",
        },
                data:{
                    image: image,
                    title: title,       
                    discription: discription,
                    price: price,
                    qty: qty
                }
        }).then((Response)=>{
            console.log(Response.data);
        }) }

    console.log(id);
    useEffect(() => {
        try{
        axios.get(
            "http://localhost:1337/api/products/" + id
        ).then(Response => {
            console.log("Response",Response);
            setimage(Response.data.data.attributes.image);
            settitle(Response.data.data.attributes.title);
            setdiscription(Response.data.data.attributes.discription);
            setprice(Response.data.data.attributes.price); 
            setqty(Response.data.data.attributes.qty); 
            console.log(image);
            console.log(title);           
        })
    }  catch (e) {
        console.log(e);
      }
    })
 
    return (
        <div className="rolex">
            <h2 className="text-center"> Add a Brand</h2>
            <div className="text-start col  container mt-3">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label> <h6> Image url</h6></label>
                    <div >
                    <i className="fa fa-image"></i>
                    <input id="image" value={image} onChange={e=>{setimage(e.target.value)}} className="form-control" type={"text"} />
                    </div>
                </div>
                <div className="form-group">
                    <label> <h6> Title</h6></label>
                    <div className="d-flex">
   
                    <input id="title" value={title} onChange={e=>{settitle(e.target.value)}} className="form-control" type={"text"} />
                    </div>
                </div>
                <div className="form-group">
                    <label> <h6> Discription</h6></label>

                    <textarea id="discription" value={discription} onChange={e=>{setdiscription(e.target.value)}} className="form-control " type={"text"} />
                </div>
                <div className="form-group">
                    <label> <h6> Image url</h6></label>
                    <div >
                    <i className="fa fa-indian-rupee-sign   "></i>
                    <input id="price" value={price} onChange={e=>{setprice(e.target.value)}} className="form-control" type={"number"} />
                    </div>
                </div>
                <div className="form-group">
                    <label> <h6> Image url</h6></label>
                    <div >
                    <i className="fa fa-ranking-star"></i>
                    <input id="qty" value={qty} onChange={e=>{setqty(e.target.value)}} className="form-control" type={"number"} />
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