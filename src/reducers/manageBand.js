import uuid from 'uuid'


export default function manageBand(state = {
  bands: []
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_BAND':

      const addBand = {
        id: uuid(),
        name: action.name
      }
      return { bands: state.bands.concat(addBand) }

      case 'DELETE_BAND':
        const bands = state.bands.filter(band => band.id !== action.id)
        return {bands}

    default:
      return state;
  }
};
