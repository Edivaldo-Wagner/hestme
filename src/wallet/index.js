import React from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import  styles from './../css/wallet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd   } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Dashboard = () => {

  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  
  


  return (
    <>

      <Header className={styles.header_menu}/>

      <div className={styles.all_container}>

      

      <div class={styles.dash_header} style={{ border: 'none' }}>

      <FontAwesomeIcon className={styles.icone_sino} icon={faBell} style={{ color: '#353738', fontSize: '20px' }} />

      <div className={styles.titulo_agendamento} style={{ color: 'rgb(255, 84, 0)' }}>Vendas</div>

      <button className={styles.btn_hoje} style={{ border: 'none', color: 'rgba(127, 127, 127, 0.8)', fontSize: '20px' }}>Saldo</button>

      </div> {/*dash_header*/}

      


      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        <li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '50px', display: 'flex', alignItems: 'center' }}>

  

  <div style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '8px' , marginLeft: '10px', height: '25px', width: '25px' }}>
  <FontAwesomeIcon className={styles.iconesino} icon={faEuroSign} style={{ position: 'relative', top: '-4px', left: '-1px', color: 'rgb(255, 84, 0)', fontSize: '14px'}} />
   </div>

  <label style={{ flex: 1, textAlign: 'center', fontSize: '14px' }}>Disponível: R$ 32.0000</label>

</li>

<li className={styles.container_proximo_cliente} style={{ height: '120px', display: 'flex', border: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

<label style={{ marginTop: '-40px', textAlign: 'center', width: '100%', fontSize: '15px' }}>Área Pix</label>

<FontAwesomeIcon className={styles.icone_sino} icon={faHandHoldingUsd} style={{ color: '#808080', fontSize: '40px', marginTop: '60px' }} />

</li>
 
          

<li className={styles.container_graficos}>

<FontAwesomeIcon className={styles.icone_sino} icon={faPaperPlane} style={{ color: '#353738', fontSize: '16px', marginRight: '10px', marginTop: '30px' }} />

    <div className={styles.content}>
        <label style={{ textAlign: 'center', width: '100%', fontSize: '13px' }}>Enviar</label>
    </div>

</li>


<li className={styles.container_graficos}>

<FontAwesomeIcon className={styles.icone_sino} icon={faCoins} style={{ color: '#353738', fontSize: '16px', marginRight: '10px', marginTop: '30px' }} />

    <div className={styles.content}>
        <label style={{ textAlign: 'center', width: '100%', fontSize: '13px' }}>Receber por QRCODE</label>
    </div>

</li>

<li className={styles.container_graficos}>

<FontAwesomeIcon className={styles.icone_sino} icon={faCopy} style={{ color: '#353738', fontSize: '16px', marginRight: '10px', marginTop: '30px' }} />

    <div className={styles.content}>
        <label style={{ textAlign: 'center', width: '100%', fontSize: '13px' }}>Copiar e Colar</label>
    </div>

</li>


<li className={styles.container_graficos}>

<FontAwesomeIcon className={styles.icone_sino} icon={faBarcode} style={{ color: '#353738', fontSize: '16px', marginRight: '10px', marginTop: '30px' }} />

    <div className={styles.content}>
        <label style={{ textAlign: 'center', width: '100%', fontSize: '13px' }}>Escanear QRCODE</label>
    </div>

</li>

<li className={styles.container_graficos}>

<FontAwesomeIcon className={styles.icone_sino} icon={faMoneyCheckAlt} style={{ color: '#353738', fontSize: '16px', marginRight: '10px', marginTop: '30px' }} />

    <div className={styles.content}>
        <label style={{ textAlign: 'center', width: '100%', fontSize: '13px' }}>Saque Troco</label>
    </div>

</li>


<li className={styles.container_graficos}>

<FontAwesomeIcon className={styles.icone_sino} icon={faQrcode} style={{ color: '#353738', fontSize: '16px', marginRight: '10px', marginTop: '30px' }} />

    <div className={styles.content}>
        <label style={{ textAlign: 'center', width: '100%', fontSize: '13px' }}>Meu QRCODE</label>
    </div>

</li>

<li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>

  <label style={{ flex: 1, textAlign: 'center', fontSize: '14px', cursor: 'pointer' }}>Minhas chaves</label>

</li>

<li className={styles.container_proximo_cliente} style={{ position: 'relative', backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', top: '-15px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>

  <label style={{ flex: 1, textAlign: 'center', fontSize: '14px', cursor: 'pointer' }}>Meus limites</label>

</li>
           
<li className={styles.container_proximo_cliente} style={{ position: 'relative', backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', top: '-30px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>

  <label style={{ flex: 1, textAlign: 'center', fontSize: '14px', cursor: 'pointer' }}>Meus cartões</label>

</li>
          
        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}
  
    </>
  );
};

export default Dashboard;
