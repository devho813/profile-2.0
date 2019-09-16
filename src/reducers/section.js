import produce from 'immer';

const initialStore = {
  sections: [
    {id: 1, name: 'Home', position: 0},
    {id: 2, name: 'AboutMe', position: 0},
    {id: 3, name: 'Technologie', position: 0},
    {id: 4, name: 'Portfolio', position: 0},
  ]
}

export const SECTION_NAME_UPDATE = 'SECTION_NAME_UPDATE';
export const SECTION_POSITION_UPDATE = 'SECTION_POSITION_UPDATE';

const reducer = (store = initialStore, action) => {
  return produce(store, (draft) => {
    switch(action.type){
      case SECTION_POSITION_UPDATE:
        draft.sections[action.id-1].position = action.data;
        break;
      default:
        break;
    }
  })
}

export default reducer;