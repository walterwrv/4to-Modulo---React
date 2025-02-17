import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromSide } from '../utility/animation'

const Body = () => {
  return (
    <>
        <section className="flex justify-center mt-36 md:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
            {/* <!-- Description --> */}
            <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
                <img src="src/assets/Logo.png" alt="logo imperial" className="w-[150px] mx-auto"/>
                <p className="py-12 text-white">
                Únete al Imperio Galáctico y conviértete en un Stormtrooper, la fuerza de élite que mantiene el orden en la galaxia. Protege la paz, impone la justicia y sirve al Emperador con honor. Serás parte de la maquinaria más poderosa, recibirás entrenamiento avanzado y enfrentarás misiones en los rincones más emblemáticos del universo. ¡El destino de la galaxia necesita tu lealtad!
                </p>
                <div className="flex justify-center gap-4">
                <a href="#" className="bg-red-600 py-2 px-12 rounded-3xl text-white hover:bg-red-700 transition-all duration-300 flex items-center cursor-pointer">Únete ahora</a>
                </div>
            </div>

            {/* <!-- Image --> */}
            <motion.div 
              variants={slideInFromSide("left", 0.3)}
              initial="initial"
              animate={["animate"]}
              className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36 mt-[-100px]"
            >
                
                <img src="src/assets/Personaje.png" alt="Personaje de juego"/>
            </motion.div>
            </div>
        </section>
    </>
  )
}

export default Body