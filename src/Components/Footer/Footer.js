import React from 'react';
import './Footer.css';
import reportWebVitals from './../../reportWebVitals';
const Footer = () => {
	return (
		<div className="bg-secondary text-white align-center p-5">
			<div className="row p-3">
				<div className="col-lg-4 col-md-4 com-sm-12">
					<img className="img-fluid" src="https://i.ibb.co/HgPBdRX/yoga-logo-1-removebg-preview-1.png" alt="" />
					<p>
					Sadhana is a Sanskrit term that means to accomplish, solve, realize, or do. In practical terms, it means to breathe, exercise, visualize, remember, concentrate, interrogate (our own mind), resonate, and divinely grind, bead-by-bead on the mala of days and decades until we realize that our practice never ends.
					</p>
				</div>
				<div className="col-lg-4 col-md-4 com-sm-12">
					<h5 className="mb-3">Recent Posts</h5>
					<div className="img justify-content-around">
						<img
							className="img-fluid w-50"
							src="https://i.ibb.co/TmmmT2m/istock-000016994756small.jpg"
							alt=""
						/>
						<div>
							<small>OCTOBER 10, 2021</small>
							<p>
								Top 10 best <br />Ways to do Yoga
							</p>
						</div>
					</div>
					
				</div>
				
				<div className="col-lg-4 col-md-4 com-sm-12" >
                    <h4>Our services</h4>
                    <p>Iyengar Yoga</p>
                    <p>Astanga Yoga</p>
                    <p>Aerial Yoga</p>
                    <p>Mastering Anxiety</p>
                    <p>Meditation Yoga</p>
                </div>
			</div>
            <hr/>
            <p> &copy; zidanislam 2021. All rights reserved.</p>
		</div>
	);
};

export default Footer;
