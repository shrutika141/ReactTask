export const blog = (data) => {
    console.log(data)
    return{
        type: "BLOG_DATA",
        payload: data
    }
}