import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
 function Apprenats() {

    
const [list,setList] = useState([])



 const getapp = () => {
    axios
      .get("/simplonLine/apprenant/getAll")
      .then(res =>
        setList(res.data)
      
    
      )
      
      .catch(err => console.error(err));
  };

  useEffect(()=> {getapp()
 
  },[])
    return (
        <div className="d-flex justify-content-around">
            {list.map((el, key) => (
              <div key={key} className="card " >
                    
                  <div class="card-body">
                  <img className="card-img-top w-50" src={el.image} alt="..."/>   
              <h2  className="card-title">Nom: {el.name}</h2>
              <h4 className="card-text"> Prénom: {el.prénom}</h4>
              <h5 className="card-text">Age :{el.age}</h5>
              <button className="btn btn-success">voir détails</button>
              </div>
                </div>
           
            ))}
        </div>
    )
}
export default Apprenats