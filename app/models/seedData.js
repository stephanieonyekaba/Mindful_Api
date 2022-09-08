
// ********************************************************************
// ****** CAUTION *****************************************************
// ****** The script will first drop all documents ********************
// ****** ALL DATA DROPPED WILL BE GONE GONE GONE *********************
// ********************************************************************

// 1. Require Mongoose to make a database connection in the file
const mongoose = require("mongoose")
// 2. Get db config string from the file
const db = require("../../config/db")
// 3. Bring in our models
const Yogas = require("./yoga")
const Affirmations = require("./affirmation")
const Journals = require("./journal")
const Reviews = require("./review")


//comment
//YOGA SEED DATA 

    const yoga_poses = [
        {
        "sanskrit_name": "Navasana",
        "english_name": "Boat Pose",
        "img_url": "https://i.ibb.co/5BsCgRF/BOAT.png",
        "pose_benefits": "Boat Pose builds focus and body awareness. It can boost energy and fight fatigue, and help build confidence and empowerment. Boat Pose also improves posture and counteracts the effects of prolonged sitting and doing computer work by strengthening your core and thighs."
        },
        {
        "sanskrit_name": "Setu Bandha Sarvangasana",
        "english_name": "Bridge Pose",
        "img_url": "https://i.ibb.co/r2QG1KP/BRIDGE.png",
        "pose_benefits": "Bridge Pose improves posture and counteracts the effects of prolonged sitting and computer work. It may help relieve low back pain and can counteract slouching and kyphosis (abnormal curvature of the spine). The pose gently stretches your abdomen, chest, and the area around your shoulders while strengthening your back muscles, buttocks (glutes), thighs, and ankles."
        },
        {
        "sanskrit_name": "Utkatasana",
        "english_name": "Chair Pose",
        "img_url": "https://i.ibb.co/tpt1HcN/CHAIR.png",
        "pose_benefits":"Chair Pose improves balance and can build cardiovascular health and resilience. It primarily strengthens your core, thighs, and ankles."
        },
        {
        "sanskrit_name": "Utkatasana",
        "english_name": "Child's Pose",
        "img_url": "https://i.ibb.co/nBhhJhj/CHILD.png",
        "pose_benefits": "Child’s Pose gently stretches the hips, thighs, and ankles. It relieves back and neck pain when done with head and torso supported. Balasana also calms the brain and helps relieve stress and fatigue."
        },
        {
        "sanskrit_name": "Balasana",
        "english_name": "Chair Pose",
        "img_url": "https://i.ibb.co/tpt1HcN/CHAIR.png",
        "pose_benefits":"Chair Pose improves balance and can build cardiovascular health and resilience. It primarily strengthens your core, thighs, and ankles."
        },
        {
        "sanskrit_name": "Bhujangasana",
        "english_name": "Cobra Pose",
        "img_url": "https://i.ibb.co/VT0vTps/COBRA.png",
        "pose_benefits":"Cobra Pose can boost energy,  fight fatigue, and build confidence. It improves posture and counteracts the effects of prolonged sitting and computer work."
        },
        {
        "sanskrit_name": "Adho Mukha Svanasana",
        "english_name": "Downward-Facing Dog",
        "img_url": "https://i.ibb.co/wW0ZTL0/DOWNWARD-FACING-DOG.png",
        "pose_benefits":"Downward-Facing Dog Pose tones the arms and legs, opens and strengthens the shoulders in flexion, lengthens the hamstrings, stretches the calves, and prepares the body for heating."
        },
        {
        "sanskrit_name": "Uttanasana",
        "english_name": "Standing Forward Bend",
        "img_url": "https://i.ibb.co/Jrw6chP/FOLD.png",
        "pose_benefits": "Standing Forward Bend calms the brain and helps relieve stress. This pose also stimulates the liver and kidneys, and stretches the hamstrings, calves, and hips."
        },
        {
        "sanskrit_name": "Forearm Plank",
        "english_name": "Dolphin Plank Pose",
        "img_url": "https://i.ibb.co/kcBgWNB/PLANK.png",
        "pose_benefits": "Forearm Plank can be a great alternative to standard Plank Pose if you have wrist or hand issues. It improves posture and counteracts the effects of prolonged sitting and doing computer work; it strengthens your core (including the abdominals and back muscles), arms, shoulders, thighs, legs, and feet. Trust Dolphin Plank to help stimulate proper digestion by facilitating movement through the digestive tract (peristalsis)."
        },
        {
        "sanskrit_name": "Vrksasana",
        "english_name": "Tree Pose",
        "img_url": "https://i.ibb.co/0GsdhJm/TREE.png",
        "pose_benefits":"This standing posture can help improve your balance, as well as your postural and body awareness. In addition to its physical benefits, this pose can assist in calming and relaxing the mind—relieving anxious thoughts and feelings."
        },
        {
        "sanskrit_name": "Utthita Trikonasana ",
        "english_name": "Extended Triangle Pose",
        "img_url": "https://i.ibb.co/k1f0fdx/TRIANGLE.png",
        "pose_benefits": "Extended Triangle is good for lengthening the spine and strengthening the thighs and torso. This pose also stretches the hips, groin, hamstrings, calves, shoulders, chest, and spine. This posture improves digestion by stimulating the abdominal organs."
        },
        {
        "sanskrit_name": "Urdhva Mukha Svanasana",
        "english_name": "Upward-Facing Dog Pose",
        "img_url": "https://i.ibb.co/YtDgYmB/UPWARD-FACING-DOG.png",
        "pose_benefits": "As a posture-improving pose, Upward-Facing Dog strengthens your spine, arms, and wrists. It also stimulates the abdominal organs and stretches your chest, lungs, shoulders, and abdomen."
        },
        {
        "sanskrit_name": "Virabhadrasana I ",
        "english_name": "Warrior I Pose",
        "img_url": "https://i.ibb.co/DMYcDJn/WARRIOR.png" ,
        "pose_benefits":"Warrior I stretches your chest, lungs, shoulders, neck, belly and groin. It also strengthens your shoulders, arms, and back muscles, as well as your calves, ankles, and thighs."
        },
        {
        "sanskrit_name": "Virabhadrasana II ",
        "english_name": "Warrior II Pose",
        "img_url": "https://i.ibb.co/QCGFHWQ/WARRIOR-2.png",
        "pose_benefits": "The standing posture opens your hips and strengthens and stretches your legs and ankles."
        }
    ]


