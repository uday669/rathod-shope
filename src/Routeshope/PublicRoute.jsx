import React from 'react'
import {useAuth} from '../autocontext/Autocontext'
import { Navigate } from "react-router-dom";
export default function PublicRoute() {
  const {userLogin} = useAuth();
  return !userLogin ? <Navigate to="/" /> : <Outlet/>
}
