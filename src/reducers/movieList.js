import { ADD_MOVIE } from '../actions/'

const movieList = (
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [
        ...state,
        {
          id: Date.now(),
          completed: false,
          title: action.title
        }
      ];
    default:
      return state;
  }
}

export default movieList;
