import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import  styles from './../css/tasks.module.css';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from 'react-bootstrap';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faUserCircle, faClock, faLock, faTimes, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd, faPen, faTrash, faPlus, faBox    } from '@fortawesome/free-solid-svg-icons';

import { Bar } from 'react-chartjs-2';


const Dashboard = () => {

  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
   
  
  {/*===========MODAL 1========*/}

  const [isModalCadastroGrupoOpen, setModalCadastroGrupoOpen] = useState(false)

  const openCadastroGrupoModal = () => setModalCadastroGrupoOpen(true);
  const closeCadastroGrupoModal = () => setModalCadastroGrupoOpen(false);

{/*===========/MODAL 1========*/}

{/*===========MODAL 2========*/}

  const [isModalEditarGrupoOpen, setModalEditarGrupoOpen] = useState(false)

  const closeEditarGrupoModal = () => setModalEditarGrupoOpen(false);

{/*===========/MODAL 2========*/}

{/*===========MODAL 3========*/}

  const [isModalEditarTaskOpen, setModalEditarTaskOpen] = useState(false)

  //const openEditarModal = () => setModalEditarOpen(true);
  const closeEditarTaskModal = () => setModalEditarTaskOpen(false);

{/*===========/MODAL 3========*/}

{/*===========MODAL 4========*/}

  const [isModalCadastroTaskOpen, setModalCadastroTaskOpen] = useState(false)

  const [campo_id_grupo_tarefa, setcampo_id_grupo_tarefa] = useState(0)

  const openCadastroTaskModal = async (idGrupo)=>{

    setcampo_id_grupo_tarefa(idGrupo)

  setModalCadastroTaskOpen(true)
 

 }

 const closeCadastroTaskModal = () => setModalCadastroTaskOpen(false);

{/*===========/MODAL 4========*/}

{/*===========MODAL 5========*/}

  const [isModalDeletarTaskOpen, setModalDeletarTaskOpen] = useState(false)

  const closeDeletarTaskModal = () => setModalDeletarTaskOpen(false);

{/*===========/MODAL 5========*/}


{/*========== BUCA GRUPO ==================*/}

    const Navigate = useNavigate();

    const [dados, setDados] = useState('');

    const [grupos, setGrupos] = useState([]);

 
  const fetchGroups = async () => {
    try {
      const token = dados.access_token;

     


      const response = await fetch('https://api.hest.me/api/tasks/groups', {
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
      setGrupos(data.groups.data);

      //console.log('Dados atualizados:', data.groups.data);
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
    fetchGroups();

    // Define o intervalo para chamar a API a cada 5 segundos (ou o intervalo desejado)
    const intervalId = setInterval(fetchGroups, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);



{/*========== /BUCA GRUPO ==================*/}


{/*========== CADASTRAR GRUPOS ==================*/}


const [campo_nome_grupo, setCampo_nome_grupo] = useState('')


const cadastrarGrupo = async ()=>{

  setCampo_nome_grupo(campo_nome_grupo)
 
  const formData = new FormData();
  formData.append('name', campo_nome_grupo);


 
  const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch('https://api.hest.me/api/tasks/groups', options);
      const responseData = await response.json();

     // console.log(responseData)

      setCampo_nome_grupo('')

  setModalCadastroGrupoOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}


{/*========== /CADASTRAR GRUPOS ==================*/}



{/*========== EDITAR GRUPO ==================*/}
  
const [campo_editar_id_grupo, setCampo_editar_id_grupo] = useState(0)

const [campo_editar_nome_grupo, setCampo_editar_nome_grupo] = useState('')

const openEditarGrupoModal = (idGrupo, nameGrupo) => {
  
    setCampo_editar_id_grupo(idGrupo)

    setCampo_editar_nome_grupo(nameGrupo)

    setModalEditarGrupoOpen(true)

 

  };

 
{/*========== /EDITAR GRUPO ==================*/}


{/*========== CADASTRAR TASK ==================*/}
 

const [campo_cadastrar_nome_task, setCampo_cadastrar_nome_task] = useState('')

const [campo_cadastrar_priority_task, setCampo_cadastrar_priority_task] = useState('')

const [campo_cadastrar_status_task, setCampo_cadastrar_status_task] = useState(1)

const [campo_cadastrar_data_task, setCampo_cadastrar_data_task] = useState('')

const cadastrarTask = async ()=>{

  if (!campo_cadastrar_nome_task) {
 
    return;  
  }

  if (!campo_cadastrar_data_task) {
 
    return; 
  }

 
  const formData = new FormData();
  formData.append('group_id', campo_id_grupo_tarefa);
  formData.append('name', campo_cadastrar_nome_task);
  formData.append('priority', campo_cadastrar_priority_task);
  formData.append('status', campo_cadastrar_status_task);
  formData.append('finish_date', campo_cadastrar_data_task);
 
  const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },
      body: formData,
    };

    try {
      const response = await fetch('https://api.hest.me/api/tasks', options);
      const responseData = await response.json();

      console.log(responseData)

      setCampo_cadastrar_nome_task('')

      setCampo_cadastrar_priority_task('')

      setCampo_cadastrar_status_task(1)

      setCampo_cadastrar_data_task('')
 
     setModalCadastroTaskOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}

{/*========== CADASTRAR TASK ==================*/}

  
{/*========== DELETAR TASKS ==================*/}

const [campo_deletar_id_task, setCampo_deletar_id_task] = useState(0)

const openDeletarTaskModal = (idTask) => {

    setCampo_deletar_id_task(idTask)

    setModalDeletarTaskOpen(true)
 
  };

 
const deletarTask = async ()=>{
  

  const options = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
        'Accept': 'application/json',
      },

    }; 

    try {
      const response = await fetch(`https://api.hest.me/api/tasks/${campo_deletar_id_task}`, options);
      const responseData = await response.json();

      console.log(responseData)

       setModalDeletarTaskOpen(false)

    } catch (error) {
      console.error('Erro na solicitação:', error);
    } 



}


{/*========== /DELETAR TASKS ==================*/}

{/*========== EDITAR TASK ==================*/}

const [campo_editar_id_task, setCampo_editar_id_task] = useState(0)

const [campo_editar_nome_task, setCampo_editar_nome_task] = useState('');

const [campo_editar_priority_task, setCampo_editar_priority_task] = useState('');

const [campo_editar_status_task, setCampo_editar_status_task] = useState(0)

const [campo_editar_data_task, setCampo_editar_data_task] = useState('')

const openEditarTaskModal = (idGrupo, idTask, nameTask, priorityTask, statusTask, finish_dateTask) => {
  
    setCampo_editar_id_grupo(idGrupo)

    setCampo_editar_id_task(idTask)

    setCampo_editar_nome_task(nameTask)

    setCampo_editar_priority_task(priorityTask)

    setCampo_editar_status_task(statusTask)

    setCampo_editar_data_task(finish_dateTask)

    
    setModalEditarTaskOpen(true)



  };
 
 
{/*========== /EDITAR TASK ==================*/}

{/*========== ATUALIZAR TASKS ==================*/}

 const [mensagemErro, setMensagemErro] = useState(null);

 const [selectedFileEdit, setSelectedFileEdit] = useState(null);

 
const editarTask = async () => { 
  if (!campo_editar_nome_task) {
    setMensagemErro("Por favor, preencha o campo antes de editar!");
    return; // Sai da função se os campos não estiverem preenchidos
  }


 
  const formData = new FormData();
  formData.append('group_id', campo_editar_id_grupo);
  formData.append('name', campo_editar_nome_task);
  formData.append('priority', campo_editar_priority_task);
  formData.append('status', campo_editar_status_task);
  formData.append('finish_date', campo_editar_data_task);

  console.log({
      "group_id": campo_editar_id_grupo,
      "name": campo_editar_nome_task,
      "priority": campo_editar_priority_task,
      "status": campo_editar_status_task,
      "finish_date": campo_editar_data_task
    })

  const options = {
    method: 'PUT', 
    headers: {
      'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
    },
    body: JSON.stringify({
      "group_id": campo_editar_id_grupo,
      "name": campo_editar_nome_task,
      "priority": campo_editar_priority_task,
      "status": campo_editar_status_task,
      "finish_date": campo_editar_data_task
    }),
  };

  try {
    const response = await fetch(`https://api.hest.me/api/tasks/${campo_editar_id_task}`, options);
    const responseData = await response.json();

    console.log(responseData);

    setModalEditarTaskOpen(false);

  } catch (error) {
    console.error('Erro na solicitação:', error);
  } 
}



{/*========== /ATUALIZAR TASKS ==================*/}

{/*========== ATUALIZAR GRUPO ==================*/}

const editarGrupo = async () => { 
  if (!campo_editar_nome_grupo) {
    setMensagemErro("Por favor, preencha o campo antes de editar!");
    return; 
  }

 
 
  const formData = new FormData();
  formData.append('name', campo_editar_nome_grupo);

  const options = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('meusDados')).access_token}`,
    },
    body: JSON.stringify({
      'name': campo_editar_nome_grupo
    }),
  };

  try {
    const response = await fetch(`https://api.hest.me/api/tasks/groups/${campo_editar_id_grupo}`, options);
    const responseData = await response.json();

    console.log(responseData);

    setModalEditarTaskOpen(false);

  } catch (error) {
    console.error('Erro na solicitação:', error);
  } 
}



