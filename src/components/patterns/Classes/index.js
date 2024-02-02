import Image from "next/image";
import Dots from "../../../../public/images/dot-bg.png"
import classes1 from "../../../../public/images/classes1.jpg"
import classes2 from "../../../../public/images/classes2.jpg"
import classes3 from "../../../../public/images/classes3.jpg"
import classes4 from "../../../../public/images/classes4.jpg"


export default function Classes() {
  return (
    <section className="max-w-[1200px] m-auto py-20">
      <h2 className="relative pb-2 mb-4 text-4xl font-semibold text-black-dark">
        Serviços
      </h2>
      <hr className='w-20 h-1 my-4 border-0 rounded bg-red-primary'/>
      <p className="max-w-[900px] text-gray-light">
        Descubra uma grande variedade de aulas emocionantes em nossa academia, projetadas para
        atender a todos os níveis de condicionamento físico e interesses. Quer você seja um experiente
        atleta ou apenas começando sua jornada fitness, nossas aulas oferecem
        algo para todos.
      </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 md:grid-cols-4 lg:gap-8 ">
          <div className="group relative isolate flex flex-col cursor-pointer duration-300 hover:translate-y-[10px]">
            <Image width={500} height={500} src={Dots} alt="" className="absolute max-w-[175px] -top-12 -right-4 z-[-1] opacity-0 duration-300 group-hover:opacity-50 " />
            <Image width={500} height={500} src={classes2} alt="" />
            <div className="flex-1 p-4 bg-red-primary text-white">
              <h4 className="mb-[5px] text-xl font-medium">Treinamento de força</h4>
              <p>Treinamento de resistência</p>
            </div>
          </div>    
          <div className="group relative isolate flex flex-col cursor-pointer duration-300 hover:translate-y-[10px]">
          <Image width={500} height={500} src={Dots} alt="" className="absolute max-w-[175px] -top-12 -right-4 z-[-1] opacity-0 duration-300 group-hover:opacity-50 " />
            <Image width={500} height={500} src={classes3} alt="" />
            <div className="flex-1 p-4 bg-red-primary text-white">
              <h4 className="mb-[5px] text-xl font-medium">Mobilidade</h4>
              <p>Ioga e Pilates</p>
            </div>
          </div>    
          <div className="group relative isolate flex flex-col cursor-pointer duration-300 hover:translate-y-[10px]">
          <Image width={500} height={500} src={Dots} alt="" className="absolute max-w-[175px] -top-12 -right-4 z-[-1] opacity-0 duration-300 group-hover:opacity-50 " />
            <Image width={500} height={500} src={classes1} alt="" />
            <div className="flex-1 p-4 bg-red-primary text-white">
              <h4 className="mb-[5px] text-xl font-medium">HIIT</h4>
              <p>Treinamento em circuito</p>
            </div>
          </div>    
          <div className="group relative isolate flex flex-col cursor-pointer duration-300 hover:translate-y-[10px]">
          <Image width={500} height={500} src={Dots} alt="" className="absolute max-w-[175px] -top-12 -right-4 z-[-1] opacity-0 duration-300 group-hover:opacity-50 " />
            <Image width={500} height={500} src={classes4} alt="" />
            <div className="flex-1 p-4 bg-red-primary text-white">
              <h4 className="mb-[5px] text-xl font-medium">Atividade em grupo</h4>
              <p>Zumba ou dança</p>
            </div>
          </div>    
        </div>
    </section>
  )
}