import React, { Fragment } from 'react';

import Header from '../../components/Header';
import styles from './Dashboard.module.css';
import Forecast from '../../components/Forecast';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Form from '../../components/Form';
import { useForecast } from '../../hooks/useForecast';

const Dashboard = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();

    const onSubmit = (value) => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {!forecast && (<div className={`${styles.box} position-relative`}>
                    {!isLoading && <Form submitSearch={onSubmit} />}

                    {isError && <Error message={isError} />}

                    {isLoading && <Loader />}
                </div>
            )}
            {forecast && <Forecast forecast={forecast} />}
        </Fragment>
    );
};

export default Dashboard;
