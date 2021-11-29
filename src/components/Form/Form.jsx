import React, { useState } from 'react';

import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');
    const [apiToken, setApiToken] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        if (!location || location === '') return;
        if (!apiToken || apiToken === '') return;

        const p = {
            q: location,
            apiToken: apiToken,
            days: 7,
            aqi: 'yes',
        };
        submitSearch(p);
    };

    return (
        <form onSubmit={onsubmit}>
            <input
                aria-label='location'
                type='text'
                className={`${styles.input} form-control`}
                placeholder='Search for location'
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <input
                aria-label='apiToken'
                type='text'
                className={`${styles.input} form-control`}
                placeholder='API Token'
                required
                value={apiToken}
                onChange={e => setApiToken(e.target.value)}
            />

            <button type='submit' className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};


Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;
