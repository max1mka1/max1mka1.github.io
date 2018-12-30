import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      console.log(this.props.data);
      var educations = this.props.data.education.map(function(education) {
        return <div key={education.school} className="row item">
                  <div className="twelve columns">
                    <h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span> <em className="date">{education.graduated}</em></p>
                    <p>{education.description}</p>
                  </div>
                </div>
      });
    /*  var works = this.props.data.work.map(function(work) {
        return <div key={work.company} className="row item">
                <div className="twelve columns">
                  <h3>{work.company}</h3>
                  <p className="info">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>
                  <p>{work.description}</p>
                </div>
              </div>
      });
      var skills = this.props.data.skills.map(function(skill) {
        return <li key={skill.name}><span className="bar-expand" style={{width:skill.level}}></span><em>{skill.name}</em></li>
      });*/
    }
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Образование</span></h1>
          </div>
          <div className="nine columns main-col">
            {educations}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Научные</span></h1>
            <h1><span>достижения</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Будучи аспирантом, наисал в соавторстве множество научных статей по теме гибридных углеродных материалов (наноинженерия - компьютерное моделирование).
            Результаты работ опубликованы в таких физических журналах,таких, как IOP Journal of Physics: Conference Series (2017, 2018),
            Materials Research Proceedings, (2018), Челябинский физико-математический журнал, (2018), Письма о материалах, (2015), и многих других журналах.
            Принимал активное участие в следующих конференциях: 5th International School And Conference «Saint Petersburg Open 2018»,
            St-Petersburg: St Petersburg Academic University, (2018), VII Международная молодежная научная школа-конференция «Современные проблемы физики и технологий»,
            Москва: НИЯУ МИФИ, (2018), «Графен – молекула и 2D-кристалл», Новосибирск: ИНХ СО РАН, (2015), «Химия твердого тела и функциональные материалы – 2016», Екатеринбург:
            ИХТТ УрО РАН, (2016), и многих других.
              </p>
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Навыки</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Подготовка к таким экзаменам, как ВПР, ОГЭ, ЕГЭ, экзамену по высшей математике или физике в ВУЗе, написание типовых и курсовых работ.
            Также возможна помощь в изучении программирования таких языков, как C, C++, Python, Delphi, а также помощь с курсовыми по программированию.
            </p>
            <div className="bars">
        	    <ul className="skills">

        			</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
