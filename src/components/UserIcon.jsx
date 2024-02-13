import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { toast } from 'react-toastify';
import Auth from '../user/Auth';

function UserIcon() {
  const [showAuthForm, setShowAuthForm] = useState(false);

  const isAuthenticated = () => !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.info('¡Sesión cerrada exitosamente!');
    window.location.reload();
  };

  return (
    <div>
      {isAuthenticated() ? (

        <PowerSettingsNewIcon onClick={handleLogout} style={{ cursor: 'pointer' }} />
      ) : (

        <>
          <PersonIcon onClick={() => setShowAuthForm(true)} style={{ cursor: 'pointer' }} />
          {showAuthForm && <Auth onClose={() => setShowAuthForm(false)} />}
        </>
      )}
    </div>
  );
}

export default UserIcon;
