import Sizebox from "../../common/Sizebox";

const AboutPage = () => {
  return (
    <div className="container md:mx-auto md:my-[100px] bg-gray-100 py-4 px-2 md:py-[30px] md:px-10">
      <p className="text-[17x] leading-tight text-wrap">
        Welcome to <span className="text-orange-500">LearnJP</span>! If you're
        here to deepen your understanding of Japanese vocabulary and grammar,
        you've come to the right place. We provide clear and detailed
        explanations to help learners of all levels understand the nuances of
        the Japanese language.
      </p>
      <Sizebox height="20px" />
      <h1 className="text-[20px] font-bold text-blue-800">Who We Are</h1>
      <p>
        We are a team of Japanese language enthusiasts and educators dedicated
        to making learning Japanese easier. Our goal is to provide you with
        simple, easy-to-follow explanations of words, phrases, and grammar
        points that will help you progress in your language journey.
      </p>
      <Sizebox height="20px" />
      <h1 className="text-[20px] font-bold text-blue-800">What We Offer</h1>
      <ul className="list-disc mx-7">
        <li>
          <span className="font-bold">Word Explanations</span>: Learn the
          meaning, usage, and context of Japanese words in an easy-to-understand
          format.
        </li>
        <li>
          <span className="font-bold">Grammar Insights</span>: Detailed
          explanations of essential grammar rules, sentence structures, and
          particles.
        </li>
        <li>
          <span className="font-bold">Clear Examples</span>: Real-world examples
          and usage to help you understand how Japanese is spoken and written.
        </li>
        <li>
          <span className="font-bold">Study Tools</span>: Helpful tips and
          resources to aid your Japanese learning process.
        </li>
      </ul>
      <Sizebox height="20px" />
      <h1 className="text-[20px] font-bold text-blue-800">Our Mission</h1>
      <p>
        Our mission is to make Japanese language learning as straightforward as
        possible. We focus on breaking down complex words and grammar points to
        give you the knowledge you need, whether you're preparing for exams or
        simply improving your everyday Japanese skills.
      </p>
      <Sizebox height="20px" />
      <h1 className="text-[20px] font-bold text-blue-800">
        Why Learn Japanese?
      </h1>
      <ul className="list-disc mx-7">
        <li>
          <span className="font-bold">Cultural Connection</span>: Gain access to
          Japan's rich culture, media, and traditions.
        </li>
        <li>
          <span className="font-bold">Career Growth</span>: Open doors to job
          opportunities in Japan or in companies working with Japanese
          businesses.
        </li>
        <li>
          <span className="font-bold">Personal Achievement</span>: Learning a
          new language is rewarding, and mastering Japanese is a valuable skill
          that enriches your life.
        </li>
      </ul>
      <Sizebox height="20px" />
      <h1 className="text-[20px] font-bold text-blue-800">Join Us</h1>
      <p>
        If you're eager to expand your Japanese vocabulary or master key grammar
        concepts, we’re here to guide you. Take your time to explore our
        explanations, and feel free to revisit any word or grammar point as you
        continue your learning journey.
      </p>
      <Sizebox height="20px" />
      <h1 className="text-[20px] font-bold text-blue-800">Contact Us</h1>
      <p>
        Have any questions or feedback? Feel free to reach out! We're always
        here to help and support you in your Japanese learning process.
      </p>
    </div>
  );
};

export default AboutPage;
