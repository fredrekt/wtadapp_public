import React from 'react';
import './AppLogo.scss';
import appLogo from '../../assets/images/wtadlogo.png';

const AppLogo: React.FC = () => {
  return (
    <div className='appLogoContainer'>
        <img className='appLogoImg' src={appLogo} alt="wtadapp" />
    </div>
  )
}

export default AppLogo