{/*========== /ATUALIZAR GRUPO ==================*/}



  return (
    <>




      <Header className={styles.header_menu}/>

      <div className={styles.all_container}>

      <Modal isOpen={isModalCadastroGrupoOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeCadastroGrupoModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Novo Grupo </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal}>

            <div className={styles.ul}>

<div style={{ width: '100%', marginTop: '15px' }}>

    <input placeholder='Nome do Grupo...' value={campo_nome_grupo} onChange={ (event)=> setCampo_nome_grupo(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}} type='text'/>

  </div>

  

  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label onClick={cadastrarGrupo} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/} 


      <Modal isOpen={isModalEditarGrupoOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeEditarGrupoModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Editar Grupo </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal}>

            <div className={styles.ul}>

            <input type='hidden' value={campo_editar_id_grupo}/>

  <div style={{ width: '100%', marginTop: '15px' }}>

      <input placeholder='Nome do Grupo...' value={campo_editar_nome_grupo} onChange={ (event)=> setCampo_editar_nome_grupo(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}} type='text'/>

    </div> 

    
  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label onClick={editarGrupo} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Editar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/} 



 
      <Modal isOpen={isModalCadastroTaskOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeCadastroTaskModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Nova Tarefa </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal}>

            <div className={styles.ul}>

            <input type='hidden' value={campo_id_grupo_tarefa}/>

            <div style={{ width: '100%', marginTop: '15px' }}>

      <input placeholder='Nome da Tarefa...' value={campo_cadastrar_nome_task} onChange={ (event)=> setCampo_cadastrar_nome_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}} type='text'/>

    </div>

    <div style={{ width: '100%', marginTop: '-5px' }}>

      <select value={campo_cadastrar_priority_task} onChange={ (event)=> setCampo_cadastrar_priority_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}}>

        <option value='hight'>Alta</option>

        <option value='medium'>Médio</option>

        <option value='low'>Baixa</option>

      </select>

    </div>

    <div style={{ width: '100%', marginTop: '-5px' }}>

      <select value={campo_cadastrar_status_task} onChange={ (event)=> setCampo_cadastrar_status_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}}>

        <option value='1'>Ativo</option>

        <option value='0'>Inativo</option>

      </select>

    </div>

    <div style={{ width: '100%', marginTop: '-5px' }}>

      <input value={campo_cadastrar_data_task} onChange={ (event)=> setCampo_cadastrar_data_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}} type='date'/>


    </div>

    

  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label onClick={cadastrarTask} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Cadastrar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/} 





      <Modal isOpen={isModalEditarTaskOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeEditarTaskModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Editar Tarefa </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>


            </div> {/*dash_header*/}

            <div className={styles.container_form_modal}>

            <div className={styles.ul}>

            <input type='hidden' value={campo_editar_id_grupo}/>

    <input type='hidden' value={campo_editar_id_task}/>

  <div style={{ width: '100%', marginTop: '15px' }}>

      <input placeholder='Nome da Tarefa...' value={campo_editar_nome_task} onChange={ (event)=> setCampo_editar_nome_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}} type='text'/>


    </div>

    <div style={{ width: '100%', marginTop: '-5px' }}>

      <select value={campo_editar_priority_task} onChange={ (event)=> setCampo_editar_priority_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}}>

        <option value='hight'>Alta</option>

        <option value='medium'>Médio</option>

        <option value='low'>Baixa</option>

      </select>

    </div>

    <div style={{ width: '100%', marginTop: '-5px' }}>

      <select value={campo_editar_status_task} onChange={ (event)=> setCampo_editar_status_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}}>

        <option value='1'>Ativo</option>

        <option value='0'>Inativo</option>

      </select>

    </div>

    <div style={{ width: '100%', marginTop: '-5px' }}>

      <input value={campo_editar_data_task} onChange={ (event)=> setCampo_editar_data_task(event.target.value) } className={styles.container_proximo_cliente} style={{ paddingLeft: '15px', height: '55px', outline: 'none'}} type='date'/>


    </div>
  

  <li className={styles.container_btns} style={{ backgroundColor: 'transparent', marginTop: '30px', border: '1px solid rgb(255, 84, 0)' }}>

  <label onClick={editarTask} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Editar</label>

