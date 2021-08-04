import './App.css';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Production from './pages/Production/Production';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Constructor from './pages/Constructor/Constructor';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import News from './pages/News/News';
import Contacts from './pages/Contacts/Contacts';
import Page404 from './pages/Page404/Page404';
import Footer from './components/Footer/Footer';
let pages = [
  { path: "/", component: <Home/>, exact: true },
  { path: "/about", component: <About/> },
  { path: "/productions", component: <Production/> },
  { path: "/services", component: <Services/> },
  { path: "/products", component: <Products/> },
  { path: "/constructor", component: <Constructor/> },
  { path: "/news", component: <News/> },
  { path: "/contacts", component: <Contacts/> },
  { component: <Page404/> }
]

function App() {
  return (
    <>
     <Header/>
     <Switch>
        {pages.map((page, index) => {
          return <Route key={index} path={page.path} exact={page.exact} key={page.path}>
            {page.component}
          </Route>
        })}
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
