import axios from 'axios';

export function getQAList() {
    const request = axios.get('https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json')
                    .then(response => response.data);

    return {
        type: 'GET_QA_LIST',
        payload: request
    }
}

export function addList(obj) {
    return {
        type: 'ADD_TO_LIST',
        payload: obj
    }
}
