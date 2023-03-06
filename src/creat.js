import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export const Create = () => {
    const Navigate = useNavigate();
    const[values, setValues]=useState({
        image: "",
        title: "",
        discription: "",
        price: "",
        qty:""
    })

    const handle=(e)=>{
        setValues({
            ...values,[e.target.name]:e.target.value
        })
    }
   
    // const api=()=>{

    //     try{
    //         axios.post("http://localhost:1337/api/products",{
    //           Headers:{
    //             "Content-Type": 'application/json',
    //             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3NTkwNjAxLCJleHAiOjE2ODAxODI2MDF9.37Yk9yU8U7P2qg619VLoPSYz9P44YASAd4dQCqnoDyE",
    //           },
    //           data:{
    //             image: image,
    //             title: title,       
    //             discription: discription,
    //             price: price,
    //             qty: qty
    //         }    
    //         })}catch (e) {
    //             console.log(e);
    //         }
    // }
    const submit = (e) => {
        e.preventDefault();
        
         axios.post("http://localhost:1337/api/products", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3NzMzOTQ1LCJleHAiOjE2ODAzMjU5NDV9.fU-MBcNfqIe3oeOjOZJiOfdtNX7lfVt-TQ4OAHwRGGE'
                },                
                data: {
                    image: values.image,
                    title: values.title,
                    discription: values.discription,
                    price: values.price,
                    qty: values.qty
                }                             
                }).then((Response)=>{
                    console.log(Response.data);
                    Navigate("/");
                })                                                                                                                                      

   /*  var data1
        = JSON.stringify({
        "data": {
          "image": "https://m.media-amazon.com/images/I/61DrCbSkM4L._SL1500_.jpg",
          "title": "Lenova",
          "discription": "Lenovo Everyday laptops for first-time users. High-performance laptops for serious gamers. Convertible PCs for those who like their entertainment on the go. There's an ...",
          "price": 23333,
          "qty": 1
        }
      }); */
    //    alert("hi Ka ")
            axios.post("http://localhost:1337/api/products", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3NzMzOTQ1LCJleHAiOjE2ODAzMjU5NDV9.fU-MBcNfqIe3oeOjOZJiOfdtNX7lfVt-TQ4OAHwRGGE'
                },                               
                }).then((Response)=>{
                    console.log(Response.data);
                }) 
  
            // })

        // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc3NTkwNjAxLCJleHAiOjE2ODAxODI2MDF9.37Yk9yU8U7P2qg619VLoPSYz9P44YASAd4dQCqnoDyE"
        // axios.post("http://localhost:1337/api/products", {
        //    data:{
        //     image: parseInt(data.image),
        //     title:  parseInt(data.title),
        //     discription:  parseInt(data.discription),
        //     price:  parseInt(data.price),
        //     qty:  parseInt(data.qty),
        //    }
        // }).then(Response =>{
        //     console.log(Response.data);
        //   })
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
                            <input id="image" name="image" onChange={handle} className="form-control" type={"text"} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> <h6> Title</h6></label>
                        <div className="d-flex">
                            <input id="title" name="title" onChange={handle}className="form-control" type={"text"} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> <h6> Discription</h6></label>

                        <textarea id="discription" name="discription" onChange={handle} className="form-control " type={"text"} />
                    </div>
                    <div className="form-group">
                        <label> <h6> Price</h6></label>
                        <div >
                            <i className="fa fa-indian-rupee-sign   "></i>
                            <input id="price" name="price" onChange={handle} className="form-control" type={"number"} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label> <h6> Quantity</h6></label>
                        <div >
                            <i className="fa fa-ranking-star"></i>
                            <input id="qty" name="qty" onChange={handle} className="form-control" type={"number"} />
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
