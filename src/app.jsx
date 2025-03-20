import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import PopularDestinations from "./components/PopularDestinations";
import PopularStays from "./components/PopularStays";
import RecentSearches from "./components/RecentSearches";
import RecommendedHolidays from "./components/RecommendedHolidays";
import Search from "./components/Search";
import Trip from "./components/Trip";

const App=()=>{

return(

    <>
  
    <Header/>
     <Search/>
     <RecentSearches/>
     <Trip/>
     <PopularDestinations/>
     <RecommendedHolidays/>
     <PopularStays/>
     <Newsletter/>
      <Footer/>
    </>

);

};

export default App;