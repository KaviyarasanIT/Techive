import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom"

export default function Item() {
  const [bikes, setbikes] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await axios.get("http://localhost:8082/bikes");
      console.log(response.data)
      setbikes(response.data);
    } catch (error) {
      console.error("Error fetching Item:", error);
    }
  };
  const remove=async(a)=>{
    await axios.delete("http://localhost:8082/deletebikes/"+a)
    fetchItem();
  }

  return (
    <div>
      {bikes.map((el) => (
        <div className="card ms-7" style={{ margin: "10px" }} key={el.id}>
          <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Model : {el.model}</h5>
                <p className="card-text">Brand :{el.brand}</p>
                <p className="card-text">Category : {el.category}</p>
                <p className="card-text">Cost : {el.cost}</p>
                <p className="card-text">Item Id : {el.id}</p>
                <button className="btn btn-primary"><Link to={"/Update/"+el.id} style={{textDecoration:"none",color:"white"}}>Update</Link></button>
                <button className="btn btn-primary" onClick={(ev) => {remove(el.id); ev.preventDefault();}}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  <Outlet/>
}