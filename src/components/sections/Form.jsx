/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// SignupFormDemo.jsx
import Section from "./Section";

const LabelInputContainer = ({ children, className = "" }) => {
  return (
    <div className={`relative flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 group-hover:opacity-100 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 group-hover:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-sky-100">
      <Section>
        <div className="w-full p-4 mx-auto bg-white rounded-none shadow-2xl md:rounded-2xl md:p-8 dark:bg-black">
          <div>
            <h2 className="text-black text-center text-2xl lg:text-[2rem] font-bold font-kallisto">
              Discutons de Votre Projet Digital
            </h2>
          </div>
          <div className="flex justify-between gap-8 pt-12">
            <div className="w-full">
            <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
              Login to Aceternity if you can because we don't have a login flow
              yet
            </p>
              
            </div>
            <div className="w-full">

              <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                  <LabelInputContainer className="mb-4">
                    <div className="relative">
                      <input
                        id="name"
                        placeholder=" "
                        type="text"
                        className="w-full h-10 px-3 pt-2 text-sm bg-transparent border-b-2 border-gray-300 input peer focus:outline-none focus:border-blue-500"
                      />
                      <label
                        htmlFor="name"
                        className="absolute text-sm text-gray-400 transition-all transform scale-75 -translate-y-6 left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Nom*
                      </label>
                    </div>
                  </LabelInputContainer>

                  <LabelInputContainer className="mb-4">
                    <div className="relative">
                      <input
                        id="firstname"
                        placeholder=" "
                        type="text"
                        className="w-full h-10 px-3 pt-2 text-sm bg-transparent border-b-2 border-gray-300 input peer focus:outline-none focus:border-blue-500"
                      />
                      <label
                        htmlFor="firstname"
                        className="absolute text-sm text-gray-400 transition-all transform scale-75 -translate-y-6 left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Prénom*
                      </label>
                    </div>
                  </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                  <div className="relative">
                    <input
                      id="email"
                      placeholder=" "
                      type="email"
                      className="w-full h-10 px-3 pt-2 text-sm bg-transparent border-b-2 border-gray-300 input peer focus:outline-none focus:border-blue-500"
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-sm text-gray-400 transition-all transform scale-75 -translate-y-6 left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email Address *
                    </label>
                  </div>
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <div className="relative">
                    <input
                      id="phone"
                      placeholder=" "
                      type="text"
                      className="w-full h-10 px-3 pt-2 text-sm bg-transparent border-b-2 border-gray-300 input peer focus:outline-none focus:border-blue-500"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-sm text-gray-400 transition-all transform scale-75 -translate-y-6 left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Téléphone
                    </label>
                  </div>
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder=" "
                      className="w-full h-24 px-3 pt-2 text-sm bg-transparent border-b-2 border-gray-300 resize-none input peer focus:outline-none focus:border-blue-500"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute text-sm text-gray-400 transition-all transform scale-75 -translate-y-6 left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Message
                    </label>
                  </div>
                </LabelInputContainer>

                <button
                  className="relative w-full h-10 font-medium text-white rounded-md shadow-lg bg-gradient-to-br from-black dark:from-zinc-900 to-neutral-600 group"
                  type="submit"
                >
                  Envoyer &rarr;
                  <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Form;
