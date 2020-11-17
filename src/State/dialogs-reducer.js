const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is everything goes?"},
        {id: 3, message: "Yo!"},
        {id: 4, message: "Yo!"},
        {id: 5, message: "Yo!"},
    ],
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Evjeniya"},
        {id: 3, name: "Dina"},
        {id: 4, name: "Vlad"},
        {id: 5, name: "Ruslan"},
        {id: 6, name: "Friend"}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;