import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/confirmation-service.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TelefoneMaskProfressional from './../mask-input-edit-professional/index';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faImages, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faDatabase, faBalanceScale, faCheck, faUserNurse, faToolbox, faStar, faFileContract, faQuestionCircle, faStore, faTools    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  const [dados, setDados] = useState('');

  const [servicos, setServicos] = useState([]);

  const [mobileEdit, setTelefoneEdit] = useState('');

  const handleTelefoneChangeEdit = (e) => {
    setTelefoneEdit(e.target.value);
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

  if(mobileEdit == ""){
    return
  }

  if(selectedButton == null){
    return
  }


  sessionStorage.setItem("confirmacao_identidade_para_servico_selecionado", mobileEdit)

  sessionStorage.setItem("meio_confirmacao_identidade_para_servico_selecionado", selectedButton)

    // Navega para '/business/confirmation-identity' apenas se houver serviços selecionados
    Navigate('/business/confirmation-identity');
  
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

  <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>CONFIRME SUA IDENTIDADE</div>

  <div style={{ position: 'relative', width: '80%', left: '50%', marginTop: '20px', transform: 'translateX(-50%)' }}>

  <TelefoneMaskProfressional value={mobileEdit}  onChange={handleTelefoneChangeEdit} className={styles.container_proximo_cliente} style={{ outline: 'none' }} />
  
  </div>

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
            backgroundColor: selectedButton === 'SMS' ? '#fff' : 'rgb(25, 133, 123)',
            border: selectedButton === 'SMS' ? '1px solid rgb(25, 133, 123)' : '2px solid rgb(25, 133, 123)',
          }}
          onClick={() => handleButtonClick('SMS')}
        >
          <label style={{ position: 'relative', top: '8px', cursor: 'pointer', color: selectedButton === 'SMS' ? 'rgb(25, 133, 123)' : '#fff' }}>SMS</label>
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
            backgroundColor: selectedButton === 'WHATSAPP' ? '#fff' : 'rgb(25, 133, 123)',
            border: selectedButton === 'WHATSAPP' ? '1px solid rgb(25, 133, 123)' : '2px solid rgb(25, 133, 123)',
          }}
          onClick={() => handleButtonClick('WHATSAPP')}
        >
          <label style={{ position: 'relative', top: '8px', cursor: 'pointer', color: selectedButton === 'WHATSAPP' ? 'rgb(25, 133, 123)' : '#fff' }}>WHATSAPP</label>
        </li>
      </ul>

    </div>

    <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>CLIQUE EM QUAL DESEJA RECEBER O CÓDIGO DE VERIFICAÇÃO</div>

    <div style={{ position: 'relative', display: 'flex', marginTop: '20px', justifyContent: 'center' }}>

      <ul style={{ padding: 0, margin: 0, width: '90%', border: '1px solid rgba(0, 0, 0, 0.2)' }}>

      <div style={{ position: 'relative', marginTop: '10px', fontSize: '14px', textAlign: 'center', width: '100%' }}><b style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Preços dos serviços selecionados</b></div>

        <div style={{ marginTop: '10px' }}>

        {
            servicos.map((servico) => ( 

        <div style={{ marginTop: '-15px', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', padding: 0, margin: 0, width: '100%' }}>
        <li
          style={{
            listStyle: 'none',
            width: '90%',
            fontSize: '12px',
            marginTop: '20px',
            textAlign: 'center',
            borderRadius: '5px',
            backgroundColor: 'rgb(25, 133, 123)',
            padding: '2px 0', 
            color: '#fff', 
          }}
        >
          <label
            style={{
              cursor: 'text',
              marginTop: '10px',
              fontSize: '14.5px',
            }}
          >
            SERVIÇO {servico.name} | R${servico.price}
          </label>
        </li>
      </ul>
    </div>

         ))
          }
          <p style={{ marginTop: '30px' }}></p>
          </div>
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
