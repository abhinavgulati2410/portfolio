import React from 'react'
import '../styles.css' 
import gmail from'../logo-gmail.png'
import loc from'../location-icon.png'
import copy from'../copyright.png'

function Contacts(){
    var CurrYear=new Date().getFullYear();
    return(
    <div className='whole-contact'>
        <p className='hey'>Hey, here are some places where we can shake hands:</p>
        <div className='contact-list'>
                <div>&gt;&gt;<a href='https://www.linkedin.com/in/abhinav-gulati-60a843190' className='contact-item'>  LinkedIn</a></div>
                <div>&gt;&gt;<a href='https://twitter.com/AbhinavG24?' className='contact-item'>  Twitter</a></div>
                <div>&gt;&gt;<a href='https://instagram.com/abhinav.gulati_2410_?utm_medium=copy_link' className='contact-item'>  Instagram</a></div>
                <div>&gt;&gt;<a href='https://github.com/abhinavgulati2410' className='contact-item'>  GitHub</a></div>
                <div>&gt;&gt;<a href='https://medium.com/@abhigulati.hrdwr' className='contact-item'>  Medium</a></div> 
        </div>
        <div className='foot'> 
            <span className='built'>Handcrafted By:</span> 
            <span className='built-name' >Abhinav Gulati</span>
        <div className='last'>
            <div className='copy'>
                <img src={gmail} alt='gmail-icon' width='19px' />
                <p className='mygmail'>abhigulati.hrdwr@gmail.com</p>
            </div>
            <div className='copy'>
                <img src={loc} alt='location icon' width='20px' />
                <p className='mygmail'>India</p>
            </div>
            <div className='copy' id='copy-r'>
                <img src={copy} alt="copyright logo" width='15px' />
                <p className='mygmail'>All Rights Reserved | Abhinav Gulati @ {CurrYear}</p>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Contacts