import React, { useState, useEffect } from 'react';
import Header from './../header/index';
import Wave from './../img/wave.png';
import Logo from './../img/logo.svg';
import LogoDash from './../img/logo-dashboard.svg';
import NoImg from './../img/no-img.png';
import { Link, useNavigate } from 'react-router-dom';
import styles from './../css/service-details.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faWallet, 
  faCalendar, 
  faTasks, 
  faCog, 
  faBell, 
  faImages, 
  faUserCircle, 
  faClock, 
  faLock, 
  faChevronLeft, 
  faCaretDown, 
  faPlusCircle, 
  faSortAmountUp, 
  faEuroSign, 
  faQrcode, 
  faPaperPlane, 
  faCoins, 
  faCopy, 
  faBarcode, 
  faMoneyCheckAlt, 
  faHandHoldingUsd, 
  faDatabase, 
  faBalanceScale, 
  faCheck, 
  faUserNurse, 
  faToolbox, 
  faStar, 
  faFileContract, 
  faQuestionCircle, 
  faStore, 
  faTools
} from '@fortawesome/free-solid-svg-icons';
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
      const id_servico_selecionado = sessionStorage.getItem('id_servico_selecionado')
      const filteredData = data.data.data.filter(item => id_servico_selecionado.includes(item.id));
      setServicos(filteredData);

      //console.log('Dados atualizados:', data);
    } catch (error) {
      console.error('Erro ao buscar dados da API', error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('meusDados') !== null) {
      const dadosSalvos = JSON.parse(sessionStorage.getItem('meusDados'));
      setDados(dadosSalvos);
    } else {
      Navigate('/login')
      return;
    }
    fetchServices();
  }, []);

  const imgLogado = /*dados.img ||*/ 'https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg';
  const nomeLogado = dados.name || '';

  const enviar_dados = () => {
    Navigate('/business/service-finalization');
  };

  /*================================= TOGGLE FUNCTIONS ===================================*/
  const [stateBtnToggleBtnUnity, setStateBtnToggleBtnUnity] = useState(false);
  const toggleBtnUnity = () => {
    setStateBtnToggleBtnUnity(!stateBtnToggleBtnUnity);
  };

  const [stateBtnToggleBtnStaff, setStateBtnToggleBtnStaff] = useState(false);
  const toggleBtnStaff = () => {
    setStateBtnToggleBtnStaff(!stateBtnToggleBtnStaff);
  };
  const [itemColorsProfessional, setItemColorsProfessional] = useState({});

  const handleClickProfessional = (id) => {
    setItemColorsProfessional((prevColorsProfessional) => {
      const newColorsProfessional = Object.keys(prevColorsProfessional).reduce((acc, key) => {
        acc[key] = { backgroundColor: '#fff', color: 'rgb(25, 133, 123)' };
        return acc;
      }, {});
      newColorsProfessional[id] = { backgroundColor: 'rgb(25, 133, 123)', color: '#fff' };
      return newColorsProfessional;
    });
  };


  const [stateBtnToggleBtnDate, setStateBtnToggleBtnDate] = useState(false);
  const toggleBtnDate = () => {
    setStateBtnToggleBtnDate(!stateBtnToggleBtnDate);
  };

  const [stateBtnToggleBtnClock, setStateBtnToggleBtnClock] = useState(false);
  const toggleBtnClock = () => {
    setStateBtnToggleBtnClock(!stateBtnToggleBtnClock);
  };

  const [buttonColorsMorning, setButtonColorsMorning] = useState(Array(10).fill("#fff"));
  const [textButtonColorsMorning, setTextButtonColorsMorning] = useState(Array(10).fill("#353738"));
  const [selectedButtonIndexMorning, setSelectedButtonIndexMorning] = useState(null);

  const toggleClockBtnsMorning = (indexMorning) => {
    const newButtonColorsMorning = buttonColorsMorning.map((colorMorning, i) => {
      return indexMorning === i ? "rgb(25, 133, 123)" : "#fff";
    });

    const newTextButtonColorsMorning = textButtonColorsMorning.map((colorMorning, i) => {
      return indexMorning === i ? "#fff" : "#353738";
    });

    setButtonColorsMorning(newButtonColorsMorning);
    setTextButtonColorsMorning(newTextButtonColorsMorning);
    setSelectedButtonIndexMorning(indexMorning);


    const newButtonColorsAfternoon = [ "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
    const newTextButtonColorsAfternoon = [ "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738"]

    setButtonColorsAfternoon(newButtonColorsAfternoon);
    setTextButtonColorsAfternoon(newTextButtonColorsAfternoon);

  };

  useEffect(() => {
    const resetColorsMorning = () => {
      if (selectedButtonIndexMorning !== null) {
        const newButtonColorsMorning = buttonColorsMorning.map((colorMorning, i) => {
          return i === selectedButtonIndexMorning ? "rgb(25, 133, 123)" : "#fff";
        });
        const newTextButtonColorsMorning = textButtonColorsMorning.map((colorMorning, i) => {
          return i === selectedButtonIndexMorning ? "#fff" : "#353738";
        });
        setButtonColorsMorning(newButtonColorsMorning);
        setTextButtonColorsMorning(newTextButtonColorsMorning);
      }
    };

    resetColorsMorning();
  }, [selectedButtonIndexMorning]);





  const [buttonColorsAfternoon, setButtonColorsAfternoon] = useState(Array(10).fill("#fff"));
  const [textButtonColorsAfternoon, setTextButtonColorsAfternoon] = useState(Array(10).fill("#353738"));
  const [selectedButtonIndexAfternoon, setSelectedButtonIndexAfternoon] = useState(null);

  const toggleClockBtnsAfternoon = (indexAfternoon) => {
    const newButtonColorsAfternoon = buttonColorsMorning.map((colorAfternoon, i) => {
      return indexAfternoon === i ? "rgb(25, 133, 123)" : "#fff";
    }); 

    const newTextButtonColorsAfternoon = textButtonColorsMorning.map((colorAfternoon, i) => {
      return indexAfternoon === i ? "#fff" : "#353738";
    });

    setButtonColorsAfternoon(newButtonColorsAfternoon);
    setTextButtonColorsAfternoon(newTextButtonColorsAfternoon);
    setSelectedButtonIndexAfternoon(indexAfternoon);

    const newButtonColorsMorning = [ "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
    const newTextButtonColorsMorning = [ "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738", "#353738"]

    setButtonColorsMorning(newButtonColorsMorning);
    setTextButtonColorsMorning(newTextButtonColorsMorning);
  };

  useEffect(() => {
    const resetColorsAfternoon = () => {
      if (selectedButtonIndexAfternoon !== null) {
        const newButtonColorsAfternoon = buttonColorsMorning.map((colorAfternoon, i) => {
          return i === selectedButtonIndexAfternoon ? "rgb(25, 133, 123)" : "#fff";
        });
        const newTextButtonColorsAfternoon = textButtonColorsAfternoon.map((colorAfternoon, i) => {
          return i === selectedButtonIndexAfternoon ? "#fff" : "#353738";
        });
        setButtonColorsAfternoon(newButtonColorsAfternoon);
        setTextButtonColorsAfternoon(newTextButtonColorsAfternoon);
      }
    };

    resetColorsAfternoon();
  }, [selectedButtonIndexAfternoon]);

  /*================================= /TOGGLE FUNCTIONS ===================================*/


  return (
    <>
      <div className={styles.all_container}>
        <div className={styles.dash_header} style={{ border: 'none' }}></div>

        <div className={styles.container_agendamentos} style={{ marginTop: '30px' }}>
          <div className={styles.ul}>
            <li className={styles.container_proximo_cliente} style={{height: '120px', display: 'flex', border: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
              <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={imgLogado} alt="Imagem" />
              <div style={{ marginTop: '15px', fontSize: '18px', textAlign: 'center', width: '100%' }}>
                {nomeLogado}
                <p style={{ fontSize: '15px', color: '#808080' }}>“Estamos aqui para atender melhor nossos clientes”</p>
                <p style={{ fontSize: '15px', color: '#808080' }}>SELECIONE OS SERVIÇOS</p>
              </div>
            </li>
            <p style={{ marginTop: '30px' }}></p>

            <div className={styles.container_confirmar_identidade}>
              <div style={{ position: 'relative', marginTop: '20px', fontSize: '14px', textAlign: 'center', width: '100%' }}>CONFIRME SUA IDENTIDADE</div>
              
              {/* Unity */}
              <div style={{ position: 'relative', width: '90%', left: '50%', marginTop: '20px', transform: 'translateX(-50%)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 'auto', border: '1px solid rgba(0, 0, 0, 0.3)', padding: '1px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '45px' }}>
                    <FontAwesomeIcon className={styles.iconesino} icon={faHome} style={{ marginLeft: '10px' }} />
                    <label onClick={toggleBtnUnity} style={{ marginTop: '25px', textAlign: 'center', flexGrow: 1, width: '100%', height: '40px' }}>Unidade</label>
                    <FontAwesomeIcon className={styles.iconesino} icon={faCaretDown} style={{ marginRight: '10px' }} />
                  </div>
                  <li className={styles.container_proximo_cliente} style={{ display: stateBtnToggleBtnUnity ? 'flex' : 'none', border: '1px solid rgb(25, 133, 123)', marginTop: '10px', borderRadius: '5px', height: '40px', alignItems: 'center', justifyContent: 'center', width: '90%', backgroundColor: '#fff' }}>
                    <label style={{ flex: 1, textAlign: 'center', color: 'rgb(25, 133, 123)', marginTop: '10px', fontSize: '14px' }}>Sem Nenhum Local Disponivel</label>
                  </li>
                </div>
              </div>

              {/* Staff */}
              <div style={{ position: 'relative', width: '90%', left: '50%', marginTop: '20px', transform: 'translateX(-50%)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 'auto', border: '1px solid rgba(0, 0, 0, 0.3)', padding: '1px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '45px' }}>
                    <FontAwesomeIcon className={styles.iconesino} icon={faUserCircle} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                    <label onClick={toggleBtnStaff} style={{ marginTop: '25px', textAlign: 'center', cursor: 'pointer', flexGrow: 1, width: '100%', height: '40px' }}>Profissional</label>
                    <FontAwesomeIcon className={styles.iconesino} icon={faCaretDown} style={{ marginRight: '10px' }} />
                  </div>
 
                  {servicos.map((servico) =>
        servico.staffs.map((staff) => (
          <li
            key={staff.id}
            className={styles.container_proximo_cliente}
            style={{
              display: stateBtnToggleBtnStaff ? 'flex' : 'none',
              border: '1px solid rgb(25, 133, 123)',
              marginTop: '10px',
              borderRadius: '5px',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
              backgroundColor: itemColorsProfessional[staff.id]?.backgroundColor || '#fff',
              color: itemColorsProfessional[staff.id]?.color || 'rgb(25, 133, 123)',
              cursor: 'pointer',
            }}
            onClick={() => handleClickProfessional(staff.id)}
          >
            <label
              style={{
                flex: 1,
                cursor: 'pointer',
                textAlign: 'center',
                marginTop: '10px',
                fontSize: '14px',
                color: itemColorsProfessional[staff.id]?.color || 'rgb(25, 133, 123)',
              }}
            >
              PROFISSIONAL {staff.name}
            </label>
          </li>
        ))
      )}

                </div>
              </div>

              {/* Date */}
              <div onClick={toggleBtnDate} style={{ position: 'relative', width: '90%', left: '50%', marginTop: '20px', cursor: 'pointer', transform: 'translateX(-50%)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', justifyContent: 'space-between', width: '100%', height: 'auto', border: '1px solid rgba(0, 0, 0, 0.3)', padding: '1px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '45px' }}>
                    <FontAwesomeIcon className={styles.iconesino} icon={faCalendar} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                    <label style={{ marginTop: '10px', textAlign: 'center', cursor: 'pointer', flexGrow: 1 }}>Data</label>
                    <FontAwesomeIcon className={styles.iconesino} icon={faCaretDown} style={{ marginRight: '10px' }} />
                  </div>

                  {/* Service & Staff Selection */}
                  {servicos.map((servico) => (
                    servico.staffs.map((staff) => (
                      <React.Fragment key={`${servico.id}-${staff.id}`}>
                        <li className={styles.container_proximo_cliente} style={{ display: stateBtnToggleBtnDate ? 'flex' : 'none', backgroundColor: 'rgb(25, 133, 123)', marginTop: '15px', borderRadius: '5px', height: '40px', alignItems: 'center', justifyContent: 'center', width: '90%' }}>
                          <label style={{ flex: 1, cursor: 'pointer', textAlign: 'center', color: '#fff', marginTop: '10px', fontSize: '14px' }}>SERVIÇO {servico.name} - PROFISSIONAL {staff.name}</label>
                        </li>
                        <input type='date' style={{ display: stateBtnToggleBtnDate ? 'flex' : 'none', justifyContent: 'center', outline: 'none', marginTop: '-5px', width: '90%', height: '35px' }} />
                      </React.Fragment>
                    ))
                  ))}
                  <p style={{ display: stateBtnToggleBtnDate ? 'flex' : 'none', marginTop: '10px' }}></p>
                </div>
              </div>

              {/* Clock */}
              <div  style={{ position: 'relative', width: '90%', left: '50%', marginTop: '20px', transform: 'translateX(-50%)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: 'auto', border: '1px solid rgba(0, 0, 0, 0.3)', padding: '1px 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '45px' }}>
                    <FontAwesomeIcon className={styles.iconesino} icon={faClock} style={{ marginLeft: '10px', cursor: 'pointer' }} />
                    <label onClick={toggleBtnClock} style={{ marginTop: '25px', textAlign: 'center', cursor: 'pointer', flexGrow: 1, width: '100%', height: '40px' }}>Horário</label>
                    <FontAwesomeIcon className={styles.iconesino} icon={faCaretDown} style={{ marginRight: '10px' }} />
                  </div>

                  {/* Morning */}
                  <div style={{ display: 'flex', width: '95%', justifyContent: 'center' }}>
                    <li className={styles.container_proximo_cliente} style={{ display: stateBtnToggleBtnClock ? 'flex' : 'none', border: '1px solid rgb(25, 133, 123)', marginTop: '10px', borderRadius: '5px', height: '40px', alignItems: 'center', justifyContent: 'center', width: '90%', backgroundColor: '#fff' }}>
                      <label style={{ flex: 1, textAlign: 'center', color: 'rgb(25, 133, 123)', marginTop: '10px', fontSize: '14px' }}>Manhã</label>
                    </li>
                  </div>

                  {/* Morning Time Slots */}
                  <div style={{ position: 'relative', left: '50%', width: '90%', display: stateBtnToggleBtnClock ? 'flex' : 'none', flexWrap: 'wrap', gap: '10px', marginTop: '5px', transform: 'translateX(-50%)' }}>
                    {[...Array(10).keys()].map((hour, indexMorning) => (
                      <input onClick={() => toggleClockBtnsMorning(indexMorning)} readOnly key={hour} type="text" value={`${hour + 8}:00`} style={{ width: '70px', height: '45px', outline: 'none', border: 'none', backgroundColor: buttonColorsMorning[indexMorning], color: textButtonColorsMorning[indexMorning], cursor: 'pointer', textAlign: 'center', borderRadius: '5px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)' }} />
                    ))}
                  </div>


                  {/* Afternoon */}
                  <div style={{ display: stateBtnToggleBtnClock ? 'flex' : 'none', width: '95%', marginTop: '30px', justifyContent: 'center' }}>
                    <li className={styles.container_proximo_cliente} style={{ display: stateBtnToggleBtnClock ? 'flex' : 'none', border: '1px solid rgb(25, 133, 123)', marginTop: '10px', borderRadius: '5px', height: '40px', alignItems: 'center', justifyContent: 'center', width: '90%', backgroundColor: '#fff' }}>
                      <label style={{ flex: 1, textAlign: 'center', color: 'rgb(25, 133, 123)', marginTop: '10px', fontSize: '14px' }}>Tarde</label>
                    </li>
                  </div>

                  {/* Afternoon Time Slots */}
                  <div style={{ position: 'relative', left: '50%', width: '90%', display: stateBtnToggleBtnClock ? 'flex' : 'none', flexWrap: 'wrap', gap: '10px', marginTop: '5px', transform: 'translateX(-50%)' }}>
                    {[...Array(10).keys()].map((hour, indexAfternoon) => (
                      <input onClick={() => toggleClockBtnsAfternoon(indexAfternoon)} readOnly key={hour} type="text" value={`${hour + 12}:00`} style={{ width: '70px', height: '45px', outline: 'none', border: 'none', backgroundColor: buttonColorsAfternoon[indexAfternoon], color: textButtonColorsAfternoon[indexAfternoon], cursor: 'pointer', textAlign: 'center', borderRadius: '5px', boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)' }} />
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ marginTop: '10px' }}></p>
            </div>

            {/* Continue Button */}
            <li onClick={enviar_dados} className={styles.container_proximo_cliente} style={{ border: 'none', marginTop: '5px', borderRadius: '5px', height: '40px', display: 'flex', alignItems: 'center' }}>
              <label style={{ flex: 1, cursor: 'pointer', marginTop: '7px', textAlign: 'center', color: '#fff', fontSize: '14px' }}>Continuar</label>
            </li>

            <p style={{ marginTop: '50px' }}></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;


