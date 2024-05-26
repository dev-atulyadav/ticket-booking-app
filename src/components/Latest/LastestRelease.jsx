import React from 'react'
import Card from './Card'

const LastestRelease = () => {
  return (
    <section id='latestMovies' className='h-screen w-full'>
         <article className='p-4 h-full w-full flex justify-start items-center flex-col gap-16'>
            <h1 className='text-5xl font-bold uppercase'>Latest Release</h1>
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