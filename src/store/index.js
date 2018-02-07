import { createStore, combineReducers } from 'redux';
import movieList from '../reducers/movieList';

const ORIGNAL_DATA = [
  { id: 1, completed: true,  title: '블래이드러너 2049' },
  { id: 2, completed: false, title: '12 솔져스' },
  { id: 3, completed: false, title: '블랙팬서' },
];
const reducer = combineReducers({ movieList });
const store = createStore(reducer, { movieList: ORIGNAL_DATA });

export default store;
