import Logo from '../../assets/logo.png';
import AddIcon from '../../components/add-icon/add-icon.component';
import { NavigationContainer, LogoContainer, AddLink } from './navigation.styles';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return(
        <>
            <NavigationContainer>
                <LogoContainer to='/navigation' >
                    <img src={Logo} alt='todo' className='logo'/>
                </LogoContainer>
                <AddLink to='/addtodo'>
                    <AddIcon />
                </AddLink>
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;