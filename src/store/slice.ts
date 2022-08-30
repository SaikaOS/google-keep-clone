import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface INotes {
    id: number;
    body: string,
}

interface IState  {
    isToggle: boolean,
    notes: INotes[],
    isModalOpen: boolean,
    value: string | number,
    text: string | number,
    isSearched: boolean,
    searchedNotes: INotes[]
}

const initialState:IState = {
    isToggle: false,
    notes: [],
    isModalOpen: false,
    value: '',
    text: '',
    isSearched: false,
    searchedNotes: []
}


export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isToggle = !state.isToggle
        },
        openSideBar: (state) => {
            state.isToggle = true
        },
        addNotes: (state, action:PayloadAction<INotes>) => {
            state.notes.push(action.payload)
        },
        removeNote: (state, action:PayloadAction<any>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
        toggleModal: (state, action:PayloadAction<boolean>) => {
            state.isModalOpen = action.payload
        },
        setValue: (state, action:PayloadAction<string | number>) => {
            state.value = action.payload
        },
        setUpdate: (state, action:PayloadAction<INotes>) => {
            state.notes = state.notes.map(note => {
                if(note.id === action.payload.id) {
                    note.body = action.payload.body
                }
                return note
            })
        },
        setText: (state, action:PayloadAction<string | number>) => {
            state.text = action.payload
            state.isSearched = true
        },
        setDefaultSearch: (state) => {
            state.isSearched = false
        }
    }
})

export const {toggle, openSideBar, addNotes,
             removeNote, toggleModal, setValue, 
             setUpdate, setText, setDefaultSearch} = slice.actions

export default slice.reducer
