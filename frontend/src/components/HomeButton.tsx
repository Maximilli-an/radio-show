import { useNavigate } from "react-router-dom"

export const HomeButton: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className ='button-container'>
        <button onClick={() => navigate("/")}>Back to show selection</button>
        </div>
    )
}