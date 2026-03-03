import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";

export default function RootRouter() {
    return (
        <Routes>
            <Route path={ROUTES.registration} element={<RegistrationPage />}/>
            <Route path="*" element={<Navigate to={ROUTES.registration}/>}/>
        </Routes>
    )
}