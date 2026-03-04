import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
const RegistrationPage = lazy(() => import("../Pages/RegistrationPage/RegistrationPage"));

export default function RootRouter() {
    return (
        <Routes>
            <Route 
                path={ROUTES.registration} 
                element={
                    <Suspense fallback={<div> Загрузка... </div>}>
                        <RegistrationPage />
                    </Suspense>
                }
            />
            <Route path="*" element={<Navigate to={ROUTES.registration}/>}/>
        </Routes>
    )
}