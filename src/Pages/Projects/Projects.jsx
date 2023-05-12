import { ProjectCard } from "./ProjectCard"
import fatsec from "../../assets/fat.jpg"
import styles from "./ProjectsSection.module.css"
import "./Project.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import { SiStyledcomponents } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"


export const Projects = () => {
  console.log(fatsec)
  const projects = [
    {
      name: "shopping-bazaar",
      img: "https://github.com/imsukhdevhansda/shopping-bazaar/blob/master/src/assets/screenshot/home2.png?raw=true",
      link: "https://shoppingbazzar.vercel.app/",
  
      git: "https://github.com/imsukhdevhansda/shopping-bazaar",
      about:`Shopping bazaar is a amazing Ecommerce website with the sign in, signup, sorting and filtering functionality. Easily you can find your favourite product and buy it.`,
      stacks: [
       <SiReact className={styles.stackIcon} />,
       <SiRedux className={styles.stackIcon} />,
       <SiBootstrap className={styles.stackIcon} />,
       <SiChakraui className={styles.stackIcon} />,
       <SiStyledcomponents className={styles.stackIcon} />
      ],
    },
    {
      name: "HealthSecret",
      img: "https://user-images.githubusercontent.com/107488954/214282608-3a3f34c7-ee79-4d8b-942c-442ad621982e.png",
        
      link: "https://fatsecret.vercel.app/",
        
      git: "https://github.com/Alexfp05405/adhesive-legs-8944",
      about:`HealthSecret is a close clone of FatSecret where you can get all the best dishes, exercise and recipes`,
      stacks: [
          <SiReact className={styles.stackIcon} />,
          <SiRedux className={styles.stackIcon} />,
          <SiBootstrap className={styles.stackIcon} />,
          <SiChakraui className={styles.stackIcon} />,
          <SiStyledcomponents className={styles.stackIcon} />
      ],
    },
    {
      name: "HealthSecret",
      img: "https://user-images.githubusercontent.com/107488954/214282608-3a3f34c7-ee79-4d8b-942c-442ad621982e.png",
        
      link: "https://fatsecret.vercel.app/",
        
      git: "https://github.com/Alexfp05405/adhesive-legs-8944",
      about:`HealthSecret is a close clone of FatSecret where you can get all the best dishes, exercise and recipes`,
      stacks: [
          <SiReact className={styles.stackIcon} />,
          <SiRedux className={styles.stackIcon} />,
          <SiBootstrap className={styles.stackIcon} />,
          <SiChakraui className={styles.stackIcon} />,
          <SiStyledcomponents className={styles.stackIcon} />
      ],
    },
    {
      name: "HealthSecret",
      img: "https://user-images.githubusercontent.com/107488954/214282608-3a3f34c7-ee79-4d8b-942c-442ad621982e.png",
        
      link: "https://fatsecret.vercel.app/",
        
      git: "https://github.com/Alexfp05405/adhesive-legs-8944",
      about:`HealthSecret is a close clone of FatSecret where you can get all the best dishes, exercise and recipes`,
      stacks: [
          <SiReact className={styles.stackIcon} />,
          <SiRedux className={styles.stackIcon} />,
          <SiBootstrap className={styles.stackIcon} />,
          <SiChakraui className={styles.stackIcon} />,
          <SiStyledcomponents className={styles.stackIcon} />
      ],
    },
    
    
   
  ]

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
