import React from 'react'
import './Gig.scss'
import Slider from 'infinite-react-carousel';
function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">
            FIVERR > Graphics & Design
          </span>
          <h1>
            I will create a AI Generated art for you
          </h1>
          <div className="user">
            <img className="pp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ917ynRnWCkJT4_vn6Sbhu7CNGTU4ayLAZGBhzH9NdsdXc6tr7Owzn&usqp=CAE&s" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/268197245/original/5faac36a1e54ec6b1d7e7a93c5f169b71aa1d07d/be-your-frontend-web-developer-do-frontend-development-react-html-css-bootstrap.jpg" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/82f25d1d11eff4e8a2299713f99ebfc4-1679704903/brandalta/be-your-frontend-web-developer-do-frontend-development-react-html-css-bootstrap.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/34e536a65ca65561499ab9b7a78b607f-1677626803/Screenshot_1/be-your-frontend-web-developer-do-frontend-development-react-html-css-bootstrap.png" alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>Hi buddy,Are you searching for a frontend web developer who can do your frontend project on time? then you have found the right gig. I'm a Frontend Web Developer, I mastered React Js, HTML, CSS, JavaScript, Bootstrap. I can convert your design into pixel perfect frontend website. I provide well structured, cross-browse compatibility, valid, adaptive, featured, clean, readable and maintainable code.</p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ917ynRnWCkJT4_vn6Sbhu7CNGTU4ayLAZGBhzH9NdsdXc6tr7Owzn&usqp=CAE&s" alt="" />
              <div className="info">
                <span>
                  Elon Musk
                </span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">1 hour</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, Hindi, Urdu, Spanish</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">May 2022</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">about 1 hour</span>
                </div>
              </div>
              <hr/>
              <p>
                This is Elon Musk, I’m an Business Magnate.
Here at Fiverr, I am offering my service on work related to frontend web development. High attention to detail and being punctual are my specialty. I always focus on building long-term relationships with all my clients by delivering the work as requested at a competitive price.
If you have any queries, please reach out to me and I’ll be more than happy to answer them.
                </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt89n0N77uM16nBxHiJDSZrLHJMkohnPrIDGtICabF_oN14W2NzfxM&usqp=CAE&s" alt="" />
                <div className="info">
                  <span>Elon Musk</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
              The communication was insanely quick; my order was delivered in less than an hour. However, the pricing was not very transparent, and I was quoted over my budget initially before some pushing back. I would get the price before working with this seller, but otherwise, it was a great service and I would definitely recommend if you need some modifications to some HTML.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className="pp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt89n0N77uM16nBxHiJDSZrLHJMkohnPrIDGtICabF_oN14W2NzfxM&usqp=CAE&s" alt="" />
                <div className="info">
                  <span>Elon Musk</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
              The communication was insanely quick; my order was delivered in less than an hour. However, the pricing was not very transparent, and I was quoted over my budget initially before some pushing back. I would get the price before working with this seller, but otherwise, it was a great service and I would definitely recommend if you need some modifications to some HTML.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className="pp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt89n0N77uM16nBxHiJDSZrLHJMkohnPrIDGtICabF_oN14W2NzfxM&usqp=CAE&s" alt="" />
                <div className="info">
                  <span>Elon Musk</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
              </div>
              <p>
              The communication was insanely quick; my order was delivered in less than an hour. However, the pricing was not very transparent, and I was quoted over my budget initially before some pushing back. I would get the price before working with this seller, but otherwise, it was a great service and I would definitely recommend if you need some modifications to some HTML.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
            <div className="price">
              <h3>AI generated image</h3>
              <h3>$59.99</h3>
            </div>
            <p>1 Single Page & upto 1-4 Section</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>2 days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>3 Revision</span>
              </div>
            </div>
            <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Writing</span>
              </div>
            </div>
            <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig