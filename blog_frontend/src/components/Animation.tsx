import { motion,useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SplashScreen() {
    const controls=useAnimation();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },4000)
    },[])
    useEffect(()=>{
        if(loading){
            controls.start({
                opacity:1,
                transition:{duration:1}
            })
        }else{
            controls.start({
                opacity:0,
                transition:{duration:1}
            })
        }
    },[controls,loading])
    return (
        <motion.div className="fixed bg-black h-screen top-0 left-0 w-full h-full flex justify-center items-center z-10" animate={controls}>
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                        <>
                            <motion.span
                                className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [1, 0], // Fades out
                                    transition: { duration: 1, repeat: Infinity }
                                }}
                            />
                            <motion.span
                                className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [1, 0], // Fades out
                                    transition: { duration: 1, repeat: Infinity, delay: 0.2 }
                                }}
                            />
                            <motion.span
                                className="w-4 h-4 my-12 mx-1 bg-white rounded-full"
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [1, 0], // Fades out
                                    transition: { duration: 1, repeat: Infinity, delay: 0.4 }
                                }}
                            />
                        </>
                </div>
            </div>
        </motion.div>
    );
}

