import React, { useRef } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link } from 'react-router-dom';
import  styles from './../css/profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faDatabase, faBalanceScale, faUserNurse, faToolbox, faStar, faFileContract, faQuestionCircle, faStore, faTools, faAngleLeft, faEnvelope     } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {


  return (
    <>

      <div className={styles.all_container}>

      

      

      


      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        <div className={styles.dash_header} style={{ border: 'none' }}>

<Link to="/settings" style={{textDecoration: 'none'}}> 

<div className={styles.container_icone_sino}>

<FontAwesomeIcon className={styles.icone_sino} icon={faAngleLeft} style={{ color: '#fff', fontSize: '20px' }} />

</div>

</Link>

<Link to="/settings" style={{textDecoration: 'none'}}> 
  <div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '30px' }}>Dados </div>
</Link>

<div className={styles.titulo_agendamento} style={{ color: '#353738', marginLeft: '14px', fontSize: '17px' }}>Informações de login </div>

</div> {/*dash_header*/}

  <p style={{marginTop: '130px'}}></p>

    <div style={{ width: '100%' }}>

    <FontAwesomeIcon className={styles.iconesino} icon={faEnvelope}/>

    <input placeholder='Email...' className={styles.container_proximo_cliente}  type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-15px' }}>

    <FontAwesomeIcon className={styles.iconesino} icon={faLock}/>

    <input placeholder='Senha...' className={styles.container_proximo_cliente}  type='password'/>


    <li className={styles.container_btns}>

  <label className={styles.btns}>Enviar link para alteração de senha</label>

</li>

<hr className={styles.border_bottom}/>

  </div>

  <div class={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '17px' }}>Dados Pessoais</div>

</div> {/*dash_header*/}

<div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Nome...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='CPF...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Celular...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>
    
    <hr className={styles.border_bottom}/>
  
  </div>

  
  <div class={styles.dash_header} style={{ border: 'none', marginTop: '-25px', width: '100%', marginLeft: '15px' }}>


<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '17px' }}>Dados Comerciais</div>


</div> {/*dash_header*/}

<div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Cep...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Cidade...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Estado...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Endereço...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Número...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Complemento...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Cnpj...' className={styles.container_proximo_cliente} style={{ paddingLeft: '15px'}} type='text'/>

  </div>

  <li className={styles.container_btns}>

  <label className={styles.btns}>Salvar</label>

</li>

        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
