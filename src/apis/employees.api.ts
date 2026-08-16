import { axiosClient } from "@/lib/axiosConfigrations"
import type { CreateEmployeePayload, GetEmployeesParams, UpdateEmployeePayload } from "@/types/employees.types"

// Admin & Manager
export const getEmployeesApi = async (params?:GetEmployeesParams)=>{
    return await axiosClient(`/employees` , {params})
} 

// Admin & Manager
export const getEmployeeDetailsApi = async (id:string|undefined)=>{
    return await axiosClient(`/employees/${id}`)
} 

// Admin
export const createEmployeeApi = async (payload:CreateEmployeePayload) => {
    return await axiosClient.post('/employees' , payload)
}

// Admin
export const toggleEmpStatusApi = async (id:string , isActive:boolean)=>{
    return await axiosClient.put(`/employees/${id}/status` , {isActive})
} 

// Admin
export const resetEmpPasswordApi = async (id:string , newPassword:string)=>{
    return await axiosClient.post(`/employees/${id}/reset-password`  , {newPassword})
} 

// Admin
export const updateEmployeeApi = async(id:string, payload:UpdateEmployeePayload)=>{
    return await axiosClient.patch(`/employees/${id}`  , payload)
}

// Admin
export const DeleteEmployeeApi = async(id:string)=>{
    return await axiosClient.delete(`/employees/${id}`)
}