//AFFIRMATION SEED DATA
    const affirmations_list = [
        {
        "mantra": "My mind is brilliant. My body is healthy. My spirit is tranquil."
        },
        {
        "mantra": "I create my own path and walk it with joy."
        },
        {
        "mantra": "My positive thoughts guide me to new heights."
        },
        {
        "mantra": "I am conquering my fears and becoming stronger each day."
        },
        {
        "mantra": "I will have a good day, because it’s my choice."
        },
        {
        "mantra": " I let go of anything not for my highest good."
        },
        {
        "mantra": " All I need comes to me when I need it."
        },
        {
        "mantra": "I am thankful for all life has given me."
        },
        {
        "mantra": "My thoughts are filled with positivity and my life is plentiful with prosperity."
        },
        {
        "mantra": "I AM a creative being with unlimited potential."
        },
        {
        "mantra": "I AM ready and capable."
        },
        {
        "mantra": "I let go of struggle & suffering. I AM allowing in joy & wellness."
        }
    ]
        

//JOURNAL SEED DATA
const starter_journals = [
    {
    "date": "04/20/2022",
    "title": "What I did today",
    "entry": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
    "date": "04/22/2022",
    "title": "BEST DAY OF MY LIFE",
    "entry": "Sollicitudin aliquam ultrices sagittis orci a. Orci nulla pellentesque dignissim enim sit amet. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Vitae elementum curabitur vitae nunc. Mattis ullamcorper velit sed ullamcorper morbi. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. A condimentum vitae sapien pellentesque habitant morbi tristique. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Urna cursus eget nunc scelerisque viverra. Elit sed vulputate mi sit. Netus et malesuada fames ac. Phasellus vestibulum lorem sed risus ultricies. Egestas tellus rutrum tellus pellentesque eu tincidunt. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Non sodales neque sodales ut etiam sit."
    },
    {
    "date": "04/13/2022",
    "title": "My favorite yoga poses are",
    "entry": "Eu nisl nunc mi ipsum faucibus vitae. Viverra mauris in aliquam sem fringilla. Ultrices dui sapien eget mi proin. Nulla facilisi etiam dignissim diam. Habitant morbi tristique senectus et. Consectetur libero id faucibus nisl. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Eget arcu dictum varius duis. Turpis massa sed elementum tempus egestas. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Lectus proin nibh nisl condimentum. Bibendum neque egestas congue quisque egestas diam in. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor."
    }
]

