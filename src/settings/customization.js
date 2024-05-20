import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './../css/customization.module.css';
import RattingsIcon from './../img/rattings-icone.png';

const Settings = () => {
  const navigate = useNavigate();
  const [dados, setDados] = useState('');
  const [servicos, setServicos] = useState([]);
  const [textColor, setTextColor] = useState('#000000');
  const [buttonColor, setButtonColor] = useState('#000000');
  const [imageSrc, setImageSrc] = useState("https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImageSrc('https://centrechurch.org/wp-content/uploads/2022/03/img-person-placeholder.jpeg');
  };


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
      const id_servico_selecionado = sessionStorage.getItem('id_servico_selecionado');
      const filteredData = data.data.data.filter(item => id_servico_selecionado.includes(item.id));
      setServicos(filteredData);
    } catch (error) {
      console.error('Erro ao buscar dados da API', error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('meusDados') !== null) {
      const dadosSalvos = JSON.parse(sessionStorage.getItem('meusDados'));
      setDados(dadosSalvos);
      fetchServices();
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className={styles.all_container}>
      <div className={styles.container_agendamentos}>
        <div className={styles.ul}>
          <div className={styles.dash_header} style={{ border: 'none' }}>
            <Link to="/settings" style={{ textDecoration: 'none' }}>
              <div className={styles.container_icone_sino} style={{ marginTop: '30px' }}>
                <FontAwesomeIcon
                  className={styles.icone_sino}
                  icon={faAngleLeft}
                  style={{ color: '#fff', fontSize: '20px' }}
                />
              </div>
            </Link>
          </div>
          <div style={{ width: '100%', marginTop: '-90px' }}>
            <img
              style={{
                position: 'relative',
                top: '110px',
                width: '110px',
                float: 'left',
                marginLeft: '20px',
              }}
              src={imageSrc}
              alt="Ratings Icon"
            />
            <div className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
              <div
                className={styles.container_btns}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgb(255, 84, 0)',
                  border: 'none',
                  float: 'right',
                  left: '50%',
                  transform: 'translateX(-55%)',
                  height: '40px',
                  marginTop: '30px',
                  width: '60%',
                }}
              >
                <label className={styles.btns} style={{ color: '#fff', cursor: 'pointer' }}>
                  Upload da logo
                  <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              <div
                className={styles.container_btns}
                style={{
                  position: 'relative',
                  backgroundColor: 'rgb(243, 42, 94)',
                  border: 'none',
                  float: 'right',
                  left: '50%',
                  transform: 'translateX(-55%)',
                  height: '40px',
                  marginTop: '5px',
                  width: '60%',
                }}
                onClick={handleImageRemove}
              >
                <label className={styles.btns} style={{ color: '#fff', cursor: 'text' }}>
                  Remover
                </label>
              </div>
            </div>
            <h5 style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: '10px' }}>
              <b>Perfil</b>
            </h5>
            <div style={{ width: '100%', marginTop: '-5px' }}>
              <input
                placeholder="Nome..."
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '55px' }}
                type="text"
              />
              <input
                placeholder="Biografia..."
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '55px' }}
                type="text"
              />
            </div>
            <hr className={styles.border_bottom} />
            <h5 style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: '10px', marginTop: '20px' }}>
              <b>Serviços</b>
            </h5>
            <div style={{ width: '100%', marginTop: '5px' }}>
              <input
                readOnly
                value="Serviços"
                className={styles.container_proximo_cliente}
                style={{
                  paddingLeft: '15px',
                  textAlign: 'center',
                  border: 'none',
                  color: '#fff',
                  backgroundColor: 'rgb(255, 84, 0)',
                  height: '45px',
                  cursor: 'pointer',
                }}
                type="text"
              />
              <div
                style={{
                  width: '100%',
                  maxHeight: '180px',
                  marginLeft: '10px',
                  overflow: 'scroll',
                  border: '1px solid rgb(255, 84, 0)',
                }}
              >
                <ul
                  style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  {servicos.map(servico => (
                    <li
                      key={servico.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0px 10px',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
                        boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
                        marginBottom: '10px',
                      }}
                    >
                      <input
                        type="checkbox"
                        id={`servico${servico.id}`}
                        style={{
                          marginTop: '5px',
                          marginRight: '10px',
                          transform: 'scale(1.2)',
                        }}
                      />
                      <label
                        htmlFor={`servico${servico.id}`}
                        style={{
                          marginTop: '12px',
                          paddingLeft: '10px',
                          fontSize: '15px',
                          width: '100%',
                          color: '#fff',
                          cursor: 'pointer',
                          backgroundColor: 'rgb(255, 84, 0)',
                          boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        SERVIÇO {servico.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <hr className={styles.border_bottom} />
            <h5 style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: '10px', marginTop: '20px' }}>
              <b>Plano de fundo</b>
            </h5>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <input
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '45px' }}
                type="color"
              />
            </div>
            <hr className={styles.border_bottom} />
            <h5 style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: '10px', marginTop: '20px' }}>
              <b>Botão</b>
            </h5>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <div
                style={{
                  position: 'relative',
                  top: '10px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  marginLeft: '10px',
                  marginTop: '5px',
                  fontSize: '13px',
                }}
              >
                Plano
              </div>
              <input
                readOnly
                className={styles.container_proximo_cliente}
                style={{
                  paddingLeft: '15px',
                  height: '40px',
                  textAlign: 'center',
                  backgroundColor: buttonColor,
                  color: textColor,
                }}
                type="text"
                value="Texto do Botão"
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <div
                style={{
                  position: 'relative',
                  top: '10px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  marginLeft: '10px',
                  marginTop: '5px',
                  fontSize: '13px',
                }}
              >
                Contorno
              </div>
              <input
                readOnly
                className={styles.container_proximo_cliente}
                style={{
                  paddingLeft: '15px',
                  height: '40px',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                  border: `1px solid ${buttonColor}`,
                  color: textColor,
                }}
                type="text"
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <div
                style={{
                  position: 'relative',
                  top: '10px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  marginLeft: '10px',
                  marginTop: '5px',
                  fontSize: '13px',
                }}
              >
                Sombreado
              </div>
              <input
                readOnly
                className={styles.container_proximo_cliente}
                style={{
                  paddingLeft: '15px',
                  height: '40px',
                  textAlign: 'center',
                  backgroundColor: buttonColor,
                }}
                type="text"
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <div
                style={{
                  position: 'relative',
                  top: '10px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  marginLeft: '10px',
                  marginTop: '5px',
                  fontSize: '13px',
                }}
              >
                Cor do texto
              </div>
              <input
                className={styles.container_proximo_cliente}
                style={{
                  paddingLeft: '15px',
                  height: '40px',
                  textAlign: 'center',
                }}
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <div
                style={{
                  position: 'relative',
                  top: '10px',
                  color: 'rgba(0, 0, 0, 0.7)',
                  marginLeft: '10px',
                  marginTop: '5px',
                  fontSize: '13px',
                }}
              >
                Cor do botão
              </div>
              <input
                className={styles.container_proximo_cliente}
                style={{
                  paddingLeft: '15px',
                  height: '40px',
                  textAlign: 'center',
                }}
                type="color"
                value={buttonColor}
                onChange={(e) => setButtonColor(e.target.value)}
              />
            </div>
            <hr className={styles.border_bottom} />
            <h5 style={{ color: 'rgba(0, 0, 0, 0.6)', marginLeft: '10px', marginTop: '20px' }}>
              <b>Mídias</b>
            </h5>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <input
                placeholder="Instagram..."
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '55px' }}
                type="text"
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <input
                placeholder="Facebook..."
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '55px' }}
                type="text"
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <input
                placeholder="Twitter..."
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '55px' }}
                type="text"
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <input
                placeholder="Pinterest..."
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '55px' }}
                type="text"
              />
            </div>
            <div style={{ width: '100%', marginTop: '0px' }}>
              <input
                placeholder="Website..."
                className={styles.container_proximo_cliente}
                style={{ paddingLeft: '15px', height: '55px' }}
                type="text"
              />
            </div>
          </div>
          <Link
            to="/settings/customization"
            className={styles.container_proximo_cliente}
            style={{
              border: 'none',
              textDecoration: 'none',
              marginTop: '10px',
              marginLeft: '20px',
              borderRadius: '5px',
              backgroundColor: 'rgb(255, 84, 0)',
              height: '40px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ marginLeft: '-20px', textAlign: 'center', width: '100%', color: '#fff', fontSize: '14px' }}>
              Resetar configurações
            </div>
          </Link>
          <Link
            to="/business/bio"
            className={styles.container_proximo_cliente}
            style={{
              border: 'none',
              textDecoration: 'none',
              marginTop: '0px',
              marginLeft: '20px',
              borderRadius: '5px',
              backgroundColor: 'rgb(255, 84, 0)',
              height: '40px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ marginLeft: '-20px', textAlign: 'center', width: '100%', color: '#fff', fontSize: '14px' }}>
              Visualizar página
            </div>
          </Link>
          <Link
            to="/settings/customization"
            className={styles.container_proximo_cliente}
            style={{
              border: 'none',
              textDecoration: 'none',
              marginTop: '0px',
              marginLeft: '20px',
              borderRadius: '5px',
              backgroundColor: 'rgb(255, 84, 0)',
              height: '40px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ marginLeft: '-20px', textAlign: 'center', width: '100%', color: '#fff', fontSize: '14px' }}>
              Salvar
            </div>
          </Link>
        </div>
      </div>
      <p style={{ marginTop: '50px' }}></p>
    </div>
  );
};

export default Settings;
