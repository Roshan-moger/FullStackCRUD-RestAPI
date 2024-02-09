import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createEmployee, getEmployee, updateEmploye } from '../Services/EmployeService'

const EmployeeComponent = () => {
   
     const [firstName, setFirstName]=useState('')
     const [lastName, setLastName]=useState('')
     const [email, setEmail]=useState('')
     const navigator=useNavigate();

     const {id}=useParams();
     const [error, setError]=useState({

        firstName:'',
        lastName: '',
        email:''
     });

     function validateForm() {
        let valid = true;
        const errorsCopy = { ...error };
    
        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = "First Name is Required";
            valid = false;
        }
    
        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = "Last Name is Required";
            valid = false;
        }
    
        if (email.trim()) {  // <-- Corrected from Email.trim() to email.trim()
            errorsCopy.email = '';
        } else {
            errorsCopy.email = "Email is Required";
            valid = false;
        }
    
        setError(errorsCopy);
        return valid;
    }
    

useEffect(()=>{
    if(id){
        getEmployee(id).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email)
        }).catch(error=> {
            console.error(error)
        })
    }
},[id])

function handleFirstName(e){
    setFirstName(e.target.value)

}
function handleLastName(e){
    setLastName(e.target.value)

}
function handleEmail(e){
    setEmail(e.target.value)

}

function pageTitle(){
    if(id){
        return <h2 className='text-center'> Update Employee</h2>
    }
    else{
         return <h2 className='text-center'> Add Employee</h2>
    }

}
function saveOrUpdateEmployee(e){
    e.preventDefault();


    if(validateForm()){

        
   
    const employee={firstName, lastName, email}
    console.log(employee)

    if(id){
        updateEmploye(id, employee).then((response)=>{
            console.log(response.data)
            navigator("/employees")
        }).catch(error=>{
            console.error(error)
        })
    }
        else {
            createEmployee(employee).then((response)=>{
                console.log(response.data);
                navigator("/employees")
            }).catch(error=>{
                console.error(error)
            })

        }
    }
   
}
 

    



  return (
    <div className='container '>
   
        <br />
        <br /><br />
        <div className='row'  >
            <div className='card col-md-6 offset-md-3 offset-md-3 '>
            {pageTitle()
                }
            <div className='card-body'>
    <form>
        <div className='form-group mb-2'> 
            <label htmlFor="" className='form-label'>First Name</label>
            <input type="text" placeholder='Enter Employee First Name'
                name='firstName' value={firstName} className={`form-control ${error.firstName ? 'is-invalid':''} `} 
                onChange={handleFirstName} />
                {error.firstName && <div className='invalid-feedback'> {error.firstName} </div> }
        </div>
        <div className='form-group mb-2'>
            <label htmlFor="" className='form-label'>Last Name</label>
            <input type="text" placeholder='Enter Employee Last Name'
                name='lastName' value={lastName} className={`form-control ${error.lastName ? 'is-invalid':''} `} 
                onChange={handleLastName} />
                 {error.lastName && <div className='invalid-feedback'> {error.lastName} </div> }
        </div>
        <div className='form-group mb-2'>
            <label htmlFor="" className='form-label'>Email Id</label>
            <input type="email" placeholder='Enter Employee Email'
                name='email' value={email} className={`form-control ${error.email ? 'is-invalid':''} `} 
                onChange={handleEmail} />
                 {error.email && <div className='invalid-feedback'> {error.email} </div> }
        </div>
        <button className='btn btn-success mx-auto d-block mt-4' onClick={saveOrUpdateEmployee}>Submit</button>
    </form>
</div>


            
            </div>


    

       
        </div>
        
    </div>
  )
}

export default EmployeeComponent