var moviesListFakeData = {
title : "Movies List Data",
moviesList: [
    {id: 1, rank: 1, rankChange: 1, movietitle : "Star Wars IV", director: "George Lucas", category: "Sci-fi", country: "USA", year: 1977, date: "1977-12-27", value: 775, company: "Lucas Films"},
    {id: 2, rank: 2, rankChange: 1, movietitle : "ET", director: "Steven Spielberg", category: "Sci-fi", country: "USA", year: 1982, date: "1982-12-090", value: 792, company: "Universal"},
    {id: 3, rank: 3, rankChange: 1, movietitle : "Gold Finger", director: "Guy Hamilton", category: "Action", country: "UK", year: 1964, date: "1964-09-17", value: 125, company: "Eon"},
    {id: 4, rank: 4, rankChange: 1, movietitle : "Blade Runner", director: "Ridley Scott", category: "Sci-fi", country: "UK", year: 1982, date: "1982-09-09", value: 34, company: "Warner Bros"},
    {id: 5, rank: 5, rankChange: 1, movietitle : "The Incredibles", director: "Brad Bird", category: "Family", country: "USA", year: 2004, date: "2004-10-27", value: 633, company: "Disney"},
    {id: 6, rank: 6, rankChange: 1, movietitle : "Zulu", director: "Cy Enfield", category: "Action", country: "UK", year: 1964, date: "1964-01-22", value: 8, company: "Paramount"},
    {id: 7, rank: 7, rankChange: 1, movietitle : "Longest Day", director: "Various", category: "War", country: "USA", year: 1962, date: "1962-10-23", value: 50, company: "20th Century Fox"},
    {id: 8, rank: 8, rankChange: 1, movietitle : "Battle of Britain", director: "Guy Hamilton", category: "War", country: "UK", year: 1969, date: "1969-09-16", value: 13, company: "United Artists"},
    {id: 9, rank: 9, rankChange: 1, movietitle : "Ferris Buleller's Day Off", director: "John Hughes", category: "Comedy", country: "Global", year: 1987, date: "1987-02-20", value: 70, company: "Paramount"},
    {id: 10, rank: 10, rankChange: 1, movietitle : "Ghostbusters", director: "Ivan Reitman", category: "Comedy", country: "USA", year: 1984, date: "1984-06-07", value: 295, company: "Columbia Pictures"},
    {id: 11, rank: 1, rankChange: 1, movietitle : "Star Wars IV", director: "George Lucas", category: "Sci-fi", country: "USA", year: 1977, date: "1977-12-27", value: 775, company: "Lucas Films"},
    {id: 12, rank: 2, rankChange: 1, movietitle : "ET", director: "Steven Spielberg", category: "Sci-fi", country: "USA", year: 1982, date: "1982-12-090", value: 792, company: "Universal"},
    {id: 13, rank: 3, rankChange: 1, movietitle : "Gold Finger", director: "Guy Hamilton", category: "Action", country: "UK", year: 1964, date: "1964-09-17", value: 125, company: "Eon"},
    {id: 14, rank: 4, rankChange: 1, movietitle : "Blade Runner", director: "Ridley Scott", category: "Sci-fi", country: "UK", year: 1982, date: "1982-09-09", value: 34, company: "Warner Bros"},
    {id: 15, rank: 5, rankChange: 1, movietitle : "The Incredibles", director: "Brad Bird", category: "Family", country: "USA", year: 2004, date: "2004-10-27", value: 633, company: "Disney"},
    {id: 16, rank: 6, rankChange: 1, movietitle : "Zulu", director: "Cy Enfield", category: "Action", country: "UK", year: 1964, date: "1964-01-22", value: 8, company: "Paramount"},
    {id: 17, rank: 7, rankChange: 1, movietitle : "Longest Day", director: "Various", category: "War", country: "USA", year: 1962, date: "1962-10-23", value: 50, company: "20th Century Fox"},
    {id: 18, rank: 8, rankChange: 1, movietitle : "Battle of Britain", director: "Guy Hamilton", category: "War", country: "UK", year: 1969, date: "1969-09-16", value: 13, company: "United Artists"},
    {id: 19, rank: 9, rankChange: 1, movietitle : "Ferris Buleller's Day Off", director: "John Hughes", category: "Comedy", country: "Global", year: 1987, date: "1987-02-20", value: 70, company: "Paramount"},
    {id: 20, rank: 10, rankChange: 1, movietitle : "Ghostbusters", director: "Ivan Reitman", category: "Comedy", country: "USA", year: 1984, date: "1984-06-07", value: 295, company: "Columbia Pictures"},
    {id: 21, rank: 5, rankChange: 1, movietitle : "The Incredibles", director: "Brad Bird", category: "Family", country: "USA", year: 2004, date: "2004-10-27", value: 633, company: "Disney"},
    {id: 22, rank: 6, rankChange: 1, movietitle : "Zulu", director: "Cy Enfield", category: "Action", country: "UK", year: 1964, date: "1964-01-22", value: 8, company: "Paramount"},
    {id: 23, rank: 7, rankChange: 1, movietitle : "Longest Day", director: "Various", category: "War", country: "USA", year: 1962, date: "1962-10-23", value: 50, company: "20th Century Fox"},
    {id: 24, rank: 8, rankChange: 1, movietitle : "Battle of Britain", director: "Guy Hamilton", category: "War", country: "UK", year: 1969, date: "1969-09-16", value: 13, company: "United Artists"},
    {id: 25, rank: 9, rankChange: 1, movietitle : "Ferris Buleller's Day Off", director: "John Hughes", category: "Comedy", country: "Global", year: 1987, date: "1987-02-20", value: 70, company: "Paramount"},
    {id: 26, rank: 10, rankChange: 1, movietitle : "Ghostbusters", director: "Ivan Reitman", category: "Comedy", country: "USA", year: 1984, date: "1984-06-07", value: 295, company: "Columbia Pictures"}
]
};

