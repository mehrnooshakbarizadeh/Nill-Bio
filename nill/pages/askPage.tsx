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
      <main >
      <div className="convexBackground">
        <div className="convexBack"></div>
      </div>
          <h6 lang="en" className='text-keppel-900 p-2 text-center font-bold'>Ask of Niloofar every thing you want</h6>
        <form className='w-full max-w-sm mt-12 mb-4 mx-auto'>
          <input name='email' value={email} onChange={handleChangeEmail} className=' pb-4 border-b-2 border-keppel-500 mb-4 w-full text-gray-700 focus:outline-none' type="email" placeholder='Example@gmail.com'></input>
          <textarea name='question' value={question} onChange={handleChangeQuestion} className=' w-full border-b-2 border-keppel-500 text-gray-700 ' rows={5} name='question' placeholder='Question...'></textarea>
          <button name='submit' className=' p-2 rounded-sm bg-keppel-500 text-keppel-WHITE mt-4' type='button'>Send to Niloofar</button>
        </form>
      </main>
    </>
  )
}

export default AskPage;