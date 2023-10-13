export const getAllBooks = async () => {
    try {
        const response = await fetch("http://localhost:5001/books")
        const data = await response.json()
        return(data)
    } catch (error) {
        console.log(error)
    }
}

export const getBooksByAuthor = async (searchAuthor) => {
    try {
        const response = await fetch(`http://localhost:5001/books/author/${searchAuthor}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getBooksByPrice = async (priceLow,priceHigh) => {
  try {
    const response = await fetch(`http://localhost:5001/books/price/${priceLow}/${priceHigh}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addBook = async (title,author,genre, price) => {
  try {
    const response = await fetch("http://localhost:5001/books",{
        method:"POST",
        mode: "cors",
        headers: {
            "Content-Type":"application/json"
        }, body:JSON.stringify({title,author,genre, price})
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBooksByTitle = async (title) => {
  try {
    const response = await fetch(`http://localhost:5001/books/${title}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (title) => {
  try {
    const response = await fetch(`http://localhost:5001/books/${title}`,{
        method:"DELETE",
        mode: "cors",
        headers: {
            "Content-Type":"application/json"
        },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};