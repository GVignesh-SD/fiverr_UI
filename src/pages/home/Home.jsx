import React from 'react'
import './Home.scss'
import Featured from '../../components/Featured/Featured'
import TrustedBy from '../../components/trustedby/TrustedBy'
import Slide from '../../components/Slide/Slide'
import { cards,projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
function Home() {
  return (
    <div className="home">
        <Featured />
        <TrustedBy />
        <Slide slidesToShow={5} arrowsScroll={5}>
            {
            cards.map(card => (
                <CatCard key={card.id} item={card}  />
            ))}
        </Slide>
        <div className="features">
            <div className="container">
                <div className="item">
                    <h1>A whole world of freelance talent at your fingertips</h1>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        The best for every budget
                    </div>
                    <p>
                        Find high-quality services at every price point. No hourly rates, just project-based pricing.
                    </p>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                       Quality work done quickly best for every budget
                    </div>
                    <p>
                        Find high-quality services at every price point. No hourly rates, just pFind the right freelancer to begin working on your project within minutes.
                    </p>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Protected payments, every time
                    </div>
                    <p>
                        Always know what you'll pay upfront. Your payment isn't released until you approve the work.
                    </p>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        24/7 support
                    </div>
                    <p>
                    Questions? Our round-the-clock support team is available to help anytime, anywhere.
                    </p>

                </div>
                <div className="item">
                    <video src="./img/elon.mp4" controls></video>
                </div>
            </div>
        </div>
        <div className="features dark">
            <div className="container">
                <div className="item">
                    <h1>fiverr business</h1>
                    <h1>A Business solution designed for teams</h1>
                    <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Connnect to freelancers with proven business experience
                    </div>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Get matched with the perfect talent by a customer success manager
                    </div>
                    <div className="title">
                        <img src="./img/check.png" alt="" />
                        Manage teamwork and boost productivity with one powerful workspace                    </div>
                    <button>Explore fiverr Business</button>
                </div>
                <div className="item">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_836,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114294/business-mobile-836-x1.png" alt="" />
                </div>
            </div>
        </div>
        <Slide slidesToShow={4} arrowsScroll={4}>
            {
            projects.map(card => (
                <ProjectCard key={card.id} item={card}  />
            ))}
        </Slide>
    </div>
  )
}

export default Home