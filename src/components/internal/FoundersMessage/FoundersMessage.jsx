// import { React } from 'react';
import './FoundersMessage.css';
import FadeIn from '../../fadeinsection/FadeIn.jsx';
import image1 from '../../../assets/images/FoundersMessage-photos/Garcia&Lorenco.jpg';
import image2 from '../../../assets/images/FoundersMessage-photos/ClassroomPic.jpg'; // This image is not used in the component, but can be used if needed
import image3 from '../../../assets/images/FoundersMessage-photos/ViolinBoy.jpg'; // This image is not used in the component, but can be used if needed

function FoundersMessageBody() {
    return (
        <div className="founders-message-container">
            <div className="founders-message-page-title">
                        <h1>A Message from The Founders</h1>
                    </div>
                <div className="founders-message-content">
                     <FadeIn>
                    <div className="top-half">
                        <p>
                            Angelo Garcia and Dr. Melissa Lourenco co-founded Segue Institute for 
                            Learning in Central Falls, Rhode Island, with a shared commitment to 
                            equity and community-driven education. Since opening in 2009, Segue 
                            has provided K–8 students with wrap-around services, civic engagement 
                            opportunities, and culturally responsive teaching. In 2024, their mission 
                            expanded with the launch of Segue Legacy Academy, a high school designed 
                            to prepare students for careers in education. Deeply rooted in 
                            Central Falls, both Mr. Garcia and Dr. Lourenco believe every 
                            student deserves to be seen, heard, and empowered—not just taught.
                        </p>
                        <img src={image1} alt="Founders" className="founders-image" /> 
                    </div>
                    <div className="bottom-half">
                        <h1>From Our Founding Team</h1>
                        <div className="text-content">
                            <p>
                                When Segue Institute for Learning first opened its doors in 2009, it wasn’t just the launch of a new charter school—it was
                                the start of a promise to our community. A promise that every child in Central Falls, no matter their background, would be
                                given the opportunity to learn, lead, and thrive in an environment that recognizes and respects their full potential.
                            </p>

                            <p>
                                As a founding team, many of us were born, raised, and educated in this city. We’ve walked the same streets as our
                                scholars. We’ve witnessed both the challenges and the remarkable strength within our neighborhoods. Segue was built
                                from that shared experience—and from the belief that schools should not only teach students but lift up families and
                                transform communities.
                            </p>

                            <img src={image3} alt="boy learning violin" className="violinboy-image" />

                            <p>
                                From the beginning, we rejected the term “at risk.” We knew that our children are at promise—brimming with talent,
                                power, and possibility. That belief is the heartbeat of everything we do.
                            </p>


                            <p>
                                We set out to create a school that would be academically rigorous, yes—but also joyful, culturally affirming, and student-led.
                                A place where children would feel seen. A place where high expectations are matched with high support. A place
                                where students are taught not just to succeed on tests, but to succeed in life, to think critically, advocate for themselves
                                and others, and take pride in who they are and where they come from.
                            </p>
                            
                            <p>
                                Over time, we’ve grown into a K–8 institution that remains deeply connected to its founding values. And now, with the
                                launch of Legacy High School, we are continuing that journey. Legacy is more than just a name—it’s a commitment to the
                                future. It will provide scholars with the opportunity to graduate from a school that knows them, challenges them, and
                                prepares them to be not just college-ready, but community-ready.
                            </p>

                            <img src={image2} alt="Classroom" className="classroom-image" />

                            <p>
                                To our students: you are the reason we do this work. To our families: thank you for your trust and partnership. To our staff,
                                past and present: thank you for your passion and purpose. And to our supporters: thank you for believing in a model of
                                education that centers love, accountability, and justice.
                            </p>


                            <p>
                                Together, we are building something lasting. Together, we are creating a legacy.
                            </p>

                            <blockquote className="founders-signoff">
                                — The Founding Team<br />
                                Segue Institute for Learning
                            </blockquote>
                        </div>
                    </div>
                    </FadeIn>
                </div>

        </div>
    )

}

export default FoundersMessageBody;