import Link from 'next/link';
import React, {useState} from 'react';
import BreadcrumbBar from '../components/BreadcrumbBar';
import Header from '../components/Header';
import PersonalImage from '../components/HomePage/PersonalImage';
import PersonalInfo from '../components/Resume/PersonalInfo';

function AskPage() {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  function handleChangeEmail(event:any) {
    setEmail(event.target.value)
  }

  function handleChangeQuestion(event:any) {
    setQuestion(event.target.value)
  }

  return(
    <>
      <Header />
      <BreadcrumbBar />
      <head>
        <title>Ask Page</title>
        <meta name='description' content="Ask Page"></meta>
      </head>
      <header>
        <div className="flex justify-end items-center p-8">
          <div className="flex-grow">
            <PersonalImage />
          </div>
          <PersonalInfo />
        </div>
      </header>
      <main>
      <div className="convexBackground">
        <div className="convexMiddleBack">
          <div className="convexBack"></div>
        </div>
      </div>
      <div className='bg-keppel-300'>
        <div className=' flex items-center mb-4'>
          <img src='/images/mail.png' alt='Email'></img>
          <Link href="mailto:webmaster@example.com">
            <a className='text-sm font-bold pl-4'>Send Emai to Niloofar</a>
          </Link>
        </div>
        <div className=' flex items-center mb-4'>
        <img src='/images/whatsApp.svg' alt='WhatsApp'></img>
          <Link href="https://wa.me/1XXXXXXXXXX">
            <a className='text-sm font-bold pl-4'>WhatsApp call with Niloofar</a>
          </Link>
        </div>
        <div className=' flex items-center mb-4'>
        <img src='/images/telegram.svg' alt='Telegram'></img>
          <Link href="https://wa.me/1XXXXXXXXXX">
            <a className='text-sm font-bold pl-4'>Telegram call with Niloofar</a>
          </Link>
        </div>
      </div>
      </main>
    </>
  )
}

export default AskPage;