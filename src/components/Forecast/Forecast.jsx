import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CurrentDayDescription from '../CurrentDayDescription';

import styles from './Forecast.module.css';
import CurrentDay from '../CurrentDay';

const Forecast = ({ forecast }) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={8} className='d-flex flex-column justify-content-between'>
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
            </Col>
        </Row>
    </Container>
);


export default Forecast;
