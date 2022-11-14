//using this reducer for dogs added through edit form only

const newDogReducer = (state = {}, action) => {
    // console.log ('in dog reducer', action.payload)
    switch (action.type) {
        case 'ADD_CLIENT_ID_TO_DOG':
            return {...state, client_id: action.payload}
        case 'ADD_VET_PHONE':
            return {...state, vet_phone: action.payload}
        case 'ADD_VET_NAME':
            return {...state, vet_name: action.payload}
        case 'ADD_NEW_NAME':
            return {...state, dog_name: action.payload};
        case 'ADD_NEW_NOTES':
            return {...state, dog_notes: action.payload}
        case 'SET_DOG_PHOTO':
            return{...state, image: action.payload.data}
        case 'SET_FLAG':
            return{...state, flag: action.payload}
        case 'CLEAR_NEW_DOG':
            return {};
        default:
            return state;
    }
}

export default newDogReducer;


