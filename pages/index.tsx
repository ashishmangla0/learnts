import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button';
import Heading from '../components/heading/';
import InputFeild from '../components/inputfeild'

const Home: NextPage = () => {
  return (
 <>
 <form>
   <InputFeild inputType='text'/>
   <Button value={'search'}/>
 </form>
 </>
  )
}

export default Home
