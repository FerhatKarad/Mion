import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Datenschutz from 'pages/Datenschutz';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/datenschutz" component={Datenschutz} />
            <Redirect from="*" to="/" />
        </Switch>
        
    );
}

export default App;
