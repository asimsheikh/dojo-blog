import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsem', author: 'mario', id: 1},
    {title: 'Web dev top tips', body: 'lorem ipsem', author: 'mario', id:3},
    {title: 'Welcome Party!', body: 'lorem ipsem', author: 'yoshi', id: 2},
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => console.log('use effect ran'))

  return (
    <div className="home">
      <BlogList blogs={blogs} title="A Blog" handleDelete={handleDelete}/>
    </div>
  )
}

export default Home

