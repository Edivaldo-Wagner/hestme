import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import  styles from './../css/schedule.module.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import Header from './../header/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faCalendar, faTasks, faCog, faBell, faUserCircle, faClock, faLock, faChevronLeft, faChevronRight, faPlusCircle, faSortAmountUp, faEuroSign, faQrcode, faPaperPlane, faCoins, faCopy, faBarcode, faMoneyCheckAlt, faHandHoldingUsd   } from '@fortawesome/free-solid-svg-icons';




const Schedule = () => {

  const localizer = momentLocalizer(moment);

  const eventos = [
    {
      title: 'Reunião',
      start: new Date(2024, 1, 1, 10, 0),
      end: new Date(2024, 1, 1, 12, 0),
    },
    // Adicione mais eventos conforme necessário
  ];
  


  return (
    <>

<Header className={styles.header_menu} style={{ backgroundColor: '#f00' }}/>

<div className={styles.all_container}>

      

<div class={styles.dash_header} style={{ border: 'none' }}>

<FontAwesomeIcon className={styles.icone_sino} icon={faBell} style={{ color: '#353738', fontSize: '20px' }} />

<div className={styles.titulo_agendamento} style={{ color: '#353738' }}>Minha Agenda</div>

<button className={styles.btn_hoje} style={{ border: '1px solid rgba(0, 0, 0, 0.5)', color: 'rgba(127, 127, 127, 0.8)', fontSize: '16px' }}>Hoje</button>

</div> {/*dash_header*/}

</div>



<div style={{ height: '500px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Calendar
        className={styles.minha_agenda}
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '20px' }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: '#3174ad', // Cor de fundo do evento
            color: 'white', // Cor do texto do evento
            borderRadius: '5px',
            border: 'none',
          },
        })}
      />
    </div>
  
    </>
  );
};

export default Schedule;
