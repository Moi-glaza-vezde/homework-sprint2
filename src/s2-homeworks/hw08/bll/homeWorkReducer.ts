import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


const initialState: UserType[] = []


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            console.log(state)
            return [...state].sort((a, b) =>
                action.payload === 'up'
                    ? a.name.localeCompare(b.name) // Сортировка по возрастанию
                    : b.name.localeCompare(a.name) // Сортировка по убыванию


            ) // need to fix
        }
        case 'check': {

            return state.filter((user) => user.age >= action.payload)
        }
        default:
            return state
    }
}
