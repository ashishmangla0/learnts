import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react';
import Button from '../components/button';
import Heading from '../components/heading/';
import InputFeild from '../components/inputfeild'

const Home: NextPage = () => {

  const aa = useRef(null);

  const handleClick = () => {
    console.log('aaaaa');
    //aa.current.focus();

  }

  return (
    <>

      <InputFeild inputtype='text' ref={aa} />
      <Button value={'search'} handleButtonClick={handleClick} />

    </>
  )
}

export default Home
