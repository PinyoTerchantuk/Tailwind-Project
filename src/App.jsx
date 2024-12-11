
import './App.css'
import Example from './components/Example'
function App() {


  return (
    <>
    <nav className="bg-primary text-white p-4 ">
      <div className='container mx-auto flex justify-end items-center p-4 '>
        <ul className='flex space-x-4'>
          <li>
            <a href="">Works</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
            
          
        </ul>
      </div>
      </nav>

      

      <div className='bg-indigo-400  grid grid-cols-12 mt-1 '>
          <div className='col-span-12 lg:col-span-6 mt-20'>
            <h1 className='text-3xl lg:text-base font-bol text-white'>Hi,I am Pinyo,</h1>
            <h1 className='text-3xl lg:text-base font-bol  text-white'>Programmer</h1>
            <p className=" text-white">Pinyo is a dedicated and innovative computer engineer with a passion for solving complex problems through technology. With a strong foundation in both hardware and software, Pinyo excels in designing, developing, and implementing cutting-edge solutions that drive efficiency and performance.</p>
            <button className="btn btn-primary  text-white animate-bounce mt-10">Download Resume</button>
          </div>

          <div className=" col-span-12 lg:col-span-6 p-4 ">
          <img className="rounded-full  md:rounded-none"src="https://wallpaperswide.com/download/izuku_midoriya-wallpaper-800x480.jpg" alt="" />
         
        </div>
          
      </div>

      <div className='bg-indigo-400  grid grid-cols-12 mt-1 '>
          <div className="bg-white col-span-12 lg:col-span-6 m-10 ">
            <h1 className='text-3xl lg:text-l  text-black font-bold m-3'>Making a design system</h1>
            <h1 className='text-3xl lg:text-xl font-bold  text-black'>12 Feb 2004</h1>
            <p className=" text-black">Pinyo is a dedicated and innovative computer engineer with a passion for solving complex problems through technology. With a strong foundation in both hardware and software, Pinyo excels in designing, developing, and implementing cutting-edge solutions that drive efficiency and performance.</p>
        </div>

          <div className="bg-white col-span-12 lg:col-span-6 m-10 ">
            <h1 className='text-3xl lg:text-l  text-black font-bold m-3'>Making a design system</h1>
            <h1 className='text-3xl lg:text-xl font-bold  text-black'>12 Feb 2004</h1>
            <p className=" text-black">Pinyo is a dedicated and innovative computer engineer with a passion for solving complex problems through technology. With a strong foundation in both hardware and software, Pinyo excels in designing, developing, and implementing cutting-edge solutions that drive efficiency and performance.</p>
        </div>
          
      </div>

      <div className='bg-indigo-400  grid grid-cols-12 mt-1 '>
          <div className="bg-white col-span-12 lg:col-span-12 m-10 ">
            <h1 className='text-3xl lg:text-l  text-black font-bold m-3'>Making a design system</h1>
            <h1 className='text-3xl lg:text-xl font-bold  text-black'>12 Feb 2004</h1>
            <p className=" text-black">Pinyo is a dedicated and innovative computer engineer with a passion for solving complex problems through technology. With a strong foundation in both hardware and software, Pinyo excels in designing, developing, and implementing cutting-edge solutions that drive efficiency and performance.</p>
        </div>

          <div className="bg-white col-span-12 lg:col-span-12 m-10 ">
            <h1 className='text-3xl lg:text-l  text-black font-bold m-3'>Making a design system</h1>
            <h1 className='text-3xl lg:text-xl font-bold  text-black'>12 Feb 2004</h1>
            <p className=" text-black">Pinyo is a dedicated and innovative computer engineer with a passion for solving complex problems through technology. With a strong foundation in both hardware and software, Pinyo excels in designing, developing, and implementing cutting-edge solutions that drive efficiency and performance.</p>
        </div>

        <div className="bg-white col-span-12 lg:col-span-12 m-10 ">
            <h1 className='text-3xl lg:text-l  text-black font-bold m-3'>Making a design system</h1>
            <h1 className='text-3xl lg:text-xl font-bold  text-black'>12 Feb 2004</h1>
            <p className=" text-black">Pinyo is a dedicated and innovative computer engineer with a passion for solving complex problems through technology. With a strong foundation in both hardware and software, Pinyo excels in designing, developing, and implementing cutting-edge solutions that drive efficiency and performance.</p>
        </div>
          
      </div>

      <Example></Example>
   
    
    </>
  )
}

export default App
