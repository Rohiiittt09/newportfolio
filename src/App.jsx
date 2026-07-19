import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [count, setCount] = useState(0);
  const onsubmit = async (data) => {
    const msg = `
        name:${data.name}
        email:${data.email}
        phone no.:${data.tel}
       
        message:${data.msg}`;
    const url = `https://wa.me/9953524978?text=${encodeURIComponent(msg)}`;
    window.open(url);

    reset();
  };

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <>
      <div className="fixed flex gap-4 right-10 bottom-10 z-40 ">
        <a href="https://www.linkedin.com/in/rohit-singh-9a994a317/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#71717a"
            className="w-12 h-12 "
          >
            <path d="M20.447 20.452H16.89V14.87c0-1.332-.027-3.045-1.856-3.045-1.857 0-2.141 1.45-2.141 2.949v5.678H9.337V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.269 2.372 4.269 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a href="https://github.com/Rohiiittt09/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-zinc-500"
          >
            <path d="M12 .5C5.649.5.5 5.649.5 12c0 5.085 3.292 9.387 7.861 10.91.575.106.785-.249.785-.556 0-.274-.01-1-.016-1.963-3.198.696-3.873-1.54-3.873-1.54-.523-1.33-1.277-1.684-1.277-1.684-1.044-.713.079-.698.079-.698 1.154.081 1.761 1.185 1.761 1.185 1.026 1.759 2.693 1.251 3.35.956.104-.743.402-1.25.731-1.538-2.552-.29-5.237-1.276-5.237-5.682 0-1.255.448-2.281 1.183-3.085-.118-.29-.513-1.457.112-3.038 0 0 .965-.309 3.162 1.178a10.95 10.95 0 0 1 5.756 0c2.197-1.487 3.161-1.178 3.161-1.178.626 1.581.231 2.748.113 3.038.737.804 1.182 1.83 1.182 3.085 0 4.417-2.689 5.389-5.249 5.673.414.356.783 1.058.783 2.133 0 1.541-.014 2.782-.014 3.161 0 .309.208.668.79.555C20.209 21.383 23.5 17.084 23.5 12 23.5 5.649 18.351.5 12 .5Z" />
          </svg>
        </a>
      </div>
      <nav
        className="fixed   top-6 left-1/2 -translate-x-1/2 z-50
    bg-black/50 backdrop-blur-xl
    border border-red-900/40
    rounded-full
    px-8 py-4"
      >
        <ul className="flex items-center gap-8 text-[10px] md:text-sm font-medium">
          <li>
            <a
              href="#home"
              className="text-zinc-300 hover:text-red-500 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-zinc-300 hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-zinc-300 hover:text-red-500 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-zinc-300 hover:text-red-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center"
      >
        <div className="absolute inset-0 opacity-15">
          <div
            className="h-full w-full 
      bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
      bg-[size:80px_80px]"
          ></div>
        </div>

        <div
          className="absolute   left-[-250px] top-20 w-[500px] h-[500px]
    rounded-full bg-red-700/30 blur-[170px] animate-pulse"
        ></div>

        <div
          className="absolute  right-[-180px] bottom-10 w-[420px] h-[420px]
    rounded-full bg-red-600/20 blur-[160px] animate-pulse"
        ></div>

        <div
          className="absolute  inset-0 opacity-[0.04]
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"
        ></div>

        <div
          className="relative z-10
    max-w-7xl  
    
    mx-auto
    px-8
    grid
     pt-30 lg:p-0
    lg:grid-cols-2
    gap-20
    items-center"
        >
          <div className=" animate-left">
            <p
              className="uppercase tracking-[10px]
        text-red-500
        mb-6
        text-sm"
            >
              Full Stack Developer
            </p>

            <h2
              className="italic
        text-3xl
        lg:text-7xl
        font-light
        text-zinc-300"
            >
              Hi There,
            </h2>

            <h1
              className="mt-3
        text-5xl
        lg:text-[7rem]
        font-black
        leading-none"
            >
              Rohit
              <span className="block text-red-600">Singh</span>
            </h1>

            <p
              className="mt-8
        max-w-xl
        text-zinc-400
        text-[12px]
        md:text-lg
        leading-6
        lg:leading-8"
            >
              I build immersive full-stack web experiences with modern
              technologies including React, Next.js, Node.js, Express, MongoDB
              and WebSockets.
            </p>

            <div className="mt-12 flex gap-4 place-items-center ">
              <a
                href="#projects"
                className="md:px-9 text-[12px] sm:text-[16px] py-2 md:py-4 px-6 
          bg-red-600
          rounded-full
          hover:bg-red-700
          duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="md:px-9  text-[12px] sm:text-[16px] py-2 md:py-4 px-6
          rounded-full
          border
          border-zinc-700
          hover:border-red-600
          hover:text-red-500
          duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          <div
            className="relative   
      flex
      justify-center"
          >
            <div
              className="absolute  
        w-[380px]
        h-full
        rounded-full
        bg-red-700/20
        blur-[120px]"
            ></div>

            <div
              className="relative
        overflow-hidden border-b-4 rounded  border-zinc-400
        rounded-full
       
        group"
            >
              <img
                src="/image/dp.jpg"
                className="sm:w-[500px]
          w-[250px]
          h-[250px]
          sm:h-[500px]
          grayscale
          
          group-hover:grayscale-0
          group-hover:scale-110
          duration-700"
              />

              <div
                className="absolute 
          w-screen 
          inset-0
          bg-gradient-to-t
          from-black
          
          via-transparent
          to-transparent"
              ></div>
            </div>
          </div>
        </div>

        <div
          className="absolute
    bottom-10
    left-1/2
    -translate-x-1/2
    animate-bounce"
        >
          <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v14m0 0l-6-6m6 6l6-6"
              />
            </svg>
          </a>
        </div>
      </section>

      <section
        id=""
        className=" relative min-h-screen overflow-hidden bg-[#050505] text-white flex flex-col "
      >
        <div id="about" className="absolute inset-0 opacity-15">
          <div
            className="h-full w-full 
      bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
      bg-[size:80px_80px]"
          ></div>
        </div>

        <div
          className="absolute   left-[-250px] top-20 w-[500px] h-[500px]
    rounded-full bg-red-700/30 blur-[170px] animate-pulse"
        ></div>

        <div
          className="absolute  right-[-180px] bottom-10 w-[420px] h-[420px]
    rounded-full bg-red-600/20 blur-[160px] animate-pulse"
        ></div>

        <div
          className="absolute  inset-0 opacity-[0.04]
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"
        ></div>
        <div className=" w-4/5 mt-10 mx-auto h-10   ">
          <h1
            className="uppercase text-center w-full md:text-4xl text-2xl md:tracking-[10px]
        text-zinc-500
        mb-6
        "
          >
            ABOUT ME
          </h1>
        </div>
        <div className=" w-full p-5 md:p-0 md:w-4/6  md:mt-10 mx-auto   ">
          <p
            className="uppercase text-center w-full text-[12px] md:text-[18px] 
        text-red-500
        mb-6

        "
        >
          Hi, I'm Rohit, a self-taught Full Stack Web Developer passionate about building modern, responsive, and scalable web applications. I have hands-on experience with HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, Node.js, Express.js, MongoDB, WebSockets, and authentication using JWT & NextAuth. I enjoy solving real-world problems through code and continuously learning new technologies. Currently, I'm seeking a Junior Web Developer or Full Stack Internship where I can contribute to real projects, learn from experienced developers, and grow my technical skills.
          </p>
  </div>

        <div
          id="skills"
          className=" md:mt-20 w-screen flex flex-col items-center gap-5 "
        >
          <div className=" w-4/5  mx-auto h-10  ">
            <h1
              className="uppercase text-center w-full md:text-4xl text-2xl md:tracking-[10px]
        text-zinc-500
        mb-6
        "
            >
              SKILLS
            </h1>
          </div>

          <div className=" w-screen md:w-4/5 grid grid-cols-3 place-items-center  md:flex p-2 md:justify-between">
            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="lg:h-25 lg:w-25 w-15 h-15  transition-all duration-300 hover:scale-110"
              >
                <path
                  fill="#b91c1c"
                  d="M0 32L34.9 426.6 191.8 480 349.1 426.5 384 32H0zm308.2 127.1H124.3l3.8 43.2H304l-10.7 120.7-101.4 28.1-101.2-28.1-7-79h49.6l3.6 40.2 55 14.9 55.2-14.9 5.8-65.5H83.1L69.5 79.4h243.1l-4.4 79.7z"
                />
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                html
              </h1>
            </div>
            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="lg:h-25 lg:w-25 w-15 h-15  transition-all duration-500 hover:scale-110 hover:rotate-3"
              >
                <path
                  fill="#b91c1c"
                  d="M0 32L34.9 426.6 191.8 480l157.1-53.4L384 32H0zm308.2 94.3l-4.3 48.2-11.7 131.2L191.8 333.4l-.2.1-99.9-27.7-6.8-76.3h49l3.5 39.2 54.4 14.7.1-.1 54.6-14.7 5.7-63.9H83.5l-4.8-48.2h177.9l3.5-39.3H74.4L69.7 69.8h244.6l-6.1 56.5z"
                />
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                css
              </h1>
            </div>
            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 630 630"
                className="lg:h-25 lg:w-25 w-15 h-15  transition-all duration-300 hover:scale-110"
              >
                <path
                  fill="#b91c1c"
                  fill-rule="evenodd"
                  d="
      M0 0H630V630H0V0Z

      M423.2 492.2
      c12.9 21.1 29.7 36.6 59.5 36.6
      c25 0 41-12.5 41-29.8
      c0-20.7-16.4-28-43.9-40
      l-15.1-6.5
      c-43.6-18.6-72.5-41.9-72.5-91.2
      c0-45.4 34.6-80 88.7-80
      c38.5 0 66.2 13.4 86.2 48.6
      l-47.2 30.3
      c-10.4-18.6-21.6-25.9-39-25.9
      c-17.7 0-28.9 11.2-28.9 25.9
      c0 18.1 11.2 25.4 37.1 36.6
      l15.1 6.5
      c51.3 22 80.2 44.5 80.2 95
      c0 54.4-42.8 84.2-100.3 84.2
      c-56.2 0-92.5-26.8-110.3-61.9
      l49.4-28.5Z

      M208.3 497.5
      c9.5 16.8 18.1 31 38.8 31
      c19.8 0 32.3-7.8 32.3-38.1
      V284.3h60.2v206.9
      c0 62.7-36.8 91.2-90.5 91.2
      c-48.5 0-76.6-25.1-90.9-55.3
      l50.1-29.6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                javascript
              </h1>
            </div>
            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 54 33"
                className="lg:h-25 lg:w-25 w-15 h-15  transition-all duration-300 hover:scale-110"
              >
                <path
                  fill="#b91c1c"
                  d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.05.52 3.52 2.03 5.15 3.7 2.66 2.73 5.74 5.89 11.4 5.89 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.52-3.52-2.03-5.15-3.7C35.74 2.16 32.66 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.05.52 3.52 2.03 5.15 3.7 2.66 2.73 5.74 5.89 11.4 5.89 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.52-3.52-2.03-5.15-3.7-2.66-2.73-5.74-5.89-11.4-5.89z"
                />
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                tailwindcss
              </h1>
            </div>
            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
                className="lg:h-25 lg:w-25 w-15 h-15  transition-all duration-300 hover:scale-110"
              >
                <circle cx="0" cy="0" r="2.05" fill="#b91c1c" />

                <g fill="none" stroke="#b91c1c" stroke-width="1">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                react
              </h1>
            </div>
            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="lg:h-25 lg:w-25 w-15 h-15  transition-all duration-300 hover:scale-110"
              >
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#b91c1c"
                  stroke-width="8"
                />

                <path
                  fill="#b91c1c"
                  d="M43 92V36h8.5l32 39.5V36H93v56h-8.5L52.5 52.5V92H43z"
                />

                <path fill="#b91c1c" d="M77.5 73.5 94 92h-9.5L72.8 79.2z" />
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                next.js
              </h1>
            </div>
          </div>
          <div className=" w-4/5  flex justify-between">
            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 289"
                className="lg:h-25 lg:w-25 w-15 h-15  transition-all duration-300 hover:scale-110"
              >
                <path
                  fill="#b91c1c"
                  d="M128 0 0 73.9v141.2L128 289l128-73.9V73.9L128 0zm77.3 197.7c0 11.2-6.1 21.5-16 27.1L136.8 255c-9.6 5.5-21.6 5.5-31.2 0l-52.5-30.2c-9.9-5.7-16-16-16-27.1V91.3c0-11.2 6.1-21.5 16-27.1L105.6 34c9.6-5.5 21.6-5.5 31.2 0l52.5 30.2c9.9 5.7 16 16 16 27.1v106.4z"
                />

                <path
                  fill="#b91c1c"
                  d="M176.6 103.7c-11.5 0-18.4 6.1-18.4 16.4 0 9.2 5.5 13.3 17.2 17.2l5.9 2c8.4 2.9 10.8 5.3 10.8 9.6 0 5.1-4.1 8.6-11.7 8.6-9.2 0-13.7-4.5-16.4-10.4l-12.1 7c4.1 8.6 12.3 16 28.5 16 16 0 27.5-8.6 27.5-22.9 0-12.9-7.4-18.8-20.5-23.7l-5.9-2c-6.8-2.5-9.8-4.1-9.8-8.6 0-3.5 2.7-6.1 7-6.1 4.9 0 7.2 2 9.8 6.1l11.5-7.4c-4.9-8.6-11.9-12.7-23.4-12.7zm-73.8 1v49.2c0 7.8-3.3 10-8.6 10-5.1 0-8-3.1-10.4-7.2l-12.1 7.4c3.5 7 10.6 13.7 23.7 13.7 14.3 0 22.9-7.6 22.9-23.5v-49.6h-15.5z"
                />
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                node.js
              </h1>
            </div>
            <div className=" flex flex-col  items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220 50"
                className=" h-10   lg:h-20"
                fill="none"
              >
                <text
                  x="36"
                  y="36"
                  font-family="Arial, Helvetica, sans-serif"
                  font-size="34"
                  font-weight="700"
                  fill="#b91c1c"
                >
                  express
                </text>
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                express.js
              </h1>
            </div>

            <div className=" flex flex-col items-center w-fit justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                className="lg:w-30 w-15 h-15 lg:h-30"
                fill="none"
              >
                <path
                  d="M64 8
           C52 24 40 48 40 72
           C40 96 52 112 64 120
           C76 112 88 96 88 72
           C88 48 76 24 64 8Z"
                  fill="#b91c1c"
                />
              </svg>
              <h1
                className="uppercase text-center w-full text-[12px] lg:text-2xl lg:tracking-[6px]
        text-zinc-500
        mb-6"
              >
                mongodb
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative  min-h-screen overflow-hidden bg-[#050505] text-white flex flex-col"
      >
        <div className="absolute inset-0 opacity-15">
          <div
            className="h-full w-full 
      bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
      bg-[size:80px_80px]"
          ></div>
        </div>

        <div
          className="absolute   left-[-250px] top-20 w-[500px] h-[500px]
    rounded-full bg-red-700/30 blur-[170px] animate-pulse"
        ></div>

        <div
          className="absolute  right-[-180px] bottom-10 w-[420px] h-[420px]
    rounded-full bg-red-600/20 blur-[160px] animate-pulse"
        ></div>

        <div
          className="absolute  inset-0 opacity-[0.04]
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"
        ></div>
        <div className=" w-4/5 mt-20 mx-auto h-10  ">
          <h1
            className="uppercase text-center w-full md:text-4xl text-2xl md:tracking-[10px]
        text-zinc-500
        mb-6
        "
          >
            projects
          </h1>
        </div>
        <div className="w-4/5   mx-auto lg:h-95 mt-10  ">
          <div className="lg:w-3/7 w-full border border-zinc-500 rounded-2xl relative md:ml-10 h-full ">
            <div className="lg:w-4/5 flex flex-col gap-3 w-full lg:mt-0 mt-20 h-full  p-5">
              <h1
                className="uppercase  text-center w-full md:text-4xl text-2xl 
        text-zinc-500
        mb-6"
              >
                Velix chat-app
              </h1>
              <p className="  text-[10px] sm:text-[16px] w-full    text-red-500 text-center">
                Built a modern full-stack real-time chat application using
                React, Express.js, MongoDB, and Socket.IO. Implemented JWT-based
                authentication, secure login/signup, username-based
                conversations, and instant messaging with a responsive user
                interface.
              </p>
              <a
                href="https://velixchat.netlify.app/"
                className="md:px-9 text-[12px] sm:text-[16px] py-2 md:py-4 px-6 
          bg-red-600
          rounded-full
          w-fit
          hover:bg-red-700
          duration-300"
              >
                Live Demo
              </a>
            </div>
            <a href="https://velixchat.netlify.app/">
              <div className=" absolute   lg:-right-130 rounded-2xl mx-auto lg:top-9 -top-10  ">
                <div
                  className="relative  
      flex
      justify-center"
                >
                  <div
                    className="absolute  
        
        h-full
        rounded-full
        bg-red-700/20
        blur-[120px]"
                  ></div>

                  <div
                    className="relative
        overflow-hidden border-4  border-zinc-400
        rounded-[35px]
       
        group"
                  >
                    <img
                      src="/image/velix.png"
                      className="
          lg:w-150 w-60
          grayscale
          
          group-hover:grayscale-0
          group-hover:scale-110
          duration-700"
                    />

                    <div
                      className="absolute 
          w-screen 
          inset-0
          bg-gradient-to-t
          from-black
          
          via-transparent
          to-transparent"
                    ></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-4/5   mx-auto lg:h-95 lg:mt-10 mt-20  ">
          <div className="lg:w-3/7 w-full border border-zinc-500 rounded-2xl relative md:ml-10 h-full ">
            <div className="lg:w-4/5 w-full flex flex-col lg:mt-0 gap-3 mt-20 h-full  p-5">
              <h1
                className="uppercase  text-center w-full md:text-4xl text-2xl 
        text-zinc-500
        mb-6"
              >
                Universal Cafe{" "}
              </h1>
              <p className="  text-[10px] sm:text-[16px] w-full    text-red-500 text-center">
                Developed a full-stack café web application using Next.js and
                MongoDB, featuring NextAuth authentication, admin dashboard,
                dynamic menu management, shopping cart, order history, and
                Razorpay payment integration. Designed a responsive and
                user-friendly interface with secure authentication and seamless
                online ordering.
              </p>
              <a
                href="https://universalxcafefullstackk.vercel.app/"
                className="md:px-9 text-[12px] sm:text-[16px] py-2 md:py-4 px-6 
          bg-red-600
          rounded-full
          w-fit
          hover:bg-red-700
          duration-300"
              >
                Live Demo
              </a>
            </div>
            <a href="https://universalxcafefullstackk.vercel.app/">
              <div className=" absolute   lg:-right-130 rounded-2xl mx-auto lg:top-9 -top-10 ">
                <div
                  className="relative  
      flex
      justify-center"
                >
                  <div
                    className="absolute  
        
        h-full
        rounded-full
        bg-red-700/20
        blur-[120px]"
                  ></div>

                  <div
                    className="relative
        overflow-hidden border-4  border-zinc-400
        rounded-[35px]
       
        group"
                  >
                    <img
                      src="/image/cafe.png"
                      className="
          lg:w-150 w-60
          grayscale
          
          group-hover:grayscale-0
          group-hover:scale-110
          duration-700"
                    />

                    <div
                      className="absolute 
          w-screen 
          inset-0
          bg-gradient-to-t
          from-black
          
          via-transparent
          to-transparent"
                    ></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-4/5   mx-auto lg:h-95 mt-20 lg:mt-10  ">
          <div className="lg:w-3/7 w-full border border-zinc-500 rounded-2xl relative md:ml-10 h-full ">
            <div className="lg:w-4/5 flex flex-col gap-3 w-full lg:mt-0 mt-20 h-full  p-5">
              <h1
                className="uppercase  text-center w-full md:text-4xl text-2xl 
        text-zinc-500
        mb-6"
              >
                Elevate Studio
              </h1>
              <p className="  text-[10px] sm:text-[16px] w-full    text-red-500 text-center">
                Designed and developed a modern, responsive photography studio
                website using React and Tailwind CSS. Showcased services,
                portfolio, contact information, and session booking with
                WhatsApp integration, delivering a smooth and user-friendly
                experience across all devices.
              </p>
              <a
                href="https://elivatestudio.netlify.app/"
                className="md:px-9 w-fit text-[12px] sm:text-[16px] py-2 md:py-4 px-6 
          bg-red-600
          rounded-full
          hover:bg-red-700
          duration-300  "
              >
                Live Demo
              </a>
            </div>
            <a href="https://elivatestudio.netlify.app/">
              <div className=" absolute   lg:-right-130 rounded-2xl mx-auto lg:top-9 -top-10 ">
                <div
                  className="relative  
      flex
      justify-center"
                >
                  <div
                    className="absolute  
        
        h-full
        rounded-full
        bg-red-700/20
        blur-[120px]"
                  ></div>

                  <div
                    className="relative
        overflow-hidden border-4  border-zinc-400
        rounded-[35px]
       
        group"
                  >
                    <img
                      src="/image/st.png"
                      className="
          lg:w-150 w-60
          grayscale
          
          group-hover:grayscale-0
          group-hover:scale-110
          duration-700"
                    />

                    <div
                      className="absolute 
          w-screen 
          inset-0
          bg-gradient-to-t
          from-black
          
          via-transparent
          to-transparent"
                    ></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex flex-col">
        <div className="absolute inset-0 opacity-15">
          <div
            className="h-full w-full 
      bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
      bg-[size:80px_80px]"
          ></div>
        </div>

        <div
          className="absolute   left-[-250px] top-20 w-[500px] h-[500px]
    rounded-full bg-red-700/30 blur-[170px] animate-pulse"
        ></div>

        <div
          className="absolute  right-[-180px] bottom-10 w-[420px] h-[420px]
    rounded-full bg-red-600/20 blur-[160px] animate-pulse"
        ></div>

        <div
          className="absolute  inset-0 opacity-[0.04]
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"
        ></div>
        <div className=" w-4/5 mt-20 mx-auto h-10  ">
          <h1
            className="uppercase text-center w-full md:text-4xl text-2xl md:tracking-[10px]
        text-zinc-500
        mb-6
        "
          >
            Freelance Projects
          </h1>
        </div>
        <div className="w-4/5   mx-auto lg:h-95 mt-10  ">
          <div className="lg:w-3/7 w-full border border-zinc-500 rounded-2xl relative md:ml-10 h-full ">
            <div className="lg:w-4/5 flex flex-col gap-3 lg:mt-0 w-full mt-20 h-full  p-5">
              <h1
                className="uppercase  text-center w-full md:text-4xl text-2xl 
        text-zinc-500
        mb-6"
              >
                Editor Portfolio Website 1
              </h1>
              <p className="  text-[10px] sm:text-[16px] w-full    text-red-500 text-center">
                Built a custom pink-themed portfolio website tailored to the
                client's requirements using React and Tailwind CSS. Created a
                responsive, visually engaging interface with service highlights,
                portfolio showcase, and WhatsApp integration for direct
                inquiries.
              </p>
              <a
                href="https://riyabansalportfolioo.netlify.app/"
                className="md:px-9 text-[12px] sm:text-[16px] py-2 md:py-4 px-6 
          bg-red-600
          rounded-full
          hover:bg-red-700
          w-fit
          duration-300"
              >
                Live Demo
              </a>
            </div>
            <a href="https://riyabansalportfolioo.netlify.app/">
              <div className=" absolute   lg:-right-130 rounded-2xl mx-auto lg:top-9 -top-10 ">
                <div
                  className="relative  
      flex
      justify-center"
                >
                  <div
                    className="absolute  
        
        h-full
        rounded-full
        bg-red-700/20
        blur-[120px]"
                  ></div>

                  <div
                    className="relative
        overflow-hidden border-4  border-zinc-400
        rounded-[35px]
       
        group"
                  >
                    <img
                      src="/image/po1.png"
                      className="
          lg:w-150 w-60
          grayscale
          
          group-hover:grayscale-0
          group-hover:scale-110
          duration-700"
                    />

                    <div
                      className="absolute 
          w-screen 
          inset-0
          bg-gradient-to-t
          from-black
          
          via-transparent
          to-transparent"
                    ></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-4/5   mx-auto lg:h-95 lg:mt-10 mt-20  ">
          <div className="lg:w-3/7 w-full border border-zinc-500 rounded-2xl relative md:ml-10 h-full ">
            <div className="lg:w-4/5 w-full flex flex-col lg:gap-0 lg:mt-0 gap-3 mt-20 h-full  p-5">
              <h1
                className="uppercase  text-center w-full md:text-4xl text-2xl 
        text-zinc-500
        mb-6"
              >
                Editor Portfolio Website 2
              </h1>
              <p className="  text-[10px] sm:text-[16px] w-full    text-red-500 text-center">
                Designed and developed a modern dark-themed portfolio website
                for a video editor using React and Tailwind CSS. Implemented a
                fully responsive layout, project showcase, and WhatsApp
                integration for seamless client communication.
              </p>
              <a
                href="https://namankuradiaportfolio.netlify.app/"
                className="md:px-9 text-[12px] sm:text-[16px] py-2 md:py-4 px-6 
          bg-red-600
          w-fit
          rounded-full
          hover:bg-red-700
          duration-300"
              >
                Live Demo
              </a>
            </div>
            <a href="https://namankuradiaportfolio.netlify.app">
              <div className=" absolute   lg:-right-130 rounded-2xl mx-auto lg:top-9 -top-10 ">
                <div
                  className="relative  
      flex
      justify-center"
                >
                  <div
                    className="absolute  
        
        h-full
        rounded-full
        bg-red-700/20
        blur-[120px]"
                  ></div>

                  <div
                    className="relative
        overflow-hidden border-4  border-zinc-400
        rounded-[35px]
       
        group"
                  >
                    <img
                      src="/image/po2.png"
                      className="
          lg:w-150 w-60
          grayscale
          
          group-hover:grayscale-0
          group-hover:scale-110
          duration-700"
                    />

                    <div
                      className="absolute 
          w-screen 
          inset-0
          bg-gradient-to-t
          from-black
          
          via-transparent
          to-transparent"
                    ></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex flex-col"
      >
        <div className="absolute inset-0 opacity-15">
          <div
            className="h-full w-full 
      bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
      bg-[size:80px_80px]"
          ></div>
        </div>

        <div
          className="absolute   left-[-250px] top-20 w-[500px] h-[500px]
    rounded-full bg-red-700/30 blur-[170px] animate-pulse"
        ></div>

        <div
          className="absolute  right-[-180px] bottom-10 w-[420px] h-[420px]
    rounded-full bg-red-600/20 blur-[160px] animate-pulse"
        ></div>

        <div
          className="absolute  inset-0 opacity-[0.04]
    bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"
        ></div>
        <div className=" w-4/5 mt-20 mx-auto h-10  ">
          <h1
            className="uppercase text-center w-full md:text-4xl text-2xl md:tracking-[10px]
        text-zinc-500
        mb-6
        "
          >
            get in touch
          </h1>
        </div>
        <div className="w-full  flex flex-col md:flex-row h-fit ">
          <div className="md:w-2/5 w-full  justify-center flex  items-center flex-col ">
            <div className=" w-4/5 text-2xl md:w-3/5 flex justify-center  items-center md:text-3xl">
              <h1>Contact Information</h1>
            </div>
            <div className=" w-4/5 md:w-3/5  items-center flex gap-10 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b91c1c" // pink-500
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.11a2 2 0 0 1 2.11-.45c.84.27 1.72.47 2.62.59A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <h1 className="md:text-3xl text-[20px] ">Phone</h1>
                <p className="text-blborder-black/70 text-[16px]">
                  +91-9953524978
                </p>
              </div>
            </div>
            <div className=" w-4/5 md:w-3/5 flex     items-center gap-10 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b91c1c" // pink-500
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_6px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-110"
              >
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="M3 7l9 6 9-6"></path>
              </svg>
              <div>
                <h1 className="md:text-3xl text-[20px] ">Email</h1>
                <p className="text-blborder-black/70    w-full  text-[16px]">
                  rohitsingh28205@gmail.com
                </p>
              </div>
            </div>

            <div className=" w-4/5 md:w-3/5 flex    items-center gap-8 mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b91c1c" // pink-500
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_6px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-110"
              >
                <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"></path>
                <circle cx="12" cy="11" r="2.5"></circle>
              </svg>
              <div>
                <h1 className="md:text-3xl text-[20px]">Location</h1>
                <p className="text-blborder-black/70    w-full  text-[16px]">
                  New Delhi, India
                </p>
              </div>
            </div>
            <div className="w-full mt-5 gap-10 flex justify-center "></div>
          </div>
          <div className=" w-full md:w-3/5 ">
            <form
              className=" relative z-30 flex-col fo flex justify-center items-center gap-5 mt-10"
              action=""
              onSubmit={handleSubmit(onsubmit)}
            >
              <div className=" w-4/5 ">
                <h1 className="text-[16px] md:text-2xl">Full Name</h1>
                <input
                  placeholder="Enter Your Full name"
                  className="border-zinc-500 p-3 border rounded-2xl  h-10 w-full"
                  type="text"
                  {...register("name", { required: true })}
                />
              </div>
              <div className=" w-4/5 ">
                <h1 className="text-[16px] md:text-2xl">Email Address </h1>
                <input
                  placeholder="Enter Your Email"
                  className="border-zinc-500 p-3  rounded-2xl border h-10 w-full"
                  type="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className=" w-4/5 ">
                <h1 className="text-[16px] md:text-2xl">Phone Number</h1>
                <input
                  placeholder="Enter Your Phone Number"
                  className="border-zinc-500 p-3 rounded-2xl border h-10 w-full"
                  type="tel"
                  {...register("tel", { required: true })}
                />
              </div>
              <div className=" w-4/5 ">
                <h1 className="text-[16px] md:text-2xl">Message</h1>
                <textarea
                  placeholder="Write Your Message"
                  className="border-zinc-500 p-3 rounded-2xl w-full border"
                  name=""
                  id=""
                  {...register("msg", { required: true })}
                ></textarea>
              </div>

              <input
                className=" text-blborder-black fo rounded-2xl cursor-pointer w-70  bg-gradient-to-br from-zinc-600 to-red-800 hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                disabled={isSubmitting}
                type="submit"
                value="Send Message via WhatsApp "
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
