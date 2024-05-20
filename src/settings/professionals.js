import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import UserIcon from './../img/user-icon.jpg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import TelefoneMask from './../mask-input/index'
import TelefoneMaskProfressional from './../mask-input-edit-professional/index'
import  styles from './../css/professionals.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faSignOutAlt, faCaretDown, faUser, faEnvelope, faTimes, faPencilAlt, faTrash, faKey, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

  {/*========== MASCARA INPUT ==================*/}
  
  const [mobile, setTelefone] = useState('');

   const handleTelefoneChange = (e) => {
    setTelefone(e.target.value);
  };

{/*========== /MASCARA INPUT ==================*/}

  {/*========== BUCA PROFISSIONAIS ==================*/}

    const Navigate = useNavigate();

    const [dados, setDados] = useState('');

    const [profissionais, setProfissionais] = useState([]);

 
  const fetchCategories = async () => {
    try {
      const token = dados.access_token;

     


      const response = await fetch('https://api.hest.me/api/vendor/staff', {
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
      setProfissionais(data.data);

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
    fetchCategories();

    // Define o intervalo para chamar a API a cada 5 segundos (ou o intervalo desejado)
    const intervalId = setInterval(fetchCategories, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);



{/*========== /BUCA PROFISSIONAIS ==================*/}  



  {/*========== ENVIAR DADOS ==================*/}

    const [name, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var estadoModal = ""

    const enviarDados = async ()=>{

      

      if(name == "" || email == "" || password == "" || mobile == ""){

    estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"250px", color:"#fff", padding:"25px", background:"rgba(235, 64, 52, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Preencha todos os campos!</div>)

      setMsgModalOpen(estadoModal)

      setModal1Open(true)


      setTimeout(()=>{

        setModal1Open(false)        

      }, 3000)
 
    return


  }

  const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('mobile', mobile);

    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };


    try {
      const response = await fetch('https://api.hest.me/api/vendor/staff', options);
      const responseData = await response.json();

     // console.log(responseData)

      if(responseData.message == "Email must be unique" && responseData.status == 0){

        estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"230px", color:"#fff", padding:"25px", background:"rgba(235, 64, 52, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Email já está em uso!</div>)

      setMsgModalOpen(estadoModal)

      setModal1Open(true)


      setTimeout(()=>{

        setModal1Open(false)        

      }, 3000)

      return

      }


      if(responseData.message == "mobile no must be unique" && responseData.status == 0){

        estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"230px", color:"#fff", padding:"25px", background:"rgba(235, 64, 52, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Celular já está em uso!</div>)

      setMsgModalOpen(estadoModal)

      setModal1Open(true)


      setTimeout(()=>{

        setModal1Open(false)        

      }, 3000)

      return

      }


      if(responseData.message == "Process done successfully." && responseData.status == 1){

        estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"230px", color:"#fff", padding:"25px", background:"rgba(17, 158, 67, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Profissional cadastrado com sucesso.</div>)

        setTelefone('')
        setNome('')
        setEmail('')
        setPassword('')

      setMsgModalOpen(estadoModal)

      setModal1Open(true)




      setTimeout(()=>{

         setModal1Open(false);

       //   Navigate('/login')  

            }, 3000)

 
      return

      }

   

 

    } catch (error) {
      console.error('Erro na solicitação:', error);
    }


    }

{/*========== /ENVIAR DADOS ==================*/}

{/*========== EDITAR DADOS ==================*/}
    
const [nameEdit, setNomeEdit] = useState('')

const [emailEdit, setEmailEdit] = useState('')

const [passwordEdit, setPasswordEdit] = useState('') 

const [mobileEdit, setTelefoneEdit] = useState('');

const [campo_editar_id_profissional, setCampo_editar_id_profissional] = useState(0)

   const handleTelefoneChangeEdit = (e) => {
    setTelefoneEdit(e.target.value);
  };


const openEditarModal = (profissionalName, profissionalEmail , profissionalMobile, profissionalId) => {
  
    setNomeEdit(profissionalName)

    setEmailEdit(profissionalEmail)

    setPasswordEdit("***********")

    setTelefoneEdit(profissionalMobile)

    setCampo_editar_id_profissional(profissionalId)

    setModalEditarOpen(true)
 


  };

 
{/*========== /EDITAR DADOS ==================*/}

{/*========== ATUALIZAR DADOS ==================*/}

 const [mensagemErro, setMensagemErro] = useState(null);

 const [selectedFileEdit, setSelectedFileEdit] = useState(null);

const handleFileChangeEdit =  (event) => {
    const fileEdit = event.target.files[0];
    setSelectedFileEdit(fileEdit);
  };

  const editarProfissional = async ()=>{

  if (!nameEdit) {
    setMensagemErro("Por favor, preencha o nome antes de editar!");
    return; 
  }

  if (!emailEdit) {
    setMensagemErro("Por favor, preencha o email antes de editar!");
    return; 
  }

  if (!passwordEdit) {
    setMensagemErro("Por favor, preencha a password antes de editar!");
    return; 
  }

  if (!mobileEdit) {
    setMensagemErro("Por favor, preencha o celular antes de editar!");
    return; 
  }

  if (!selectedFileEdit) {
    setMensagemErro("Por favor, selecione a imagem antes de editar!");
    return; 
  }

  const formData = new FormData();
  formData.append('name', nameEdit);
  formData.append('email', emailEdit);
  formData.append('mobile', mobileEdit);
  formData.append('password', passwordEdit);
  formData.append('profile', selectedFileEdit);

  const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch(`https://api.hest.me/api/vendor/staff/${campo_editar_id_profissional}`, options);
      const responseData = await response.json();

     // console.log(responseData)

      setNomeEdit("")

      setEmailEdit("")

      setSelectedFileEdit(null);

      setMensagemErro("");

       setModalEditarOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 

  setMensagemErro(""); 


}

{/*========== /ATUALIZAR DADOS ==================*/}

{/*========== DELETAR DADOS ==================*/}

const [campo_deletar_id_profissional, setCampo_deletar_id_profissional] = useState(0)

const openDeletarModal = (idProfissional) => {

    setCampo_deletar_id_profissional(idProfissional)

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
      const response = await fetch(`https://api.hest.me/api/vendor/staff/${campo_deletar_id_profissional}`, options);
      const responseData = await response.json();

      console.log(responseData)

       setModalDeletarOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}


{/*========== /DELETAR DADOS ==================*/}

{/*========== MODAL ==================*/}

const [isModal1Open, setModal1Open] = useState(false)

const [msgModalOpen, setMsgModalOpen] = useState("")

  const openModal = () => setModal1Open(true);
  const closeModal = () => setModal1Open(false);

  


{/*========== /MODAL ==================*/}

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


  return (
    <>

    <Modal isOpen={isModal1Open} className="containerModal">
      {msgModalOpen}
  </Modal>


  <Modal isOpen={isModalEditarOpen} className={styles.containerModalEditar}>

      <FontAwesomeIcon onClick={closeEditarModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Editar Profissional </label></div>


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

    <input type='hidden' value={campo_editar_id_profissional}/>

    <input placeholder='Nome...' value={nameEdit} onChange={(event) => setNomeEdit(event.target.value)} className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px'}} type='text'/>

  </div> 

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Email...' value={emailEdit} onChange={(event)=> setEmailEdit(event.target.value)} className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='password...' value={passwordEdit} onChange={(event)=> setPasswordEdit(event.target.value)} className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px'}} type='password'/>

  </div>

  <div style={{ width: '100%', marginTop: '5px', marginLeft: '10px' }}>

    <TelefoneMaskProfressional value={mobileEdit}  onChange={handleTelefoneChangeEdit} className={styles.container_proximo_cliente} style={{ outline: 'none' }} />
  </div>
 
  <div style={{ width: '100%', marginTop: '15px' }}>
 
    <input 
  onChange={handleFileChangeEdit} 
  style={{ paddingLeft: '15px', textAlign: 'center' }} 
  type='file'
/>  
  </div>


  

  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label onClick={editarProfissional} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Editar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/}




      <Modal isOpen={isModalDeletarOpen} className={styles.containerModalDelete}>

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Deletar Profissional </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>              

            </div> {/*dash_header*/}

            <div className={styles.container_delete_modal}>            

            <div style={{ width: '100%', height: '80px', borderRadius: '20px', background: 'rgb(255, 84, 0)' }}>

            <div style={{ textAlign: 'center', width: '100%', color: '#fff', fontSize: '25px', marginTop: '20px' }}><b>Deletar Profissional</b></div>

            <input type='hidden' value={campo_deletar_id_profissional}/>

            <div style={{ textAlign: 'center', width: '100%', marginTop: '40px' }}>Tem Certeza que Deseja Deletar o Profissional?</div>

            <hr/>

              <li onClick={closeDeletarModal} className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', width: '100px', float: 'right', right: '10px', marginTop: '0px', border: '1px solid rgb(140, 7, 27)' }}>

              <label className={styles.btns} style={{ color: 'rgb(140, 7, 27)' }}>Não</label>

             </li>

             <li className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', width: '100px', float: 'right', right: '10px', marginTop: '0px', border: '1px solid rgb(255, 84, 0)' }}>

              <label onClick={deletarCategoria} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Sim</label>

            </li>

            </div> {/*container_delete_modal*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/}


      <div className={styles.all_container}>

      
      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        <div className={styles.dash_header} style={{ border: 'none' }}>

<Link to="/settings" style={{textDecoration: 'none'}}>

<div className={styles.container_icone_sino}>

<FontAwesomeIcon className={styles.icone_sino} icon={faAngleLeft} style={{ color: '#fff', fontSize: '20px' }} />

</div>

</Link>

<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '30px' }}>Profissionais </div>

<div className={styles.titulo_agendamento} style={{ color: '#353738', marginLeft: '5px', fontSize: '17px' }}>Cadastrar novo profissional</div>


</div> {/*dash_header*/}

  <p style={{marginTop: '130px'}}></p>

  <div style={{ width: '100%' }}>

    <FontAwesomeIcon className={styles.iconesino} icon={faUser}/>

    <input placeholder='Nome...' value={name} onChange={(event) => setNome(event.target.value)} className={styles.container_proximo_cliente}  type='text'/>

  </div> 

  <div style={{ marginTop: '-35px', width: '100%' }}>

    <FontAwesomeIcon className={styles.iconesino} icon={faEnvelope}/>

    <input placeholder='Email...' value={email} onChange={(event)=> setEmail(event.target.value)} className={styles.container_proximo_cliente}  type='text'/>
 
  </div>  

  <div style={{ marginTop: '-25px', width: '100%', marginLeft: '10px'}}>
 
    <FontAwesomeIcon style={{ position: 'relative', top: '35px', marginLeft: '10px', fontSize: '20px' }} className={styles.iconesino} icon={faMobileAlt}/>

                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 <TelefoneMask value={mobile}  onChange={handleTelefoneChange} className={styles.container_proximo_cliente} style={{ outline: 'none' }} />
              </div>

  </div> 

  <div style={{ marginTop: '-25px', width: '100%' }}>

    <FontAwesomeIcon className={styles.iconesino} icon={faKey}/>

    <input placeholder='Senha...' value={password} onChange={(event)=> setPassword(event.target.value)} className={styles.container_proximo_cliente}  type='password'/>

  </div> 

  <li onClick={enviarDados} className={styles.container_btns} style={{ position: 'relative', left: '5px', top: '-10px', height: '40px', width: '100%' }}>

    <label className={styles.btns}>Convidar para equipe</label>
   
  </li>

  <hr className={styles.border_bottom}/>
      
  <div style={{ width: '100%', marginTop: '-65px' }}>

{/*===========EQUIPE 1========*/}

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent', borderTop: '1px solid rgba(0, 0, 0 ,0.2)' }}>

    <li style={{ listStyle: 'none', marginTop: '40px', marginLeft: '-50px', width: '90%', color: '#353738', }}><p style={{ fontSize: '17px', color: '#353738' }}>Profissionais de sua equipe</p> </li>

  <label className={styles.btns}>Enviar link para alteração de senha</label>



  <div className={styles.container_profissionais}>

  { 
            profissionais.map((profissional) => ( 

  <div className={styles.container_profissionais} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ height: '60px', marginTop: '-15px' }} src={UserIcon}/>
        <label style={{ color: '#353738', fontSize: '14px', marginLeft: '5px' }}>{profissional.name} <p style={{ color: '#808080', marginTop: '1px' }}>{profissional.email}</p> </label>
    </div>

    <FontAwesomeIcon onClick={()=> openEditarModal(profissional.name, profissional.email , profissional.mobile, profissional.id)} className={styles.iconesino} icon={faPencilAlt} style={{ position: 'relative', top: '-10px', cursor: 'pointer', marginLeft: 'auto' }} />

    <FontAwesomeIcon onClick={()=> openDeletarModal(profissional.id)} className={styles.iconesino} icon={faTrash} style={{ position: 'relative', top: '-10px', cursor: 'pointer', color: 'rgba(140, 7, 27 , 1)' }} />

</div>

  ))}


  </div>

</li>


{/*=========== /EQUIPE 1========*/}


{/*===========EQUIPE 2========

    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>

    <li style={{ listStyle: 'none', marginTop: '40px', width: '90%' }}><p style={{ fontSize: '14px', color: '#353738' }}>Profissionais pendentes - 1</p> </li>

  <label className={styles.btns}>Enviar link para alteração de senha</label>



  <div className={styles.container_profissionais} style={{ opacity: 0.5 }}>

  <div className={styles.container_profissionais} style={{ display: 'flex', marginTop: '-20px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ height: '60px', marginTop: '-15px' }} src={UserIcon}/>
        <label style={{ color: '#353738', fontSize: '14px', marginLeft: '5px' }}>João Sousa <p style={{ color: '#808080', marginTop: '1px' }}>joao21@gmail.com</p> </label>
    </div>

    <FontAwesomeIcon className={styles.iconesino} icon={faTrash} style={{ position: 'relative', top: '-10px', cursor: 'pointer', marginLeft: 'auto' }} />

</div>



  </div>

</li>

/EQUIPE 2========*/}

  </div>



  
        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
