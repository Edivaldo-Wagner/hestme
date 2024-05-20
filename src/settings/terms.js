import React, { useState } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import UserIcon from './../img/user-icon.jpg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link } from 'react-router-dom';
import RattingsIcon from './../img/rattings-icone.png'
import  styles from './../css/terms.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faSignOutAlt, faCaretDown, faUser, faStar  } from '@fortawesome/free-solid-svg-icons';

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

<div className={styles.titulo_agendamento} style={{ color: '#353738', width: '50px', fontSize: '30px' }}>Termos & Condições </div>


</div> {/*dash_header*/}

  <p style={{marginTop: '200px'}}></p>
      
 

  <div style={{ width: '100%', marginTop: '-95px' }}>

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent'}}>

    

    <li style={{ listStyle: 'none', marginTop: '40px',  }}>

    <p style={{ fontSize: '17px', color: '#353738', lineHeight: '25px', marginTop: '30px' }}>

      1. Introduction These Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website, if you have any objection to any of these Website Standard Terms And Conditions. This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you a minor.

      <p style={{ marginTop: '20px' }}>2. Intellectual Property Rights Other than content you own, which you may have opted to include on this Website, under these Terms, History Maps and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved. You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.</p>

    </p> </li>

    <Link to="/settings" style={{textDecoration: 'none', width: '100%'}}>

    <li className={styles.container_btns} style={{ position: 'relative', height: '40px', marginTop: '30px', marginLeft: '-2px', width: '100%' }}>
    
    <label className={styles.btns} style={{ color: '#fff' }}>Aceitar</label>
    
  </li>

  </Link>

  </li>

  <hr className={styles.border_bottom}/>

  </div>
  
  

        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
