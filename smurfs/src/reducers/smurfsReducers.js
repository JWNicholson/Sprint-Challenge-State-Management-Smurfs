import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL} from '../actions/smurfsActions';

const initialState = [
    {
        smurf:[
            {
                "name":"Brainey",
                "age":200,
                "height":"5cm",
                "id":0
            }
        ],
        isFetching: false,
        error: ''
    }
];

const smurfsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_START:
            const startState = {
                ...state,
                isFetching: true,
                error: ''
            };
            return startState;

        case FETCH_SMURF_SUCCESS:
            const successState = {
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
                };
                return successState;

        case FETCH_SMURF_FAIL:
            const failState = {
                ...state,
                data: '',
                isFetching: false,
                error: action.payload
            };
            return failState;

        default: return state;
            
    }
}

export default smurfsReducer;