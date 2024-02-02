import gymModel from '../../../../public/images/gym.png'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Hero() {

    return (
        <main>
            <div 
                className="max-w-[1200px] m-auto py-40 px-4 grid gap-2 md:gap-8 md:grid-cols-2 md:items-center"
            >
                <motion.div
                    transition={{ ease: "linear", duration: 0.6 }}             
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [150, 0] }}
                    className='md:order-2'   
                >
                    <Image
                        src={gymModel}
                        width={500}
                        height={500}     
                        alt="gymModel"
                        className="img max-w-[500px] m-auto py-6 hidden md:flex" 
                    /> 
                </motion.div>
                <div
                    className="md:py-20 md:grid-row-1 md:order-1"  
                >
                    <motion.h4 
                        className="font-normal text-black-dark text-4xl"
                        transition={{ ease: "easeOut", duration: 0.6 }}             
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [150, 0] }}    
                    >
                        Construa Seu Corpo &
                    </motion.h4>
                    <motion.h1 
                        className="font-bold text-6xl pb-2 mb-4 text-black-dark"
                        transition={{ ease: "easeOut", duration: 0.6 }}             
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [150, 0] }}              
                    >
                        Crie a sua Própria Forma.
                    </motion.h1>
                    <motion.hr 
                        className='w-20 h-1 my-4 border-0 rounded bg-red-primary'
                        transition={{ ease: "easeOut", duration: 0.6 }}             
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [150, 0] }}       
                    />
                    <motion.p 
                        className="max-w-[900px] mb-8 text-gray-light"
                        transition={{ ease: "easeOut", duration: 0.8 }}             
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [150, 0] }}   
                    >
                        Lorem ipsulumLorem ipsulumLorem ipsulumLorem Lorem ipsulumLorem ipsulumLorem ipsulumLorem
                    </motion.p>
                    <motion.div
                        transition={{ ease: "easeOut", duration: 1 }}             
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [150, 0] }}
                    >
                        <button 
                            className='px-3 py-2 outline-none border-none text-base whitespace-nowrap text-white bg-red-primary rounded-md cursor-pointer transition duration-300 hover:bg-red-dark'
                        >
                            Serviços
                        </button>
                    </motion.div>
                </div>
            </div>
        </main>
    )
   
}