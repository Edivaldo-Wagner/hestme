import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import './../css/style.css';
import Login from './../login/index';
import { Link, useNavigate } from 'react-router-dom';
import TelefoneMask from './../mask-input/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Cadastro = () => {





{/*========== BUCA ESTADOS ==================*/}

    const [states, setStates] = useState([]);


     useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.hest.me/api/states');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const data = await response.json();

          

        setStates(data.data);

      } catch (error) {
        console.error('Erro ao buscar dados da API:', error.message);
      }
    };



    fetchUsers(); 
  }, []);


{/*========== /BUCA ESTADOS ==================*/}


{/*========== BUCA CIDADES ==================*/}

    const [cities, setCities] = useState([]);

     const [cityId, setCityId] = useState(0);

     const [cidadeId, setCidadeId] = useState(0);

    const SelectStates = async () => {
    if (cityId === 0) {
      return;
    }

    try {
      const response = await fetch(`https://api.hest.me/api/states/${cityId}/cities`);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }

      const dataCities = await response.json();

      setCities(dataCities.data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error.message);
    }
  };

  useEffect(() => {
    SelectStates();
  }, [cityId]);

{/*========== /BUCA CIDADES ==================*/}


{/*========== MASCARA INPUT ==================*/}
  
  const [mobile, setTelefone] = useState('');

   const handleTelefoneChange = (e) => {
    setTelefone(e.target.value);
  };

{/*========== /MASCARA INPUT ==================*/}


{/*========== ENVIAR ESTADOS ==================*/}

  const Navigate = useNavigate();
    
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfpassword] = useState('');
 

  var estadoModal = ""

const enviarDados = async ()=>{

  console.log(cityId)

  console.log(cidadeId)

  if(name == "" || email == "" || password == "" || confpassword == "" || mobile == "" || cityId == "Estado..." || cityId == 0 || cidadeId == "Cidades..." || cidadeId == 0){

    estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"250px", color:"#fff", padding:"25px", background:"rgba(235, 64, 52, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Preencha todos os campos!</div>)

      setMsgModalOpen(estadoModal)

      setModal1Open(true)


      setTimeout(()=>{

        setModal1Open(false)        
 
      }, 3000)

    return


  }

 


  if(password != confpassword){

    estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"300px", color:"#fff", padding:"25px", background:"rgba(235, 64, 52, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>A senha de confirmação deve coincidir com a senha!</div>)

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
    formData.append('city_id', cidadeId);

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch('https://api.hest.me/api/vendor/register', options);
      const responseData = await response.json();

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

        estadoModal = (<div style={{ position:"fixed", right:"0px", top:"0px", width:"230px", color:"#fff", padding:"25px", background:"rgba(17, 158, 67, 1)", boxShadow:"2px 2px 2px 2px rgba(0, 0, 0, 0.2)" }}>Cadastro realizado com sucesso.</div>)

      setMsgModalOpen(estadoModal)

      setModal1Open(true)


      setTimeout(()=>{

         setModal1Open(false);

          Navigate('/login')  

            }, 3000)

 
      return

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

  <div className="container">
    <div className="img">

    </div>
 <div className="login-content">
      <form action="" method="POST">
        
        <img src={Logo} style={{width: '110px', height: '110px'}}/>
        <div className="title" style={{marginTop: 40, marginLeft: '35px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.875rem'}}>
         
         <label style={{ marginRight: 25, color: '#ff5400', borderBottom: '1px solid #ff5400' }}>Realizar Cadastro</label>
        
        </div>


              <div className="input-div pass" style={{marginTop: '30px'}}>
                 <div className="i">
                 <FontAwesomeIcon className="icone_form" icon={faUser} style={{ color: '#808080', fontSize: '22px' }} />
                 </div>
                 <div className="div">
                     <input type="text" className="input" value={name} onChange={(event) => setNome(event.target.value)} placeholder="Nome..." style={{ fontSize: '15px' }}/>
                     
                 </div>
              </div>
              <div className="input-div one" style={{marginTop: '10px'}}>
                 <div className="i">
                 <FontAwesomeIcon className="icone_form" icon={faEnvelope} style={{ color: '#808080', fontSize: '22px' }} />
                 </div>
                 <div className="div">
                     <input type="email" className="input" value={email} onChange={(event)=> setEmail(event.target.value)} placeholder="Email..." style={{ fontSize: '15px', outline: 'none' }}/>
                 </div>
              </div>
              <div className="input-div pass">
                 <div className="i"> 
                 <FontAwesomeIcon className="icone_form" icon={faKey} style={{ color: '#808080', fontSize: '22px' }} />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="password" className="input" id="senha" value={password} onChange={(event)=> setPassword(event.target.value)} placeholder="Senha..." style={{ fontSize: '15px' }} />
    </div>
              </div>
              <div className="input-div pass">
                 <div className="i"> 
                 <FontAwesomeIcon className="icone_form" icon={faKey} style={{ color: '#808080', fontSize: '22px' }} />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="password" className="input" value={confpassword} onChange={(event)=> setConfpassword(event.target.value)} placeholder="Confirme sua Senha..." style={{ fontSize: '15px' }} />
              </div>
              </div> 

              <div className="input-div pass">
                 <div className="i"> 
                 <FontAwesomeIcon className="icone_form" icon={faMobileAlt} style={{ color: '#808080', fontSize: '22px' }} />
                 </div>
                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                 <TelefoneMask value={mobile} onChange={handleTelefoneChange} />
              </div>
              </div>


                 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <select className="input-div pass input" value={cityId} onClick={SelectStates} onChange={(event)=> setCityId(event.target.value)} style={{ color: '#808080', outline: 'none', width: '100%', height: '55px', paddingLeft: '13px' }}>
                      
                    <option>Estado...</option>

                    {
                     states.map((state) => (


          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}

                </select>

              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <select className="input-div pass input" value={cidadeId} onChange={(event)=> setCidadeId(event.target.value)} style={{ color: '#808080', outline: 'none', width: '100%', height: '55px', paddingLeft: '13px' }}>
                      
                    <option>Cidades...</option>

                    {cities.map((cidade) => (
          <option key={cidade.id} value={cidade.id}>
            {cidade.city}
          </option>
        ))}

                </select>

              </div>
           

             <input type="checkbox" style={{ position:'relative', transform: 'scale(1.4)', marginTop: '15px', left: '-4px', top: '2px' }}/> Quero receber novidades da hest
              <input onClick={enviarDados} type="button" className="btn" value="Continuar" style={{boxShadow: '2px 2px 2px 2px', backgroundColor: '#ff5400'}}/>



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

         
               <Link to="/login"><div style={{color: '#ff5400', textAlign: 'center', marginTop: '30px'}}>Já tem uma conta? </div></Link>

                <p style={{ marginTop: '30px', marginLeft: '-9000px' }}>3</p>
            
            </form>
        </div>
        </div>
    </>
  );
};

export default Cadastro;
