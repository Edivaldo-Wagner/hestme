import React from 'react';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import Dashboard from './../dashboard/index';
import Wallet from './../wallet/index';
import Tasks from './../tasks/index';
import Sair from './../sair/index';
import Schedule from './../schedule/index';
import Settings from './../settings/index';
import { Link } from 'react-router-dom';
import LogoDash from './../img/logo-dashboard.svg'
import  styles from './../css/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faCalendar, faTasks, faCog, faSignOut } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <>

      <div className={styles.menu}>
        <div className={styles.header_menu}>
          
            <img style={{ width: '160px', margin: '6px 20px' }} src={LogoDash}/>
      
        </div> {/*header_menu*/}

          <nav>

            <Link to="/dashboard"><li> <FontAwesomeIcon style={{ position: 'relative', right: '160px', fontSize: '20px' }} icon={faHome} />  <label style={{position: 'relative', float: 'right', right: '130px', cursor: 'pointer', fontSize: '16px'}}>Dashboard</label></li></Link>

            <Link to="/wallet"> <li> <FontAwesomeIcon style={{ position: 'relative', right: '185px', fontSize: '20px' }} icon={faWallet} />  <label style={{position: 'relative', float: 'right', right: '148px', cursor: 'pointer', fontSize: '16px'}}>Carteira</label></li></Link>

            <Link to="/schedule"><li> <FontAwesomeIcon style={{ position: 'relative', right: '187px', fontSize: '20px' }} icon={faCalendar} />  <label style={{position: 'relative', float: 'right', right: '148px', cursor: 'pointer', fontSize: '16px'}}>Agenda</label></li></Link>

            <Link to="/tasks"><li> <FontAwesomeIcon style={{ position: 'relative', right: '187px', fontSize: '20px' }} icon={faTasks} />  <label style={{position: 'relative', float: 'right', right: '152px', cursor: 'pointer', fontSize: '16px'}}>Tarefas</label></li></Link>

            <Link to="/settings"><li> <FontAwesomeIcon style={{ position: 'relative', right: '136px', fontSize: '20px' }} icon={faCog} />  <label style={{position: 'relative', float: 'right', right: '100px', cursor: 'pointer', fontSize: '16px'}}>Configurações</label></li></Link>
            
            <Link to="/sair"><li> <FontAwesomeIcon style={{ position: 'relative', right: '210px', fontSize: '20px' }} icon={faSignOut} />  <label style={{position: 'relative', float: 'right', right: '175px', cursor: 'pointer', fontSize: '16px'}}>Sair</label></li></Link>
            
          </nav>

    </div> {/*menu*/}

    <div className={styles.menu_bottom}>

      <ul> 

        <Link to="/dashboard">

        <li>
         <FontAwesomeIcon style={{ fontSize: '24px', color: '#808080' }} icon={faHome} />
        </li>

        </Link> 

        <Link to="/wallet">

        <li>
         <FontAwesomeIcon style={{ fontSize: '24px', color: '#808080' }} icon={faWallet} />
        </li>

        </Link> 

        <Link to="/schedule">

        <li>
         <FontAwesomeIcon style={{ fontSize: '24px', color: '#808080' }} icon={faCalendar} />
        </li>

        </Link>

        <Link to="/tasks">

        <li>
         <FontAwesomeIcon style={{ fontSize: '24px', color: '#808080' }} icon={faTasks} />
        </li>

        </Link>

        <Link to="/settings">

        <li>
         <FontAwesomeIcon style={{ fontSize: '24px', color: '#808080' }} icon={faCog} />
        </li>

        </Link>

        <Link to="/sair">

        <li>
         <FontAwesomeIcon style={{ fontSize: '24px', color: '#808080' }} icon={faSignOut} />
        </li>

        </Link>

      </ul>

    </div>
  
    </>
  );
};

export default Login;
