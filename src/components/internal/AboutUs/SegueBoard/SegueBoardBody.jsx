// components/SegueBoardBody.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SegueBoardBody.css';
import FadeIn from '../../../fadeinsection/FadeIn.jsx';
import BoardMemberCard from './BoardMemberCard';
import testImage from '../../../../assets/images/testFolder/plageholder.jpg';
import CenteredLogo from '../../../CenteredLogo.jsx';

const boardMembers = [
  {
    name: 'Alejandro Restrepo, Chair',
    term: 'July 2023 – June 2026',
    email: 'Alejandro.Restrepo@segueifl.org',
    bio: `Alejandro Restrepo was born and raised in Central Falls, RI by Colombian immigrants who migrated in the late 1980s to the US for better opportunities for their family. Before graduating from Central Falls High School, Alejandro was very involved in community sports leagues as a young child and adolescent and served for two years on the Zoning Board for the City of Central Falls under James Diossa.  He credits his teachers and parents for his drive to be successful. Knowing that he always wanted to serve and help others, Alejandro enrolled in the RI Army National Guard where he spent 9 years and became a First Lieutenant and Company Commander of a logistics unit. At 18 years old he started his career with Citizens Bank growing from a Teller to Branch Manager overseeing multiple branches within Rhode Island, to serving as a Regional Manager in Boston and currently supporting RI, CT and MA as a Vice President of Sales for the New England Market. He is the proud father of three beautiful children, Julian (7), Alexandria (6), and Liliana (4) and husband to a magnificent wife, Haley. Alejandro has an associate degree from CCRI and a bachelor’s degree from the University of Southern New Hampshire in Management Information Systems. Mr. Restrepo is excited to be serving on the Segue Board of Directors as it is his first experience in this arena and looks forward to giving back to his community.`,
  },
  {
    name: 'Ingrid Franco',
    term: 'January 2019 – June 2025',
    email: 'Ingrid.Franco@segueifl.org',
    bio: `Mrs. Franco is a current Central Falls resident where she is very active in her community. Growing up in Providence, she graduated from Hope High School and received her BS in Liberal Arts with Spanish and Italian major from RIC in 2004. She is currently attending RIC in the Master of Social Work Program. Mrs. Franco works at The Community College of Rhode Island, Department of Human Services. She’s an active mom of two children, one of whom is a Segue alumni. She was a T-ball coach and a Scout leader. Mrs. Franco has a reputation of faithfully joining and serving on every PTA in every school her children have attended. She currently serves on the Personnel Sub- Committee of the board and was an active member of the Segue FEC. In the fall of 2018, Mrs. Franco was very active in assisting the school acquire the property across the street to create a playground for its students.`,
  },
  {
    name: 'Lauren Schechtman',
    term: 'October 2019 – June 2025',
    email: 'Lauren.Schechtman@segueifl.org',
    bio: `Lauren Schechtman is a founding Segue board member and previously co-chaired the Segue Board of Directors. She spent 25 years working for Onward We Learn (formerly The College Crusade) where she was responsible for the strategic direction, management, administration, and implementation of all Crusade middle and high school programs, grants, and collaborative initiatives. Prior to her work at the Onward We Learn, Lauren worked for Times2, and was a Clinical Administrator in a residential treatment facility and also directed a secure treatment facility for violent adolescent males in

    Massachusetts. She graduated from Florida International University with a degree in Social Work. Lauren lives with her husband Joe, has two grown children, four grandchildren and is happily retired.`,
  },
  {
    name: 'Kieran Ayton',
    term: 'July 2023 – June 2026',
    email: 'Kieran.Ayton@segueifl.org',
    bio: `Kieran Ayton is a Rhode Island native. He grew up in Providence and now lives in Cranston. He has an undergraduate degree in English from Rhode Island College (2006) and a Master’s Degree in Library Science from Simmons University (2009). Kieran is the Electronic Resources and Technology Librarian at Rhode Island College. He manages the library's online resources. He is also the library liaison to the School of Education and ESL programs. Kieran has performed a wide variety of professional development activities. He served as the Rhode Island Library Association (RILA) President from 2017-19. He has also served on the Rhode Island Center for the Book Board since 2010 and manages their website. Kieran’s personal interests include mindfulness, Yoga, Qi Gong, and energy work, such as Reiki and Cranio-Sacral Therapy. He is currently working towards a Massage Therapy license.`,
  },
  {
    name: 'Norelys Consuegra',
    term: 'April 2023 – June 2026',
    email: 'Norelys.Consuegra@segueifl.org',
    bio: `A Rhode Island native, Norelys is the Director of the Center for City Services under the auspices of Providence Mayor Brett Smiley. Prior to this appointment, she held the position of Deputy Director of Elections for the Rhode Island Department of State. She obtained her bachelor's degree in political science and Spanish from the University of Rhode Island in 1996 and her master's degree in international relations from Salve Regina University in 2012. Following her graduation from URI, Norelys embarked on her career in government service, working for U.S. Senator Jack Reed as a Senate Aide for a period of 20 years. In addition to her full-time work, she is an adjunct professor in University College at Roger Williams University.

She is the recipient of the 2024 Daniel L. Beardsley Excellence in Municipal Government Awards which recognizes municipal employees who have demonstrated exceptional dedication to their communities. This award is presented by the RI League of Cities and Towns. She has also been the recipient of the Ralph Gabellieri Service Award from Goodwill Industries of Rhode Island, has been recognized as a Diversity Ambassador by the State of Rhode Island, received the Extraordinary Women Award for community work, and has been recognized by RI Latino Public Radio, the National Archives and Records Administration, and Telemundo Providence for her collaborative work in the community.

Her commitment to community service has been acknowledged through numerous letters of commendation from Rhode Islanders expressing gratitude for her contributions. In addition to her professional and civic engagements, she serves on the Board of Directors of Segue Charter School and Amenity Aid, Rhode Island’s only hygiene products hub. She is a 2022 Leadership Rhode Island graduate (Sigma II) and serves on the Advisory Board of the Center for Civic Design (CCD). In 2014, Norelys graduated from the New Leaders Council, and she has been deeply involved in community service as a member of the Rhode Island Latino Civic Fund. She served as the Program Coordinator of the RI Latina Leadership Institute (LLI) for many years. In 2017, Norelys' son, Tristen, was born with a congenital heart defect - Hypoplastic Left Heart Syndrome (HLHS) and every February, she joins members of the RI General Assembly to recognize, celebrate and bring awareness for Congenital Heart Defect Awareness Week in Rhode Island during February 7 -14th. She is a passionate advocate for communities of color, the immigrant community, and the LGBTQ+ community, and enjoys teaching others about the importance of civic engagement. She lives in North Kingstown with her husband, Salvador, and son Ashten,15, and Tristen, 7.`,
  },
  {
    name: 'David Hincapie',
    term: 'May 2024 – June 2027',
    email: 'David.Hincapie@segueifl.org',
    bio: `David Hincapie was born and raised in Central Falls to parents of Colombian heritage. His family immigrated from Medellin, Colombia, to Central Falls in the late 80s. Growing up, he spent most of my life on Sylvian Street. His educational journey began at Progresso Latino and he attended Holy Trinity, St Elizabeth, Robertson, and Calcutt for his early schooling. Later, he attended and graduated from Blackstone Academy Charter School while also playing high school football for two years. Mr. Hincapie has always stayed connected to his CF roots as he pursued a bachelor’s degree in biology at Suffolk University. Currently he works in the biotech industry as an Associate Scientist at Alnylam Pharmaceuticals in Cambridge, MA. He is honored to be serving on the Board for Segue Institute for Learning.`,
  },
  {
    name: 'Navik Patel',
    term: 'May 2024 – June 2027',
    email: 'Navik.Patel@segueifl.org',
    bio: `Mr. Patel is known by the entire Segue Admin team as he was a big part of the Channel One - Ralph J. Holden community center staff during his teen and early college years right here in Central Falls. Anyone who knows Mr. Patel is aware that has a great sense of humor and is always positive and upbeat. Mr. Patel was born and raised in the vibrant community of Central Falls which he still proudly calls home while raising his two boys. With a passion for exploration, Mr. Patel has traversed the globe, enriching his perspective on life. Alongside his adventures, he finds fulfillment coaching sports, dedicating time to teamwork and leadership. As a leading insurance agent for Farmers Insurance, Mr. Patel is committed to serving our community and ensuring its security. Mr. Patel stands as a pillar of the community, cherishing our square mile with immense pride. Above all, family remains paramount, shaping his values and guiding his priorities.`,
  },
  {
    name: 'David Ahlborn',
    term: 'July 2024 – June 2027',
    email: 'David.Ahlborn@segueifl.org',
    bio: `David Ahlborn is an educator committed to disability justice. He graduated from Brown University in 1988 and received an M.A. in 1995 in English from Boston University, where he was a Presidential Fellow and graduate assistant teacher. He discovered his passion for teaching students with specific language-based learning differences at Landmark School, where he taught from 1988-90 and 1995-99. He currently directs an academic support program for students with LDs at The Wheeler School in Providence. He is

married, has two grown children, and lives with his wife, also a teacher, in Providence.`,
  },
  {
    name: 'Zuhanna I. Medina',
    term: 'October 2024 – June 2026',
    email: 'Zuhanna.Medina@segueifl.org',
    bio: `Mrs. Medina was born in Puerto Rico and moved to Central Falls as a young mother with her first child. She completed her GED at Progreso Latino and, at the same time, began volunteering at the organization in 2008. She obtained a certification in Medical Billing and Coding in 2012. In 2010, she started working at Progreso Latino in the Adult Education Department, where she began as the coordinator of the evening classes. She is currently the Case Manager for the department. She is the mother of four children: Samuel (25 years old), Jennifer (22 years old), Arihanna (14 years old), and Januel (10 years old). All four have studied at Segue, and Jennifer earned the title of Salutatorian upon graduation, while Arihanna was the Valedictorian. Arihanna is currently a student at Legacy, while Januel continues at Segue.`,
  },
  {
    name: 'Steven Chase',
    term: 'October 2024 – June 2026',
    email: 'Steven.Chase@segueifl.org',
    bio: `Mr. Chase is the son of Colombian and American parents. He grew up in Mansfield Massachusetts and attended Mansfield High School from 1988-1992. He later attended Rhode Island College 2001-2005 and studied Sociology (President of Sociology Club for 2 years) and Jurisprudence while completing a minor in Theater.  

He was married in Laureles, Colombia in December 2007 and recently celebrated 20 years of being with his wife. Mr. Chase and his wife are parents to 2 sons, one a Segue Alumni and the other currently attending in Segue. He has worked in manufacturing for over 30 years and currently working in quality control and calibration coordination. His family has been residing in Central Falls RI for over 30 years.`,
  },
];

function SegueBoardBody() {
  return (
    <div className="segue-board-container">
      <div className="segue-board-page-title">
        <h1>Segue Board of Directors</h1>
      </div>
      <FadeIn>
        <div className="segue-board-content">
          <Container>
              <Row className="justify-content-center">
                {boardMembers.map((member, index) => (
                  <Col
                    key={index}
                    xs={12}
                  md={6}
                  lg={4}
                  className="d-flex justify-content-center mb-4"
                >
                  <BoardMemberCard
                    imageSrc={testImage}
                    name={member.name}
                    term={member.term}
                    email={`${member.email}`}
                  >
                    {member.bio}
                  </BoardMemberCard>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <CenteredLogo />
        </FadeIn>
    </div>
  );
}

export default SegueBoardBody;
