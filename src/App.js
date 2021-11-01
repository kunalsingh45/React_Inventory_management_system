import './App.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import InventoryList from './components/InventoryList';
import { useContext } from 'react';
import ProductContext from './store/product-context';
import EditProduct from './components/EditProduct';
import Warehouse from './components/Warehouse';

function App() {
  const ctx = useContext(ProductContext);

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <InventoryList products={ctx.products}/>
              </Suspense>
            </Route>
            <Route exact path="/product/:sku_code">
              <Suspense fallback={<div>Loading...</div>}>
                <EditProduct products={ctx.products}/>
              </Suspense>
            </Route>
            <Route exact path="/warehouse/new">
              <Suspense fallback={<div>Loading...</div>}>
                <Warehouse />
              </Suspense>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
