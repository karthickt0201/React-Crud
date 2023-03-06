import { useParams, useNavigate, Navigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
export const Edit = () => {
    const { id } = useParams();
    const Navigate = useNavigate();
    const location = useLocation();
    // const{edit}=location.state;
    // console.log(edit);
    const[image, setimage]=useState("")
    const[values, setValues]=useState({
        image: "",
        title: "",
        discription: "",
        price: "",
        qty:""
    })
    const data ={
        image: values.image,
        title: values.title,
        discription: values.discription,
        price: values.price,
        qty: values.qty
    }
    const handle=(e)=>{
        setValues({
            ...values,[e.target.id]:e.target.value
        })
    }    
    
    const submit=(e)=>{
        e.preventDefault();
      axios.put("http://localhost:1337/api/products/" + id,
      {
        data
        }).then((Response)=>{
            console.log(Response.data);
            Navigate("/");
        }) 
    }

    useEffect(() => {
        try{
        axios.get(
            "http://localhost:1337/api/products/" + id ).then(Response => {
            console.log("Response", Response);
            setValues(Response.data.data.attributes);
        })
    }  catch (e) {
        console.log(e);
      }
    },[])
 
    return (
        <div className="rolex">
        <h2 className="text-center"> Edit a Brand</h2>
        <div className="text-start col  container mt-3">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label> <h6> Image url</h6></label>
                    <div >
                        <i className="fa fa-image"></i>
                        <input id="image"  name="image"  value={values.image} onChange={handle} className="form-control" type={"text"} />
                    </div>
                </div>
                <div className="form-group">
                    <label> <h6> Title</h6></label>
                    <div className="d-flex">
                        <input id="title" name="title" value={values.title}  onChange={handle} className="form-control" type={"text"} />
                    </div>
                </div>
                <div className="form-group">
                    <label> <h6> Discription</h6></label>

                    <textarea id="discription" name="discription" onChange={handle} value={values.discription} className="form-control " type={"text"} />
                </div>
                <div className="form-group">
                    <label> <h6> Price</h6></label>
                    <div >
                        <i className="fa fa-indian-rupee-sign   "></i>
                        <input id="price" name="price" value={values.price} onChange={handle} className="form-control" type={"number"} />
                    </div>
                </div>
                <div className="form-group">
                    <label> <h6> Quantity</h6></label>
                    <div >
                        <i className="fa fa-ranking-star"></i>
                        <input id="qty" name="qty" value={values.qty} onChange={handle} className="form-control" type={"number"} />
                    </div>
                </div>
                <Link to="/" className="btn btn-primary">
                    Back
                </Link>
                <button type="submit" className="btn btn-success ms-3" >
                    Save
                </button>
            </form>
        </div>
    </div>
    );

}