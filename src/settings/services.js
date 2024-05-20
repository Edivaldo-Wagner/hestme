import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import UserIcon from './../img/user-icon.jpg'
import LogoDash from './../img/logo-dashboard.svg'
import NoImg from './../img/no-img.png'
import { Link, useNavigate } from 'react-router-dom';
import  styles from './../css/services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import {faAngleLeft, faSignOutAlt, faCaretDown, faUser, faClock, faCoins, faPencilAlt, faTimes, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Settings = () => {

    {/*========== BUCA SERVICOS ==================*/}

    const Navigate = useNavigate();

    const [dados, setDados] = useState('');

    const [servicos, setServicos] = useState([]);

 
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



{/*========== /BUCA SERVICOS ==================*/}  


{/*========== BUCA PROFISSIONAIS ==================*/}

    const [dadosProfissionais, setDadosProfissionais] = useState('');

    const [profissionais, setProfissionais] = useState([]);

    const fetchProfissionals = async () => {
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

    fetchProfissionals()

    // Define o intervalo para chamar a API a cada 5 segundos (ou o intervalo desejado)
    const intervalIdProfissionals = setInterval(fetchProfissionals, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalIdProfissionals);
  }, []);


{/*========== /BUCA PROFISSIONAIS ==================*/} 


{/*========== SELECIONANDO PROFISSIONAIS ==================*/} 

  const [selectedProfessionals, setSelectedProfessionals] = useState([]);

  const handleCheckboxProfissionalToggle = (id) => {
    // Verifica se o profissional já está selecionado
    const isSelected = selectedProfessionals.includes(id);

    if (!isSelected) {
      // Se não estiver selecionado, adiciona à lista
      setSelectedProfessionals([...selectedProfessionals, id]);
    } else {
      // Se estiver selecionado, remove da lista
      setSelectedProfessionals(selectedProfessionals.filter((selectedId) => selectedId !== id));
    }

    

  };



{/*========== /SELECIONANDO PROFISSIONAIS ==================*/} 


{/*========== BUCA CATEGORIA ==================*/}

    const [dadosCategorias, setDadosCategorias] = useState('');

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

      //console.log('Dados atualizados:', data);
    } catch (error) {
      console.error('Erro ao buscar dados da API', error);
    }
  };


useEffect(() => {

    fetchCategories()

    // Define o intervalo para chamar a API a cada 5 segundos (ou o intervalo desejado)
    const intervalIdCategories = setInterval(fetchCategories, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalIdCategories);
  }, []);


{/*========== /BUCA CATEGORIA ==================*/}


{/*========== SELECIONANDO CATEGORIAS ==================*/} 

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxCategoriesToggle = (id) => {
  // Verifica se o profissional já está selecionado
  const isSelected = selectedCategories.includes(id);

  if (!isSelected) {
    // Se não estiver selecionado, adiciona à lista
    setSelectedCategories([id]);
  } else {
    // Se estiver selecionado, remove da lista (desmarcando)
    setSelectedCategories([]);
  }


};




{/*========== /SELECIONANDO CATEGORIAS ==================*/} 

{/*========== ENVIAR DADOS ==================*/}

const [nome_servico, setNome_servico] = useState('')

const [preco_servico, setPreco_servico] = useState('')

const [duracao_servico, setDuracao_servico] = useState('')

const [descricao_servico, setDescricao_servico] = useState('')

const [categoria_servico, setCategoria_servico] = useState('')

const [profissional_servico, setProfissional_servico] = useState('')

 //const [mensagemErro, setMensagemErro] = useState(null);

 const [selectedFile, setSelectedFile] = useState(null);

const handleFileChange =  (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  }; 
 

const cadastrarServico = async () => {
    

    const selectedCategoriesString = selectedCategories.length > 0
      ? selectedCategories.join(',')
      : '';

    const selecteProfessionalsString = selectedProfessionals.length > 0
      ? selectedProfessionals.join(',')
      : '';


    const formData = new FormData();
    formData.append('service_image', selectedFile);
    formData.append('service_name', nome_servico);
    formData.append('price', preco_servico);
    formData.append('interval_time', duracao_servico);
    formData.append('description', descricao_servico);
    formData.append('category_id', selectedCategoriesString);
    formData.append('staffs_id', selecteProfessionalsString);
    formData.append('tax', 0);
    formData.append('interval_type', 1);


    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch('https://api.hest.me/api/vendor/services', options);
      const responseData = await response.json();

     // console.log(responseData)

      setNome_servico("")

      setPreco_servico("")

      setDuracao_servico("")

      setDescricao_servico("")

      setSelectedCategories([]);

      setSelectedProfessionals([]);
   
      setModalCadastroOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 


  };

