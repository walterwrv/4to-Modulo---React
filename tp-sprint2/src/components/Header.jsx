import React from 'react'

const Header = ({ setIsModalOpen }) => {

  const onOpenModal = () => setIsModalOpen(true)


  return (
    <>
      <header className='bg-gray-800 text-white p-4 shadow-md'>

        <button
          className='bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg active:scale-95'
          onClick={onOpenModal}
        >
          Ver Watchlist
        </button>
      </header>
    </>
  )
}

export default Header