let lastId = 0;
//initial state of my reducer is undefined if I do not supply it with the empty array
//This is so that when Redux finds an empty state it will reinitialize the state to an empty array
export default function reducer(state=[], action){
  switch(action.type){
    case 'newBug': 
        return [
            ...state,
            {
                id: ++lastid,
                description: action.payload.description,
                resolved: false
            }
        ];
        break;

    case 'bugRemoved': 
        return state.filter(bug=> bug.id !== action.payload.id);
  
    default:
        return state;//used so that to prevent our system from blowing up if the title of our action is nonexistant
}