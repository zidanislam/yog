import React from 'react';
import Service from './../Service/Service';
const services = [
	{
		id: 1,
		img: 'https://i.ibb.co/Y2cbNgJ/pexels-rodnae-productions-8174447.jpg',
		name: 'Mahmudul Hasan',
		des:
			'I am a yoga teacher of ashtang yoga for beginners. I am a diploma holder in Yoga from Banaras University.',
		sdes: 'Meditation Yoga'
	},

	{
		id: 2,
		img: 'https://i.ibb.co/vz4Y4xh/pexels-ruslan-alekso-1525852.jpg',
		name: 'Rashedul Islam',
		des: 'I’m a Hatha Yoga teacher and in addition to Asanas and Mudras, I also focus on Mantras and Meditation.',
		sdes: 'Aerial Yoga'
	},

	{
		id: 3,
		img: 'https://i.ibb.co/3SrQvZX/pexels-the-lazy-artist-gallery-999309.jpg',
		name: 'Toibur Rahman',
		des: 'An expert in Yoga.Can teach Yoga to beginners and even to advanced learners as well.Been practicing Yoga for the past 5 years.',
		sdes: 'Mastering Anxiety'
	},

	{
		id: 4,
		img: 'https://i.ibb.co/KrMMscD/pexels-andrea-piacquadio-3965401.jpg',
		name: 'Abir Mahmud',
		des: 'I am a therapist and health coach. I work with people going through physical and emotional challenges and help from yoga.  ',
		sdes: 'Vinyasa Krama'
	},

	{
		id: 5,
		img: 'https://i.ibb.co/9y4d492/pexels-cottonbro-4325446.jpg',
		name: 'Morsalim Haque',
		des: 'I am a highly experienced essay writer having been in this industry for more than five years and is an expert in advanced forms of Yoga.',
		sdes: 'Yamas and Niyamas'
	},

	{
		id: 6,
		img: 'https://i.ibb.co/gSpTgXx/pexels-artem-beliaikin-617000.jpg',
		name: 'Nabab Talukdar',
		des:
			'Provide you a customized and personalised bodyweight and strength training plan and assist you throughout your fitness journey. ',
		sdes: 'Kundalini Yoga'
	},
	{
		id: 7,
		img: 'https://i.ibb.co/FqGxVpR/pexels-karolina-grabowska-6633760.jpg',
		name: 'Murshida Nur',
		des:
			'I am a yoga teacher of ashtang yoga for beginners. I am a diploma holder in Yoga from Banaras University.',
		sdes: 'Iyengar Yoga'
	},
	{
		id: 8,
		img: 'https://i.ibb.co/3FY7PWT/pexels-marcus-aurelius-6787202.jpg',
		name: 'Khorseda Alom',
		des:
			'Expert in person training according to one individual needs and goals in healthier manner using the core principles of health fitness.',
		sdes: 'Hatha Yoga'
	},
	{
		id: 9,
		img: 'https://i.ibb.co/xMJ9ytg/pexels-burst-374909.jpg',
		name: 'Jessica Miller',
		des:
			'I am Jessica Miller, associated as an AYUSH trainer at The Mind Care India and working as a freelance yoga instructor since 2017.',
		sdes: 'Astanga Yoga'
	}
];
const Services = () => {
	return (
		<div className="mx-3 mb-4">
            <h1 className="mt-5 mb-5 bold" style={{color:"#F46150"}}>Our Services</h1>
			<div class="row row-cols-1 row-cols-md-3 g-3">
				{services.map((service) => <Service
                 key={service.id}
                  service={service}
                   />)}
			</div>
		</div>
	);
};

export default Services;
