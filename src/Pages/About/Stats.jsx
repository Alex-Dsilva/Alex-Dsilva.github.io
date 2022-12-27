import React from 'react';
import "./git.css";

const Stats =() =>{
    return(
    <div id='stats'>

    <div id='stats__small'>
        <div className='streak lang_stats'>
            <a href="https://github.com/alexfp05405" target="_blank">
                <img className='streak_img statsimg' src="https://github-readme-streak-stats.herokuapp.com?user=alexfp05405&theme=radical&border_radius=4.6&theme=gruvbox_duo" alt="" />
            </a>
        </div>


        
        <div className='lang_stats'>


            <a href="https://github.com/alexfp05405" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats.vercel.app/api?username=alex05405&show_icons=true&theme=gruvbox_duo" alt="" />
            </a>
        </div>
        <div className='lang_stats'>
           
            <a href="https://github.com/alexfp05405" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats.vercel.app/api/top-langs/?username=alexfp05405&
                langs_count=8" alt="" />
            </a>

        </div>
        
    </div>



        </div>
    )
}
export default Stats