var moviesFakeDataHelper = {

    getMoviesCount: function() {
        return { moviesTotalCount:moviesListFakeData.moviesList.length };
    },

    getPageOfItems: function(items, startItem, itemCount) {
        var endItem = startItem + itemCount;
        if ( endItem > items.length) {
            endItem = items.length - 1;
        }
        return items.slice(startItem, endItem);
    },

    descCompare: function(value1, value2) {
        var v1=value1.toLowerCase(), v2=value2.toLowerCase()
        if (v2 < v1)
            return -1 
        if (v2 > v1)
            return 1
        return 0;        
    },

    ascCompare: function(value1, value2) {
        var v1=value1.toLowerCase(), v2=value2.toLowerCase()
        if (v2 > v1)
            return -1 
        if (v2 < v1)
            return 1
        return 0;        
    },

    descCompareMovieTitle: function(item1, item2) { return moviesFakeDataHelper.descCompare(item1.movietitle, item2.movietitle) },
    ascCompareTitle: function(item1, item2) { return moviesFakeDataHelper.ascCompare(item1.movietitle, item2.movietitle) },
    descCompareDirector: function(item1, item2) { return moviesFakeDataHelper.descCompare(item1.director, item2.director) },
    ascCompareDirector: function(item1, item2) { return moviesFakeDataHelper.ascCompare(item1.director, item2.director) },
    descCompareCategory: function(item1, item2) { return moviesFakeDataHelper.descCompare(item1.category, item2.category) },
    ascCompareCategory: function(item1, item2) { return moviesFakeDataHelper.ascCompare(item1.category, item2.category) },
    descCompareCompany: function(item1, item2) { return moviesFakeDataHelper.descCompare(item1.company, item2.company) },
    ascCompareCompany: function(item1, item2) { return moviesFakeDataHelper.ascCompare(item1.company, item2.company) },

    sortFakeListData: function(listCriteria, data) {
        var sortby = listCriteria.sortName;
        var mode = listCriteria.sortMode;
        if ( sortby === "") return;
        if ( mode === "") return;
        if ( sortby === "id") {
            return (mode == "desc")? data.sort(function(a, b) {return b.id-a.id}) :
                                        data.sort(function(a, b) {return a.id-b.id});
        }

        if ( sortby === "rank") {
            return (mode == "desc")? data.sort(function(a, b) {return b.rank-a.rank}) :
                                        data.sort(function(a, b) {return a.rank-b.rank});
        }

        if ( sortby === "value") {
            return (mode == "desc")? data.sort(function(a, b) {return b.value-a.value}) :
                                        data.sort(function(a, b) {return a.value-b.value});
        }

        if ( sortby === "year") {
            return (mode == "desc")? data.sort(function(a, b) {return b.year-a.year}) :
                                        data.sort(function(a, b) {return a.year-b.year});
        } 

        if ( sortby === "movietitle") {
            return (mode == "desc")? data.sort(this.descCompareMovieTitle) :
                                        data.sort(this.ascCompareMovieTitle);
        }

        if ( sortby === "director") {
            return (mode == "desc")? data.sort(this.descCompareDirector) :
                                        data.sort(this.ascCompareDirector);
        }

        if ( sortby === "category") {
            return (mode == "desc")? data.sort(this.descCompareCategory) :
                                        data.sort(this.ascCompareCategory);
        }  

        if ( sortby === "company") {
            return (mode == "desc")? data.sort(this.descCompareCompany) :
                                        data.sort(this.ascCompareCompany);
        }           
    },

    getMoviesFakeData: function(listCriteria) {
        var finalList = moviesListFakeData.moviesList.slice();

        this.sortFakeListData(listCriteria, finalList);

        finalList = this.getPageOfItems(finalList, listCriteria.listStart, listCriteria.itemsCount);


        return {
                    title: moviesListFakeData.title,
                    moviesList: finalList
                };
    }
}