//REVIEWS SEED DATA 
const reviews_data = [
    {
        "img_url": "https://i.ibb.co/BVJHMf2/Screen-Shot-2022-09-04-at-11-32-55-PM.png",
        "name":"Anna",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
},
{
    "img_url": "https://i.ibb.co/Jkdpd5K/Screen-Shot-2022-09-04-at-11-33-39-PM.png",
    "name":"Kevin",
    "quote": "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
},
{
    "img_url": "https://i.ibb.co/t3mS5c9/Screen-Shot-2022-09-04-at-11-34-25-PM.png ",
    "name":"Maureen",
    "quote": "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
},
{
    "img_url": "https://i.ibb.co/2PGSmr7/Screen-Shot-2022-09-04-at-11-35-31-PM.png ",
    "name":"Rachel",
    "quote": "Hello Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
},
{
    "img_url": "https://i.ibb.co/YtCttrb/Screen-Shot-2022-09-04-at-11-36-26-PM.png ",
    "name":"James",
    "quote": "Wow Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"
}


]








    

//////////////////////////
// Seeding Collections
//////////////////////////
//
// Connect to the database via Mongoose (reference server.js)
    mongoose.connect(db, {
	    useNewUrlParser: true,
        })
        // Remove all the documents currently in the database, then create a bunch of new documents in the collection from the appropriate array above.
        .then(() => {
            Yogas.remove({}).then(() => {
                Yogas.create(yoga_poses).then(() => {
                    console.log("yoga poses data seeded.")})
        .then(() => {
            Affirmations.remove({}).then(() => {
                Affirmations.create(affirmations_list).then(() => {
                    console.log("affirmations data seeded.")})
                    
        .then(() => {
            Reviews.remove({}).then(() => {
                Reviews.create(reviews_data).then(() => {
                    console.log("reviews data seeded.")})

        
        .then(() => {
            Journals.deleteMany({owner: null}).then(deletedJournals => {
                Journals.create(starter_journals).then(() => {
                    console.log("journals data seeded.")})
        ////////////////////////////
        // yoga poses error catchers
        ////////////////////////////

        ////////////////////////////
        //  error catchers
        ////////////////////////////
                    })
                .catch(error => {
                    console.log(error)
                    mongoose.connection.close()
                    })
                })
                .catch(error => {
                    console.log(error)
                    mongoose.connection.close()
                    })
                })
                .catch(error => {
                    console.log(error)
                    mongoose.connection.close()
                    })
                })
                .catch(error => {
                    console.log(error)
                    mongoose.connection.close()
                    })
                })

                .catch(error => {
                    console.log(error)
                    mongoose.connection.close()
                    })
                })

                })
            })


//////////////////////////
// End seed script
//////////////////////////