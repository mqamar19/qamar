import Sidebar from '@/Componants/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import css from 'tailwindcss'

export default function Header() {
  
    return (
<>
<section className='flex headersection'>
 <div className='hdfirstclm'><Link href='/'> <Image src='/images/minimalistic.jpg' alt='logo' width={100} height={100}></Image></Link> </div>
 <div className='hdsecondclm '> <menu><div className='menu'>
    <ul className='flex'>
        <li> <a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/testpage">Test Page</a></li>
      </ul></div> </menu></div>
 <div className='hdthirdclm'> <div><button className='contact_us_button'>Contact Us</button></div> <Sidebar/></div>

</section>
</>
    )
}