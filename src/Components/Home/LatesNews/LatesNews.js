import React from 'react';

const latesnews = [ {} ];
const LatesNews = () => {
	return (
		<div className="mt-3 mb-3 p-5">
			<div className="mb-5">
				<h1 style={{ color: '#F46150' }}>OUR BLOGS</h1>
				<p>
					Read our latest Blogs
					for discounts.
				</p>
			</div>

			<div class="row row-cols-1 row-cols-md-3 g-3">
				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img
							src="https://i.ibb.co/h94zZWB/pexels-haste-leart-v-690598.jpg"
							alt=""
						/>
						<div className="card-body">
							<span>October 10, 2021</span>
							<div className="card-title">
								<h5>Top 10 Best ways to do Yoga </h5>
							</div>
							<p>
								These 10 poses are a complete yoga workout. Move slowly through each pose, remembering to breathe as you move. Pause after any pose you find challenging, especially if you are short of breath, and start again when your breathing returns to normal. The idea is to hold each pose for a few, slow breaths before moving on to the next one.
							</p>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img
							src="https://i.ibb.co/q9PP7HR/pexels-artem-beliaikin-616999.jpg"
							alt=""
						/>
						<div className="card-body">
							<span>October 1, 2021</span>
							<div className="card-title">
								<h5>What Is Yoga? </h5>
							</div>
							<p>
								It’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits. yoga has the power to calm the mind and strengthen the body.
							</p>
						</div>
					</div>
				</div>

				<div className="col">
					<div className="card" style={{ backgroundColor: '#EDEDED' }}>
						<img src="https://i.ibb.co/4fDZNGk/pexels-andrea-piacquadio-3772502.jpg" alt="" />
						<div className="card-body">
							<span>September 22, 2021</span>
							<div className="card-title">
								<h5>Yoga and Meditation</h5>
							</div>
							<p>
								A set of specific exercises, called poses, combined with specific breathing techniques and meditation principles are the building blocks of a yoga class. If a pose causes pain or proves too difficult, there are variations and modifications that can be made to help students. Props like chairs — can be used to help you get the most benefit from the poses.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatesNews;
