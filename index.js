const express = require('express'); // полностью импортируем фреймворк express

const app = express(); // создаем экземпляр приложения

const PORT = 5001;

// middleware - это функция, которая выполняется между двумя основными функциями. Региструется обязательно до отправки запросов
app.use(express.json()); // регистрируем middleware, дает возможность отправлять json на сервер
app.use(express.urlencoded());

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`)); // открыли порт для коммуникации, запускает сервер на переданном порте

const productsList = [
  {
    id: 1,
    item: 'apple',
    quantity: 1
  },
  {
    id: 2,
    item: 'orange',
    quantity: 5
  },
  {
    id: 3,
    item: 'lemon',
    quantity: 2
  },
  {
    id: 4,
    item: 'lime',
    quantity: 8
  }
]

// GET-запрос, нужен для получения/возврата данных
// res.send() - возвращает ответ на клиент
app.get('/products', (req, res) => {
  res.send(productsList)
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const productsItem = productsList.find(el => +el.id === +id)
  res.send(productsItem);
});


// POST-запрос, нужен для создания новых данных
app.post('/products', (req, res) => {
  console.log(req.body);
  productsList.push(req.body);
  res.send(201)
});



