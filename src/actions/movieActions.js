export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    // alert("I'm in Actions")
    return({type: DELETE_MOVIE, payload:id});
}