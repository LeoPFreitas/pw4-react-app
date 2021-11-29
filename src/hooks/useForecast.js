import { useState } from 'react';
import axios from 'axios';
import getCurrentDayForecast from '../helper/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helper/getCurrentDayDetailedForecast';

const BASE_URL = 'http://localhost:8080/api/v1/forecast';

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data);
        const currentDayDetails = getCurrentDayDetailedForecast(data);

        setForecast({ currentDay, currentDayDetails });
        setLoading(false);
    };

    // call backend
    const submitRequest = async reqData => {
        setError(false);
        setLoading(true);

        const resp = await axios({
            method: 'post',
            url: `${BASE_URL}/getForecast`,
            data: reqData,
        });

        if (!resp.data) {
            setError('There is no forecast for such location');
            setLoading(false);
            return;
        }

        gatherForecastData(resp.data);
    };

    return { isError, isLoading, forecast, submitRequest };
};

export { useForecast };