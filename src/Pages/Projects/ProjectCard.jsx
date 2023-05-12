import styles from "./ProjectsSection.module.css"
import {CgWebsite} from "react-icons/cg"
import {BsGithub} from "react-icons/bs"
export function ProjectCard({ name, img, git, link, stacks, about }) {
  return (
    <>
      <div className={styles.projectCont}>
        <img src={img} alt="" className={styles.image} />
        <p style={{ fontSize: "25px", fontWeight: "400", margin: "5px 0 0 0" }}>
          {name}
        </p>
        <div className={styles.stacksDiv2}>{stacks.map((stack) => stack)}</div>

        <div className={styles.linkCont}>
          <a href={git} rel="noreferrer" target="_blank">
            <div className={styles.linkDiv}>
              <BsGithub />
              <p>Code</p>
            </div>
          </a>
          <a href={link} rel="noreferrer" target="_blank">
            <div className={styles.linkDiv}>
              <CgWebsite/>
              <p>Demo</p>
            </div>
          </a>
        </div>

        <div className={styles.projInfo}>
            <p>{about}</p>
        </div>

        <div className={styles.stacksDiv}>{stacks.map((stack) => stack)}</div>
      </div>
    </>
  )
}