{/*========== /ENVIAR DADOS ==================*/}


{/*========== EDITANDO PROFISSIONAIS ==================*/} 

  const [selectedProfessionalsEdit, setSelectedProfessionalsEdit] = useState([]);

  const handleCheckboxProfissionalToggleEdit = (id) => {
    // Verifica se o profissional já está selecionado
    const isSelectedEdit = selectedProfessionalsEdit.includes(id);

    if (!isSelectedEdit) {
      // Se não estiver selecionado, adiciona à lista
      setSelectedProfessionalsEdit([...selectedProfessionalsEdit, id]);
    } else {
      // Se estiver selecionado, remove da lista
      setSelectedProfessionalsEdit(selectedProfessionalsEdit.filter((selectedId) => selectedId !== id));
    }

    

  };



{/*========== /EDITANDO PROFISSIONAIS ==================*/} 

{/*========== EDITANDO CATEGORIAS ==================*/} 

  const [selectedCategoriesEdit, setSelectedCategoriesEdit] = useState([]);

  const handleCheckboxCategoriesToggleEdit = (id) => {
  // Verifica se o profissional já está selecionado
  const isSelectedEdit = selectedCategoriesEdit.includes(id);

  if (!isSelectedEdit) {
    // Se não estiver selecionado, adiciona à lista
    setSelectedCategoriesEdit([id]);
  } else {
    // Se estiver selecionado, remove da lista (desmarcando)
    setSelectedCategoriesEdit([]);
  }

}; 




{/*========== /EDITANDO CATEGORIAS ==================*/} 

{/*========== EDITAR DADOS ==================*/}


  
const [nome_servico_editar, setNome_servico_editar] = useState('')

const [preco_servico_editar, setPreco_servico_editar] = useState('')

const [duracao_servico_editar, setDuracao_servico_editar] = useState('')

const [descricao_servico_editar, setDescricao_servico_editar] = useState('')

const [categoria_servico_editar, setCategoria_servico_editar] = useState('')

const [profissional_servico_editar, setProfissional_servico_editar] = useState('')

 const [mensagemErro, setMensagemErro] = useState(null);

 const [selectedFileEdit, setSelectedFileEdit] = useState(null);

 const [campo_editar_id_servico, setCampo_editar_id_servico] = useState(0)


 const openEditarModal = (id, name, price, interval_time, description, category_id, staffs) => {
  
    setCampo_editar_id_servico(id)

    setNome_servico_editar(name)

    setPreco_servico_editar(price)

    setDuracao_servico_editar(interval_time)

    setDescricao_servico_editar(description)

    setSelectedCategoriesEdit([]);

    setSelectedProfessionalsEdit([]);

    setSelectedCategoriesEdit([category_id])

    staffs.forEach((staffEdit) => {
    console.log(staffEdit.id);
    setSelectedProfessionalsEdit((prevSelectedProfessionalsEdit) => [
      ...prevSelectedProfessionalsEdit,
      staffEdit.id,
    ]);
  });



    setModalEditarOpen(true)

  };


const handleFileChangeEdit =  (event) => {
    const fileEdit = event.target.files[0];
    setSelectedFileEdit(fileEdit);
  }; 


{/*========== /EDITAR DADOS ==================*/}
 
{/*========== ATUALIZAR DADOS ==================*/}

  const editarServico = async () => {
    

    const selectedCategoriesStringEdit = selectedCategoriesEdit.length > 0
      ? selectedCategoriesEdit.join(',')
      : '';

    const selecteProfessionalsStringEdit = selectedProfessionalsEdit.length > 0
      ? selectedProfessionalsEdit.join(',')
      : '';




    const formData = new FormData();
    formData.append('service_image', selectedFileEdit);
    formData.append('service_name', nome_servico_editar);
    formData.append('price', preco_servico_editar);
    formData.append('interval_time', duracao_servico_editar);
    formData.append('description', descricao_servico_editar);
    formData.append('category_id', selectedCategoriesStringEdit);
    formData.append('staffs_id', selecteProfessionalsStringEdit);
    formData.append('tax', 0);
    formData.append('interval_type', 1);


    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch(`https://api.hest.me/api/vendor/services/${campo_editar_id_servico}`, options);
      const responseData = await response.json();

     // console.log(responseData)

      setNome_servico_editar("")

      setPreco_servico_editar("")

      setDuracao_servico_editar("")

      setDescricao_servico_editar("")

      setSelectedCategoriesEdit([]);

      setSelectedProfessionalsEdit([]);
   
      setModalEditarOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 


  };

