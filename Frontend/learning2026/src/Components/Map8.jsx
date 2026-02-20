export const Map8 = () => {

  const books = [
    {
      id: 1,
      title: "Spider-Man Comic Vol 1",
      category: "Comics",
      author: "Marvel Comics",
      price: 399,
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg"
    },
    {
      id: 2,
      title: "Harry Potter",
      category: "Fantasy Novel",
      author: "J.K. Rowling",
      price: 599,
      image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg"
    },
    {
      id: 3,
      title: "Atomic Habits",
      category: "Self Help",
      author: "James Clear",
      price: 499,
      image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Atomic_Habits.jpg"
    },
    {
      id: 4,
      title: "Batman Comic",
      category: "Comics",
      author: "DC Comics",
      price: 349,
      image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Batman_Detective_Comics_27.jpg"
    },
    {
      id: 5,
      title: "The Alchemist",
      category: "Novel",
      author: "Paulo Coelho",
      price: 399,
      image: "https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Books Library</h2>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Price (₹)</th>
          </tr>
        </thead>

        <tbody >
          {books.map((book) => (
            <tr style={{color: book.price > 500 && "yellowgreen" }} key={book.id}>
              <td>{book.id}</td>

              <td>
                <img
                  src={book.image}
                  alt={book.title}
                  width="70"
                  style={{ borderRadius: "6px" }}
                />
              </td>

              <td>{book.title}</td>
              <td style={{backgroundColor: book.category == "comic" ? "white" : "black"}}>{book.category}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
