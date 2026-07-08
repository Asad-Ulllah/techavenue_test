export const addBook = async (req, res) => {
  if (!req.body) {
    response.message('Book not Addded');
  }
  try {
    let id = 0;
    let Books = [
      {
        id: 1,
        title: 'Novel',
        auther: 'ABZ',
        ISBN: 9,
      },
    ];

    Books.push(req.body);
    id++;
    res.code(201).message('Book Added');
  } catch {
    response.message('Book not Addded');
  }
};

export const getBook = async (req, res) => {
  let Books = [
    {
      id: 1,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
  ];

  id++;
  res.code(200).body(Books);
};

export const getBookById = async (req, res) => {
  let Books = [
    {
      id: 1,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
    {
      id: 2,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
    {
      id: 3,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
  ];
  const bid = req.body.bookid;
  const book = Books.find((b) => b.id == bid);
  res.code(200).body(book);
};

export const updateBookById = async (req, res) => {
  let Books = [
    {
      id: 1,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
    {
      id: 2,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
    {
      id: 3,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
  ];
  const bid = req.body.bookid;
  const book = Books.find((b) => b.id == bid);
  book.title = req.body.title;
  res.code(200).message('Updated succesfully');
};

export const deleteBookById = async (req, res) => {
  let id = 0;
  let Books = [
    {
      id: 1,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
    {
      id: 2,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
    {
      id: 3,
      title: 'Novel',
      auther: 'ABZ',
      ISBN: 9,
    },
  ];
  const bid = req.body.bookid;
  Books.splice((b) => b.id == bid);
  res.code(200).message('deleted succesfully');
};
