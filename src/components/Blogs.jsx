import React from 'react'
import '../styles.css'
import blogim from '../blog-im.jpeg'
function Blogs(){
    return(
        <div className='blog-container'>
            <p className='blog-head'>What I've written? </p>
            <div className='whole-blog'>
                <div className='ind-blog'>
                   <div text-align='center'>
                        <img src={blogim} alt='pen and paper' width='400px' />
                    </div>
                    <p className='blog-heading'>Web Scraping</p>
                    <p className='blog-des'>The easy way to boost profits</p>
                    <a href='https://link.medium.com/xUDMZW1Sohb' className='view-btn'>View Blog</a>
                </div>
                <div className='ind-blog'>
                   <div text-align='center'>
                        <img src={blogim} alt='pen and paper' width='400px' />
                    </div>
                    <p className='blog-heading'>Fiber</p>
                    <p className='blog-des'>The Next Backend</p>
                    <a href='https://link.medium.com/bknHIJm1ohb' className='view-btn'>View Blog</a>
                </div>
            </div>
        </div>
    );
}

export default Blogs;