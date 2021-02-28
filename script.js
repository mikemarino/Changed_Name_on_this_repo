var searchKeyword = document.querySelector('#keyword');
var searchFormat = document.querySelector('.dropdown-item');


var getSearchKeyword = function () {

    var queryString = document.location.search;
    var searchTerm = queryString.split('=' [1]);

    if (searchTerm) {
        searchKeyword.textContent = searchTerm;
        searchFormat.textContent = sFromat;

        var requestUrlMain = "https://www.loc.gov/search" + "?q=" + srchTerm + "&fo=json";

        getSearches(searchTerm);

    } else {
        document.location.replace('./index.html')
    }

};


var getSearches = function (srch) {

        if (searchFormat != "") {
            var requestUrlMain = "https://www.loc.gov/" + srchFmt + "/?q=" + srchTerm + "&fo=json";
        } else {
            var requestUrlMain = "https://www.loc.gov/search" + "?q=" + srchTerm + "&fo=json";
        }

        fetch(apiUrl).then(function (response) {   if (response.ok) {
            response.json().then(function (data) {
            displayIssues(data);


            if (response.headers.get('Link')) {
                displayWarning(repo);
            }
        });
            } else {
        document.location.replace('./index.html');
            }
    });
};