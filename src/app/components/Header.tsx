import { categories, login } from '../assets/data/data'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/app/assets/images/mercado-libre-logo.svg'
import Promo from '@/app/assets/images/promo.webp'
import Location from '@/app/assets/images/location.png'
import Chart from '@/app/assets/images/Chart.png'
import Dot from './Dot'

const Header = () => {
  const itemsChart = 3

  return (
    <header className="flex flex-col bg-[#ffe600] w-full h-[100px] shadow shadow-[#ffe600]/80 items-center pt-2 text-[12px]">
      <div className="flex justify-between max-w-[1200px] h-10">
        <picture className='w-[162px]'>
          <Link href='/'>
            <Image src={Logo} alt="Logo" width={134} height={34} />
          </Link>
        </picture>

        <form className='w-[580px] h-[40px]'>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
          <div className="relative">
            <input type="search" id="default-search" className="block w-full text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 py-2.5 pl-[15px] pr-[60px] shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] focus:outline-none" placeholder="Buscar productos, marcas y mas..." required />
            <button type='submit' className="absolute inset-y-0 end-5 flex items-center ps-3 cursor-pointer before:content-[''] before:h-6 before:border-solid before:border-l-[1px] before:border-[#e6e6e6] before:mr-3">
              <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
      <div className="flex items-end justify-between max-w-[1200px] h-12 my-1">
        <div className="w-[162px]">
          <Link href='/' className='flex pl-2 items-center w-[140px] h-12 pointer rounded-xl hover:border hover: border-gray-400'>
            <picture>
              <Image src={Location} alt='location' />
            </picture>
            <div className='pl-2'>
              <p className='text-[10px] text-black/80 leading-5	'>Enviar a</p>
              <span>Capital Federal</span>
            </div>
          </Link>
        </div>
        <nav className='flex w-[580px]'>
          <ul className='flex items-end'>
            {
              categories.map(({ name, subCategories, free }) =>
                <li className={`mx-2 items-center  ${free ? 'flex flex-col' : ''}`} key={name}>
                  {free && <Dot style='w-8 px-[3px] bg-[#00a650] text-[8px]  text-white rounded-xl'>Gratis</Dot>}
                  <Link href={`/${name.toLowerCase().normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
                    .normalize()}`}>{name}</Link>
                  <ul className='hidden'>
                    {subCategories && subCategories.map(sub => <li className='bg-[#323233] text-white' key={sub}>{sub}</li>)}
                  </ul>
                </li>
              )
            }
          </ul>
        </nav>
        <div className="flex w-[390px] justify-end items-end">
          <ul className='flex gap-6'>
            {login.map(({ name, link }) =>
              <li className='px-[3px]' key={name}>
                <Link href={link}>
                  {name}
                </Link>
              </li>)}
          </ul>
          <Link href='/chart' className='ml-2 flex flex-col items-end'>
            {itemsChart > 0 && <Dot style='w-3 text-white px-1 bg-red-500 text-[8px]'>{itemsChart}</Dot>}
            <Image src={Chart} alt='Carro de compras' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header