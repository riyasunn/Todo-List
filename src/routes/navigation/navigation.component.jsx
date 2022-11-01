import Logo from '../../assets/logo.png';
import AddIcon from '../../components/add-icon/add-icon.component';

import { NavigationContainer, LogoContainer, AddIconContainer } from './navigation.styles';
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return(
        <>
            <NavigationContainer>
                <LogoContainer to='/navigation' >
                    <img src={Logo} alt='todo' className='logo'/>
                </LogoContainer>
                <AddIconContainer >
                    <AddIcon />
                </AddIconContainer>
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;