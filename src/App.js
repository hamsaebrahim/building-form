import React , { useState } from "react";


function App() {
 

  const [formDta , setFormDta] = useState({
    firstname : "" ,
    lastname : "" ,
    mail: "" ,
    pass : "" , 
    passconfirm : "" , 
    number: ' ' , 
    type : ""
  })

  const [formErr , setFormErr] = useState({})
  const [isvalidation , setisvalidation] = React.useState(false)

  // const handleChange = (e)=>{
  //      setFormDta( ()=>{
  //       return{
  //         [e.target.name] : e.target.value
  //       }
  //      })
  // }
  const handleChange = (e)=>{
    const {name , value , type , checked} = e.target
    setFormDta((prev => {
      console.log(formDta)
        return {
            ...prev,
           [name] : type === "checkbox" ? checked : value
        }
    }))
}
const handlevalidation = ()=>{
      const err = {}

      if(formDta.firstname === ""){
        err.name ="name is required"
      }

      if(formDta.pass !== formDta.passconfirm){
        err.pass = "password deos not match"
      }

      if(formDta.mail === ""){
            err.mail = "e-mail is required"
           
      }else{
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!regex.test(formDta.mail) ){
            err.mail = "e-mail is invalid"
        }
      }

      if(formDta.type === ""){
        err.type ="select one"
      }

      setFormErr({...err})
      if(Object.keys(err).length < 1){
        setisvalidation(true)
      }return false

}
  const handleSubmit =(e)=>{
    e.preventDefault()
    handlevalidation()
  }
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <h1 className="tittle">subscribe to get feed</h1>
          

           <div className="input-handle  input-handle1">
             <label>First Name</label><br/>
             <input 
             type="text"  
             name="firstname"
             value={formDta.firstname}
             onChange={handleChange}
             />
             <h5>{formErr.name}</h5>
           </div>

           <div className="input-handle input-handle2">
             <label>Last Name</label><br/>
             <input 
             type="text"  
             name="lastname"
             value={formDta.lastname}
             onChange={handleChange}
             />
           </div>

           <div className="input-handle input-handle3">
             <label>E-mail</label><br/>
             <input 
             type="mail"  
             name="mail"
             value={formDta.mail}
             onChange={handleChange}
             />
             <h5>{formErr.mail}</h5>

           </div>

           <div className="input-handle input-handle4">
             <label> Password</label><br/>
             <input 
             type="password"  
             name="pass"
             value={formDta.pass}
             onChange={handleChange}
             />
           </div>
           <div className="input-handle input-handle5">
             <label> Password Confirmtion</label><br/>
             <input 
             type="password"  
             name="passconfirm"
             value={formDta.passconfirm}
             onChange={handleChange}
             />
             <h5>{formErr.pass}</h5>
           </div>

           <div className="input-handle input-handle6">
             <label> Number</label><br/>
             <input 
             type="text"  
             name="number"
             value={formDta.number}
             onChange={handleChange}
             />
           </div>
           <div className="input-handle ">
             <fieldset>
              <legend>Are you?</legend>

              <label>
                Buyer

                <input 
                type="radio" 
                name="type"
                value="buyer"
                onChange={handleChange}
                checked ={formDta.type === "buyer"}
                 
                />
              </label>
              <label>
                seller
                <input 
                type="radio"
                name="type"
                value="seller"
                onChange={handleChange}
                 checked ={formDta.type === "seller"}
                
                />
              </label>
              <h5>{formErr.type}</h5>
             </fieldset>
           </div>


                <button>subscribe</button>
                <h1>{isvalidation ? "submitted !" : ""}</h1>


           


        </form>
    </div>
  );
}

export default App;
