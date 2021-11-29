// const currentDayForecast = data => [
//     {
//         name: 'predictability',
//         value: data.date,
//         unit: '%',
//     },
//     {
//         name: 'humidity',
//         value: data.date,
//         unit: '%',
//     },
//     {
//         name: 'wind',
//         value: data.date,
//         unit: 'km/h',
//     },
//     {
//         name: 'air pressure',
//         value: data.date,
//         unit: 'mb',
//     },
//     {
//         name: 'max temp',
//         value: data.date,
//         unit: '°C',
//     },
//     {
//         name: 'min temp',
//         value: data.date,
//         unit: '°C',
//     },
// ];

const currentDayForecast = data => [
    {
        name: 'humidity',
        value: (data.forecast.forecastday[0]).day.avghumidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: (data.forecast.forecastday[0]).day.maxwind_kph,
        unit: 'km/h',
    },
    {
        name: 'max temp',
        value: (data.forecast.forecastday[0]).day.maxtemp_c,
        unit: '°C',
    },
    {
        name: 'min temp',
        value: (data.forecast.forecastday[0]).day.mintemp_c,
        unit: '°C',
    },
];




export default currentDayForecast;
