import Reactotron from 'reactotron-react-js';

if(process.env.NODE_ENV === 'development') {
    const tron = Reactotron.configure().connect({
        host: '198.168.100.34'
    });
    tron.clear();
    console.tron = tron;
}
