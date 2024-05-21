import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/payment-pix.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TelefoneMaskProfressional from './../mask-input-edit-professional/index';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faImages, faUserCircle, faInfoCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faDatabase, faBalanceScale, faCheck, faUserNurse, faToolbox, faStar, faFileContract, faQuestionCircle, faStore, faTools    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  const [dados, setDados] = useState('');

  const Navigate = useNavigate();



  useEffect(() => {

    if (sessionStorage.getItem('meusDados') !== null) {
      // A partir deste ponto, você pode acessar os dados normalmente
      const dadosSalvos = JSON.parse(sessionStorage.getItem('meusDados'));
      setDados(dadosSalvos);

      // Exemplo: alguma lógica que precisa ocorrer após a renderização

    }else{
      Navigate('/login')

      return
    }

  }, []);


  const imgLogado = /*dados.img ||*/ 'https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg';
  const nomeLogado = dados.name || '';



  const enviar_dados = () => {

    
 
    Navigate('/dashboard');
  
};



  return (
    <>


      <div className={styles.all_container}>

      

      <div className={styles.dash_header} style={{ border: 'none' }}>

      </div> {/*dash_header*/}

      


      <div className={styles.container_agendamentos} style={{ marginTop: '30px' }}>

        <div className={styles.ul}>

        {/*{<div className={styles.container_icone_main}>
 
        <FontAwesomeIcon className={styles.icone_main} icon={faImages} style={{ marginTop: '8px', marginLeft: '10px', color: '#353738', fontSize: '18px' }} />

          <label style={{ position: 'relative', fontSize: '13px', left: '7px', top: '-1px' }}>Menu</label>

        </div>*/}

<li className={styles.container_proximo_cliente} style={{height: '120px', display: 'flex', border: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>

<img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={imgLogado} alt="Imagem" />

<div style={{ marginTop: '15px', fontSize: '18px', textAlign: 'center', width: '100%' }}>{nomeLogado}<p style={{ fontSize: '15px', color: '#808080' }}>“Estamos aqui para atender melhor nossos clientes”</p> </div>

</li>

<p style={{ marginTop: '30px' }}></p>


<div className={styles.container_confirmar_identidade}> 

  <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>AGENDAMENTO REALIZADO COM SUCESSO!</div>

  <FontAwesomeIcon className={styles.icone_main} icon={faCheck} style={{ position: 'relative', textAlign: 'center', width: '100%', marginTop: '12px', color: '#353738', fontSize: '40px' }} />

    <div style={{ position: 'relative', display: 'flex', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ padding: 0, margin: 0, width: '90%', border: '1px solid rgba(0, 0, 0, 0.2)' }}>

      <FontAwesomeIcon className={styles.icone_main} icon={faCalendar} style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)', float: 'left', alignItems: 'center', left: '20px', color: '#353738', fontSize: '22px' }} />
          

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '14px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Unidade: Centro</b></div>

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '12px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Profissional: Roberto</b></div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '14px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>09:30 - 10:00</b> Exemplo - R$ 40</div>

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '12px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Profissional: Paulo</b></div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '14px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>10:00 - 11:00</b> Exemplo - R$ 80</div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '14px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>00/00/0000</b></div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '12px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>TOTAL: R$ 80</b></div>
        
      </ul>

    </div>


    <div style={{ position: 'relative', display: 'flex', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ padding: 0, margin: 0, width: '90%', border: '1px solid rgba(0, 0, 0, 0.2)' }}>

      <FontAwesomeIcon className={styles.icone_main} icon={faInfoCircle} style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)', float: 'left', alignItems: 'center', left: '20px', color: '#353738', fontSize: '22px' }} />
           

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '14px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>CÓDIGO DO AGENDAMENTO</b></div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '12px', textAlign: 'center', width: '100%', fontSize: '12px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>15012023a1400</b></div>
        
      </ul>

    </div>

    <div style={{ position: 'relative', display: 'flex', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ padding: 0, margin: 0, width: '90%', border: '1px solid rgba(0, 0, 0, 0.2)' }}>

      <FontAwesomeIcon className={styles.icone_main} icon={faUserCircle} style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)', float: 'left', alignItems: 'center', left: '20px', color: '#353738', fontSize: '22px' }} />
           

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '14px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>NOME DO AGENDAMENTO</b></div>
 
      <div style={{ position: 'relative', marginTop: '5px', fontSize: '12px', textAlign: 'center', width: '100%', fontSize: '12px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>JOÃO SANTOS</b></div>
        
      </ul>

    </div>



    <p style={{ marginTop: '30px' }}></p>

</div>

<li onClick={enviar_dados} className={styles.container_proximo_cliente} style={{ border: 'none', marginTop: '5px', borderRadius: '5px', height: '40px', display: 'flex', alignItems: 'center' }}>

  <label style={{ flex: 1, cursor: 'pointer', marginTop: '7px', textAlign: 'center',  color: '#fff', fontSize: '14px' }}>Finalizar</label>

</li>

<p style={{ marginTop: '50px' }}></p>
          
        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}
  
    </>
  );
};

export default Settings;
