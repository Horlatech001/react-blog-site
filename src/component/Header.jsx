import React from 'react'
import HeaderImage from '../images/home.jpg';

const Header = () => {
    return (
        <div className='container'>
            <div className="row header">
                <div className="col-lg-6 header-left">
                    <div className='header-title'>
                        <h2>HorlatechBlog is a Professional Blogging Website with the Latest Trending News</h2>
                    </div>
                    <div className='header-content mt-4'>
                        <p>Welcome to our captivating blog, where stories unfold and ideas ignite. Join us as we embark on a journey of inspiration and knowledge. Get ready to explore, engage, and be amazed!.</p>
                    </div>
                    <div className='header-btn mt-3'>
                        <button>Join us</button>
                    </div>
                </div>
                <div className="col-lg-6 header-right">
                    <img src={HeaderImage} alt='header-image' />
                </div>
            </div>
        </div>
    )
}

export default Header
