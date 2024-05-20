import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import UserIcon from './../img/user-icon.jpg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import RattingsIcon from './../img/rattings-icone.png'
import  styles from './../css/rattings.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faSignOutAlt, faCaretDown, faUser, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  {/*===========MODAL 1========*/}

  const [isModalCadastroOpen, setModalCadastroOpen] = useState(false)  
  const openCadastroModal = () => setModalCadastroOpen(true);
  const closeCadastroModal = () => setModalCadastroOpen(false);

{/*===========/MODAL 1========*/}


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


{/*========== BUCA GRUPO ==================*/}

    const Navigate = useNavigate();

    const [dados, setDados] = useState('');

    const [avaliacoes, setAvaliacoes] = useState([]);

 
  const fetchRatting = async () => {
    try {
      const token = dados.access_token;

      const response = await fetch('https://api.hest.me/api/reviews/2', {
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
      setAvaliacoes(data.data);

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
    fetchRatting();

    // Define o intervalo para chamar a API a cada 5 segundos (ou o intervalo desejado)
    const intervalId = setInterval(fetchRatting, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);



{/*========== /BUCA GRUPO ==================*/}


{/*========== CADASTRAR AVALIACAO ==================*/}

  const [campo_nome, setCampo_nome] = useState('')

  const [campo_estrela, setCampo_estrela] = useState(1)

  const [campo_descricao, setCampo_descricao] = useState('')

  const cadastrarAvaliacao = async ()=>{

  if (!campo_nome) {
 
    return;  
  }

  if (!campo_estrela) {
 
    return; 
  }

  if (!campo_descricao) {
 
    return; 
  }

 
  const formData = new FormData();
  formData.append('name', campo_nome);
  formData.append('star', campo_estrela);
  formData.append('description', campo_descricao);
  formData.append('vendor_id', 2);

 
  const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch('https://api.hest.me/api/reviews', options);
      const responseData = await response.json();

      console.log(responseData)

      setCampo_nome('')

      setCampo_estrela(1)
 
      setCampo_descricao('')

      setModalCadastroOpen(false);

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}

{/*========== CADASTRAR AVALIACAO ==================*/}



const uma_estrela = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
      </div>

      )

      const duas_estrelas = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
      </div>

      )


      const tres_estrelas = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
      </div>

      )


const quatro_estrelas = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ opacity: 0.5 }} />
      </div>

      )


const cinco_estrelas = (

<div className={styles.estrelaIcon} style={{ display: 'flex',  position: 'relative', top: '-20px', right: '30px', float: 'right', backgrund: 'pink', textAlign: 'right', color: '#353738' }}>

        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />
      </div>

      )




  return (
    <>
 
      <div className={styles.all_container}>

      <Modal isOpen={isModalCadastroOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeCadastroModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Avaliar Empresa</label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal}>

            <div className={styles.ul}>

<div style={{ width: '100%', marginTop: '15px' }}>

    <input placeholder='Nome...' value={campo_nome} onChange={ (event)=> setCampo_nome(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}} type='text'/>

  </div>


  <div style={{ width: '100%', marginTop: '-5px' }}>

    <select value={campo_estrela} onChange={ (event)=> setCampo_estrela(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}}>

        <option value='1'>1 estrela - Péssimo</option>

        <option value='2'>2 estrelas - Ruim</option>

        <option value='3'>3 estrelas - Regular</option>

        <option value='4'>4 estrelas - Bom</option>

        <option value='5'>5 estrelas - Excelente</option>

      </select>

    </div>

    <div style={{ width: '100%', marginTop: '-5px' }}>

      <textarea placeholder='Descrição...' value={campo_descricao} onChange={ (event)=> setCampo_descricao(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', paddingTop: '15px', height: '55px', outline: 'none'}}>


      </textarea>

    </div>
  

  <li onClick={cadastrarAvaliacao} className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/} 


      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        <div className={styles.dash_header} style={{ border: 'none' }}>

        <li onClick={openCadastroModal} className={styles.container_btns} style={{ position: 'relative', cursor: 'pointer', backgroundColor: 'rgb(255, 84, 0)', float: 'right', right: '-15px', height: '40px', marginTop: '35px', maxWidth: '200px' }}>
    
    <label className={styles.btns} style={{ color: '#fff', cursor: 'pointer' }}>Avaliar Empresa</label>
    
  </li>

<Link to="/settings" style={{textDecoration: 'none'}}>

<div className={styles.container_icone_sino} style={{ marginTop: '30px' }}>

<FontAwesomeIcon className={styles.icone_sino} icon={faAngleLeft} style={{ color: '#fff', fontSize: '20px' }} />

</div>

</Link>

<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '30px' }}>Avaliações </div>


</div> {/*dash_header*/}

  <p style={{marginTop: '130px'}}></p>
      
      
{ 
avaliacoes.map((avaliacao) => ( 

<div style={{ width: '100%', marginTop: '-90px'}}>

  <img style={{position: 'relative', top: '110px', width: '110px', float: 'left', marginLeft: '20px' }} src={RattingsIcon}/>

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent'}}>

    <li className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)', float: 'right', left: '50%', transform: 'translateX(-55%)', height: '40px', marginTop: '30px', width: '60%' }}>
    
    <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)', cursor: 'text' }}>{avaliacao.name}</label>
    
  </li>

    <li style={{ listStyle: 'none', marginTop: '40px',  }}>

      {avaliacao.star === 1 ? uma_estrela : avaliacao.star === 2 ? duas_estrelas : avaliacao.star === 3 ? tres_estrelas : avaliacao.star === 4 ? quatro_estrelas : avaliacao.star === 5 ? cinco_estrelas : ""}

    <p style={{ fontSize: '17px', color: '#353738', lineHeight: '25px', marginTop: '30px' }}>{avaliacao.description}</p> </li>

  </li>

  <hr className={styles.border_bottom}/>

  </div>

  ))}
    
     </div>  

      </div> {/*container_agendamentos*/}

      
      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
