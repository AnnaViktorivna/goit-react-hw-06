import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   contacts: [],

//   filters: "",
// };

const INITIAL_STATE = {
  items: [],
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// export const contactsSliceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/ADD_CONTACT": {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }
//     case "contacts/DELETE_CONTACT": {
//       return {
//         ...state,
//         items: state.items.filter((contact) => contact.id !== action.payload),
//       };
//     }
// case "contacts/SET_FILTER": {
//   return {
//     ...state,
//     filters: action.payload,
//   };
// }

//     default:
//       return state;
//   }
// };
