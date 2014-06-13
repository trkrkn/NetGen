function refresh()
{
    //Check if the current URL contains '#'
    if(document.URL.indexOf("#")==-1)
    {
    // Set the URL to whatever it was plus "#".
    url = document.URL+"#";
    location = "#";

    //Reload the page
    location.reload(true);

    }
    }