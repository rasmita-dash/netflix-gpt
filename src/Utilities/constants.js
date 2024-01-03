export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
export const TMDB_HEADER_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.FIREBASE_KEY}`
    }
  };

export const USER_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fRSmTbm_0zv9go1d67EtI53bwPupSJBRr9B7VU4h3ML24V7iFov9dUX51_wK8tk_-Hg&usqp=CAU";
export const OpenAI_API_KEY = `${process.env.OPENAI_KEY}`;
export const MOVIE_SEARCH_API=`https://api.themoviedb.org/3/search/collection?query={search_name}&include_adult=false&language=en-US&page=1`