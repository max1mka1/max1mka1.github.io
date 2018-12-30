// Testimonials.js
import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">

         <div className="text-container">

            <div className="row">

               <div className="two columns header-col">

                  <h1><span></span></h1>

               </div>

               <div className="ten columns flex-container">

                  <div className="flexslider">

                     <ul className="slides">

                        <li>
                           <blockquote>
                              <p>„Тиньгаев Максим Игоревич   (математика)
Плюсы: Максим Игоревич, отличный преподаватель. Сыну нравится заниматься, даже не смотря на то, что сейчас лето ). Очень доступно и интересно преподаёт материал, хорошо устанавливает контакт с учеником, заинтересовывая интересными и практическими примерами.
Описание: Спасибо за занятия!
Оценка: 5+.“
                              </p>
                              <cite>Юлия 19 июля 2018, № 1440667</cite>
                           </blockquote>
                        </li>

                        <li>
                           <blockquote>
                              <p>„Тиньгаев Максим Игоревич   (физика)
Все понятно и четко, итог получил по теме 5
Оценка: 5+.“
                              </p>
                              <cite>Александр 22 июня 2018, № 1404702</cite>
                           </blockquote>
                        </li>

                     </ul>

                  </div>
               </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Testimonials;
