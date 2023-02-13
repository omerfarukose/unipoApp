import MainContextProvider from './src/contexts/MainContext';
import {Router} from './src/pages/Router/Router';

export const App = ( ) =>  {
    return (
        <MainContextProvider>
            <Router/>
        </MainContextProvider>
    );
}
