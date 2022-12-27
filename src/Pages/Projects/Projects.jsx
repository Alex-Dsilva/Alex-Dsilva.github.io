import { ProjectCard } from "./projectscard";
import fatsec from "../../assets/fat.jpg"

import './animate.css';

export const Projects = () => {
  console.log(fatsec)
  const projects = [
    {
      title: "Fatsecret-Clone",
      description: "A fitness web site that keeps track of your food, exercise and weight while on-the-go",
      imgUrl:fatsec,
      Tech_Stacks:"JavaScript, React-Js, Chakra-Ui, Rest-API",
      Features:"Login, food-page, exercise-page, recipes-page "
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://iibmindia.in/wp-content/uploads/2021/08/HiRes-17-1536x922.jpg",
      Tech_Stacks:"JavaScript, React-Js, Chakra-Ui, Rest-API",
      Features:"Login, food-page, exercise-page, recipes-page "
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://iibmindia.in/wp-content/uploads/2021/08/HiRes-17-1536x922.jpg",
      Tech_Stacks:"JavaScript, React-Js, Chakra-Ui, Rest-API",
      Features:"Login, food-page, exercise-page, recipes-page "
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://iibmindia.in/wp-content/uploads/2021/08/HiRes-17-1536x922.jpg",
      Tech_Stacks:"JavaScript, React-Js, Chakra-Ui, Rest-API",
      Features:"Login, food-page, exercise-page, recipes-page "
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://iibmindia.in/wp-content/uploads/2021/08/HiRes-17-1536x922.jpg",
      Tech_Stacks:"JavaScript, React-Js, Chakra-Ui, Rest-API",
      Features:"Login, food-page, exercise-page, recipes-page "
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "https://iibmindia.in/wp-content/uploads/2021/08/HiRes-17-1536x922.jpg",
      Tech_Stacks:"JavaScript, React-Js, Chakra-Ui, Rest-API",
      Features:"Login, food-page, exercise-page, recipes-page "
    },
  ];

  return (
    <section className="project grid" id="project">
       <h2 className="section__title">My Projects</h2>

      <div className="project__container container grid">
        <div className="project__content grid">
          {
            projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  {...project}
                  />
              )
            })
          }
           
        </div>
      </div>
     
    </section>
  )
}
