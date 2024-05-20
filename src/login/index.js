import React, { useState } from 'react';
import Modal from 'react-modal';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import './../css/style.css';
import Cadastro from './../cadastro/index';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

{/*========== DADOS DO USUARIO ==================*/}


  const [dadosUsuario, setDadosUsuario] = useState({
    id: null,
    img: '',
    name: '',
    mobile: '',
    login_type: '',
    email: '',
    access_token: ''
  });

{/*========== /DADOS DO USUARIO ==================*/}

  {/*========== ENVIAR ESTADOS ==================*/}

    const Navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);


    var estadoModal = ""

    const enviarDados = async ()=>{

      if(email == "" || password == ""){

    estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"250px", color:"#fff", padding:"25px", background:"rgba(235, 64, 52, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Preencha todos os campos!</div>)

      setMsgModalOpen(estadoModal)

      setModal1Open(true)

      setTimeout(()=>{

        setModal1Open(false)        

      }, 3000)

    return


  }


   const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
  
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch('https://api.hest.me/api/vendor/auth/login', options);
      const responseData = await response.json();

      

      if(responseData.message == "Email Or Password Invalid!!" && responseData.status == 0){

        estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"300px", color:"#fff", padding:"25px", background:"rgba(235, 64, 52, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Email ou Password Incorretos!</div>)

      setMsgModalOpen(estadoModal)

      setModal1Open(true)


      setTimeout(()=>{

        setModal1Open(false)        

      }, 3000)

      return

      }

      if(responseData.message == "Process done successfully." && responseData.status == 1){
        
        const dadosLogado = {
        id: responseData.data.id, 
        img: responseData.data.image,
        name: responseData.data.name,
        mobile: responseData.data.mobile,
        login_type: responseData.data.login_type,
        email: responseData.data.email,
        access_token: responseData.data.access_token
      }

        setDadosUsuario(dadosLogado);

      sessionStorage.setItem('meusDados', JSON.stringify(dadosLogado))

      Navigate('/dashboard') 

      }

    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

{/*========== /ENVIAR ESTADOS ==================*/}
  
  {/*========== MODAL ==================*/}

const [isModal1Open, setModal1Open] = useState(false)

const [msgModalOpen, setMsgModalOpen] = useState("")

  const openModal = () => setModal1Open(true);
  const closeModal = () => setModal1Open(false);

  


{/*========== /MODAL ==================*/}


  return (
    <>

    <Modal isOpen={isModal1Open} className="containerModal">
      {msgModalOpen}
  </Modal>

  <div class="container">
    <div class="img">

    </div>
 <div class="login-content">
      <form action="" method="POST">
        <img src={Logo} style={{width: '110px', height: '110px'}}/>
        <div class="title" style={{marginTop: 40, color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.875rem'}}>
         
         <label style={{ marginRight: 25 }}>Profissional</label>

         <label>Empresa</label>
        
        </div>



              <div class="input-div one" style={{marginTop: '30px'}}>
                 <div class="i">
                 <FontAwesomeIcon icon={faEnvelope} style={{ color: '#808080', fontSize: '22px' }} />
                 </div>
                 <div class="div">
                     <input type="text" class="input" value={email} onChange={(event)=> setEmail(event.target.value)} name="email" placeholder="Email..." style={{ fontSize: '15px' }}/>
                 </div>
              </div>
              <div class="input-div pass">
                 <div class="i"> 
                 <FontAwesomeIcon icon={faKey} style={{ color: '#808080', fontSize: '22px' }} />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="password" id="senha" name="senha" value={password} onChange={(event)=> setPassword(event.target.value)} placeholder="Senha..." style={{ fontSize: '15px' }} />
    </div>
              </div>
              <a href="youtube">Forgot Password?</a>
              <input type="button" class="btn" onClick={enviarDados} value="Continuar" style={{boxShadow: '2px 2px 2px 2px', backgroundColor: '#ff5400'}}/>

              <button
      type="button"
      disabled={true}
      className="google-login"
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        display: 'inline-flex',
        alignItems: 'center',
        color: 'rgba(0, 0, 0, 0.54)',
        boxShadow:
          'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
        padding: '0px',
        borderRadius: '2px',
        border: '1px solid transparent',
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: 'Roboto, sans-serif',
        opacity: '0.6',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          marginRight: '10px',
          background: 'rgb(255, 255, 255)',
          padding: '10px',
          borderRadius: '2px',
          textAlign: 'center', // Adicionando textAlign para centralizar o conteúdo
        }}
      >
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <g fill="#000" fillRule="evenodd">
            <path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path>
            <path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path>
            <path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path>
            <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path>
            <path fill="none" d="M0 0h18v18H0z"></path>
          </g>
        </svg>
      </div>
      <span style={{ padding: '10px', fontWeight: '500', textAlign: 'center', width: '100%' }}>
        Entrar com o Google
      </span>
    </button>

         
              <div style={{color: '#ff5400', marginTop: '30px'}}>Esqueceu sua senha? <Link to="/cadastro"> <p style={{marginTop: '30px', textAlign: 'center', fontSize: '16px', cursor: 'pointer'}}>Realizar cadastro</p></Link> </div>

            </form>
        </div>
        </div>

    </>
  );
};

export default Login;
