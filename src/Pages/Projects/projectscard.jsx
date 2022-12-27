import { Button } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


export const ProjectCard = ({ title, description, imgUrl, Tech_Stacks, Features}) => {
  return (
    <div >
      <div className="image_box">
        <img className="Project__image" src={imgUrl} alt="Projects" />
        <div className="project__data">
          <h2 className="project__title">{title}</h2>
          <span className="project__des" >{description}</span>
          <br/>
          
          <span className="project__des" ><b>Tech Stacks:</b>{Tech_Stacks}</span>
          <p className="project__des" ><b>Features: </b>{Features}</p>

          

          <div className="button_container">

          <Button colorScheme='facebook'size='xs'>
            <Link display="flex" justifyItems="center" gap="5%" href='https://github.com/Alexfp05405/adhesive-legs-8944/tree/main/fatsecret' isExternal>
              <i class="uil uil-github"></i> Github <ExternalLinkIcon mx='2px' />
            </Link>
          </Button>

         
          <Button colorScheme='facebook' size='xs'>
            <Link display="flex" justifyItems="center" gap="5%" href='https://fatsecret.vercel.app/' isExternal>
              <i class="uil uil-link-h"></i>Demo <ExternalLinkIcon mx='2px' />
            </Link>
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}