{/*========== /ATUALIZAR DADOS ==================*/}


{/*===========PRIMEIRA UNIDADE========*/}

    const [isShowHiddenProf1, setIsShowHiddenProf1] = useState(true);

    const [hiddenProfessions, setHiddenProfessions] = useState({});

  const showHiddenProf = (servicoId) => {
  setHiddenProfessions(prevState => ({
    ...prevState,
    [servicoId]: !prevState[servicoId],
  }));
};


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



  return (
    <>

      <div className={styles.all_container}>
      
      <Modal isOpen={isModalCadastroOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeCadastroModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Novo Serviço </label></div>


              <div class={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal} style={{ height: '650px',  overflowY: 'scroll' }}>

            <div className={styles.ul}>

            <div style={{  width: '100%', marginTop: '10px' }}>
 
    <input 
    onChange={handleFileChange} 
  style={{ paddingLeft: '15px', textAlign: 'center' }} 
  type='file'
/>


  
  </div>

<div style={{ width: '100%', marginTop: '15px' }}>

    <input placeholder='Nome do serviço...' value={nome_servico} onChange={ (event)=> setNome_servico(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Preço...' value={preco_servico} onChange={ (event)=> setPreco_servico(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px' }} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Duração...' value={duracao_servico} onChange={ (event)=> setDuracao_servico(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px' }} type='number'/>
    
  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Descrição...' value={descricao_servico} onChange={ (event)=> setDescricao_servico(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px' }} type='text'/>
    
  </div>

  <div style={{ color: '#808080', width: '95%', marginTop: '20px' }}>Categoria ({categorias.length})</div>

  <div className={styles.container_list_profissionais}>

   

  { 
            categorias.map((categoria) => ( 

          <div className={styles.container_profissionais} onClick={() => handleCheckboxCategoriesToggle(categoria.id)} style={{ display: 'flex', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', marginTop: '20px', marginLeft: '20px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
                type='radio'
                name='radio_categorias'
                value={categoria.id}
                checked={selectedCategories.includes(categoria.id)} 
                style={{ marginTop: '-10px', transform: 'scale(1.3)' }}
                value={categoria_servico}
                onChange={() => {}}
              />
        <img
  style={{
    width: '35px',
    height: '35px',
    marginLeft: '10px',
    marginTop: '-15px',
    borderRadius: '50%',
    objectFit: 'cover', // Isso pode ajudar a ajustar a imagem dentro do contêiner
  }}
  src={categoria.image && categoria.image !== "https://api.hest.me/public/storage/admin-assets/images/profile/default.png" ? categoria.image : UserIcon}
  alt="User Icon"
/>


        <label style={{ color: '#353738',  marginLeft: '25px', fontSize: '14px', marginLeft: '15px' }}>{categoria.name} </label>
    </div>

</div>

  ))}


</div>



  <div style={{ color: '#808080', width: '95%', marginTop: '40px' }}>Profissionais ({profissionais.length})</div>

  <div className={styles.container_list_profissionais}>

   

  { 
            profissionais.map((profissional) => ( 

          <div className={styles.container_profissionais} onClick={() => handleCheckboxProfissionalToggle(profissional.id)} style={{ display: 'flex', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', marginTop: '20px', marginLeft: '20px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
                type='checkbox'
                value={profissional.id}
                checked={selectedProfessionals.includes(profissional.id)} 
                style={{ marginTop: '-10px', transform: 'scale(1.3)' }}
                value={profissional_servico}
                onChange={() => {}}
              />
        <img
  style={{
    width: '50px',
    height: '50px',
    marginLeft: '10px',
    marginTop: '-15px',
    borderRadius: '50%',
    objectFit: 'cover', // Isso pode ajudar a ajustar a imagem dentro do contêiner
  }}
  src={profissional.image_url && profissional.image_url !== "https://api.hest.me/public/storage/admin-assets/images/profile/default.png" ? profissional.image_url : UserIcon}
  alt="User Icon"
/>


        <label style={{ color: '#353738',  marginLeft: '25px', fontSize: '14px', marginLeft: '5px' }}>{profissional.name} <p style={{ color: '#808080', marginTop: '1px' }}>{profissional.email}</p> </label>
    </div>

</div>

  ))}


</div>

  <li onClick={cadastrarServico} className={styles.container_btns} style={{ backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)' }}>

  <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar</label>

</li>

<p style={{ marginTop: '200px' }}>ok</p>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/}


    <Modal isOpen={isModalEditarOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeEditarModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Editar Serviço </label></div>

              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal} style={{ height: '650px',  overflowY: 'scroll' }}>

            <div className={styles.ul}>

            <input type='hidden' value={campo_editar_id_servico}/>

            <div style={{  width: '100%', marginTop: '10px' }}>
 
    <input 
    onChange={handleFileChangeEdit} 
  style={{ paddingLeft: '15px', textAlign: 'center' }} 
  type='file'
/>


  
  </div>

<div style={{ width: '100%', marginTop: '15px' }}>

    <input placeholder='Nome do serviço...' value={nome_servico_editar} onChange={ (event)=> setNome_servico_editar(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px'}} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Preço...' value={preco_servico_editar} onChange={ (event)=> setPreco_servico_editar(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px' }} type='text'/>

  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Duração...' value={duracao_servico_editar} onChange={ (event)=> setDuracao_servico_editar(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px' }} type='number'/>
    
  </div>

  <div style={{ width: '100%', marginTop: '-5px' }}>

    <input placeholder='Descrição...' value={descricao_servico_editar} onChange={ (event)=> setDescricao_servico_editar(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px' }} type='text'/>
    
  </div>

  <div style={{ color: '#808080', width: '95%', marginTop: '20px' }}>Categoria ({categorias.length})</div>

  <div className={styles.container_list_profissionais}>

   

  { 
            categorias.map((categoria) => ( 

          <div className={styles.container_profissionais} onClick={() => handleCheckboxCategoriesToggleEdit(categoria.id)} style={{ display: 'flex', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', marginTop: '20px', marginLeft: '20px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
                type='radio'
                name='radio_categorias_editar'
                value={categoria.id}
                checked={selectedCategoriesEdit.includes(categoria.id)} 
                style={{ marginTop: '-10px', transform: 'scale(1.3)' }}
                value={categoria_servico_editar}
                onChange={() => {}}
              />
        <img
  style={{
    width: '35px',
    height: '35px',
    marginLeft: '10px',
    marginTop: '-15px',
    borderRadius: '50%',
    objectFit: 'cover', // Isso pode ajudar a ajustar a imagem dentro do contêiner
  }}
  src={categoria.image && categoria.image !== "https://api.hest.me/public/storage/admin-assets/images/profile/default.png" ? categoria.image : UserIcon}
  alt="User Icon"
/>


        <label style={{ color: '#353738',  marginLeft: '25px', fontSize: '14px', marginLeft: '15px' }}>{categoria.name} </label>
    </div>

</div>

  ))}


</div>



  <div style={{ color: '#808080', width: '95%', marginTop: '40px' }}>Profissionais ({profissionais.length})</div>

  <div className={styles.container_list_profissionais}>

   

  { 
            profissionais.map((profissional) => ( 

          <div className={styles.container_profissionais} onClick={() => handleCheckboxProfissionalToggleEdit(profissional.id)} style={{ display: 'flex', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', marginTop: '20px', marginLeft: '20px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
                type='checkbox'
                value={profissional.id}
                checked={selectedProfessionalsEdit.includes(profissional.id)} 
                style={{ marginTop: '-10px', transform: 'scale(1.3)' }}
                value={profissional_servico_editar}
                onChange={() => {}}
              />
        <img
  style={{
    width: '50px',
    height: '50px',
    marginLeft: '10px',
    marginTop: '-15px',
    borderRadius: '50%',
    objectFit: 'cover', // Isso pode ajudar a ajustar a imagem dentro do contêiner
  }}
  src={profissional.image_url && profissional.image_url !== "https://api.hest.me/public/storage/admin-assets/images/profile/default.png" ? profissional.image_url : UserIcon}
  alt="User Icon"
/>


        <label style={{ color: '#353738',  marginLeft: '25px', fontSize: '14px', marginLeft: '5px' }}>{profissional.name} <p style={{ color: '#808080', marginTop: '1px' }}>{profissional.email}</p> </label>
    </div>

</div>

  ))}


</div>

  <li onClick={editarServico} className={styles.container_btns} style={{ backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)' }}>

  <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Editar</label>

</li>

<p style={{ marginTop: '200px' }}>ok</p>

</div> {/*container_agendamentos ul*/}

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

<div className={styles.titulo_agendamento} style={{ color: '#353738', fontSize: '30px' }}>Serviços </div>


</div> {/*dash_header*/}

  <p style={{marginTop: '130px'}}></p>

{/*===========PRIMEIRA UNIDADE========*/}

 { 
            servicos.map((servico) => ( 
      
  <div style={{ width: '100%', marginTop: '-15px' }}> 

        <FontAwesomeIcon onClick={()=> openEditarModal(servico.id, servico.name, servico.price, servico.interval_time, servico.description, servico.category_id, servico.staffs)} className={styles.iconesino} icon={faPencilAlt} style={{ position: 'relative', fontSize: '20px', right: '20px', color: 'rgba(0, 0, 0 ,0.6)', marginTop: '0px', float: 'right' }} /> 


    <li className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent', border: '1px solid rgba(0, 0, 0 ,0.2)' }}>
 

    <li style={{ listStyle: 'none', marginTop: '40px', textAlign: 'center' }}><b style={{ width: '100%', textAlign: 'center', color: '#353738' }}>{servico.name}</b></li>

 

  <div style={{ width: '90%', display: 'flex', marginTop: '60px' }}>

  <li className={styles.container_btns} style={{ position: 'relative', left: '-5px', top: '-50px', height: '40px', width: '50%' }}>

    <label className={styles.btns}>{servico.interval_time}</label>
    <FontAwesomeIcon className={styles.iconesino} icon={faClock} style={{ position: 'relative', fontSize: '16px', right: '20px', color: '#fff', marginTop: '-90px', float: 'right' }} />

  </li>

  <li className={styles.container_btns} style={{ position: 'relative', left: '-5px', top: '-50px', height: '40px', width: '50%' }}>

    <label className={styles.btns}>R$ {servico.price}</label>
    <FontAwesomeIcon className={styles.iconesino} icon={faCoins} style={{ position: 'relative', fontSize: '16px', right: '20px', color: '#fff', marginTop: '-90px', float: 'right' }} />

  </li>

  </div>


  <li onClick={() => showHiddenProf(servico.id)} className={styles.container_btns} style={{ position: 'relative', left: '-5px', top: '-50px', height: '40px', width: '90%' }}>

    <label className={styles.btns}> Profissionais deste serviço</label>
    <FontAwesomeIcon className={styles.iconesino} icon={faCaretDown} style={{ position: 'relative', fontSize: '16px', right: '22px', color: '#fff', marginTop: '-90px', float: 'right' }} />

  </li>

<div className={styles.container_profissionais} style={{ marginTop: '-20px', display: hiddenProfessions[servico.id] ? 'block' : 'none' }}>


    {servico.staffs.map((staff) => ( 
    
      <div className={styles.container_profissionais} style={{ display: 'flex' }}>
    
        <img
  style={{
    width: '60px',
    height: '60px',
    marginLeft: '10px',
    marginTop: '-10px',
    borderRadius: '50%',
    objectFit: 'cover',
  }}
  src={staff.image_url && staff.image_url == "https://api.hest.me/public/storage/admin-assets/images/profile/default.png" ? staff.image_url : UserIcon}
  alt="User Icon"
/>
    
        <label style={{ color: '#353738', fontSize: '14px', marginLeft: '5px', marginTop: '10px' }}>{staff.name} </label>
    
      </div>
    
      ))}


      </div>

</li>

  </div>

  ))}

  {/*=========== /PRIMEIRA UNIDADE========*/}


  
  
  <li onClick={openCadastroModal} className={styles.container_btns} style={{ backgroundColor: 'transparent', border: '1px solid rgb(255, 84, 0)' }}>

  <label className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar novo serviço</label>

</li>

        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}

      <p style={{ marginTop: '50px' }}></p>
  
    </>
  );
};

export default Settings;
