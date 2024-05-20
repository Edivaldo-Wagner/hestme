import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/bio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      setServicos(data.data.data);

      //console.log(data.data.data)

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

    // Define o intervalo para chamar a API a cada 5 segundos (ou o intervalo desejado)
    const intervalId = setInterval(fetchServices, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);


  const imgLogado = /*dados.img ||*/ 'https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg';
  const nomeLogado = dados.name || '';


  const handleClick = (id) => {


    // Obtem os IDs do sessionStorage ou inicia um array vazio
    const storedIds = JSON.parse(sessionStorage.getItem('id_servico_selecionado')) || [];

    // Adiciona ou remove o ID com base na presença no array
    if (storedIds.includes(id)) {
      sessionStorage.setItem('id_servico_selecionado', JSON.stringify(storedIds.filter((storedId) => storedId !== id)));
    } else {
      sessionStorage.setItem('id_servico_selecionado', JSON.stringify([...storedIds, id]));
    }
  };

  const [selectedServiceIds, setSelectedServiceIds] = useState([]);

  useEffect(() => {
    // Função para verificar sessionStorage e atualizar estado
    const updateSelectedServiceIds = () => {
      const storedIds = JSON.parse(sessionStorage.getItem('id_servico_selecionado')) || [];
      setSelectedServiceIds(storedIds);
    };

    // Chama a função inicialmente
    updateSelectedServiceIds();

    // Configura um setInterval para verificar a cada 1 segundo
    const intervalId = setInterval(updateSelectedServiceIds, 1000);

    // Limpa o interval quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);


  const enviar_dados = () => {
  const selectedServiceIds = JSON.parse(sessionStorage.getItem('id_servico_selecionado')) || [];

  // Verifica se o array não está vazio
  if (selectedServiceIds.length > 0) {
    // Navega para '/business/confirmation-service' apenas se houver serviços selecionados
    Navigate('/business/confirmation-service');
  } else {
    // Faça algo se o array estiver vazio, se necessário
    console.log('Nenhum serviço selecionado.');
  }
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

 {
 
servicos.map((servico) => ( 

<div onClick={() => handleClick(servico.id)} className={styles.container_proximo_cliente} style={{textDecoration: 'none', heiht: '150px', backgroundColor: selectedServiceIds.includes(servico.id) ? '#fff' : '', border: selectedServiceIds.includes(servico.id) ? '2px solid rgb(25, 133, 123)' : '' }}> 

<li style={{
  width: '100%',
  textAlign: 'center',
  listStyle: 'none',
  marginTop: '10px',
}}>

  <label style={{
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: '#fff',
    width: '120px',
    left: '15px',
    backgroundColor: selectedServiceIds.includes(servico.id) ? 'rgb(46, 125, 50)' : 'rgba(20, 99, 92, 1)',
    borderRadius: '40px',
    padding: '0px 25px',
    marginRight: 'auto',
    marginTop: '10px',
    textAlign: 'center',
  }}>
    <FontAwesomeIcon className={styles.iconesino} icon={faHandHoldingUsd} />
    <label style={{ position: 'relative', marginLeft: '5px', top: '5px', fontSize: '12px' }}>R${servico.price}</label>
  </label>

  <label style={{
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    color: '#fff',
    width: '120px',
    left: '15px',
    backgroundColor: selectedServiceIds.includes(servico.id) ? 'rgb(46, 125, 50)' : 'rgba(20, 99, 92, 1)',
    borderRadius: '40px',
    padding: '0px 25px',
    marginTop: '10px', // Centraliza horizontalmente com 'auto' no margin
    marginRight: 'auto',
    textAlign: 'center',
  }}>
    <FontAwesomeIcon className={styles.iconesino} style={{ fontSize: '13px', marginTop: '5px', marginLeft: '-15px' }} icon={faClock} />
    <label style={{ position: 'relative', marginLeft: '5px', top: '5px', fontSize: '12px' }}>{servico.interval_time} min</label>
  </label>

  <div className={styles.descs} style={{ position: 'relative', width: '100%', bottom: '15px', marginTop: '30px', color: selectedServiceIds.includes(servico.id) ? 'rgb(46, 125, 50)' : '' }}><b>{servico.name}</b> <FontAwesomeIcon className={styles.icone_main} icon={faCheck} style={{ position: 'relative', fontSize: '20px', bottom: '70px', right: '20px', opacity: selectedServiceIds.includes(servico.id) ? 1 : 0 }} /> </div>

  

</li>

</div>

))}

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
