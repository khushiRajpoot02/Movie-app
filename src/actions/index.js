/*{
    type:'ADD_MOVIES',
}
{
    type:'DECREASE_COUNT',
}
*/
//  action types
export const ADD_MOVIES_TO_LIST = 'ADD_MOVIES_TO_LIST';
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITES = ' SET_SHOW_FAVOURITES';

//export const SEARCH = ' SEARCH';

// action creations
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}
/*export function handleMovieSearch(movies){
    return{
        type:SEARCH,
        movies
    }
}*/
export function addMoviesToList(movie){
    return{
        type:ADD_MOVIES_TO_LIST,
        movie
    }
}
export function addFavourite(movie){
    return{
        type:ADD_FAVOURITE,
        movie
    }
}
export function RemoveFavourite(movie){
    return{
        type:REMOVE_FAVOURITE,
        movie
    }
}
export function setShowFavourite(val){
    return{
        type:SET_SHOW_FAVOURITES,
        val
    }
}
export function handleMovieSearch(movie){
    const url = ` http://www.omdbapi.com/?i=tt3896198&apikey=9d52ac90`;
   // return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            console.log('movie',movie);
        })
// }
  
}