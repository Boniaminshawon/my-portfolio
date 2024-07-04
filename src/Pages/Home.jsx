import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";


const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Skills></Skills>
          <Projects></Projects>
          <Education></Education>
          <Contact></Contact>
        </div>
    );
};

export default Home;