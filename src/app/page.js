import Navbar from "./component/navbar/navbar";
import Hero from "./component/hero/hero";
import Project from "./component/project/project";
import Form from "./component/form/form";
import Footer from "./component/footer/footer";
import Education from "./component/edu";

export default function Home() {
  return (
    <div id="3in1" className="bg-[#202b35] text-white">
      <Navbar />
      <Hero />
      <Education />
      <Project />
      <Form />
      <Footer />
    </div>
  );
}
