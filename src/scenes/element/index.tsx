import {motion} from 'framer-motion'
import { easeInOut } from "framer-motion/dom";


const Element = (props : {
    title:string; 
    url:string; 
    dir:string;
    bg:string;
    txtcol:string;
}) => {
    
    return <div>
        <div className = 'element'>
            <motion.div 
            initial = "hidden"
            whileInView= "visible"
            viewport={{once : true}}
            variants={{
                visible: {opacity: 1, y: 0},
                hidden: {opacity: 0, y: 150}
            }}
            transition = {{duration: 0.4, ease: easeInOut}}
            >
                <div className= 'container'>
                    <a href={props.url} target='_blank'>
                        <img className = 'thumbnail'src = {props.dir}/>
                        <div className={`imageText ${props.bg} ${props.txtcol}`}>{props.title}</div>
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
}

export default Element