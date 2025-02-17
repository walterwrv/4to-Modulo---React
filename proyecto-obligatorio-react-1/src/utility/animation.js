export const slideInFromSide = (direction, delay) => {
    return {
      initial: {
        x: direction === "left" ? -80 : 100,
        // opacity: 0
      },
      animate: {
        // x: [0, -10, 0],
        y: [0, -10, 0], // Se mueve hacia arriba y luego regresa
        opacity: 1,
        transition: {
            duration: 2, // Duración de la animación
            repeat: Infinity, // Repetición infinita
            ease: "easeInOut", // Suavizado de animación
        }
      }
    }
  }