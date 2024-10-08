import Link from "next/link";
import React from "react";
import Image from "next/image";
import poster from "../../../assets/poster.jpg";
import EventCard from "@/components/EventCard";
import komicSense from "@/assets/komicSense.jpg";
import battleOfMinds from "@/assets/battleOfMinds.png";
import bugHunt from "@/assets/bugHunt.jpg";
import bitNBytes from "@/assets/bitsNBytes.jpg";
import techStar from "@/assets/techStar.jpg";
import innovision from "@/assets/innovision.jpg";
import iqonnect from "@/assets/iQonnect.jpg";
import explison from "@/assets/explicon.jpg";

function page({params}) {
    const headingStyle = "text-lg font-bold mt-4";
    const data = {
        // Scientific Poster Competition
        "explicon": {

            mainHeading: "Explicon: Scientific Poster Competition",
            desc: "Join us at Explicon, where science meets creativity. This event offers participants a platform to present original ideas through visually engaging scientific posters. Explicon is the perfect opportunity to share your vision and connect with like-minded peers.",

            heading1: "Event Format",
            desc1: "The journey begins with an abstract submission round. Participants must submit a 150-word abstract in Microsoft Word by the submission date. The abstract should include the title of the poster, author name(s), and college affiliation. The most compelling abstracts will be shortlisted for the final presentation.",

            heading2: "Final Presentation",
            desc2: "Shortlisted participants will create their posters using a designated template that will be provided. Posters will be presented on 15th October 2024.",

            heading3: "Judging Criteria",
            desc3: "Participants will be evaluated on content, originality, and presentation. Only 15 abstracts will be shortlisted. The judges' decision will be final and binding. Explicon promises to be an intellectually stimulating and competitive event, where groundbreaking ideas come to life. Step forward and share your insights with the next generation of innovators!",

            submissiondate: "11th October 2024",
            venue: "Auditorium",
            timing: "09:00 AM - 11:00 AM",


            majorHeading1: "Guidlines",
            guidlines: {
                one: "Participants will be provided with a designated poster template. Poster size is set at 3' x 2'.",
                two: "Deadline: Abstracts must be submitted by 11th October 2024.",
                three: "Format: Submit the abstract as a Microsoft Word file.",
                four: "Content: The abstract (150 words max) must include: Title of the poster, Author's name(s), College name (Affiliation)",
                five: "Submission Email: Send your abstract to societytheempirical@gmail.com.",
                six: "Note: Shortlisting for participation will be based on abstract quality.",
                seven: "Time Limit: Participants will have a total of 5 minutes: 3 minutes for presentation, 2 minutes for a question-answer session with the panel",
                eight: "Participant Limit: A maximum of 20 participants will be selected.",
                nine: "Strictly adhere to the provided topics when creating their posters.",
                ten: "",
            },

            majorHeading2: "Presentation Format",
            presentationFormat: {
                one: "3 minutes to explain the core concepts of the poster.",
                two: "2 minutes for a dynamic Q&A session with the judging panel ",
                three: "",
                four: "",
            },

            majorHeading3: "Topics",
            topics: {
                one: "1. VIKSIT BHARAT(Developed India 2047)",
                two: "2. ML for climate change Prediction ",
                three: "3.	Role of AI in Big data",
                four: "4.	Digital Detox",
                five: "5.	Waste Reduction ",
                six: "6.	Impact of technology on workplace ",
                seven: "7.	Sustainability Technology ",
                eight: "8.	Waste Reduction ",
                nine: "9.	Impact of 5G Technology on connectivity",
                ten: "10.	AI Ethics ",
                eleven: "11.	Cyber bullying (Awareness and prevention strategies in digital communication ",
                twelve: "12.	Healthy Eating and Nutrition ",
                thirteen: "13.	Robotics and automation in Industry",
                fourteen: "14.	Space exploration (future vision of space stations)",
                fifteen: "",
                sixteen: "",
                seventeen: "",
                eighteen: "",
                nineteen: "",
                twenty: "",
            },
            imgurl:explison,

        },
        // The Bug Hunt
        "thebughunt": {

            mainHeading: "THE BUG HUNT",
            desc: "A challenging quiz competition designed to test your comprehensive knowledge of electrical and technical concepts. This event will delve into both hardware and software aspects, pushing your understanding to new heights. The Bug Hunt is the perfect opportunity to showcase your technical prowess and compete with the best.",

            heading1: "Event Format",
            desc1: "TThe competition is divided into three rounds, each increasing in difficulty. Participants will be ranked based on the total time taken to complete each round with the most correct answers. The fastest and most accurate participant will be crowned the champion of The Bug Hunt! Only individual participation is allowed. Any form of cheating or foul play will lead to disqualification. Your success will solely depend on your knowledge and abilities. Only first 70 entries will be entertained. So, gear up and register for the most exciting quiz competition! Let's hunt the bugs🐛",

            heading2: "",
            desc2: "",

            heading3: "",
            desc3: "",

            venue: "IT Lab, MMS Block",
            timing: "09:00 AM - 11:00 AM",


            majorHeading1: "Guidlines",
            guidlines: {
                one: "1. 3 round with time limit ",
                two: "2. MCQ based quiz",
                three: "3. Testing electrical and tech knowledge ",
                four: "4. ONLY individual participating allowed",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
            },
            majorHeading2: "",
            presentationFormat: {
                one: "",
                two: "",
                three: "",
                four: "",
            },

            majorHeading3: "",
            topics: {
                one: "",
                two: "",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
                eleven: "",
                twelve: "",
                thirteen: "",
                fourteen: "",
                fifteen: "",
                sixteen: "",
                seventeen: "",
                eighteen: "",
                nineteen: "",
                twenty: "",
            },
            imgurl:bugHunt,

        },
        //Bits 'N' Bytes
        "bitsnbytes": {

            mainHeading: "BITS 'N' BYTES",
            desc: "The science-inspired food decor event is fun and creative.This competition offers an exciting opportunity to blend your love for food with a scientific twist. The event is open to the first 10 teams, with each team consisting of two members.",

            heading1: "Instructions",
            desc1: "Participants are required to prepare their dishes in advance, as no cooking is allowed at the venue. All food items must be strictly vegetarian (eggless). The focus of this event is on the artistic and thematic display of your food, inspired by the world of science. You’ll have 45 minutes to set up your presentation, giving you plenty of time to create an impressive display.",

            heading2: "",
            desc2: "",

            heading3: "Judging Criteria",
            desc3: "Judging will be based on two key criteria: presentation and taste. Additionally, extra points will be awarded for maintaining a clean and organized setup. Get ready to showcase your creativity and bring science to the table!",

            venue: "R1, MMS Block",
            timing: "09:00 AM - 11:00 AM",


            majorHeading1: "Guidlines",
            guidlines: {
                one: "1. Theme: Science-inspired food decoration.",
                two: "2. ONLY 10 entries will be accepted on First-come, First-serve basis",
                three: "3. 2 members per team are allowed.",
                four: "4. All food must be prepared beforehand; ONLY display of the food item is permitted.",
                five: "5. Cooking is NOT allowed at the venue.",
                six: "6. Dishes should be vegetarian (eggless) ONLY.",
                seven: "7. Extra points will be awarded for clean work.",
                eight: "8. Time limit :- 45 minutes",
                nine: "9. Judgement Criteria :- Presentation and taste",
                ten: "",
            },
            majorHeading2: "",
            presentationFormat: {
                one: "",
                two: "",
                three: "",
                four: "",
            },

            majorHeading3: "",
            topics: {
                one: "",
                two: "",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
                eleven: "",
                twelve: "",
                thirteen: "",
                fourteen: "",
                fifteen: "",
                sixteen: "",
                seventeen: "",
                eighteen: "",
                nineteen: "",
                twenty: "",
            },
            imgurl:bitNBytes,

        },
        //Innovision
        "innovision": {

            mainHeading: "InnoVision: A Platform for Visionary Ideas",
            desc: "Join us at InnoVision, an event where creativity meets technology. InnoVision offers participants a unique platform to present their transformative ideas through a structured PowerPoint showcase. Each participant will convey their insights and solutions on topics relevant to today’s scientific and technological landscape.",

            heading1: "Event Format",
            desc1: "InnoVision begins with an abstract submission round. Participants are invited to submit a 150-word abstract, detailing the title of their project, along with their name, and college affiliation, by 11th October 2024. Only the most impactful and innovative abstracts will be shortlisted for the final presentation round.",

            heading2: "Final Presentation",
            desc2: "Finalists will be provided with a 7-slide PowerPoint template, which they must use to develop and present their concepts. Each presentation will include: • 8 minutes for delivering the main content.• 2 minutes for an engaging Q&A session with the judges.With a focus on clarity, originality, and relevance, InnoVision promises to be a highly competitive and experience. Be part of this inspiring event where groundbreaking ideas come to life, and the next generation of innovators step forward.",

            heading3: "",
            desc3: "",

            submissiondate: "11th October 2024",
            venue: "Auditorium",
            timing: "09:00 AM - 11:00 AM",


            majorHeading1: "Guidlines",
            guidlines: {
                one: "Deadline: Submit by 11th October 2024.",
                two: "Send to:  societytheempirical@gmail.com.",
                three: "Format: Submit the abstract as a Microsoft Word file.",
                four: "Template: Use the provided 7-slide template without alterations.",
                five: "Duration: 8 minutes for presentation, followed by 2 minutes for Q&A.",
                six: "Selection Criteria: Based on the quality and relevance of the abstract.",
                seven: "Participants Limit: Up to 15 participants will be selected to present.",
                eight: "Stric",
                nine: "",
                ten: "",
            },

            majorHeading2: "",
            presentationFormat: {
                one: "",
                two: "",
                three: "",
                four: "",
            },

           

            majorHeading3: "Topics",
            topics: {
                one: "1. Blockchain beyond cryptocurrency",
                two: "2. Role of AI in Robotics",
                three: "3. Wearable Technology",
                four: "4. AI in Autonomous Vehicles",
                five: "5. Big data sports analytics (how teams use data to optimize, perform and strategy)",
                six: "6. Security challenges in IOT network",
                seven: "7. Role of deep learning in healthcare",
                eight: "8. Time Series Forecasting (using ML for predicting trends and patterns)",
                nine: "9. Quantum Computing in Cryptography & Security",
                ten: "10. SG & Remote Healthcare",
                eleven: "11. ML in images Speech Recognition Technology",
                twelve: "12. Space-based Quantum Communication (highly secured data transmission)",
                thirteen: "13. SpaceX’s Starship (aim to send humans to the Moon & Mars)",
                fourteen: "14. Asteroid Mining & Space Resources (how to extract valuable materials like rare metals form)",
                fifteen: "15. Economic Viability (what are potential returns on investment from Space Mining)",
                sixteen: "",
                seventeen: "",
                eighteen: "",
                nineteen: "",
                twenty: "",
            },
            imgurl:innovision,

        },
        // Group Discussion
        "battleofminds": {

            mainHeading: "Battle of Minds: Group Discussion",
            desc: "The Group Discussion (GD) will consist of two rounds, during which we will evaluate leadership qualities, clarity of thought, and problem-solving abilities. Participants are encouraged to use facts when agreeing or disagreeing with others' views, and to support their positions with their own reasoning.",

            heading1: "Instructions",
            desc1: "Please note that indiscipline will not be tolerated, and the decision of the judging panel will be considered final. Arguing with the judges is not permitted. Groups will be formed on the spot, and topics will also be assigned at that time. Each group will have only 4 minutes for their discussion. During the GD, please address your fellow participants in a formal manner. For more information, refer to the Group Discussion guidelines.",

            heading2: "",
            desc2: "",

            heading3: "",
            desc3: "",

            venue: "Auditorium",
            timing: "09:00 AM - 11:00 AM",


            majorHeading1: "Guidlines",
            guidlines: {
                one: "1.Maintain decorum.",
                two: "2. There will be 2 rounds with time limit.",
                three: "3. Topics will be revealed in the spot.",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
            },

            majorHeading2: "",
            presentationFormat: {
                one: "",
                two: "",
                three: "",
                four: "",
            },

            majorHeading3: "",
            topics: {
                one: "",
                two: "",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
                eleven: "",
                twelve: "",
                thirteen: "",
                fourteen: "",
                fifteen: "",
                sixteen: "",
                seventeen: "",
                eighteen: "",
                nineteen: "",
                twenty: "",
            },
            imgurl:battleOfMinds,

            
        },
        // komic sense
        "komicsense": {

            mainHeading: "Komic Sense",
            desc: "Calling all creative minds with a knack for technology! The Technical Comic Making Competition is an opportunity to express complex technical topics in a fun, visually engaging, and understandable way. Whether you're passionate about computer science, engineering, physics, or any other technical field, this is your chance to break down challenging concepts into entertaining comic strips.",

            heading1: "",
            desc1: "",

            heading2: "",
            desc2: "",

            heading3: "Judging Criteria",
            desc3: "",

            submissiondate: "11th October 2024",
            venue: "EG Lab, MMS Block",
            timing: "09:00 AM - 11:00 AM",


            majorHeading1: "Guidlines",
            guidlines: {
                one: "1. Entry Limit: A maximum of 25 entries will be accepted on a first-come, first-served basis.",
                two: "2. Topic Announcement: The theme will be disclosed at the beginning of the event.",
                three: "3. Creative Exploration: Participants are encouraged to creatively interpret and illustrate the given topic through their comic story.",
                four: "4. Time Constraint: Each participant will have 45 minutes to complete their comic.",
                five: "5. Materials Provided: Drawing sheets will be supplied at the venue for your convenience.",
                six: "6. Participant Supplies: Participants are required to bring their own stationery and art materials to facilitate their creative process.",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
            },

            majorHeading2: "",
            presentationFormat: {
                one: "",
                two: "",
                three: "",
                four: "",
            },

            majorHeading3: "",
            topics: {
                one: "",
                two: "",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
                eleven: "",
                twelve: "",
                thirteen: "",
                fourteen: "",
                fifteen: "",
                sixteen: "",
                seventeen: "",
                eighteen: "",
                nineteen: "",
                twenty: "",
            },
            imgurl:komicSense,

        },
        //IQonnect Quiz
        "iqonnect": {

            mainHeading: "IQonnect Quiz",
            desc: "Get ready to challenge your brain like never before! GTB4CEC is proud to bring you IQonnect, a high-energy quiz competition designed to test your knowledge, logic, and quick decision-making. Compete as an individual and rise through three intense rounds filled with mind-bending riddles, tricky calculations, and thought-provoking questions. Only the sharpest minds will emerge victorious in this ultimate test of intelligence.",

            heading1: "Event Format",
            desc1: "With only 60 minutes to prove your skills, the top 50% of participants will advance after each round, and the final three will be crowned as champions. This is your chance to showcase your brilliance, win exciting prizes, and earn the ultimate bragging rights. Are you ready to connect with your IQ and take the challenge? Let’s find out on 15th October 2024!",

            heading2: "",
            desc2: "",

            heading3: "",
            desc3: "",

            venue: "IT Lab, MMS Block",
            timing: "09:00 AM - 11:00 AM",

            majorHeading1: "Guidlines",
            guidlines: {
                one: "Round 1: 15 mins (15 questions)",
                two: "Round 2: 15 mins (15 questions)",
                three: "Round 3: 30 mins (10 questions)",
                four: "Question Types: MCQ, True/False, Multiple Correct, Riddles, Calculations.",
                five: "Advancement: Top 50% move to the next round.",
                six: "Winners: Top 3 based on final round scores.",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
            },

            majorHeading3: "",
            topics: {
                one: "",
                two: "",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
            },

            majorHeading2: "",
            presentationFormat: {
                one: "",
                two: "",
                three: "",
                four: "",
            },
            imgurl:iqonnect,

            
        },

        // Tomorrow's Tech Star
        "techstar": {

            mainHeading: "Tomorrow's Tech Star - Viksit Bharat Edition",
            desc: "GTB4CEC College proudly presents Tomorrow's Tech Star, a platform for individual innovators to showcase their visionary ideas. The competition consists of two rounds: an online submission where participants submit a 100-word write-up on their tech project, and an offline final round, where the top 10 selected entries will present their projects via a PowerPoint showcase.",

            heading1: "",
            desc1: "The event, themed 'Viksit Bharat', focuses on technological solutions that contribute to India’s progress. Both hardware and software projects are encouraged.",

            

            heading3: "Judging Criteria",
            desc3: "Novelty: How original and unique is the idea?Scalability: Can the idea be scaled for larger applications?Applicability: How practical and feasible is the solution in real-world scenarios?",

            heading2: "Final Round",
            desc2: "Finalists will have 5 minutes to present their ideas, followed by a 2-minute Q&A with the judges. The final round will take place in the auditorium on October 15th. Join us to witness the rise of tomorrow's tech stars and be part of India’s innovation journey!",

            venue: "Auditorium",
            timing: "09:00 AM - 11:00 AM",

            majorHeading1: "Guidlines",
            guidlines: {
                one: "1. Maintain novelty and innovation in your ideas.",
                two: "2. Please make sure your solution is scalable and practical",
                three: "3. Both hardware and software projects are allowed",
                four: "4. Each team gets 5 minutes to present, followed by a 2-minute Q&A session.",
                five: "5. Individual Participation ",
                six: "6. Only 10 entries will be selected for the final round.",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
            },

            majorHeading3: "Rounds:",
            topics: {
                one: "Online Round:- Submit a 100-word write-up explaining your project topic.",
                two: "Final Round (Offline Round): - Showcase your project via a PowerPoint presentation (PPT) at the venue.",
                three: "",
                four: "",
                five: "",
                six: "",
                seven: "",
                eight: "",
                nine: "",
                ten: "",
            },
            majorHeading2: "",
            presentationFormat: {
                one: "",
                two: "",
                three: "",
                four: "",
            },
            imgurl:techStar,

           
        }
    };

    const liStyle = " ml-6 mt-2";
    return (
        <div className=" text-white w-full h-auto md:mt-28 mt-10 md:px-24 px-10 flex md:flex-col flex-row justify-center min-h-screen">
            <div className="flex md:flex-row flex-col gap-10">
                <div className="md:w-1/3 w-full ">
                    <Image src={data[params.event].imgurl} alt="Poster" className="w-full h-auto rounded" />
                    <p className=" w-full py-6 ">
                        <strong> Venue: </strong>{data[params.event].venue}<br /> <br />
                        {/* <Link href={data[params.event].lumalink}>Register</Link> */}
                        {/* <strong> Timing:</strong> {data[params.event].timing} */}
                    </p>
                </div>
                <div className="md:w-2/3 w-full text-sm">
                    <h2 className='text-lg font-bold'>
                        {data[params.event].mainHeading}
                    </h2>
                    {data[params.event].desc}
                    <h2 className={headingStyle}>{data[params.event].heading1}</h2>
                    {data[params.event].desc1}
                    <h2 className={headingStyle}>{data[params.event].heading2}</h2>
                    {data[params.event].desc2}
                    <h2 className={headingStyle}>
                        {data[params.event].majorHeading2}
                    </h2>
                    <ul>
                        <li className={liStyle}>{data[params.event].presentationFormat.one}</li>
                        <li className={liStyle}>{data[params.event].presentationFormat.two}</li>
                        <li className={liStyle}>{data[params.event].presentationFormat.three}</li>
                        <li className={liStyle}>{data[params.event].presentationFormat.four}</li>
                    </ul>
                    <h2 className={headingStyle}>{data[params.event].heading3}</h2>
                    {data[params.event].desc3}

                    <h2 className={headingStyle}>{data[params.event].majorHeading3}</h2>
                    <ul>
                        <li className={liStyle}>{data[params.event].topics.one}</li>
                        <li className={liStyle}>{data[params.event].topics.two}</li>
                        <li className={liStyle}>{data[params.event].topics.three}</li>
                        <li className={liStyle}>{data[params.event].topics.four}</li>
                        <li className={liStyle}>{data[params.event].topics.five}</li>
                        <li className={liStyle}>{data[params.event].topics.six}</li>
                        <li className={liStyle}>{data[params.event].topics.seven}</li>
                        <li className={liStyle}>{data[params.event].topics.eight}</li>
                        <li className={liStyle}>{data[params.event].topics.nine}</li>
                        <li className={liStyle}>{data[params.event].topics.ten}</li>
                        <li className={liStyle}>{data[params.event].topics.eleven}</li>
                        <li className={liStyle}>{data[params.event].topics.twelve}</li>
                        <li className={liStyle}>{data[params.event].topics.thirteen}</li>
                        <li className={liStyle}>{data[params.event].topics.fourteen}</li>
                        <li className={liStyle}>{data[params.event].topics.fifteen}</li>
                        <li className={liStyle}>{data[params.event].topics.sixteen}</li>
                        <li className={liStyle}>{data[params.event].topics.seventeen}</li>


                    </ul>

                    <h2 className={headingStyle}>{data[params.event].majorHeading1}</h2>
                    <ul>
                        <li className={liStyle}>{data[params.event].guidlines.one}</li>
                        <li className={liStyle}>{data[params.event].guidlines.two}</li>
                        <li className={liStyle}>{data[params.event].guidlines.three}</li>
                        <li className={liStyle}>{data[params.event].guidlines.four}</li>
                        <li className={liStyle}>{data[params.event].guidlines.five}</li>
                        <li className={liStyle}>{data[params.event].guidlines.six}</li>
                        <li className={liStyle}>{data[params.event].guidlines.seven}</li>
                        <li className={liStyle}>{data[params.event].guidlines.eight}</li>
                        <li className={liStyle}>{data[params.event].guidlines.nine}</li>
                        <li className={liStyle}>{data[params.event].guidlines.ten}</li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default page