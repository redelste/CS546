const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(
    	[
	        {
	        	schoolName: 'Carmel Valley Middle School',
	        	degree: 'Middle School Diploma',
	        	favoriteClass: 'Algebra 1',
	        	favoriteMemory: 'The time a swarm of bees flew through the campus causing a stampede of students. This resulted in me hearing what sounded like an earthquake, as I was sitting on the ground accross the quad. This quad area was about half an acre in size.',
	        },
          {
           schoolName: 'Canyon Crest Academy',
           degree: 'High School Diploma',
           favoriteClass: 'AP Calculus AB',
           favoriteMemory: 'Climmbing on the roof and stealing a roof tile as a keepsake. I plan to pass on this tile on to my children.',
         },
			    {
	        	schoolName: 'Stevens Institute of Technology',
	        	degree: 'Bachelor\'s Degree',
	        	favoriteClass: 'Human Computer Interaction',
	        	favoriteMemory: 'Taking in the sweet view from Pierce Dining hall, where the view is UNBEATABLE! You get a full panorama of the New York City Skyline. Coming from the west coast, this is truly an remarkable specatcle.',
	        },
        ]
    );
});
module.exports = router;
