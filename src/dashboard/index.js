import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png'
import Logo from './../img/logo.svg'
import LogoDash from './../img/logo-dashboard.svg'
import  styles from './../css/dashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faCalendar, faTasks, faCog, faTimes, faBell, faUserCircle, faHandHoldingUsd, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle  } from '@fortawesome/free-solid-svg-icons';
import * as echarts from 'echarts';
import Modal from 'react-modal';

const Dashboard = () => {


  const Navigate = useNavigate();
  const [dados, setDados] = useState('');
  const [isModalCadastroOpen, setModalCadastroOpen] = useState(false)
  const openCadastroModal = () => setModalCadastroOpen(true);
  const closeCadastroModal = () => setModalCadastroOpen(false);

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

    }, []);


  useEffect(() => {
    // Inicializar el primer gráfico de pizza
    const chart1 = echarts.init(document.getElementById('echart-container1'));
    const options1 = {
      title: {
        text: 'Vendas 2/10/2024',
        textStyle: {
          fontSize: 13,
        },
      },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Faltando' },
        { value: 735, name: 'Concluido' }
      ],
      // Defina a propriedade 'color' com as cores desejadas
      color: ['rgba(237, 110, 31, 0.7)', 'rgb(255, 84, 0)']

    }
  ]
};
    chart1.setOption(options1);

    // Inicializar el segundo gráfico de pizza
    const chart2 = echarts.init(document.getElementById('echart-container2'));
    const options2 = {
      title: {
        text: 'Atendimentos 2/10/2024',
        textStyle: {
          fontSize: 13,
        },
      },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 735, name: 'Faltando' },
        { value: 1048, name: 'Concluido' }
      ],
      // Defina a propriedade 'color' com as cores desejadas
      color: ['rgba(237, 110, 31, 0.7)', 'rgb(255, 84, 0)']
    }
  ]
};
    chart2.setOption(options2);

    // Limpiar los gráficos al desmontar el componente
    return () => {
      chart1.dispose();
      chart2.dispose();
    };
  }, []);

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
  
  


  return (
    <>

    <Modal isOpen={isModalCadastroOpen} className={styles.containerModal}>

      <FontAwesomeIcon onClick={closeCadastroModal} icon={faTimes} style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '25px', marginTop: '17px', fontSize: '26px' }} />

        <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', fontSize: '24px', color: '#353738', paddingTop: '15px' }}><label style={{ position: 'relative', top: '-3px', color: '#353738' }}>Próximos clientes </label></div>

            <div className={styles.container_form_modal} style={{ height: '650px',  overflowY: 'scroll' }}>

            <div className={styles.ul}>


            <div className={styles.containerModalDesc} style={{ color: '#353738', paddingTop: '15px' }}>
           
            <div style={{ position: 'relative', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', width: '100%', color: '#353738', fontSize: '25px' }}>Detalhes</div>

            <div style={{ position: 'relative', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', paddingTop: '10px', marginTop: '30px', width: '100%', color: 'rgb(85, 67, 59)', fontSize: '15px' }}>

              <div><b>Cliente:</b> Ataide Bastos</div>

              <FontAwesomeIcon onClick={closeCadastroModal} icon={faUserCircle} style={{ position: 'relative', color: 'rgb(85, 67, 59)', float: 'left', left: '-12px', margin: '-10px -20px', fontSize: '19px' }} />

              <div style={{marginTop: '2px'}}><b>Agendamento:</b> 5/21/2024</div>

            </div>

            <div style={{ position: 'relative', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', paddingTop: '10px', width: '100%', color: 'rgb(85, 67, 59)', fontSize: '15px' }}>

              <div><b>Profissional:</b> João Sousa</div>

              <FontAwesomeIcon onClick={closeCadastroModal} icon={faClock} style={{ position: 'relative', color: 'rgb(85, 67, 59)', float: 'left', left: '-12px', margin: '0px -20px', fontSize: '19px' }} />

              <div style={{marginTop: '2px'}}><b>Horário:</b> 08:30h - 09:30h</div>

              <div style={{marginTop: '2px'}}><b>Serviço:</b> Corte</div>

            </div>

            <div style={{ position: 'relative', borderBottom: '1px solid rgba(0, 0, 0, 0.2)', paddingTop: '10px', width: '100%', color: 'rgb(85, 67, 59)', fontSize: '15px' }}>

              <div><b>Profissional:</b> João Sousa</div>

              <FontAwesomeIcon onClick={closeCadastroModal} icon={faClock} style={{ position: 'relative', color: 'rgb(85, 67, 59)', float: 'left', left: '-12px', margin: '0px -20px', fontSize: '19px' }} />

              <div style={{marginTop: '2px'}}><b>Horário:</b> 08:30h - 09:30h</div>

              <div style={{marginTop: '2px'}}><b>Serviço:</b> Selagem</div>

            </div>

            <div style={{ position: 'relative', paddingTop: '10px', width: '100%', color: 'rgb(85, 67, 59)', fontSize: '15px' }}>

              <div><b>Pagamento:</b> Via Pix</div>

              <FontAwesomeIcon onClick={closeCadastroModal} icon={faHandHoldingUsd} style={{ position: 'relative', color: 'rgb(85, 67, 59)', float: 'left', left: '-12px', margin: '20px -20px', fontSize: '19px' }} />

              <div style={{marginTop: '2px'}}><b>Telefone:</b> (99) 99999-9999</div>

              <div style={{marginTop: '2px'}}><b>E-mail:</b> marcos@marcos.com</div>

              <div style={{marginTop: '2px'}}><b>Data da compra:</b> 30/02/2023</div>

              <div style={{marginTop: '2px'}}><b>Horário da compra:</b> 18:45h</div>

            </div>

            <div style={{ width: '100%', padding: '10px 0px', marginTop: '40px', textAlign: 'center', color: '#fff', backgroundColor: 'rgb(255, 84, 0)' }}>

              Codigo: MXP0203

            </div>

            </div>

</div> {/*container_agendamentos ul*/}

  </div> {/*container_agendamentos*/}
          

      </Modal> {/*containerModal*/}

      <Header className={styles.header_menu}/>
      <div className={styles.all_container}>

        

      <div class={styles.dash_header}>

      <FontAwesomeIcon className={styles.icone_sino} icon={faBell} style={{ color: '#353738', fontSize: '20px' }} />

      <div className={styles.titulo_agendamento}>Agendamentos</div>

      <button className={styles.btn_hoje}>Hoje</button>

      </div> {/*dash_header*/}

      <div className={styles.agenda_semanal}>

        <ul>
          <li>

            <label>Seg</label>

            <p style={{ marginTop: '-10px', fontSize: '16px' }}>7</p>

          </li>



          <li>

            <label>Ter</label>

            <p style={{ marginTop: '-10px', fontSize: '16px' }}>8</p>

          </li>
          
          <li>

            <label>Qua</label>

            <p style={{ marginTop: '-10px', fontSize: '16px' }}>9</p>

          </li>
          
          <li>

            <label>Qui</label>

            <p style={{ marginTop: '-10px', fontSize: '16px' }}>10</p>

          </li>
          
          <li>

            <label>Sex</label>

            <p style={{ marginTop: '-10px', fontSize: '16px' }}>11</p>

          </li>
          
          <li>

            <label>Sab</label>

            <p style={{ marginTop: '-10px', fontSize: '16px' }}>12</p>

          </li>
          
          <li>

            <label>Dom</label>

            <p style={{ marginTop: '-10px', fontSize: '16px' }}>13</p>

          </li>
        </ul>

      </div> {/*agenda_semanal*/}


      <div className={styles.container_agendamentos}>

        <div className={styles.ul}>
            
            <li className={styles.container_proximo_cliente}>

            <FontAwesomeIcon className={styles.icone_sino} icon={faHandHoldingUsd} style={{ position: 'relative', cursor: 'pointer', marginTop: '70px', right: '10px', float: 'right', color: '#808080', fontSize: '25px',  }} />

            <FontAwesomeIcon onClick={openCadastroModal} className={styles.icone_sino} icon={faPlusCircle} style={{ position: 'relative', cursor: 'pointer', marginTop: '70px', right: '-40px', float: 'right', color: '#808080', fontSize: '25px',  }} />

              <ul>
                <div style={{ margin: '15px 20px', color: '#353738' }}><b>Próximos cliente</b></div>

                <p style={{ margin: '20px 30px', color: '#353738' }}> <FontAwesomeIcon icon={faUserCircle} style={{ color: '#808080', fontSize: '20px' }} />  <label style={{ position: 'relative', top: '-1.5px', marginLeft: '25px', fontSize: '15px' }}>Edivaldo Wagner</label></p>

                <p style={{ margin: '-2px 30px', color: '#353738' }}> <FontAwesomeIcon icon={faClock} style={{ color: '#808080', fontSize: '20px' }} />  <label style={{ position: 'relative', top: '-1.5px', marginLeft: '25px', fontSize: '15px' }}>08:30 - 9:00</label></p>

                <p style={{ margin: '18px 30px', color: '#353738' }}> <FontAwesomeIcon icon={faLock} style={{ color: '#808080', fontSize: '20px' }} />  <label style={{ position: 'relative', top: '-1.5px', marginLeft: '28px', fontSize: '15px' }}>MXP0203</label></p>

                <p style={{ position: 'relative', display: 'flex', justifyContent: 'center'}}><div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '80%', paddingTop: '8px', textAlign: 'center', color: '#fff', fontSize: '13px', backgroundColor: 'rgb(255, 84, 0)', borderRadius: '20px'}}><label style={{ position: 'relative', top: 0 }}>Atendimento em 15 minutos.</label></div></p>

      
                <p style={{ position: 'relative', display: 'flex', marginTop: '20px', justifyContent: 'center'}}> 

                <FontAwesomeIcon className={styles.icone_sino} icon={faChevronLeft} style={{ position: 'relative', top: '-30px', color: '#808080', fontSize: '15px', cursor: 'pointer'  }} />
                
                  <div style={{ position: 'relative', display: 'flex', height: '5px', width: '60%', backgroundColor: 'rgba(255, 84, 0, 0.5)'}}><label style={{ position: 'relative', width: '50%', height: '100%', background: 'rgba(255, 84, 0, 1)' }}></label></div>
                  
                  <FontAwesomeIcon className={styles.icone_sino} icon={faChevronRight} style={{ position: 'relative', top: '-30px', color: 'rgba(255, 84, 0, 1)', fontSize: '15px',  }} />
                  
                  </p>
                


              </ul>

                               

            </li>

            <li className={styles.container_lembretes}>

            


              <ul>
                <div style={{ margin: '15px 20px', color: '#353738' }}><b>
                  
                  Lembretes  01/21 

                  <FontAwesomeIcon className={styles.icone_sino} icon={faCog} style={{ position: 'absolute', marginTop: '0px', marginLeft: '10px', color: '#808080', fontSize: '20px', cursor: 'pointer'  }} />
                  
                  </b></div>

                  <div style={{ marginLeft: '20px' }}>
                    <button style={{ width: '120px', height: '38px', background: 'transparent', color: 'rgba(255, 84, 0, 1)', border: '1px solid rgba(255, 84, 0, 1)', borderRadius: '4px' }}>Compras</button>
                    <b style={{ color: '#353738', fontSize: '15px', marginLeft: '10px' }}>01/21</b>
                  </div>

                  <p style={{ margin: '10px 20px' }}>
                    <button style={{ width: '120px', height: '38px', background: 'transparent', color: 'rgba(255, 84, 0, 1)', border: '1px solid rgba(255, 84, 0, 1)', borderRadius: '4px' }}>Pagamentos</button>
                    <b style={{ color: '#353738', fontSize: '15px', marginLeft: '10px' }}>01/21</b>
                  </p>

                  <p style={{ margin: '10px 20px' }}>
                    <button style={{ width: '120px', height: '38px', background: 'transparent', color: 'rgba(255, 84, 0, 1)', border: '1px solid rgba(255, 84, 0, 1)', borderRadius: '4px' }}>Salários</button>
                    <b style={{ color: '#353738', fontSize: '15px', marginLeft: '10px' }}>01/21</b>
                  </p>

              </ul>
            </li>

            <li className={styles.container_graficos} style={{ justifyContent: 'center' }}>
                <div id="echart-container1" style={{ width: '100%', height: '300px', float: 'center' }} />
            </li>

            <li className={styles.container_graficos} style={{ justifyContent: 'center' }}>
                <div id="echart-container2" style={{ width: '100%', height: '300px', float: 'center' }} />
            </li>

            <li className={styles.container_graficos}></li>
          
        </div>  

      </div> {/*container_agendamentos*/}


      </div> {/*all-container*/}
  
    </>
  );
};

export default Dashboard;
