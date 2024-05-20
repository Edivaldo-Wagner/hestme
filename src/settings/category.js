import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import UserIcon from './../img/user-icon.jpg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/category.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import {faAngleLeft, faSignOutAlt, faCaretDown, faUser, faClock, faCoins, faPencilAlt, faTimes, faLock, faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';


const Settings = () => {


  {/*===========MODAL 1========*/}

  const [isModalCadastroOpen, setModalCadastroOpen] = useState(false)

  const openCadastroModal = () => setModalCadastroOpen(true);
  const closeCadastroModal = () => setModalCadastroOpen(false);


{/*===========/MODAL 1========*/}

{/*===========MODAL 2========*/}

  const [isModalEditarOpen, setModalEditarOpen] = useState(false)

  //const openEditarModal = () => setModalEditarOpen(true);
  const closeEditarModal = () => setModalEditarOpen(false);

{/*===========/MODAL 2========*/}

{/*===========MODAL 3========*/}

  const [isModalDeletarOpen, setModalDeletarOpen] = useState(false)

  //const openDeletarModal = () => setModalDeletarOpen(true);
  const closeDeletarModal = () => setModalDeletarOpen(false);

{/*===========/MODAL 3========*/}


  {/*========== BUCA CATEGORIA ==================*/}

    const Navigate = useNavigate();

    const [dados, setDados] = useState('');

    const [categorias, setCategorias] = useState([]);

 
  const fetchCategories = async () => {
    try {
      const token = dados.access_token;

     


      const response = await fetch('https://api.hest.me/api/vendor/services/categories', {
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
      setCategorias(data.data);

     // console.log('Dados atualizados:', data);
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
    fetchCategories();

    // Define o intervalo para chamar a API a cada 5 segundos (ou o intervalo desejado)
    const intervalId = setInterval(fetchCategories, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);



{/*========== /BUCA CATEGORIA ==================*/}

{/*========== ENVIAR DADOS ==================*/}

const [campo_nome_categoria, setCampo_nome_categoria] = useState('')

 const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange =  (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

 
const cadastrarCategoria = async ()=>{

  setCampo_nome_categoria(campo_nome_categoria)
 
  const formData = new FormData();
  formData.append('category_image', selectedFile);
  formData.append('category_name', campo_nome_categoria);


 
  const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch('https://api.hest.me/api/vendor/services/categories', options);
      const responseData = await response.json();

     // console.log(responseData)

      setCampo_nome_categoria('')

  setModalCadastroOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}


{/*========== /ENVIAR DADOS ==================*/}


{/*========== EDITAR DADOS ==================*/}
  
const [campo_editar_nome_categoria, setCampo_editar_nome_categoria] = useState('')

const [campo_editar_id_categoria, setCampo_editar_id_categoria] = useState(0)

const [categoriaSelecionada, setCategoriaSelecionada] = useState('');


const openEditarModal = (nomeCategoria, idCategoria) => {
  
    setCampo_editar_nome_categoria(nomeCategoria)

    setCampo_editar_id_categoria(idCategoria)

    setModalEditarOpen(true)



  };

 
{/*========== /EDITAR DADOS ==================*/}

{/*========== DELETAR DADOS ==================*/}

const [campo_deletar_id_categoria, setCampo_deletar_id_categoria] = useState(0)

const openDeletarModal = (idCategoria) => {

    setCampo_deletar_id_categoria(idCategoria)

    setModalDeletarOpen(true)
 
  };

 
const deletarCategoria = async ()=>{
  

  const options = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },

    }; 

    try {
      const response = await fetch(`https://api.hest.me/api/vendor/services/categories/${campo_deletar_id_categoria}`, options);
      const responseData = await response.json();

      console.log(responseData)

       setModalDeletarOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}


{/*========== /DELETAR DADOS ==================*/}

{/*========== ATUALIZAR DADOS ==================*/}

 const [mensagemErro, setMensagemErro] = useState(null);

 const [selectedFileEdit, setSelectedFileEdit] = useState(null);

const handleFileChangeEdit =  (event) => {
    const fileEdit = event.target.files[0];
    setSelectedFileEdit(fileEdit);
  };

 
const editarCategoria = async ()=>{

  if (!campo_editar_nome_categoria) {
    setMensagemErro("Por favor, preencha o nome antes de editar!");
    return; // Sai da função se os campos não estiverem preenchidos
  }

  if (!selectedFileEdit) {
    setMensagemErro("Por favor, selecione a imagem antes de editar!");
    return; // Sai da função se os campos não estiverem preenchidos
  }

  setCampo_editar_nome_categoria(campo_editar_nome_categoria)
 
  const formData = new FormData();
  formData.append('category_image', selectedFileEdit);
  formData.append('category_name', campo_editar_nome_categoria);


 
  const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch(`https://api.hest.me/api/vendor/services/categories/${campo_editar_id_categoria}`, options);
      const responseData = await response.json();

     // console.log(responseData)

      setCampo_editar_nome_categoria(campo_editar_nome_categoria)

      setMensagemErro("");

      setSelectedFileEdit(null);

       setModalEditarOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}


{/*========== /ATUALIZAR DADOS ==================*/}



  return (
    <>

      <div className={styles.all_container}>
      
      <Modal isOpen={isModalCadastroOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeCadastroModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Nova Categoria </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal}>

            <div className={styles.ul}>

            <div style={{ width: '100%', marginTop: '-5px' }}>
 
    <input 
  onChange={handleFileChange} 
  style={{ paddingLeft: '15px', textAlign: 'center' }} 
  type='file'
/>


  
  </div>

<div style={{ width: '100%', marginTop: '15px' }}>

    <input placeholder='Nome da categoria...' value={campo_nome_categoria} onChange={ (event)=> setCampo_nome_categoria(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px'}} type='text'/>

  </div>

  

  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label onClick={cadastrarCategoria} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/} 




    <Modal isOpen={isModalEditarOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeEditarModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Editar Categoria </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}


            <div className={styles.container_form_modal}>

            <div className={styles.ul}>

            {mensagemErro && (
  <div style={{ width: '100%', paddingTop: '20px', alignItems: 'center', textAlign: 'center', background: 'transparent', borderRadius: '20px', marginLeft: '15px' }}>
    <label style={{ position: 'relative', top: '-5px', color: 'rgb(140, 7, 27)' }}>{mensagemErro}</label>
  </div>
)}

<div style={{ width: '100%', marginTop: '-5px' }}>

    <input type='hidden' value={campo_editar_id_categoria}/>

    <input placeholder='Editar da categoria...' value={campo_editar_nome_categoria} onChange={ (event)=> setCampo_editar_nome_categoria(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px'}} type='text'/>

  </div> 

  <div style={{ width: '100%', marginTop: '15px' }}>
 
    <input 
  onChange={handleFileChangeEdit} 
  style={{ paddingLeft: '15px', textAlign: 'center' }} 
  type='file'
/>


   
  </div>

  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label onClick={editarCategoria} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Editar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/}


      <Modal isOpen={isModalDeletarOpen} className={styles.containerModalDelete}>

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Deletar Categoria </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>              

            </div> {/*dash_header*/}

            <div className={styles.container_delete_modal}>            

            <div style={{ width: '100%', height: '80px', borderRadius: '20px', background: 'rgb(255, 84, 0)' }}>

            <div style={{ textAlign: 'center', width: '100%', color: '#fff', fontSize: '25px', marginTop: '20px' }}><b>Deletar Categoria</b></div>

            <input type='hidden' value={campo_deletar_id_categoria}/>

            <div style={{ textAlign: 'center', width: '100%', marginTop: '40px' }}>Tem Certeza que Deseja Deletar a Categoria?</div>

            <hr/>

              <li onClick={closeDeletarModal} className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', width: '100px', float: 'right', right: '10px', marginTop: '0px', border: '1px solid rgb(140, 7, 27)' }}>

              <label onClick={editarCategoria} className={styles.btns} style={{ color: 'rgb(140, 7, 27)' }}>Não</label>

             </li>

             <li className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', width: '100px', float: 'right', right: '10px', marginTop: '0px', border: '1px solid rgb(255, 84, 0)' }}>

              <label onClick={deletarCategoria} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Sim</label>

            </li>

            </div> {/*container_delete_modal*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/}



      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        <div className={styles.dash_header} style={{ border: 'none' }}>

<Link to="/settings" style={{textDecoration: 'none'}}>

<div className={styles.container_icone_sino}>

<FontAwesomeIcon className={styles.icone_sino} icon={faAngleLeft} style={{ color: '#fff', fontSize: '20px' }} />

</div>

</Link>

<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '30px' }}>Categorias </div>


</div> {/*dash_header*/}

  <p style={{marginTop: '130px'}}></p>

{/*===========PRIMEIRA UNIDADE========*/}
      
  <div style={{ width: '100%', marginTop: '-15px' }}> 


        { 
            categorias.map((categoria) => ( 

            <div>


          <FontAwesomeIcon onClick={()=> openDeletarModal(categoria.id)} className={styles.iconesino} icon={faTrash} style={{ position: 'relative', fontSize: '20px', right: '20px', color: 'rgba(140, 7, 27 , 1)', cursor: 'pointer', marginTop: '0px', float: 'right' }} /> 
  
          <FontAwesomeIcon onClick={()=> openEditarModal(categoria.name, categoria.id)} className={styles.iconesino} icon={faPencilAlt} style={{ position: 'relative', fontSize: '20px', right: '20px', color: 'rgba(0, 0, 0 ,0.6)', cursor: 'pointer', marginTop: '0px', float: 'right' }} /> 
   
    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: '1px solid rgba(0, 0, 0 ,0.2)' }}>
 
    <li style={{ listStyle: 'none', marginTop: '40px', textAlign: 'center' }}><b style={{ width: '100%', textAlign: 'center', color: '#353738' }}>{categoria.slug}</b></li>

    <img style={{ width: '80px', height: '80px', borderRadius: '50%', marginTop: '20px', boxShadow: '2px 4px 4px 2px rgba(0, 0, 0, 0.2)' }} src={categoria.image}/>

  <li className={styles.container_btns} style={{ position: 'relative', cursor: 'grab', left: '-5px', top: '0px', height: '40px', width: '90%' }}>

    <label className={styles.btns} style={{ cursor: 'grab' }}> {categoria.name}</label>
    
  </li>

  <p style={{ marginTop: '20px' }}></p>

</li>

</div>

 ))}

  </div>

  {/*=========== /PRIMEIRA UNIDADE========*/}

 
    

  
  <li onClick={openCadastroModal} className={styles.container_btns} style={{ backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)' }}>

  <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar nova categoria</label>

</li>

        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
