import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsem', author: 'mario', id: 1},
    {title: 'Welcome Party!', body: 'lorem ipsem', author: 'yoshi', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsem', author: 'mario', id:3},
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="A Blog"/>
      <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs"/>
    </div>
  )
}

export default Home

