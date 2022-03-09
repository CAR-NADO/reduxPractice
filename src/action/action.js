export const ADD_ACTION = (data)=> {
    
    return{
    type:"add_action",
    payload: {
    id: new Date().getTime().toString(),
    data:data
    }
    } 
    }

export const DELETE_ACTION = (id)=> {
    return {
    type: "delete_action",
    id
    }
    }

export const UPDATE_ACTION = (id)=> {
    return {
    type: "update_action",
    id
    }
    }    