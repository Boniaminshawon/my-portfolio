import Banner from "../Components/Banner";
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
        </div>
    );
};

export default Home;