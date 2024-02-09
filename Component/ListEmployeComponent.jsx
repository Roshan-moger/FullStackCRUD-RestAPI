import React , {useEffect, useState} from 'react'
import { delteEmploye, listEmployes } from '../Services/EmployeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeComponent = () => {

    const navigator=useNavigate();
    const [employee , setEmployee]= useState([])
    useEffect (()=>{
        getAllEmployee()

    },
       [])

       function getAllEmployee(){
        listEmployes().then((response)=>{
            setEmployee(response.data);
        }).catch(error =>{
            console.error(error);
        })
    }
       

    function addNewEmloyee(){
      navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }
    function remove(id){
        console.log(id);
        delteEmploye(id).then((response)=>{
            getAllEmployee()
        }).catch(error =>{
            console.error(error);
        })

    }


   
  return (
    <div className='container'>
        <h2 className='text-center'> List of Employes</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmloyee}> Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                <th>Employee Id</th>
                    <th>Employee first name</th>
                    <th>Employee Last name</th>
                    <th>Employee  Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee=>
                        <tr key={employee.id}> 
                        <td> {employee.id}</td>
                        <td> {employee.firstName}</td>
                        <td> {employee.lastName}</td>
                        <td> {employee.email}</td>
                        <td>
                            <button className='btn btn-info' 
                            onClick={()=> updateEmployee(employee.id)}>Update</button>

                            <button className='btn btn-danger ' 
                            onClick={()=> remove(employee.id)}
                            
                            style={{marginLeft:'20px'}}>Delete</button>
                        </td>


                        </tr>
                        )

                        
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeComponent