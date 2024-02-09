import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/api/employees';

export const listEmployes=()=> axios.get(REST_API_BASE_URL);

export const createEmployee=(employee)=>axios.post(REST_API_BASE_URL, employee);

export const  getEmployee=(employeeId)=>axios.get(REST_API_BASE_URL+'/'+employeeId);

export const updateEmploye=(employeeId, employee)=>axios.put(REST_API_BASE_URL +'/'+employeeId, employee);

export const delteEmploye=(employeeId)=> axios.delete(REST_API_BASE_URL+'/'+employeeId);