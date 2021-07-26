import { Route, Switch } from 'react-router-dom';
import ProductsList from './Components/ProductsList';
import ProductDetailsView from './Components/ProductDetailsView';
import './index.css';
import { getProducts } from './redux/products/productsOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()), [dispatch]);

  return (
    <>
      <div className="appBackdrop">
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/products/:productid" component={ProductDetailsView} />
        </Switch>
      </div>
    </>
  );
};

export default App;
