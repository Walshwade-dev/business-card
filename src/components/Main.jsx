// Main section of the card


import mail from '../assets/icons/Mail.png'
import linkedin from '../assets/icons/linkedin.png'

export default function Main(props){
    return(
        <main className={props.darkMode ? "dark" : ""}>
            <section className="contacts">
                <h3 className="name">Walshwade Chokwe</h3>
                <h5 className="title">Frontend Developer</h5>
                <h6 className="website">Walshwade.website</h6>
                <div className="buttons">
                    <a href="mailto:chokwewalshwade@gmail.com" target={'_blank'} rel="noreferrer"><button className="email"><img src={mail} alt="email"/>Email</button></a>
                    <a href='https://www.linkedin.com/in/walshwade-kihohia-6b704a235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8YD7njJwQAuajBVumWTPow%3D%3D' target={'_blank'} rel="noreferrer"><button className="linkedin"><img src={linkedin} alt="linkedin" />Linkedin</button></a>
                </div>
            </section>
            <section className="about">
                <h4 className="about--title">About</h4>
                <p className="about--text">
                I am a frontend developer with a particular interest in making things simple 
                and automating daily tasks. I try to keep up with security and best practices, 
                and am always looking for new things to learn.
                </p>
                <h4 className="about--interests">Interests</h4>
                <p className="interest--text">
                    Art enthusiast Music lover. Reader. 
                    Internet fanatic.Entrepreneur. 
                    Coffee fanatic. Tech init.
                </p>

            </section>
        </main>
    )
}