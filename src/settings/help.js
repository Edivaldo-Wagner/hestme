import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './../css/help.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
    

    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(255, 84, 0)';
        return () => {
            document.body.style.backgroundColor = ''; // Reset the background color when component unmounts
        };
    }, []);

    return (
        <>
            <div className={styles.all_container}>
                <div className={styles.container_agendamentos}>
                    <div className={styles.ul}>
                        <div className={styles.dash_header} style={{ border: 'none' }}>
                            <Link to="/settings" style={{ textDecoration: 'none' }}>
                                <div className={styles.container_icone_sino} style={{ color: 'rgb(255, 84, 0)', background: '#fff' }}>
                                    <FontAwesomeIcon className={styles.icone_sino} icon={faAngleLeft} style={{ fontSize: '20px' }} />
                                </div>
                            </Link>
                            <div className={styles.titulo_agendamento} style={{ color: '#fff', width: '50px', fontSize: '30px' }}>Ajuda</div>
                            <div style={{ width: '70%', marginTop: '30px' }}>
                                <input
                                    placeholder='O que precisa saber?'
                                    className={styles.container_proximo_cliente}
                                    style={{ paddingLeft: '15px', height: '55px', borderRadius: '50px' }}
                                    type='text'
                                />
                                <FontAwesomeIcon
                                    icon={faSearch}
                                    style={{ position: 'relative', color: 'rgb(255, 84, 0)', float: 'right', right: '10px', marginTop: '-50px', cursor: 'pointer', fontSize: '21px' }}
                                />
                            </div>
                        </div>
                        <p style={{ marginTop: '200px' }}></p>
                        <div style={{ width: '100%', marginTop: '-95px' }}>
                            <ul className={styles.container_btns} style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
                                {['O que é?', 'Quando?', 'Como?', 'Quem somos?'].map((title, index) => (
                                    <li key={index} style={{ listStyle: 'none', marginTop: index === 0 ? '40px' : '-20px', borderBottom: '1px solid rgba(255, 255, 255, 0.8)', width: '100%' }}>
                                        <p style={{ fontSize: '17px', color: '#fff', lineHeight: '25px', marginTop: '30px' }}>
                                            <span style={{ marginTop: '20px', fontSize: '22px', float: 'left' }}>{title}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ marginTop: '50px' }}></p>
        </>
    );
};

export default Settings;
