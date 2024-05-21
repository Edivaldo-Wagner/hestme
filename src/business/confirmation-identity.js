import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/confirmation-identity.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TelefoneMaskProfressional from './../mask-input-edit-professional/index';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faImages, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faDatabase, faBalanceScale, faCheck, faUserNurse, faToolbox, faStar, faFileContract, faQuestionCircle, faStore, faTools    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  const [dados, setDados] = useState('');

  const [servicos, setServicos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);
   
  const Navigate = useNavigate();

  useEffect(() => {

    if (sessionStorage.getItem('meusDados') !== null) {
      // A partir deste ponto, você pode acessar os dados normalmente
      const dadosSalvos = JSON.parse(sessionStorage.getItem('meusDados'));
      setDados(dadosSalvos);

    }else{
      Navigate('/login')

      return
    }

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


  }, []);


  const [code, setCode] = useState(new Array(6).fill(''));

  const handleChangeInputsConfirmation = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input if the current input is filled
      if (value !== '' && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };






  const enviar_dados = () => {

    //console.log(code)

    if(code[0] == "" || code[1] == "" || code[2] == "" || code[3] == "" || code[4] == "" || code[5] == "" || code[6] == ""){

        return

    }

    Navigate('/business/service-details');
 

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

  <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>

    <div className={styles.spinner}></div>
  
  </div>

  <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>Digite o código de verificação</div>



  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
      {code.map((digit, index) => (
        <input 
          key={index}
          id={`code-input-${index}`}
          type="text"
          value={digit}
          onChange={(e) => handleChangeInputsConfirmation(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          placeholder='-'
          maxLength="1"
          style={{ width: '45px', height: '45px', outline: 'none', border: 'none',  color: '#353738', textAlign: 'center', borderRadius: '10px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)' }}
        />
      ))}
    </div>


    <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>INFORME O CÓDIGO RECEBIDO PELO CANAL ESCOLHIDO ANTERIORMENTE, E LOGO APÓS CLIQUE EM "CONTINUAR"</div>

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
