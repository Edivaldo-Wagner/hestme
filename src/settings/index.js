import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/settings.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faDatabase, faBalanceScale, faTags, faUserNurse, faToolbox, faStar, faFileContract, faQuestionCircle, faStore, faTools    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  const [dados, setDados] = useState('');
   
   
  const Navigate = useNavigate();

  useEffect(() => {
    // Condição para verificar se há dados na sessionStorage
    if (sessionStorage.getItem('meusDados') !== null) {
      // A partir deste ponto, você pode acessar os dados normalmente
      const dadosSalvos = JSON.parse(sessionStorage.getItem('meusDados'));
      setDados(dadosSalvos);

      // Exemplo: alguma lógica que precisa ocorrer após a renderização
      console.log(nomeLogado);
    }else{
      Navigate('/login')
    }
  }, []);


  const imgLogado = /*dados.img ||*/ 'https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg';
  const nomeLogado = dados.name || '';
 

  const verPaginaComercial = () => {


    alert("ok")
  
    Navigate('/business/bio');

};

  return (
    <>

      <Header className={styles.header_menu}/>

      <div className={styles.all_container}>

      

      <div className={styles.dash_header} style={{ border: 'none' }}>

      <FontAwesomeIcon className={styles.icone_sino} icon={faBell} style={{ color: '#353738', fontSize: '20px' }} />

      <div className={styles.titulo_agendamento} style={{ color: '#353738', marginLeft: '30px' }}>Configurações</div>

      <button className={styles.btn_hoje} style={{ color: 'rgb(255, 84, 0)', fontSize: '13px' }}>Ganhe 10%</button>

      </div> {/*dash_header*/}

      


      <div className={styles.container_agendamentos} style={{ marginTop: '30px' }}>

        <div className={styles.ul}>

<li className={styles.container_proximo_cliente} style={{height: '120px', display: 'flex', border: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>

<img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={imgLogado} alt="Imagem" />

<div style={{ marginTop: '15px', fontSize: '18px', textAlign: 'center', width: '100%' }}>{nomeLogado}<p style={{ fontSize: '15px', color: '#808080' }}>“Estamos aqui para atender melhor nossos clientes”</p> </div>

</li>

<Link to="/settings/profile" className={styles.container_proximo_cliente} style={{textDecoration: 'none'}}> 
  
<li style={{ textAlign: 'left', width: '100%' }}>


  <FontAwesomeIcon className={styles.iconesino} icon={faDatabase}/>

  <label className={styles.descs}>Dados</label>

</li>

</Link>

<Link to="/settings/places" className={styles.container_proximo_cliente} style={{textDecoration: 'none'}}> 

<li style={{ textAlign: 'left', width: '100%' }}>


  <FontAwesomeIcon className={styles.iconesino} icon={faBalanceScale}/>

  <label className={styles.descs} style={{ marginLeft: '33px' }}>Unidades</label>

</li>

</Link>
   
<Link to="/settings/professionals" className={styles.container_proximo_cliente} style={{textDecoration: 'none'}}> 

<li style={{ textAlign: 'left', width: '100%' }}>

  <FontAwesomeIcon className={styles.iconesino} icon={faUserNurse}/>

  <label className={styles.descs}>Profissionais</label>

</li>

</Link>

<Link to="/settings/category" className={styles.container_proximo_cliente} style={{textDecoration: 'none'}}> 

<li style={{ textAlign: 'left', width: '100%' }}>

  <FontAwesomeIcon className={styles.iconesino} icon={faTags}/>

  <label className={styles.descs}>Categoria</label>

</li>

</Link>

<Link to="/settings/services" className={styles.container_proximo_cliente} style={{textDecoration: 'none'}}> 

<li style={{ textAlign: 'left', width: '100%' }}>


  <FontAwesomeIcon className={styles.iconesino} icon={faToolbox}/>

  <label className={styles.descs} style={{ marginLeft: '37px' }}>Serviços</label>

</li>

</Link>


<Link to="/settings/rattings" className={styles.container_proximo_cliente} style={{textDecoration: 'none'}}> 

<li style={{ textAlign: 'left', width: '100%' }}>

  <FontAwesomeIcon className={styles.iconesino} icon={faStar}/>

  <label className={styles.descs} style={{ marginLeft: '37px' }}>Avaliações</label>

</li>

</Link>

<Link to="/settings/terms" className={styles.container_proximo_cliente} style={{textDecoration: 'none'}}> 

<li style={{ textAlign: 'left', width: '100%' }}>

  <FontAwesomeIcon className={styles.iconesino} icon={faFileContract}/>

  <label className={styles.descs} style={{ marginLeft: '41px' }}>Termos e Condições</label>

</li>
 
</Link>

<li className={styles.container_proximo_cliente}>


  <FontAwesomeIcon className={styles.iconesino} icon={faQuestionCircle}/>

  <label className={styles.descs}>Ajuda</label>

</li>

<Link to="/business/bio" className={styles.container_proximo_cliente} style={{ border: 'none', textDecoration: 'none', marginTop: '10px', borderRadius: '5px', backgroundColor: 'rgb(255, 84, 0)', height: '40px', display: 'flex', alignItems: 'center' }}>

  <label style={{ flex: 1, marginTop: '7px', textAlign: 'center',  color: '#fff', fontSize: '14px' }}>Ver página comercial</label>

  <FontAwesomeIcon className={styles.iconesino} icon={faStore} style={{ position: 'relative', marginRight: '30px', color: '#fff', fontSize: '19px'}} />

</Link>

<Link to="/settings/customization" className={styles.container_proximo_cliente} style={{ border: 'none', textDecoration: 'none', marginTop: '10px', borderRadius: '5px', backgroundColor: 'rgb(255, 84, 0)', height: '40px', display: 'flex', alignItems: 'center' }}>

  <label style={{ flex: 1, marginTop: '7px', textAlign: 'center',  color: '#fff', fontSize: '14px' }}>Configurar página comercial</label>

  <FontAwesomeIcon className={styles.iconesino} icon={faTools} style={{ position: 'relative', marginRight: '30px', color: '#fff', fontSize: '19px'}} />

</Link>

<p style={{ marginTop: '50px' }}></p>
          
        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}
  
    </>
  );
};

export default Settings;
