import moment from 'moment';

const getCurrentDayForecast = (data) => ({
    weekday: moment(data.location.localtime).format('dddd'),
    date: moment(data.location.localtime).format('MMMM Do'),
    location: data.location.name,
    temperature: parseFloat(data.current.temp_c),
    weatherIcon: `${data.current.condition.icon}`,
    weatherDescription: data.current.condition.text,
});

export default getCurrentDayForecast;
