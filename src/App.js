import { Route, Switch } from 'react-router-dom';
import ProductsList from './Components/ProductsList';
import ProductDetailsView from './Components/ProductDetailsView';



const App = () => {
  return (
      <>
     <Switch>
        <Route exact path='/' component={ProductsList} />
        <Route path="/products/:productid" component={ProductDetailsView} />
        {/* <Route component={NotFoundView} /> */}
      </Switch>
      </>
  );
}

export default App;
