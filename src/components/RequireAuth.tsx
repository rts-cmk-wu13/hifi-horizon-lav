import { useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"
import { checkUserSession } from "../utils/helpers"

export default function RequireAuth({ children } : React.PropsWithChildren) {

    const { token } = useAuth()
    const navigate = useNavigate()

    
    if(!token) {
        // no token - redirect to login
        navigate("/login", { replace: true });
    }

    return <>{children}</>
}