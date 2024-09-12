/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// SignupFormDemo.jsx
import Section from "./Section"
const LabelInputContainer = ({ children, className = '' }) => {
  return <div className={`relative flex flex-col space-y-2 w-full ${className}`}>{children}</div>;
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
    console.log('Form submitted');
  };

  return (
    <Section>
      <div className="w-full p-4 mx-auto bg-white rounded-none shadow-lg md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Welcome to Aceternity</h2>
        <p className="max-w-sm mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Login to Aceternity if you can because we don't have a login flow yet
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <label htmlFor="name" className="text-sm font-medium">Nom / Prenom *</label>
              <input id="name" placeholder="Tyler Durden" type="text" className="transition-all duration-300 ease-in-out border-b-2 border-gray-300 input-field peer focus:border-blue-500 focus:outline-none" />
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 peer-focus:w-full"></span>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
              <input id="email" placeholder="projectmayhem@fc.com" type="email" className="transition-all duration-300 ease-in-out border-b-2 border-gray-300 input-field peer focus:border-blue-500 focus:outline-none" />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 peer-focus:w-full"></span>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4" >
              <label htmlFor="lastname" className="text-sm font-medium">Téléphone</label>
              <input id="lastname" placeholder="Durden" type="text" className="transition-all duration-300 ease-in-out border-b-2 border-gray-300 input-field peer focus:border-blue-500 focus:outline-none" />
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 peer-focus:w-full"></span>
            </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input id="password" placeholder="••••••••" type="password" className="transition-all duration-300 ease-in-out border-b-2 border-gray-300 input-field peer focus:border-blue-500 focus:outline-none" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 peer-focus:w-full"></span>
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <label htmlFor="twitterpassword" className="text-sm font-medium">Your Twitter Password</label>
            <input id="twitterpassword" placeholder="••••••••" type="password" className="transition-all duration-300 ease-in-out border-b-2 border-gray-300 input-field peer focus:border-blue-500 focus:outline-none" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 peer-focus:w-full"></span>
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
    </Section>
  );
};

export default Form;
