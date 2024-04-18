import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h4>Аниме Магазин "Otaku Paradise"</h4>
            <ul className="list-unstyled">
              <li>8-800-ANIME</li>
              <li>Токио, Япония</li>
              <li>123 Улица Аниме, Аптека №42</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col">
            <h4>Категории</h4>
            <ul className="list-unstyled">
              <li>Фигурки</li>
              <li>Плакаты</li>
              <li>Косплей</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col">
            <h4>Популярное</h4>
            <ul className="list-unstyled">
              <li>Новинки</li>
              <li>Бестселлеры</li>
              <li>Скидки</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Otaku Paradise | Все права защищены | Условия использования | Конфиденциальность
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
