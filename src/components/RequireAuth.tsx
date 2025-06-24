import { useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"
import { checkUserSession } from "../utils/helpers";
import { useEffect } from "react";
import { saveToSessionStorage } from "../utils/localstorage";

export default function RequireAuth({ children } : React.PropsWithChildren) {

    const { token } = useAuth()
    const navigate = useNavigate()

    saveToSessionStorage("redirectTo", window.location.pathname);

    useEffect(() => {
        if (!checkUserSession()) {
            
            navigate("/login", { replace: true });
            return;
        }
    }, [navigate]);
    
    if(!token) {
        // no token - redirect to login
        
        navigate("/login", { replace: true });
    }

    return <>{children}</>
}