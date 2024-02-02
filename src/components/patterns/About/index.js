import Image from "next/image";
import aboutImage from "../../../../public/images/about.png"
import aboutDots from "../../../../public/images/dot-bg.png"
import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faShieldHeart,
    faDumbbell
  } from "@fortawesome/free-solid-svg-icons";

export default function About() {
 
    return (
        <section className="max-w-[1200px] m-auto py-20 px-4 grid gap-8 md:grid-cols-2 md:items-center">
            <motion.div 
                className="relative isolate"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, x: [-200, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    width={500}
                    height={500}
                    alt='Dots'
                    src={aboutDots}
                    className="absolute right-8 top-12 max-w-[250px] z-[-1] opacity-50"
                />
                <Image
                    width={500}
                    height={500}
                    alt='AboutImage'
                    src={aboutImage}
                    className="max-w-[500px] m-auto"
                />
            </motion.div>
            <motion.div
                 className="relative isolate"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1, y: [200, 0] }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
            >
                <h2 className="relative pb-1 mb-4 text-4xl font-semibold text-black-dark">Sua Historia</h2>
                <hr className='w-20 h-1 my-4 border-0 rounded bg-red-primary'/>
                <p className="max-w-[900px] text-gray-light">
                    Liderada por nossa equipe de instrutores especializados e motivacionais, "The Class You Will Get Here" 
                    é uma sessão de alta energia e voltada para resultados que combina uma combinação perfeita de cardio, 
                    treinamento de força e exercícios funcionais.
                </p>
                <div className="mt-8 grid gap-8 md:gap-12">
                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [200, 0] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="py-[11px] px-[19px] text-3xl text-red-primary border-2 border-red-primary rounded-full"><FontAwesomeIcon icon={faUser} /></span>
                        <div>
                            <h4 className="mb-1 text-xl font-medium text-black-dark">Abra a porta policia</h4>
                            <p className="text-gray-light">
                                Acreditamos em fornecer acesso irrestrito a todos os indivíduos,
                                independentemente do seu nível de condicionamento físico, idade ou origem.          
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [200, 0] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="py-[11px] px-[19px] text-3xl text-red-primary border-2 border-red-primary rounded-full"><FontAwesomeIcon icon={faShieldHeart} /></span>
                        <div>
                            <h4 className="mb-1 text-xl font-medium text-black-dark">Totalmente segurado</h4>
                            <p className="text-gray-light">
                                Sua tranquilidade é nossa principal prioridade e nosso compromisso com
                                sua segurança se estende a todos os aspectos de sua jornada de preparação física.       
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: [200, 0] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="py-[11px] px-[19px] text-3xl text-red-primary border-2 border-red-primary rounded-full"><FontAwesomeIcon icon={faDumbbell} /></span>
                        <div>
                            <h4 className="mb-1 text-xl font-medium text-black-dark">Personal Trainer</h4>
                            <p className="text-gray-light">
                                Com planos de treino personalizados e adaptados às suas necessidades, iremos
                                garantir que você aproveite ao máximo sua experiência na academia.         
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}