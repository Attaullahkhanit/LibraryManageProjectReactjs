

const initialData = { dtload: true}

export const userSignInReducers = (state= initialData, action) => {
        if(action.type == "USERSIGNUP"){
            return {
                ...action.payload
            }
        }else{
            return {...state
            }
        }
}