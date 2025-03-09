import React from 'react'

const Header = ({ setIsModalOpen }) => {

  const onOpenModal = () => setIsModalOpen(true)


  return (
    <>
      <header className='bg-gray-800 text-white p-4 shadow-md'>

        <button
          className='bg-blue-600 text-white p-2'
          onClick={onOpenModal}
        >
          Ver Watchlist
        </button>
      </header>
    </>
  )
}

export default Header