import React, { useState } from 'react';
import './towari.css'; // Подключаем стили CSS

function App() {
  const [selectedTab, setSelectedTab] = useState('Bleach'); // Изначально выбрана вкладка "Bleach"
  const [showModal, setShowModal] = useState(false); // Состояние для отслеживания отображения модального окна
  const [selectedProduct, setSelectedProduct] = useState(null); // Состояние для хранения выбранного продукта
  const [searchTerm, setSearchTerm] = useState(''); // Состояние для хранения значения поиска

  // Функция для обработки выбора вкладки
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  // Функция для открытия модального окна и установки выбранного продукта
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setShowModal(false);
  };

  // Функция для обновления значения поиска
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Массив товаров для каждой вкладки
  const productsByTab = {
    Bleach: [
      { name: 'Шинигами Кунай', price: 10 },
      { name: 'Маска Хоугюку', price: 15 },
      { name: 'Меч Зангецу', price: 20 },
      { name: 'Очки Чада', price: 8 },
      { name: 'Котелок Ичиго', price: 12 },
      { name: 'Фигурка Кон', price: 18 },
      { name: 'Спада Мостиса', price: 25 },
      { name: 'Очки Киске', price: 10 },
      { name: 'Катана Ичиго', price: 10 },
    ],
    Naruto: [
      { name: 'Расенган Перчатки', price: 13 },
      { name: 'Кунаи', price: 7 },
      { name: 'Чакра Секира', price: 18 },
      { name: 'Пончо Наруто', price: 20 },
      { name: 'Рамен Купон', price: 5 },
      { name: 'Шаринган Шорт', price: 15 },
      { name: 'Тоунер Шанти', price: 10 },
      { name: 'Печать Трёх Лягушек', price: 22 },
      { name: 'Плакат', price: 10 },
    ],
    Evangelion: [
      { name: 'Ева-01 Фигурка', price: 10 },
      { name: 'Пилотский Костюм', price: 10 },
      { name: 'NERV Чашка', price: 10 },
      { name: 'Ева-01 Модель', price: 10 },
      { name: 'Аниме Плакат', price: 10 },
      { name: 'Аттестат Асуки', price: 10 },
      { name: 'Маска Лиля', price: 10 },
      { name: 'Подушка Синдзи', price: 10 },
      { name: 'Плакат', price: 10 },
    ],
    Attack: [
      { name: 'Худи Защитного Отряда', price: 10 },
      { name: 'Мягкая Игрушка Титана', price: 10 },
      { name: 'Подвеска Армии', price: 10 },
      { name: 'Футболка Эрен', price: 10 },
      { name: 'Кепка Мики', price: 10 },
      { name: 'Запонки Леви', price: 10 },
      { name: 'Кружка Скаутов', price: 10 },
      { name: 'Фигурка Титана', price: 10 },
      { name: 'Плакат', price: 10 },
    ],
    Goblin: [
      { name: 'Меч Гоблинского Убийцы', price: 10 },
      { name: 'Лук Эльфийки', price: 10 },
      { name: 'Посох Священницы', price: 10 },
      { name: 'Меч Воина', price: 10 },
      { name: 'Кольцо Гоблина', price: 10 },
      { name: 'Кинжал', price: 10 },
      { name: 'Щит', price: 10 },
      { name: 'Заклинательный Перстень', price: 10 },
      { name: 'Плакат', price: 10 },
    ],
    Darling: [
      { name: 'Фигурка Ноль Два', price: 10 },
      { name: 'Модель Франкса', price: 10 },
      { name: 'Куртка Пилота', price: 10 },
      { name: 'Флаг Стрелиция', price: 10 },
      { name: 'Рюкзак', price: 10 },
      { name: 'Чехол', price: 10 },
      { name: 'Кепка Ичиго', price: 10 },
      { name: 'Коврик для Мыши', price: 10 },
      { name: 'Плакат', price: 10 },
    ],
    Another: [
      { name: 'Повязка на Глаза', price: 10 },
      { name: 'Шляпа', price: 10 },
      { name: 'Зонтик Мэй Мисаки', price: 10 },
      { name: 'Кукла', price: 10 },
      { name: 'Фонарь для Быков', price: 10 },
      { name: 'ЕФутболка Куросавы', price: 10 },
      { name: 'Зонтик', price: 10 },
      { name: 'Фигурка Нао', price: 10 },
      { name: 'Плакат', price: 10 },
    ],
  };

  return (
    <div className="container">
      {/* Вкладки */}
      <div className="tabs">
        {Object.keys(productsByTab).map((tabName) => (
          <div
            key={tabName}
            className={`tab ${selectedTab === tabName ? 'active' : ''}`}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </div>
        ))}
      </div>

      {/* Поиск по названию */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск по названию"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={() => console.log('Search clicked')}>Поиск</button>
      </div>

      {/* Популярные товары */}
      <h2>Популярные товары</h2>

      {/* Список товаров */}
      <div className="products-column">
        {productsByTab[selectedTab]
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product, index) => (
            <div className="product" key={index} onClick={() => openModal(product)}>
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price} ₸</div>
              <button className="buy-button">В корзину</button>
            </div>
          ))}
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className="modal-background" onClick={closeModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProduct.name}</h3>
            <p>Описание товара здесь...</p>
            <p>Цена: {selectedProduct.price} ₸</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
