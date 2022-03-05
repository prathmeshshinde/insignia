import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [isNav, setIsNav] = useState(false);

  const shownav = () => {
    isNav ? setIsNav(false) : setIsNav(true);
  };

  const features = useRef(null);

  const sign = useRef(null);

  const about = useRef(null);

  const gotofeatures = () =>
    window.scrollTo({
      top: features.current.offsetTop,
      behavior: "smooth",
    });

  const gotoSign = () =>
    window.scrollTo({
      top: sign.current.offsetTop,
      behavior: "smooth",
    });

  const gotoAbout = () =>
    window.scrollTo({
      top: about.current.offsetTop,
      behavior: "smooth",
    });

  function sideMenu() {
    return (
      <div className="text-white md:hidden bg-grey font-nowre flex flex-col -ml-40 absolute rounded-xl  items-center  ">
        <button
          onClick={gotoAbout}
          className="mx-10 my-2 hover:text-blue"
          href=""
        >
          About
        </button>
        <button className="mx-10 my-2 hover:text-blue" href="">
          Help
        </button>
        <button onClick={gotofeatures} className="mx-10 my-2 hover:text-blue">
          Features
        </button>
        <button onClick={gotoSign} className="mx-10 my-2 hover:text-blue">
          Signup
        </button>
        <button className=" py-2 px-4 flex items-center  rounded-full shadow-lg ">
          <a className="px-2 py-2 text-blue" href="">
            Request Demo
          </a>
          <img alt="tag" src="/path.svg" className="w-5" />
        </button>
      </div>
    );
  }
  return (
    <div className="bg-black px-2 md:px-20 py-5     ">
      <div>
        <div className="flex justify-between ">
          <div className=" flex justify-between  ">
            <div className="flex max-w-5xl">
              <img alt="tag" className="md:h-12 md:w-12 w-8" src="/logo.svg" />
              <h1 className="flex shadow-2xl drop-shadow-2xl  items-center text-blue md:text-2xl ml-3 font-now font-black text-center">
                Insignia
              </h1>
            </div>
          </div>
          <div className="text-white font-nowre hidden  md:flex ml-48 items-center  ">
            <a className="mx-10 my-2 hover:text-blue" href="">
              About
            </a>
            <a className="mx-10 my-2 hover:text-blue" href="">
              Help
            </a>
            <a className="mx-10 my-2 hover:text-blue" href="">
              Features
            </a>
            <a className="mx-10 my-2 hover:text-blue" href="">
              Signup
            </a>
            <button className=" py-2 px-4 flex items-center  rounded-full shadow-lg ">
              <a className="px-2 py-2 text-blue" href="">
                Request Demo
              </a>
              <img alt="tag" src="/path.svg" className="w-5" />
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                shownav();
              }}
              className="md:hidden text-white"
            >
              {isNav ? (
                <img alt="tag" className="  w-8" src="close.svg" />
              ) : (
                <img alt="tag" className="" src="menu.svg" />
              )}
            </button>
            {isNav ? sideMenu() : ""}
          </div>
        </div>
        <div className="md:flex md:flex-row flex flex-col-reverse   md:justify-center items-center md:px-28 md:py-32 h-auto px-2">
          <div className="md:flex-1   ">
            <p className="text-blue  text-center md:text-left mt-10 text-5xl md:text-7xl font-black  font-now ">
              Save your data storage here.
            </p>
            <p className="text-white md:text-left text-base font-nowre md:w-10/12 mt-12">
              Insignia is a data storage area that has been tested for security,
              so you can store your data here safely but not be afraid of being
              stolen by others.
            </p>
            <button className="font-nowre font-semibold   text-white text-2xl my-14  py-6 px-14 rounded-full shadow-lg">
              Learn more
            </button>
          </div>
          <div className="md:flex md:flex-1 justify-center">
            <img alt="tag" className=" w-64 mt-10 md:w-96" src="/Group.png" />
          </div>
        </div>
      </div>

      <div className="md:px-40 px-1 ">
        <div className="flex items-center flex-col md:flex md:flex-row bg-mainBlack px-10 py-20 rounded-3xl shadow-2xl ">
          <div className="flex-1 ">
            <img alt="tag" src="/security.png" />
          </div>
          <div className="flex-1 md:px-10">
            <p className="text-blue font-now md:mt-0 mt-10 text-3xl md:text-4xl leading-normal">
              We are a high-level data storage bank
            </p>
            <p className="text-white font-nowre mt-10 font-extralight md:text-base text-md">
              The place to store various data that you can access at any time
              through the internet and where you can carry it. This very
              flexible storage area has a high level of security. To enter into
              your own data you must enter the password that you created when
              you registered in this Data Warehouse.
            </p>
          </div>
        </div>
      </div>

      <div ref={features} className="flex justify-center px-1 ">
        <div className="bg-mainBlack py-10 px-10   my-40 md:py-20 md:px-20 w-full md:w-auto  md:max-w-5xl   rounded-3xl shadow-2xl">
          <div>
            <p className="text-blue  text-4xl font-now font-black">Features</p>
          </div>
          <div>
            <div className="flex overflow-auto scrollbar-hide whitespace-nowrap h-auto  my-5  ">
              <div className="bg-grey py-5 px-5 mx-3 my-3 md:py-10 md:px-10 md:my-10 md:mx-10 rounded-3xl shadow-2xl ">
                <div className="flex justify-center">
                  <img alt="tag" className=" w-40" src="Clip.svg" />
                </div>

                <p className="text-blue md:text-xl text-lg font-nowre font-black my-3 md:my-10">
                  Search Data
                </p>
                <p className="text-white font-nowre leading-7 h-36 ">
                  Don’t worry if your data is very large,
                  <br /> Insignia provides a search engine,
                  <br /> which is useful for making it easier to
                  <br /> find data effectively saving time.
                </p>
                <button className="text-blue md:mt-10   flex justify-center items-center">
                  Learn more
                  <img
                    alt="tag"
                    src="/path.svg"
                    className="md:w-5 w-4 md:mx-4 "
                  />
                </button>
              </div>
              <div className=" bg-grey py-5 px-5 mx-3 my-3 md:py-10 md:px-10 md:my-10 md:mx-10   rounded-3xl shadow-2xl">
                <div className="flex justify-center">
                  <img alt="tag" className=" w-40" src="Printer.svg" />
                </div>

                <p className="text-blue md:text-xl text-lg font-nowre font-black my-3 md:my-10">
                  Print Out
                </p>
                <p className="text-white font-nowre leading-7 h-36">
                  Print out service gives you
                  <br /> convenience if someday you need
                  <br /> print data, just edit it all and <br />
                  just print it.
                </p>
                <button className="text-blue md:mt-10   flex justify-center items-center">
                  Learn more
                  <img
                    alt="tag"
                    src="/path.svg"
                    className="md:w-5 w-4 md:mx-4"
                  />
                </button>
              </div>
              <div className=" bg-grey py-5 px-5 mx-3 my-3 md:py-10 md:px-10 md:my-10 md:mx-10   rounded-3xl shadow-2xl ">
                <div className="flex justify-center">
                  <img alt="tag" className=" w-40" src="Shield.svg" />
                </div>

                <p className="  text-blue md:text-xl text-lg font-nowre font-black my-3 md:my-10">
                  Security Code
                </p>
                <p className="text-white leading-7 h-36">
                  Data Security is one of our best
                  <br /> facilities. Allows for your files to be
                  <br /> safer. The file can be secured with a<br /> code or
                  password that you created, so
                  <br /> only you can open the file.
                </p>
                <button className="text-blue md:mt-10   flex justify-center items-center">
                  Learn more
                  <img
                    alt="tag"
                    src="/path.svg"
                    className="md:w-5 w-4 md:mx-4"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <button className="bg-pink  rounded-full w-3 h-3 mx-2"></button>
              <button className="bg-white rounded-full w-2 h-2 mx-2"></button>
            </div>
            <div className="flex">
              <img alt="tag" className=" mx-3 w-10 " src="/back.svg" />
              <img alt="tag" className=" mx-3 w-7 " src="/repath.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-40 md:w-full h-auto px-1">
        <div className="md:flex md:w-full relative  bg-mainBlack md:px-10 md:py-20 rounded-3xl shadow-2xl   ">
          <div className=" max-w-xl md:w-full md:pl-16 px-10  ">
            <p className="text-blue font-now text-4xl pt-5 leading-normal my-10">
              Download Our App
            </p>
            <p className="  text-white font-nowre font-extralight text-lg leading-7">
              The place to store various data that you can access at any time
              through the internet and where you can carry it.
              <br /> This very flexible storage area has a high level of
              security. To enter into your own data you must enter the password
              that you created when you registered in this Data Warehouse.
            </p>
            <button className="font-nowre font-semibold items-center text-white text-2xl mt-7  py-6 px-14 rounded-full shadow-lg">
              Download
            </button>
          </div>
          <div>
            <img
              alt="tag"
              className=" md:absolute md:max-w-4xl md:w-auto w-96  -top-28 -right-52 "
              src="/Phone.png"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center  my-20 px-1">
        <div className="bg-mainBlack md:mt-40 mt-10 md:mb-40 mb-10 md:py-20 py-5 md:px-20 px-5 w-full md:max-w-5xl   rounded-3xl shadow-2xl">
          <div>
            <p className="text-blue mt-10 text-4xl font-now font-black">
              Testimonials
            </p>
          </div>
          <div className="">
            <div className="flex overflow-auto scrollbar-hide whitespace-nowrap  ">
              <div className=" flex  bg-grey py-10 pl-10 pr-20 my-10 mx-10 rounded-3xl shadow-3xl">
                <img alt="tag" className=" h-20 mr-5  " src="john.png" />

                <div className="w-96">
                  <p className="text-blue text-xl font-now">John Fang</p>
                  <div>
                    <p className="flex text-purple font-nowre my-2 text-md">
                      Web Designer
                      <div className="flex items-center ml-3">
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                      </div>
                    </p>
                  </div>
                  <p className="text-white font-nowre leading-7 mt-5">
                    Suspendisse ultrices at diam lectus nullam.
                    <br /> Nisl, sagittis viverra enim erat tortor
                    <br /> ultricies massa turpis. Arcu pulvinar aenean
                    <br /> nam laoreet nulla.
                  </p>
                </div>
              </div>
              <div className="flex bg-grey py-10 pl-10 pr-20 my-10 mx-10  rounded-3xl shadow-3xl">
                <img alt="tag" className="h-20 mr-5" src="jenny.png" />

                <div className="w-96">
                  <p className="text-blue text-xl font-now">Jenny Doe</p>
                  <div>
                    <p className="flex text-purple font-nowre my-2 text-md">
                      UX Designer
                      <div className="flex items-center ml-3">
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                        <span className="bg-blue  rounded-full w-5 h-5 ml-2 mr-1"></span>
                      </div>
                    </p>
                  </div>
                  <p className="text-white font-nowre leading-7 mt-5">
                    Suspendisse ultrices at diam lectus nullam.
                    <br /> Nisl, sagittis viverra enim erat tortor
                    <br /> ultricies massa turpis. Arcu pulvinar aenean
                    <br /> nam laoreet nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <button className="bg-pink  rounded-full w-3 h-3 mx-2"></button>
                <button className="bg-white rounded-full w-2 h-2 mx-2"></button>
              </div>
              <div className="flex">
                <img alt="tag" className=" mx-3 w-10 " src="/back.svg" />
                <img alt="tag" className=" mx-3 w-7 " src="/repath.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-b-2 text-border ">
        <div
          ref={sign}
          className="md:flex md:justify-center  h-40 my-20 items-center  "
        >
          <div className="mr-20">
            <p className="text-blue font-now text-5xl text-center md:text-left my-8">
              Subscribe !
            </p>
            <p className="text-white  font-nowre text-lg">
              Join our newsletter to never miss any latest news.
            </p>
          </div>
          <div className="md:ml-20 mt-5">
            <form className=" md:py-2 md:px-2  ">
              <input
                className=" placeholder:text-white h-12 font-nowre bg-in text-white w-full  md:w-96 p-2.5 rounded-full border-none outline-none"
                placeholder=" Enter your e-mail address here."
              />
              <button className="bg-black text-white font-nowre   border-none h-10 rounded-full outline-none  -ml-24  px-5 py-0">
                <p>Join Us</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-1 text-border h-auto ">
        <div className="md:flex justify-center   my-20 items-center  ">
          <div className="md:mr-20">
            <p className="text-blue font-now text-5xl my-8">Try for free!</p>
            <p className="text-white font-nowre text-lg">
              Get limited 1 week free try our features!
            </p>
          </div>
          <div className="md:ml-20 mt-10">
            <button className="font-nowre font-semibold  items-center text-white md:text-2xl md:my-14 mx-4 md:py-6 md:px-14 rounded-full shadow-lg">
              Learn more
            </button>
            <button className=" md:py-2 md:px-4 mx-4  items-center  rounded-full shadow-lg ">
              <div className="flex">
                <a
                  className="md:px-2 md:py-2 md:text-xl font-nowre text-purple"
                  href=""
                >
                  Request Demo
                </a>
                <img alt="tag" src="/path.svg" className="md:w-8 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="text-blue   ">
          <div
            ref={about}
            className="md:flex flex flex-col-reverse  justify-center  md:pt-10   "
          >
            <div>
              <div className="flex  items-center font-now text-2xl mt-5 ">
                <img alt="tag" src="logo.svg" />
                <p className="text-blue ml-3">Insignia</p>
              </div>
              <div className="font-nowre  flex justify-between md:flex md:flex-col md:justify-start">
                <p className=" md:my-10 my-5 mx-5">
                  Insignia Society, 234 <br />
                  Bahagia Ave Street PRBW 29281
                </p>
                <p className="md:mt-0 md:ml-5 mt-5 mb-5 md:mb-20">
                  info@insignia.com
                  <br /> 1-232-3434 (Main)
                </p>
              </div>
              <div>
                <p className=" ">© Insignia™, 2020. All rights reserved.</p>
              </div>
            </div>

            <div className=" font-nowre  md:flex flex w-full  ">
              <div className="md:mx-20 w-auto flex-1">
                <p className="md:mt-5 md:mb-10">About</p>

                <div className="">
                  <p className="my-5">Profile</p>
                  <p className="my-5">Features</p>
                  <p className="my-5">Carrers</p>
                  <p className="my-5">DW News</p>
                </div>
              </div>
              <div className="md:mx-20 flex-1">
                <p className="md:mt-5 md:mb-10">Help</p>
                <div className=" ">
                  <p className="my-5">Support</p>
                  <p className="my-5">Sign Up</p>
                  <p className="my-5">Guide</p>
                  <p className="my-5">Report </p>
                  <p className="my-5">Q&A </p>
                </div>
              </div>

              <div className="md:mx-10 flex-1">
                <p className="md:mt-5 md:mb-10">Social Media</p>
                <div className="md:flex flex flex-col items-center   justify-center">
                  <img alt="tag" className="mt-8 w-10" src="/Facebook.svg" />
                  <img alt="tag" className="mt-8 w-10" src="/Instagram.svg" />
                  <img alt="tag" className="mt-8 w-10" src="/Twitter.svg" />
                </div>
                <img
                  alt="tag"
                  className="   hidden md:w-10 md:h-10 w-10 md:mt-44 mt-4  "
                  src="/mds.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
