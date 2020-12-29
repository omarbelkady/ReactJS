import { createStore } from 'redux';
import reducer from './reducer';
//Create Store Is A HOF because it takes a function as an argument and returns a object precisely a store object

const SampleStoreInRedux = createStore(reducer);

export default SampleStoreInRedux;