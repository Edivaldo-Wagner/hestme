import React, { useState } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import UserIcon from './../img/user-icon.jpg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link } from 'react-router-dom';
import  styles from './../css/places.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faSignOutAlt, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  {/*===========PRIMEIRA UNIDADE========*/}

    const [isShowHiddenProf1, setIsShowHiddenProf1] = useState(true);

  const showHiddenProf1 = () => {
    setIsShowHiddenProf1(!isShowHiddenProf1);
  };



  let displayShowHiddenProf1;
  if (isShowHiddenProf1) {
    displayShowHiddenProf1 = 'none';
  } else {
    displayShowHiddenProf1 = 'block';
  }



{/*===========/PRIMEIRA UNIDADE========*/}



{/*===========SEGUNDA UNIDADE========*/}

  const [isShowHiddenProf2, setIsShowHiddenProf2] = useState(true);

  const showHiddenProf2 = () => {
    setIsShowHiddenProf2(!isShowHiddenProf2);
  };



  let displayShowHiddenProf2;
  if (isShowHiddenProf2) {
    displayShowHiddenProf2 = 'none';
  } else {
    displayShowHiddenProf2 = 'block';
  }


{/*===========/SEGUNDA UNIDADE========*/}

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

<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '30px' }}>Unidades </div>


</div> {/*dash_header*/}

  <p style={{marginTop: '130px'}}></p>

{/*===========PRIMEIRA UNIDADE========*/}
      
  <div style={{ width: '100%', marginTop: '-15px' }}>

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: '1px solid rgba(0, 0, 0 ,0.2)' }}>

    <li style={{ listStyle: 'none', marginTop: '40px', textAlign: 'center' }}><b style={{ width: '100%', textAlign: 'center', color: '#353738' }}>Unidade 01</b> <p style={{ fontSize: '14px' }}>Endereço: Avenida 40, Rua 12, Casa 09, bairro, cidade, estado, CEP 00-0000</p> </li>

  <label className={styles.btns}>Enviar link para alteração de senha</label>

  <li className={styles.container_btns} style={{ position: 'relative', left: '-5px', top: '-50px', height: '40px', width: '90%' }}>

    <label className={styles.btns}>Abrir no Maps</label>
    <FontAwesomeIcon className={styles.iconesino} icon={faSignOutAlt} style={{ position: 'relative', fontSize: '16px', right: '20px', color: '#fff', marginTop: '-90px', float: 'right' }} />

  </li>


  <li onClick={showHiddenProf1} className={styles.container_btns} style={{ position: 'relative', left: '-5px', top: '-50px', height: '40px', width: '90%' }}>

    <label className={styles.btns}>Profissionais</label>
    <FontAwesomeIcon className={styles.iconesino} icon={faCaretDown} style={{ position: 'relative', fontSize: '16px', right: '22px', color: '#fff', marginTop: '-90px', float: 'right' }} />

  </li>

  <div className={styles.container_profissionais} style={{ display: displayShowHiddenProf1 }}>

  <div className={styles.container_profissionais} style={{ display: 'flex', marginTop: '-20px' }}>

    <img style={{ height: '60px', marginTop: '-10px' }} src={UserIcon}/>

    <label style={{ color: '#353738', fontSize: '14px', marginLeft: '5px' }}>João Sousa <p style={{ color: '#808080', marginTop: '1px' }}>joao21@gmail.com</p> </label>

  </div>

  <div className={styles.container_profissionais} style={{ display: 'flex' }}>

    <img style={{ height: '60px', marginTop: '-10px' }} src={UserIcon}/>

    <label style={{ color: '#353738', fontSize: '14px', marginLeft: '5px' }}>João Sousa <p style={{ color: '#808080', marginTop: '1px' }}>joao21@gmail.com</p> </label>

  </div>

  </div>

</li>

  </div>

  {/*=========== /PRIMEIRA UNIDADE========*/}


  {/*=========== SEGUNDA UNIDADE========*/}

    <div style={{ width: '100%', marginTop: '15px' }}>

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: '1px solid rgba(0, 0, 0 ,0.2)' }}>

    <li style={{ listStyle: 'none', marginTop: '40px', textAlign: 'center' }}><b style={{ width: '100%', textAlign: 'center', color: '#353738' }}>Unidade 02</b> <p style={{ fontSize: '14px' }}>Endereço: Avenida 40, Rua 12, Casa 09, bairro, cidade, estado, CEP 00-0000</p> </li>

  <label className={styles.btns}>Enviar link para alteração de senha</label>

  <li className={styles.container_btns} style={{ position: 'relative', left: '-5px', top: '-50px', height: '40px', width: '90%' }}>

    <label className={styles.btns}>Abrir no Maps</label>
    <FontAwesomeIcon className={styles.iconesino} icon={faSignOutAlt} style={{ position: 'relative', fontSize: '16px', right: '20px', color: '#fff', marginTop: '-90px', float: 'right' }} />

  </li>


  <li onClick={showHiddenProf2} className={styles.container_btns} style={{ position: 'relative', left: '-5px', top: '-50px', height: '40px', width: '90%' }}>

    <label className={styles.btns}>Profissionais</label>
    <FontAwesomeIcon className={styles.iconesino} icon={faCaretDown} style={{ position: 'relative', fontSize: '16px', right: '22px', color: '#fff', marginTop: '-90px', float: 'right' }} />

  </li>

  <div className={styles.container_profissionais} style={{ display: displayShowHiddenProf2 }}>

  <div className={styles.container_profissionais} style={{ display: 'flex', marginTop: '-20px' }}>

    <img style={{ height: '60px', marginTop: '-10px' }} src={UserIcon}/>

    <label style={{ color: '#353738', fontSize: '14px', marginLeft: '5px' }}>João Sousa <p style={{ color: '#808080', marginTop: '1px' }}>joao21@gmail.com</p> </label>

  </div>

  <div className={styles.container_profissionais} style={{ display: 'flex' }}>

    <img style={{ height: '60px', marginTop: '-10px' }} src={UserIcon}/>

    <label style={{ color: '#353738', fontSize: '14px', marginLeft: '5px' }}>João Sousa <p style={{ color: '#808080', marginTop: '1px' }}>joao21@gmail.com</p> </label>

  </div>

  </div>

</li>

  </div>

  {/*=========== /SEGUNDA UNIDADE========*/}

  
  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)' }}>

  <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar novo endereço para nova unidade</label>

</li>

        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