</li>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/} 



      <Modal isOpen={isModalDeletarTaskOpen} className={styles.containerModalDelete}>

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Deletar Categoria </label></div>


              <div className={styles.dash_header} style={{ border: 'none', marginTop: '-25px', marginLeft: '15px' }}>              

            </div> {/*dash_header*/}

            <div className={styles.container_delete_modal}>            

            <div style={{ width: '100%', height: '80px', borderRadius: '20px', background: 'rgb(255, 84, 0)' }}>

            <div style={{ textAlign: 'center', width: '100%', color: '#fff', fontSize: '25px', marginTop: '20px' }}><b>Deletar Tarefa</b></div>

            <input type='hidden' value={campo_deletar_id_task}/>

            <div style={{ textAlign: 'center', width: '100%', marginTop: '40px' }}>Tem Certeza que Deseja Deletar a Tarefa?</div>

            <hr/>

              <li onClick={closeDeletarTaskModal} className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', width: '100px', float: 'right', right: '10px', marginTop: '0px', border: '1px solid rgb(140, 7, 27)' }}>

              <label onClick={editarTask} className={styles.btns} style={{ color: 'rgb(140, 7, 27)' }}>Não</label>

             </li>

             <li className={styles.container_btns} style={{ position: 'relative', backgroundColor: 'transparent', width: '100px', float: 'right', right: '10px', marginTop: '0px', border: '1px solid rgb(255, 84, 0)' }}>

              <label onClick={deletarTask} className={styles.btns} style={{ color: 'rgb(255, 84, 0)' }}>Sim</label>

            </li>

            </div> {/*container_delete_modal*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/}
      

      <div class={styles.dash_header} style={{ border: 'none' }}>

      <FontAwesomeIcon className={styles.icone_sino} icon={faBell} style={{ color: '#353738', fontSize: '20px' }} />

      <div className={styles.titulo_agendamento} style={{ color: '#353738' }}>Tarefas</div>

      </div> {/*dash_header*/}

      


      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>

        { 
  grupos.map((grupo) => ( 
    <> 
      <li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', alignItems: 'center' }}>
        <input type='hidden' value={grupo.name} />
        <label style={{ flex: 1, textAlign: 'center', marginTop: '8px', fontSize: '14px' }}>{grupo.name}</label>
        <FontAwesomeIcon onClick={()=> openEditarGrupoModal(grupo.id, grupo.name)} className={styles.iconesino} icon={faPen} style={{ position: 'relative', cursor: 'pointer', float: 'right', right: '20px', top: '-2px', color: '#fff', fontSize: '18px'}} />
      </li>
      <Table style={{ width: '100%', fontSize: '13px' }}>
        <thead>
          <tr style={{ border: '1px solid red' }}>
            <th>Tarefa</th>
            <th>Prazo</th>
            <th>Prioridade</th>
            <th>Status</th>
            <th>Acão</th>
          </tr>
        </thead>
        <tbody>
          {grupo.tasks.map((task, index) => ( 
  <tr key={index}> {/* Use uma chave única para cada elemento na iteração */}
    <td>{task.name}</td>
    <td>{task.finish_date}</td>
    <td>
      {task.priority === "medium" ? "Médio" : task.priority === "hight" ? "Alta" : task.priority === "low" ? "Baixa" : ""}
    </td>
    <td>{task.status}</td>
    <td>
      <FontAwesomeIcon onClick={() => openDeletarTaskModal(task.id)} className={styles.iconesino} icon={faTrash} style={{ position: 'relative', cursor: 'pointer', float: 'right', right: '5px', top: '-2px', color: 'rgba(140, 7, 27 , 1)', fontSize: '18px'}} />
      <FontAwesomeIcon onClick={()=> openEditarTaskModal(grupo.id, task.id, task.name, task.priority, task.status, task.finish_date)} className={styles.iconesino} icon={faPen} style={{ position: 'relative', cursor: 'pointer', float: 'right', right: '15px', top: '-2px', color: 'rgb(255, 84, 0)', fontSize: '18px'}} />
    </td>
  </tr>
))}

        </tbody>
      </Table>
      <li onClick={() => openCadastroTaskModal(grupo.id)} className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', alignItems: 'center' }}>
        <div style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff', borderRadius: '50%', width: '18px', height: '18px', color: 'rgb(255, 84, 0)' }}>
          <FontAwesomeIcon className={styles.iconesino} icon={faPlus} style={{ position: 'relative', textAlign: 'center', width: '100%', top: '-4px', color: 'rgb(255, 84, 0)', fontSize: '11px'}} />
        </div>
      </li>
    </>
  ))
}



            <li onClick={openCadastroGrupoModal} className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', cursor: 'pointer', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', alignItems: 'center' }}>

              <label style={{ flex: 1, textAlign: 'center', marginTop: '8px', fontSize: '14px' }}>Novo Grupo de Tarefas</label>

              <div style={{ position: 'relative', right: '10px', backgroundColor: '#fff', borderRadius: '50%', width: '18px', height: '18px', color: 'rgb(255, 84, 0)' }}>

               <FontAwesomeIcon className={styles.iconesino} icon={faPlus} style={{ position: 'relative', textAlign: 'center', width: '100%', top: '-4px', color: 'rgb(255, 84, 0)', fontSize: '11px'}} />
            
              </div>

            </li>

            <li className={styles.container_proximo_cliente} style={{ backgroundColor: 'rgb(255, 84, 0)', borderRadius: '5px', color: '#fff', height: '40px', display: 'flex', marginLeft: '3px', marginTop: '-5px', alignItems: 'center' }}>

              <label style={{ flex: 1, textAlign: 'center', marginTop: '8px', fontSize: '14px' }}>Tarefas Arquivadas</label>

              <div style={{ position: 'relative', right: '10px', backgroundColor: '#fff', borderRadius: '50%', width: '18px', height: '18px', color: 'rgb(255, 84, 0)' }}>

               <FontAwesomeIcon className={styles.iconesino} icon={faBox} style={{ position: 'relative', textAlign: 'center', width: '100%', top: '-4px', color: 'rgb(255, 84, 0)', fontSize: '11px'}} />
            
              </div>

            </li>
          
        </div>  

      </div> {/*container_agendamentos*/}

      


      </div> {/*all-container*/}
  
    </>
  );
};

export default Dashboard;
