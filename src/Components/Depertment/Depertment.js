import React from 'react';

const Depertment = () => {
	return (
		<div>
			<div className="py-3">
				<h1 style={{ color: '#F46150' }}>DEPERTMENT</h1>
			</div>
			<div className="row mt-4 mb-4">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img className="img-fluid" src="https://i.ibb.co/TPYYbV1/pexels-elina-fairytale-4662438.jpg" alt="" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<h3 style={{ color: '#F46150' }}>Yamas and Niyamas</h3>
					<p className="mt-4 mb-4">
						Some styles of yoga, such as ashtanga and power yoga, are very physical. Practicing one of these styles will help you improve muscle tone.

						But even less vigorous styles of yoga, such as Iyengar or hatha, can provide strength and endurance benefits.
						Many of the poses, such as downward dog, upward dog, and the plank pose, build upper-body strength. The standing poses, especially if you hold them for several long breaths, build strength in your hamstrings, quadriceps, and abs. Poses that strengthen the lower back include upward dog and the chair pose
					</p>
					<button style={{ backgroundColor: '#F46150', color: 'white' }} className="btn">
						Read more
					</button>
				</div>
			</div>

			<div className="row mt-4 mb-4">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img
						className="img-fluid"
						src="https://i.ibb.co/zh2WvQk/pexels-andrea-piacquadio-868757.jpg"
						alt=""
					/>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<h3 style={{ color: '#F46150' }}>Mastering Anxiety</h3>
					<p className="mt-4 mb-4">
						When you're stronger and more flexible, your posture improves.

						Most standing and sitting poses develop core strength, since you need your core muscles to support and maintain each pose.

						With a stronger core, you're more likely to sit and stand "tall."

						Yoga also helps your body awareness. That helps you notice more quickly if you're slouching or slumping, so you can adjust your posture.
					</p>
					<button style={{ backgroundColor: '#F46150', color: 'white' }} className="btn">
						Read more
					</button>
				</div>
			</div>
		</div>
	);
};

export default Depertment;
