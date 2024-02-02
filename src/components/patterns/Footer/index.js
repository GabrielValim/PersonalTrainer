import Image from "next/image";
import logo from "../../../../public/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook
  } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
  <footer className="bg-ice-white">
    <div className="max-w-[1200px] m-auto py-20 px-4 grid gap-8 sm:grid-cols-2 md:grid-cols-5 ">
      <div className="md:col-span-2">
        <div className="footer-logo">
          <a href="#" className="mb-6 flex items-center gap-2 text-2xl font-semibold text-black-dark">
            <Image width={250} height={186} src={logo} alt="" className="max-w-[40px]" />
            Power
          </a>
        </div>
        <p className="mb-8 text-gray-light">
          Dê o primeiro passo em direção a uma pessoa mais saudável e forte com nosso
          planos de preços imbatíveis. Vamos suar, alcançar e conquistar
          junto!
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="py-[5px] px-[10px] text-xl text-gray-light rounded-full border-gray-light border-[1px] hover:text-red-primary hover:border-red-primary"> <FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="py-[5px] px-[10px] text-xl text-gray-light rounded-full border-gray-light border-[1px] hover:text-red-primary hover:border-red-primary"> <FontAwesomeIcon icon={faFacebook} /></a>
        </div>
      </div>
      <div className="md:first:grid-span-1">
        <h4 className="mb-6 text-xl font-medium text-black-dark">Compania</h4>
        <div>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Negócios</a>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Franquia</a>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Parceria</a>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Rede</a>
        </div>
      </div>
      <div className="md:first:grid-span-1">
        <h4 className="mb-6 text-xl font-medium text-black-dark">Sobre</h4>
        <div>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Blogs</a>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Carreira</a>
        </div>
      </div>
      <div className="md:first:grid-span-1">
        <h4 className="mb-6 text-xl font-medium text-black-dark">Contato</h4>
        <div>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Entre em contato conosco</a>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Política de Privacidade</a>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Termos e Condições</a>
          <a href="#" className="block mb-4 text-gray-light hover:text-red-primary">Calculadora de IMC</a>
        </div>
      </div>
    </div>
  </footer> 
  )
}