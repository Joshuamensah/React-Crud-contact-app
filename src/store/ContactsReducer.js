const { default: Switch } = require("react-bootstrap/esm/Switch")

const initialState = {
    contacts: [
        {
          name: "Joshua Mensah",
          phoneNumber: "+233242136305",
          address: "St luke church",
          group: "Family",
          id: "094484fdfkjskks",
        },

        {
          name: "Susana Mensah",
          phoneNumber: "+233540166333",
          address: "St luke church",
          group: "Family",
          id: "hfhfdkfd98833",
        },
        {
          name: "Agnes Siaw",
          phoneNumber: "+233242323756",
          address: "St luke church",
          group: "Friend",
          id: "nhff877370",
        },
      ],
}


const ContactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            const newContact = {
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber,
                address: action.payload.address,
                group: action.payload.group
            };
            return {...state,contacts:[...state.contacts, newContact ]};
        
        
    
        default:
            return state
    }
};


export default ContactsReducer;