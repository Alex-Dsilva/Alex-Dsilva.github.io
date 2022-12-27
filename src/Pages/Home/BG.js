import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { loadFull} from 'tsparticles'
import { useCallback, useMemo } from 'react'
import particalesConfig from "../../config/Partical-config"

export default function ParticleBackground() {

    const options =useMemo(()=>{
        return  particalesConfig 
    }   )
   
    const particlesInit=useCallback((engine)=>{
        loadSlim(engine)
        loadFull(engine)
    },[])
    return <Particles init={particlesInit} options={options}/>
}