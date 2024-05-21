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
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faImages, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faDatabase, faBalanceScale, faCheck, faUserNurse, faToolbox, faStar, faFileContract, faQuestionCircle, faStore, faTools    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  const [dados, setDados] = useState('');

  const [servicos, setServicos] = useState([]);

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

    if(selectedButton == null){

      return

    }

 
    Navigate('/business/payment-success');
  
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

  <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>REALIZE O PAGAMENTO</div>

  <div style={{ position: 'relative', marginTop: '40px', fontSize: '14px', textAlign: 'center', width: '100%' }}>DETALHES DO AGENDAMENTO</div>

    <div style={{ position: 'relative', display: 'flex', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ padding: 0, margin: 0, width: '90%', border: '1px solid rgba(0, 0, 0, 0.2)' }}>

      <FontAwesomeIcon className={styles.icone_main} icon={faCalendar} style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)', float: 'left', alignItems: 'center', left: '20px', color: '#353738', fontSize: '22px' }} />
          

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '14px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>SERVIÇOS ADICIONADOS</b></div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '14px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>09:30 - 10:00</b> Exemplo - R$ 40</div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '14px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>10:00 - 11:00</b> Exemplo - R$ 80</div>

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '14px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>DATA</b></div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '14px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>00/00/0000</b></div>

      <div style={{ position: 'relative', marginTop: '5px', fontSize: '12px', textAlign: 'center', width: '100%', fontSize: '13px' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>TOTAL: R$ 80</b></div>
        
      </ul>

    </div>

    <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>PAGAMENTO VIA CARTÃO</div>

    <FontAwesomeIcon className={styles.icone_main} icon={faMoneyCheckAlt} style={{ position: 'relative', textAlign: 'center', width: '100%', marginTop: '12px', color: 'rgb(25, 133, 123)', fontSize: '27px' }} />


    <div style={{ position: 'relative', display: 'flex', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ display: 'flex', padding: 0, marginLeft: '11px' }}>
        <li
          style={{
            listStyle: 'none',
            marginRight: '9px',
            width: '90px',
            height: '35px',
            fontSize: '12px',
            textAlign: 'center',
            borderRadius: '5px',
            cursor: 'pointer',
            borderBottom: selectedButton === 'DEBITO' ? '1px solid rgb(25, 133, 123)' : '1px solid #fff',
            border: 'none',
          }}
          onClick={() => handleButtonClick('DEBITO')}
        >
          <label style={{ position: 'relative', top: '8px', cursor: 'pointer', color: 'rgb(25, 133, 123)' }}>DÉBITO</label>
        </li>

        <li
          style={{
            listStyle: 'none',
            marginRight: '11px',
            width: '90px',
            height: '35px',
            fontSize: '12px',
            textAlign: 'center',
            borderRadius: '5px',
            cursor: 'pointer',
            borderBottom: selectedButton === 'CREDITO' ? '1px solid rgb(25, 133, 123)' : '1px solid #fff',
            border: 'none',
          }}
          onClick={() => handleButtonClick('CREDITO')}
        >
          <label style={{ position: 'relative', top: '8px', cursor: 'pointer', color: 'rgb(25, 133, 123)' }}>CRÉDITO</label>
        </li>
      </ul>

    </div>

     <div style={{ position: 'relative', display: selectedButton === 'DEBITO' ? 'flex' : 'none', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ padding: '5px 0px', margin: 0, width: '90%' }}>
 
        <li style={{ listStyle: 'none', width: '100%', height: '12px', backgroundColor: 'rgba(85, 67, 59, 0.11)' }}></li>

        <li style={{ listStyle: 'none', marginTop: '12px', width: '100%', height: '10px', backgroundColor: 'rgba(85, 67, 59, 0.11)' }}></li>

        <li style={{ listStyle: 'none', marginTop: '10px', width: '100%', height: '40px', backgroundColor: 'rgba(85, 67, 59, 0.11)' }}></li>

      </ul>

    </div>

    <div style={{ position: 'relative', display: selectedButton === 'CREDITO' ? 'flex' : 'none', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ padding: '5px 0px', margin: 0, width: '90%' }}>
 
        <li style={{ listStyle: 'none', width: '100%', height: '12px', backgroundColor: 'rgba(85, 67, 59, 0.11)' }}></li>

        <li style={{ listStyle: 'none', marginTop: '12px', width: '100%', height: '10px', backgroundColor: 'rgba(85, 67, 59, 0.11)' }}></li>

        <li style={{ listStyle: 'none', marginTop: '12px', width: '100%', height: '12px', backgroundColor: 'rgba(85, 67, 59, 0.11)' }}></li>

        <li style={{ listStyle: 'none', marginTop: '12px', width: '100%', height: '10px', backgroundColor: 'rgba(85, 67, 59, 0.11)' }}></li>

      </ul>

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
