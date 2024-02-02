import Image from "next/image";
import plano1 from "../../../../public/images/price-1.png"
import plano2 from "../../../../public/images/price-2.png"
import plano3 from "../../../../public/images/price-3.png"
import { motion } from "framer-motion"

export default function Price() {
  return (
    <section className="max-w-[1200px] m-auto py-20 px-4">
      <h2 className="relative pb-2 mb-4 text-4xl font-semibold text-black-dark w-fit m-auto text-center after:left-1/2 after:-translate-x-1/2">Planos</h2>
      <hr className='m-auto text-center w-20 h-1 my-4 border-0 rounded bg-red-primary'/>
      <p className="max-w-[900px] text-gray-light w-fit m-auto text-center">Nosso plano de preços vem com vários níveis de associação, cada um adaptado para
        atender a diferentes preferências e aspirações de condicionamento físico.</p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-y-4 sm:gap-x-4 md:grid-cols-3 lg:gap-4 " >
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [300, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="py-8 px-4 flex flex-col text-center shadow-lg lg:p-8"
          >
            <div className="flex-1 mb-8" >
              <h4 className="mb-4 text-xl font-semibold text-black-dark">Plano Basico</h4>
              <Image width={128} height={128} src={plano1} alt="Plano1" className="max-w-[70px] m-auto mb-4"/>
              <p className="mb-4 text-gray-light">
              Nosso Plano Básico é o ponto de partida perfeito para pessoas físicas
              procurando iniciar sua jornada de preparação física ou manter uma atividade
              estilo de vida.
              </p>
              <hr className="mb-4"/>
              <h4 className="mb-4 text-xl font-semibold text-black-dark">Principais recursos</h4>
              <p className="mb-4 text-gray-light">Plano de treino inteligente</p>
              <p className="mb-4 text-gray-light">Treinos em casa</p>
            </div>
            <button 
              className="py-3 px-6 outline-none border-none text-base whitespace-nowrap text-white bg-red-primary rounded-[5px] cursor-pointer duration-300 hover:bg-red-dark">
                Entrar
              </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [300, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="py-8 px-4 flex flex-col text-center shadow-lg lg:p-8"
          >
            <div className="flex-1 mb-8">
              <h4 className="mb-4 text-xl font-semibold text-black-dark">Plano Mensal</h4>
              <Image width={128} height={128} src={plano2} alt="Plano1" className="max-w-[70px] m-auto mb-4"/>
              <p className="mb-4 text-gray-light">
              Nosso plano Mensal é projetado para fornecer estrutura e variedade para
              seus treinos, garantindo que você permaneça motivado e no caminho certo.
              </p>
              <hr className="mb-4"/>
              <h4 className="mb-4 text-xl font-semibold text-black-dark">Principais recursos</h4>
              <p className="mb-4 text-gray-light">Academias PRO</p>
              <p className="mb-4 text-gray-light">Plano de treino inteligente</p>
              <p className="mb-4 text-gray-light">Treinos em casa</p>
            </div>
            <button 
              className="py-3 px-6 outline-none border-none text-base whitespace-nowrap text-white bg-red-primary rounded-[5px] cursor-pointer duration-300 hover:bg-red-dark">
                Entrar
              </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [300, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="py-8 px-4 flex flex-col text-center shadow-lg lg:p-8"
           >
            <div className="flex-1 mb-8">
              <h4 className="mb-4 text-xl font-semibold text-black-dark">Plano Semestral</h4>
              <Image width={128} height={128} src={plano3} alt="Plano1" className="max-w-[70px] m-auto mb-4"/>
              <p className="mb-4 text-gray-light">
              Com esta assinatura flexível, você terá acesso ao nosso
              academias de última geração, treinadores especializados e um ambiente vibrante
              comunidade de fitness.
              </p>
              <hr className="mb-4"/>
              <h4 className="mb-4 text-xl font-semibold text-black-dark">Principais recursos</h4>
              <p className="mb-4 text-gray-light">Aulas e academias ELITE</p>
              <p className="mb-4 text-gray-light">Academias PRO</p>
              <p className="mb-4 text-gray-light">Plano de treino inteligente</p>
              <p className="mb-4 text-gray-light">Treinos em casa</p>
              <p className="mb-4 text-gray-light">Treinamento pessoal</p>
            </div>
            <button 
              className="py-3 px-6 outline-none border-none text-base whitespace-nowrap text-white bg-red-primary rounded-[5px] cursor-pointer duration-300 hover:bg-red-dark">
                Entrar
              </button>
          </motion.div>
        </div>
    </section>
  )
}