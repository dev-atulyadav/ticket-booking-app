import React, { useEffect, useState } from 'react'
import Card from './Card'
import { fetchDataFromApi } from '../../utils/api';

const LastestRelease = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "/movie/latest"
    fetchDataFromApi(url).then((res) =>
      console.log(res.results, setData(res.results))
    );
  }, []);
  return (
    <section id='latestMovies' className='h-screen w-full'>
         <article className='p-4 h-full w-full flex justify-start items-center flex-col gap-6 sm:gap-16'>
            <h1 className='text-3xl sm:text-5xl font-bold uppercase text-center'>Latest Release</h1>
            <main className=' grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </main>
         </article>
    </section>
  )
}

export default LastestRelease