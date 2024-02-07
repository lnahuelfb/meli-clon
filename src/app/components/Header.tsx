import Image from 'next/image'
import Logo from '@/../public/mercado-libre-logo.svg'
import Promo from '@/../public/promo.webp'


const Header = () => {
  return (
    <header className="bg-[#ffe600] w-full h-[100px] shadow shadow-[#ffe600]/80 flex justify-center py-2.5">
      <div className="flex justify-between max-w-[1200px] h-10 my-1">
        <picture className='w-[162px]'>
          <Image src={Logo} alt="Logo" width={134} height={34} />
        </picture>

        <form className='w-[580px] h-[40px]'>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
          <div className="relative">
            <input type="search" id="default-search" className="block w-full text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 py-2.5 pl-[15px] pr-[60px] shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] focus:outline-none" placeholder="Buscar productos, marcas y mas..." required />

            <button type='submit' className="absolute inset-y-0 end-5 flex items-center ps-3 cursor-pointer before:content-[''] before:h-6 before:border-solid before:border-l-[1px] before:border-[#e6e6e6] before:mr-3">
              <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="flex h-10 w-[390px]">
          <picture className='flex justify-end w-[390px]'>
            <Image src={Promo} alt='Promo' width={340} height={39} />
          </picture>
        </div>

      </div>
    </header>
  )
}

export default Header