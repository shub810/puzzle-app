export default function(state=null, action) {
    switch (action.type) {
        case 'GET_QA_LIST' :
            return action.payload
    }
    return state;
}