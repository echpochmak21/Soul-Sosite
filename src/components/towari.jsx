import React, { useState } from 'react';
import './towari.css'; // Подключаем стили CSS

function App() {
  const [selectedTab, setSelectedTab] = useState('Bleach'); // Изначально выбрана вкладка "Bleach"
  const [showModal, setShowModal] = useState(false); // Состояние для отслеживания отображения модального окна
  const [selectedProduct, setSelectedProduct] = useState(null); // Состояние для хранения выбранного продукта

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
    // Добавьте остальные вкладки с товарами
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

      {/* Популярные товары */}
      <h2>Популярные товары</h2>

      {/* Список товаров */}
      <div className="products-column">
        {productsByTab[selectedTab].map((product, index) => (
          <div className="product" key={index} onClick={() => openModal(product)}>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price} ₸</div>
            <button className="buy-button">Купить</button>
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
