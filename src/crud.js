import { useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import { Link, useNavigate} from "react-router-dom";

export const  Crud = () => {
    const [name, setName] =useState([]);
    const Navigate=useNavigate();
    // const [edit, setEdit] = useState(false);    
    // const loaddelete = async(id)=>{
    // await axios.delete("http://localhost:1337/api/products"+id);
    // }
    const loaddelete =(id)=>{
      if(window.confirm("Do You Want to delete")){
        axios.delete("http://localhost:1337/api/products/"+id,{
        }).then(Response =>{
          console.log(Response.data);
          window.location.reload();
        })
      }
    }

    const getNameData = async () => {
      try {
        axios.get(
          "http://localhost:1337/api/products"
        ).then(Response =>{
          console.log(Response.data);
          setName(Response.data.data);
        })
      } catch (e) {
        console.log(e);
      }
    };
    useEffect(() => {
      getNameData();
      }, []);
    // const editbtn=()=>{
    //   setEdit(true);
    // }
    return (
      <div className="App">
      <div className='car  d-flex'>
        <h2 > Brands Details</h2>
        <Link className='btn btn-success h-50' to="creat">Add Brands</Link>
      </div>
        <table className="table table-bordered">
        <thead className="bg-dark text-white "> 
            <tr>
              <th>Logo</th>
              <th>Title</th>
              <th>Discriprion</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody >
            {name.map((item)=>{
              return(
            <tr key={item.id}>
              <td>{<img src={item.attributes.image} alt="" /> }</td>
              <td>{item.attributes.title}</td>
              <td>{item.attributes.discription}</td>
              <td>{item.attributes.price}</td>
              <td>{item.attributes.qty}</td>
              <td className="m-2" id="butn"><Link 
              to={`edt/${item.id}`}
              //  onClick={(e)=>{loadedit(item.id)}}
                className="btn btn-primary" id="butn2">Edit</Link>
              <Link className="btn btn-danger" onClick={()=>loaddelete(item.id)} id="butn3">Delete</Link>
              </td>
            </tr>);
            })}            
          </tbody>
            </table>
         
         
      </div>
    );  
  };