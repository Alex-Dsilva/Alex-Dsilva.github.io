import React from 'react';
import Info from "./Info"
import "./about.css";
import {AiFillGithub} from 'react-icons/ai'
import Aboutimg from "../../assets/Alex.jpg";
import GitHubCalendar from 'react-github-calendar';
import CV from "../../assets/Alex_Dislva.pdf";


const About = () => {

  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const handleClick = async () => {
    try {
      const a = document.createElement('a');
      a.href = "https://drive.google.com/file/d/190JV9TFt09qJypb655fK646GzR-4PIQI/view";
      // a.download = 'Alex_Resume.pdf';
      a.target="_blank"
      a.click();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="About">
      <section className="about section" id="about">
        <h2 className="section__title Me">About Me</h2>
        


        <div className="about__container container">

          <div className="about__data">
            
          <span className="section__subtitle subtitle">My Introduction</span>

            <p className="about__description">
              I am a innovative optimized solution seeker. Excited to be inthe deployment phase of my new career as a full stack web developer An avid coder and a great team player.
            </p>

            <Info/>

            <span className="section__subtitle subtitle"><AiFillGithub/>Github Details</span>
            <div id='gitcalender'>
                <GitHubCalendar style={{margin:'auto'}} username="alexfp05405" 
                    transformData={selectLastHalfYear} 
                    className="giton"></GitHubCalendar>
            </div>

            <table>
              <tr>
                <td valign="top"><img align="center" src="https://github-readme-stats.vercel.app/api?username=alexfp05405&show_icons=true&locale=en&theme=algolia&count_private=true" alt="alexfp05405" /></td>
                <td valign="top"><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=alexfp05405&show_icons=true&locale=en&theme=algolia&count_private=true" alt="alexfp05405" /></td>
              </tr>
            </table>
            <br/>
            <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=alexfp05405&theme=2077" width="100%" />
            <br/>
            <img src="https://github-readme-activity-graph.cyclic.app/graph?username=alexfp05405&theme=react-dark&custom_title=alexfp05405%20's%20contribution%20Graph&hide_border=true" />
            <br/>

            <a download="Alex_Dislva_Resume.pdf" href={CV} onClick={handleClick} className="button button--flex">
              Download Resume
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </a>
            
          </div>

        </div>

      </section>
      
    </div>
  )
}

export default About
