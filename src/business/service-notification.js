import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/service-notification.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TelefoneMaskProfressional from './../mask-input-edit-professional/index';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faImages, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faDatabase, faBalanceScale, faCheck, faUserNurse, faToolbox, faStar, faFileContract, faQuestionCircle, faStore, faTools    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  const [dados, setDados] = useState('');

  const [servicos, setServicos] = useState([]);

  const [inputName, setInputName] = useState('');

  const handleName = (e) => {
    setInputName(e.target.value);
  };

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
   
  const Navigate = useNavigate();

  const fetchServices = async () => {
    try {
      const token = dados.access_token;

      const response = await fetch('https://api.hest.me/api/vendor/services', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
          'Content-Type': 'application/json',
        },
      });  

      if (!response.ok) { 
        throw new Error('Erro ao buscar dados da API');
      }

      const data = await response.json();
      const id_servico_selecionado = sessionStorage.getItem('id_servico_selecionado')
      const filteredData = data.data.data.filter(item => id_servico_selecionado.includes(item.id));
      setServicos(filteredData);

      //console.log('Dados atualizados:', data);
    } catch (error) {
      console.error('Erro ao buscar dados da API', error);
    }
  };

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

    // Chama a função de fetch inicial
    fetchServices();


  }, []);


  const imgLogado = /*dados.img ||*/ 'https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg';
  const nomeLogado = dados.name || '';

  const [selectedServiceIds, setSelectedServiceIds] = useState([]);

  useEffect(() => {
    // Função para verificar sessionStorage e atualizar estado
    const updateSelectedServiceIds = () => {
      const storedIds = JSON.parse(sessionStorage.getItem('id_servico_selecionado')) || [];
      setSelectedServiceIds(storedIds);
    };

    // Chama a função inicialmente
    updateSelectedServiceIds();


  }, []);


  const enviar_dados = () => {

  if(inputName == ""){
    return
  } 

  if(selectedValue == ""){
    return
  } 
  
    Navigate('/business/service-payment');
  
}; 


const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
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

<div style={{ marginTop: '15px', fontSize: '18px', textAlign: 'center', width: '100%' }}>{nomeLogado}<p style={{ fontSize: '15px', color: '#808080' }}>“Estamos aqui para atender melhor nossos clientes”</p> <p style={{ fontSize: '15px', color: '#808080' }}>SELECIONE OS SERVIÇOS</p> </div>

</li>

<p style={{ marginTop: '30px' }}></p>


<div className={styles.container_confirmar_identidade}> 

  <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>O SERVIÇO É PRA VOCE?</div>

  <div className={styles.inputContainer}>
      <div className={styles.radioGroup}>
        <input 
          type="radio" 
          id="sms" 
          name="proximo_cliente" 
          value="sms"
          checked={selectedValue === 'sms'}
          onChange={handleChange}
          className={styles.container_proximo_cliente} 
          style={{ 
            backgroundColor: '#fff', 
            border: '1px solid rgba(0, 0, 0, 0.5)', 
            marginTop: '0px',
            outline: 'none', 
            paddingLeft: '15px' 
          }} 
        />
        <label htmlFor="sms" style={{ fontSize: '12px' }}>SMS</label>
      </div>

      <div className={styles.radioGroup}>
        <input 
          type="radio" 
          id="whats" 
          name="proximo_cliente" 
          value="whats"
          checked={selectedValue === 'whats'}
          onChange={handleChange}
          className={styles.container_proximo_cliente} 
          style={{ 
            backgroundColor: '#fff', 
            border: '1px solid rgba(0, 0, 0, 0.5)', 
            marginTop: '0px',
            outline: 'none', 
            paddingLeft: '15px' 
          }} 
        />
        <label htmlFor="whats" style={{ fontSize: '12px' }}>WHATSAPP</label>
      </div>

      <div className={styles.radioGroup}>
        <input 
          type="radio" 
          id="email" 
          name="proximo_cliente" 
          value="email"
          checked={selectedValue === 'email'}
          onChange={handleChange}
          className={styles.container_proximo_cliente} 
          style={{ 
            backgroundColor: '#fff', 
            border: '1px solid rgba(0, 0, 0, 0.5)', 
            marginTop: '0px',
            outline: 'none', 
            paddingLeft: '15px' 
          }} 
        />
        <label htmlFor="email" style={{ fontSize: '12px' }}>EMAIL</label>
      </div>

    </div>

  <div style={{ position: 'relative', width: '80%', left: '50%', marginTop: '20px', transform: 'translateX(-50%)' }}>

  <input type='email' placeholder="Email" value={inputName}  onChange={handleName}  className={styles.container_proximo_cliente} style={{ backgroundColor: '#fff', cursor: 'text', border: '1px solid rgba(0, 0, 0, 0.5)', outline: 'none', paddingLeft: '15px', borderRadius: '5px', height: '55px'}} />

  <div className={styles.radioGroup} style={{ marginLeft: '15px' }}>
        <input 
          type="checkbox"  
          id="politicas_cancelamento"
          name="proximo_cliente" 
          style={{ 
            backgroundColor: '#fff', 
            border: '1px solid rgba(0, 0, 0, 0.5)', 
            marginTop: '-10px',
            outline: 'none', 
            paddingLeft: '15px' 
          }} 
        />
        <label htmlFor="politicas_cancelamento" style={{ fontSize: '14px', marginTop: '8px', marginLeft: '10px', width: '100%' }}>Li e aceito as <label style={{ color: 'rgba(20, 99, 92, 1)' }}>políticas de cancelamento.</label></label>
    </div>

    <div className={styles.radioGroup} style={{ marginLeft: '15px' }}>
        <input 
          type="checkbox"  
          id="termos_condicoes"
          name="proximo_cliente" 
          style={{ 
            backgroundColor: '#fff', 
            border: '1px solid rgba(0, 0, 0, 0.5)', 
            marginTop: '-10px',
            outline: 'none', 
            paddingLeft: '15px' 
          }} 
        />
        <label htmlFor="termos_condicoes" style={{ fontSize: '14px', marginTop: '8px', marginLeft: '10px' }}>Li e concordo com os <label style={{ color: 'rgba(20, 99, 92, 1)' }}>termos e condições.</label></label>
      </div>

  </div>

  
    
    <p style={{ marginTop: '30px' }}></p>

</div>

<li onClick={enviar_dados} className={styles.container_proximo_cliente} style={{ border: 'none', marginTop: '5px', borderRadius: '5px', height: '40px', display: 'flex', alignItems: 'center' }}>

  <label style={{ flex: 1, cursor: 'pointer', marginTop: '7px', textAlign: 'center',  color: '#fff', fontSize: '14px' }}>Continuar</label>

</li>

<p style={{ marginTop: '50px' }}></p>
          
        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}
  
    </>
  );
};

export default Settings;
