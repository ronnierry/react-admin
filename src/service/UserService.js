import store from "store";

const userKey = "user_key"

export const setCurrentUser = (user) => {
    store.set(userKey, user)
}

export const getCurrentUser = () => {
   return store.get(userKey)
}