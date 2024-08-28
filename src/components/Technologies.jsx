import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiElasticsearch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaLinux } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants= (duration) => ({
    initial: {y:-10 },
    animate: {
      y:[10,-10],
      transition: 
      {duration: duration, 
       ease: "linear",
       repeat: Infinity,
       repeatType:"reverse",
      }
    }
    })

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex felx-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPhp className="text-7xl text-white-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDotnet className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-amber-700" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiKubernetes className="text-7xl text-indigo-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiElasticsearch className="text-7xl text-lime-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-800"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLinux  className="text-7xl text-white-300"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJavascript1  className="text-7xl text-yellow-400"/>
        </motion.div>
         
      </motion.div>
    </div>
  )
}

export default Technologies
