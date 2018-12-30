import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Показать навигацию</a>
   	      <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Скрыть навигацию</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">На главную</a></li>
               <li><a className="smoothscroll" href="#about">Обо мне</a></li>
   	         <li><a className="smoothscroll" href="#resume">Резюме</a></li>
               <li><a className="smoothscroll" href="#testimonials">Отзывы</a></li>
               <li><a className="smoothscroll" href="#contact">Контакты</a></li>
            </ul>
         </nav>
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Меня зовут Максим Тиньгаев</h1>
               <h3>Я являюсь <span>репетитором</span>, <span> выпускником аспирантуры</span>, <span> математиком</span> и <span>программистом</span>. Преподавательской деятельность занимаюсь по таким предметам, как математика, информатика, физика, а также программирование на языках Python и С. Давайте <a className="smoothscroll" href="#about">изучим портфолио подробнее </a>
               и узнаем обо мне больше <a className="smoothscroll" href="#about">Обо мне</a>.</h3>
               <hr />
               <ul className="social">
                  <li><a href="https://vk.com/tingaevmi/"><i className="fa fa-vk"></i></a></li>
                  <li><a href="https://twitter.com/maxinstellar/"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://plus.google.com/u/0/106214854252929724411/"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="https://www.facebook.com/tingaevmi/"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://www.instagram.com/maxinstellar/"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://github.com/max1mka1/"><i className="fa fa-github"></i></a></li>
                  <li><a href="skype:maxinstellar?userinfo/"><i className="fa fa-skype"></i></a></li>
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
    );
  }
}

export default Header;
