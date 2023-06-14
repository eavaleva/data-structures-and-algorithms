/**
 * Below is an application that retrieves data from the Datamuse API.

Modify getSuggestions() to be an asynchronous function. 
Then, inside the try statement, use fetch() to retrieve an API response using the endpoint variable. 
Make sure the cache parameter is set to 'no-cache'.

If the API call results in a successful response, render the .json() response using renderResponse() function.

 */


// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const wordQuery = 'ocean';

// modify getSuggestions to be async 
const getSuggestions = async () => {
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try {
        const response = await fetch(endpoint, { cache: 'no-cache' });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}


const renderResponse = (res) => {
    let responseParagraph = document.getElementById('response');
    for (let i = 0; i < 10; i++) {
        let newP = document.createElement('P');
        newP.innerHTML = res[i].word;
        responseParagraph.append(newP);
    }
}

getSuggestions();