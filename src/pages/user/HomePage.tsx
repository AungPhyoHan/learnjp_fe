import Sizebox from "../../common/Sizebox";
import JLPT from "../../assets/img/jlpt.png";
import NatTest from "../../assets/img/nattest.png";
import JFT from "../../assets/img/JFT.png";
import JSAT from "../../assets/img/jsat.png";
import JPT from "../../assets/img/jpt.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log("Hello");
  return (
    <>
      <div className="bg-[#A8D5BA]  md:py-[70px] py-4 px-3 md:px-0">
        <div className="container mx-auto">
          <h1 className="text-[20px] md:text-left text-center md:text-[30px] font-bold">
            Hello,welcome to <span className="text-white">LearnJP</span> page
          </h1>
        </div>
        <br />
        <p className="font-[courier] text-md container mx-auto text-indent leading-loose text-wrap">
          Join us and start speaking, reading, and understanding Japanese today.
          Whether you're a beginner or looking to improve, we offer fun,
          interactive lessons and cultural insights to help you master the
          language. Let's make learning Japanese enjoyable
        </p>
      </div>
      {/* N2,N3,N4,N5 */}
      <div className="grid sm:grid-cols-4 grid-cols-1 gird-rows-4">
        {/* N2 */}
        <div className="flex flex-col justify-center items-center bg-blue-500 h-[400px] md:h-[500px] drop-shadow-[0px_-3px_4px_rgba(0,0,0,0.8)]  border-b-2 border-black md:rounded-tr-3xl">
          <h3 className="text-[80px] font-bold text-white drop-shadow-[5px_0px_3px_rgba(0,0,0,0.8)]">
            N2
          </h3>
          <div className="flex flex-col items-center">
            <Link
              to="/kanji/2"
              className="bg-gray-700 hover:bg-blue-700 w-[150px] xl:w-[200px] text-center text-white font-bold py-2 px-4 rounded border-2 border-black"
            >
              Kanji
            </Link>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-blue-700 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Vocabulary
            </button>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-blue-700 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Grammar
            </button>
          </div>
        </div>
        {/* N3 */}
        <div className="flex flex-col justify-center items-center bg-orange-500 h-[400px] md:h-[500px] drop-shadow-[0px_-3px_4px_rgba(0,0,0,0.9)] border-b-2 sm:border-r-2 md:border-r-0 border-black md:rounded-t-3xl">
          <h3 className="text-[80px] font-bold text-white drop-shadow-[5px_0px_3px_rgba(0,0,0,0.8)]">
            N3
          </h3>
          <div className="flex flex-col items-center">
            <Link
              to="/kanji/3"
              className="bg-gray-700 hover:bg-orange-600 w-[150px] xl:w-[200px] text-center text-white font-bold py-2 px-4 rounded border-2 border-black"
            >
              Kanji
            </Link>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-orange-600 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Vocabulary
            </button>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-orange-600 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Grammar
            </button>
          </div>
        </div>
        {/* N4 */}
        <div className="flex flex-col justify-center items-center bg-green-500 h-[400px] md:h-[500px] drop-shadow-[0px_-3px_4px_rgba(0,0,0,0.9)] border-b-2 sm:border-r-2 md:border-r-0 border-black md:rounded-t-3xl">
          <h3 className="text-[80px] font-bold text-white drop-shadow-[5px_0px_3px_rgba(0,0,0,0.8)]">
            N4
          </h3>
          <div className="flex flex-col items-center">
            <Link
              to="/kanji/4"
              className="bg-gray-700 hover:bg-green-800 w-[150px] xl:w-[200px] text-center text-white font-bold py-2 px-4 rounded border-2 border-black"
            >
              Kanji
            </Link>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-green-800 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Vocabulary
            </button>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-green-800 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Grammar
            </button>
          </div>
        </div>
        {/* N5 */}
        <div className="flex flex-col justify-center items-center bg-red-500 h-[400px] md:h-[500px] drop-shadow-[0px_-3px_4px_rgba(0,0,0,0.9)] border-b-2 border-r-2 border-black md:rounded-tl-3xl">
          <h3 className="text-[80px] font-bold text-white drop-shadow-[5px_0px_3px_rgba(0,0,0,0.8)]">
            N5
          </h3>
          <div className="flex flex-col items-center">
            <Link
              to="/kanji/5"
              className="bg-gray-700 hover:bg-red-800 w-[150px] xl:w-[200px] text-center text-white font-bold py-2 px-4 rounded border-2 border-black"
            >
              Kanji
            </Link>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-red-800 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Vocabulary
            </button>
            <Sizebox height="30px" />
            <button className="bg-gray-700 hover:bg-red-800 w-[150px] xl:w-[200px] text-white font-bold py-2 px-4 rounded border-2 border-black">
              Grammar
            </button>
          </div>
        </div>
      </div>

      {/* JapaneseExamination */}
      <div className="border-b-2 border-black">
        <h3 className="text-[30px] text-center">
          {" "}
          JAPANESE LANGUAGE EXAMINATIONS{" "}
        </h3>
      </div>
      {/* JLPT */}
      <div className="flex flex-col md:flex-row border-b-2 border-gray-600 bg-white justify-center items-center">
        <div className=" md:w-[1700px] container bg-white items-center justify-center md:border-r-2 border-black">
          <img
            className="h-[180px] max-w-sm md:h-[150px] md:max-w-md mx-auto"
            src={JLPT}
            alt="JLPT"
          />
        </div>
        <p className="flex text-wrap leading-tight text-[18px] justify-center items-center px-3 bg-yellow-100 py-8">
          The JLPT (Japanese-Language Proficiency Test) is a standardized test
          that measures and certifies the Japanese language proficiency of
          non-native speakers. It has five levels (N1 to N5), with N1 being the
          most advanced and N5 the beginner level. The test evaluates skills in
          reading, listening, and grammar to assess how well a person
          understands and uses Japanese.
        </p>
      </div>
      {/* Nat-Test */}
      <div className="flex flex-col md:flex-row border-b-2 border-gray-600 bg-white justify-center items-center">
        <div className=" md:w-[1950px] container bg-white items-center justify-center md:border-r-2 border-black">
          <img
            className="h-[180px] max-w-sm md:h-[150px] md:max-w-md mx-auto"
            src={NatTest}
            alt="Nat-Test"
          />
        </div>
        <p className="flex text-wrap leading-tight text-[18px] justify-center items-center px-3 bg-yellow-100 py-8">
          The NAT-TEST (Nihongo Aptitude Test) is another Japanese language
          proficiency test designed for non-native speakers. Similar to the
          JLPT, it has multiple levels (N5 to N1), with N1 being the highest. It
          evaluates skills in reading, listening, and vocabulary to measure
          one's ability to understand and use Japanese. It is an alternative to
          the JLPT and is used primarily in certain regions or by specific
          institutions.
        </p>
      </div>
      {/* JFT */}
      <div className="flex flex-col md:flex-row border-b-2 border-gray-600 bg-white justify-center items-center">
        <div className=" md:w-[1280px] container bg-white items-center justify-center md:border-r-2 border-black">
          <img
            className="h-[180px] max-w-sm md:h-[150px] md:max-w-md mx-auto"
            src={JFT}
            alt="JFT"
          />
        </div>
        <p className="flex text-wrap leading-tight text-[18px] justify-center items-center px-3 bg-yellow-100 py-12">
          The JFT exam (Japanese-French Test) is a language proficiency test
          used by foreign workers applying for Japan's Tokutei visa. This visa
          allows skilled workers to live and work in Japan, and passing the JFT
          exam helps prove the necessary Japanese language skills for the job.
        </p>
      </div>
      {/* JSAT */}
      <div className="flex flex-col md:flex-row border-b-2 border-gray-600 bg-white justify-center items-center">
        <div className=" md:w-[1800px] container bg-white items-center justify-center md:border-r-2 border-black">
          <img
            className="h-[180px] max-w-sm md:h-[150px] md:max-w-md mx-auto"
            src={JSAT}
            alt="JSAT"
          />
        </div>
        <p className="flex text-wrap leading-tight text-[18px] justify-center items-center px-3 bg-yellow-100 py-8">
          The JSAT (Japan-Southeast Asia Test) is an examination designed for
          students from Southeast Asian countries, including Myanmar, who wish
          to pursue higher education in Japan. It assesses students' Japanese
          language skills and general academic abilities. The test is often used
          by universities in Japan to evaluate applicants from these regions for
          admission into undergraduate programs.
        </p>
      </div>
      {/* JPT */}
      <div className="flex flex-col md:flex-row border-b-2 border-gray-600 bg-[#115CAD] justify-center items-center">
        <div className=" md:w-[1640px] container bg-[#115CAD] items-center justify-center md:border-r-2 border-black">
          <img
            className="h-[180px] max-w-sm md:h-[150px] md:max-w-md mx-auto"
            src={JPT}
            alt="JPT"
          />
        </div>
        <p className="flex text-wrap leading-tight text-[18px] justify-center items-center px-3 bg-yellow-100 py-8">
          The JPT (Japanese Proficiency Test) is an exam designed to assess the
          Japanese language skills of non-native speakers. It is often taken by
          individuals who wish to work, study, or live in Japan. The test
          evaluates proficiency in listening, reading, and grammar, but it is
          not officially recognized like the JLPT (Japanese Language Proficiency
          Test).
        </p>
      </div>
    </>
  );
};

export default HomePage;
