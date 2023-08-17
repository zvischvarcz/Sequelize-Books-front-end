export const addBook = async (title, author, genre) => {
    try {
        const response = await fetch("http://localhost:5001/books/addBook", {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "title": title,
                "author": author,
                "genre": genre
            })
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const addAuthor = async (author) => {
    try {
        const response = await fetch("http://localhost:5001/authors/addAuthor", {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "authorName": author
            })
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const addGenre = async (genre) => {
    try {
        const response = await fetch("http://localhost:5001/genres/addGenre", {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "genreName": genre
            })
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const updateBook = async (title, column, updateInput) => {
    try {
        const response = await fetch("http://localhost:5001/books/updateBook", {
            mode: 'cors',
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "title": title,
                "key": column,
                "value": updateInput
            })
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}



