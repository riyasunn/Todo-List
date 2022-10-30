import Button from "../../components/button/button.component";
import HomePagePhoto from '../../assets/home-page-pic.png'
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    
    const navigate = useNavigate();

    const goToNavigationHandler = () => {
        console.log("go to navigation");
        navigate('/navigation');
    }
    
    return (
        <div>
            <h1>todo</h1>
            <p>Make your todo list easily</p>
            <Button name='get start' onClick={goToNavigationHandler} />
            <img src={HomePagePhoto} alt="three people cartoon" />
            
         </div>
    )
}
export default LandingPage;