const initialState = [ ];

function BlogReducer(state = initialState, action ) {
    switch (action.type) {
        case "BLOG_DATA":
            state = [
                action.payload,
                ...state
            ]
            return state;

        default:
           return state;
    }
}


export default BlogReducer