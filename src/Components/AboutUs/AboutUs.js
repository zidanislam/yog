import React from 'react';
import LatesNews from './../Home/LatesNews/LatesNews';

const AboutUs = () => {
	return (
		<div>
			<div className="pt-5 p-3">
				<div className="mb-3">
                    <h1 style={{ color: '#F46150' }}>Our Trainers</h1>
                </div>

				<div class="card-group">
					<div class="card">
						<img
							src="https://i.ibb.co/7CLv6Gg/pexels-andrea-piacquadio-3757955-1.jpg"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<h3>June Miller</h3>
							<small>
								Yoga is a mind and body practice. Various styles of yoga combine physical postures,and meditation or relaxation.
							</small>
						</div>
					</div>

					<div class="card">
						<img src="https://i.ibb.co/RNnWrK5/pexels-elina-fairytale-3823039-1.jpg" alt="" className="card-img-top" />
						<div className="card-body">
							<h3>Rebeka Summers</h3>
							<small>
								This is a generic term for any type of yoga that teaches physical poses. Hatha classes usually serve as a gentle introduction to the basic poses of yoga.
							</small>
						</div>
					</div>
					<div class="card">
						<img
							src="https://i.ibb.co/FHM6ky5/pexels-natalie-3759659-1.jpg"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<h3>Ashley Maximoff</h3>
							<small>
								This article explores the history, philosophy, health and wellness benefits, and various branches of yoga.
							</small>
						</div>
					</div>
					<div class="card">
						<img
							src="https://i.ibb.co/3yVhFQr/pexels-david-gomes-2647471-2.jpg"
							alt=""
							className="card-img-top"
						/>
						<div className="card-body">
							<h3>Teressa May</h3>
							<small>
								There are several types of yoga and many disciplines within the practice. 
							</small>
						</div>
					</div>
				</div>
			</div>
			<LatesNews />
		</div>
	);
};

export default AboutUs;
