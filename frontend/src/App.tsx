import '../src/styles/main.css'

import logoImg from './assets/Logo.svg';

import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return(  
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-15">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-15">Seu <span className="bg-clip-text text-transparent bg-nlw-gradient">duo</span> está aqui</h1>
    
      <div className="grid grid-cols-6 gap-6 mt-10">
        <a href="" className='relative rounded-lg overflow-hidden'> 
          <img src="lol.png" alt="" />
          <div className="w-full pt-16 pb4 px4 bg-game-gradient absolute left-0 bottom-0 right-0 px-5 py-2">
            <strong className="font-bold text-white text-[15px] block">League of Legends</strong>
            <span className="text-zinc-300 text-m block">4 anuncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="apex.png" alt="" />
           <div className="w-full pt-16 pb4 px4 bg-game-gradient absolute left-0 bottom-0 right-0 px-5 py-2">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="cs.png" alt="" />
           <div className="w-full pt-16 pb4 px4 bg-game-gradient absolute left-0 bottom-0 right-0 px-5 py-2">
            <strong className="font-bold text-white block">CS:GO</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="wow.png" alt="" />
           <div className="w-full pt-16 pb4 px4 bg-game-gradient absolute left-0 bottom-0 right-0 px-5 py-2">
            <strong className="font-bold text-white text-[15px] block">World of warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="dota.png" alt="" />
           <div className="w-full pt-16 pb4 px4 bg-game-gradient absolute left-0 bottom-0 right-0 px-5 py-2">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="fortnite.png" alt="" />
           <div className="w-full pt-16 pb4 px4 bg-game-gradient absolute left-0 bottom-0 right-0 px-5 py-2">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 Anuncios</span>
          </div> 
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg  mt-8  overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'> 
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio 
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
