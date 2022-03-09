const initialData = {
    list: []
    }
const reducer = (state=initialData, action) => {
    switch (action.type) {
    case "add_action":
    const { id, data } = action.payload;
    return {
    ...state,
    list: [
    ...state.list,
    {
    id:id,
    data:data
    }
    ]
    }
    case "delete_action":
    const newList = state.list.filter((elem)=> elem.id !== action.id);
    return {
    ...state,
    list:newList
    }

    case "update_data":
    const newlist = state.list.filter((item) => (item.id !== action.id));
    return {
        ...state,
        list:newList    
    }
    default: return state;
    }
    }
 export default reducer;

