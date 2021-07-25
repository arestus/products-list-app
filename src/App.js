import { Route, Switch } from 'react-router-dom';
import ProductsList from './Components/ProductsList';
import ProductDetailsView from './Components/ProductDetailsView';
import './index.css';

const App = () => {
  return (
    <>
      <div className="appBackdrop">
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/products/:productid" component={ProductDetailsView} />
          {/* <Route component={NotFoundView} /> */}
        </Switch>
      </div>
    </>
  );
};

export default App;
