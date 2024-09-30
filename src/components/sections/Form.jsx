import React, { useState } from "react";
import axios from "axios";
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
      <span className="absolute inset-x-0 block w-full h-[2px] transition duration-500 opacity-0 group-hover:opacity-100 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="absolute block w-1/2 h-[2px] mx-auto transition duration-500 opacity-0 group-hover:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      ); // Assure-toi de mettre l'URL de ton backend
      if (response.status === 200) {
        setStatus("Message envoyé avec succès !");
        setErrors([]);
        setFormData({
          name: "",
          firstname: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([{ msg: "Une erreur est survenue." }]);
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-cyan-100 to-blue-100">
      <Section>
        <div className="w-full p-4 mx-auto bg-[#f5f5f5] rounded-none shadow-2xl md:rounded-2xl md:p-8 dark:bg-black bg-white">
          <div>
            <h2 className="text-black text-center text-2xl lg:text-[2rem] font-bold font-kallisto">
              Discutons de Votre Projet Digital !
            </h2>
          </div>
          <div className="flex flex-col gap-8 pt-12 md:flex-row">
            <div className="flex flex-row md:flex-col md:h-[200px] items-center justify-around w-full text-xl h-[70px]">
              <div className="">
                <p className="text-lg font-medium text-center uppercase md:text-xl">
                  Par email
                </p>
                <p className="text-lg text-center">contact@hexweb.fr</p>
              </div>
              <div>
                <p className="text-lg font-medium text-center uppercase md:text-xl">
                  par le formulaire
                </p>
                <p className="text-lg text-center">
                  description du temp de réponse{" "}
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-center uppercase md:text-xl">
                  Horaires
                </p>
                <p className="text-lg text-center ">Lundi-Vendredi, 8h-17h </p>
              </div>
            </div>
            <div className="w-full">
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col w-full h-auto gap-8 mb-8 md:flex-row">
                  <LabelInputContainer className="h-full">
                    <div className="relative">
                      <input
                        id="name"
                        value={formData.name}
                        placeholder=" "
                        onChange={handleChange}
                        type="text"
                        className="w-full h-10 px-3 pt-2 text-sm bg-transparent border border-gray-300 border-solid input peer focus:outline-none focus:border-blue-500"
                      />
                      <label
                        htmlFor="name"
                        className="absolute px-4 text-sm text-center text-gray-400 transition-all transform scale-75 -translate-y-6 font-nunito-sans left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:bg-white peer-focus:-translate-y-4"
                      >
                        Nom*
                      </label>
                    </div>
                  </LabelInputContainer>

                  <LabelInputContainer className="h-full">
                    <div className="relative">
                      <input
                        id="firstname"
                        value={formData.firstname}
                        placeholder=" "
                        onChange={handleChange}
                        type="text"
                        className="w-full h-10 px-3 pt-2 text-sm bg-transparent border border-gray-300 input peer focus:outline-none focus:border-blue-500"
                      />
                      <label
                        htmlFor="firstname"
                        className="absolute px-4 text-sm text-center text-gray-400 transition-all transform scale-75 -translate-y-6 font-nunito-sans left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:bg-white peer-focus:-translate-y-4"
                      >
                        Prénom*
                      </label>
                    </div>
                  </LabelInputContainer>
                </div>

                <LabelInputContainer className="h-full mb-8">
                  <div className="relative">
                    <input
                      id="email"
                      value={formData.email}
                      placeholder=" "
                      onChange={handleChange}
                      type="email"
                      className="w-full h-10 px-3 pt-2 text-sm bg-transparent border border-gray-300 input peer focus:outline-none focus:border-blue-500"
                    />
                    <label
                      htmlFor="email"
                      className="absolute px-4 text-sm text-center text-gray-400 transition-all transform scale-75 -translate-y-6 font-nunito-sans left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:bg-white peer-focus:-translate-y-4"
                    >
                      Email Address *
                    </label>
                  </div>
                </LabelInputContainer>

                <LabelInputContainer className="h-full mb-8">
                  <div className="relative">
                    <input
                      id="phone"
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleChange}
                      type="text"
                      className="w-full h-10 px-3 pt-2 text-sm bg-transparent border border-gray-300 input peer focus:outline-none focus:border-blue-500"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute px-4 text-sm text-center text-gray-400 transition-all transform scale-75 -translate-y-6 font-nunito-sans left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:bg-white peer-focus:-translate-y-4"
                    >
                      Téléphone
                    </label>
                  </div>
                </LabelInputContainer>

                <LabelInputContainer className="h-full mb-8">
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full h-24 px-3 pt-2 text-sm bg-transparent border border-gray-300 resize-none input peer focus:outline-none focus:border-blue-500"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute px-4 text-sm text-center text-gray-400 transition-all transform scale-75 -translate-y-6 font-nunito-sans left-3 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:bg-white peer-focus:-translate-y-4"
                    >
                      Message
                    </label>
                  </div>
                </LabelInputContainer>

                <button
                  className="relative w-full p-1 font-medium text-white !bg-black rounded-md shadow-lg font-nunito-sans b-8 group"
                  type="submit"
                >
                  Envoyer &rarr;
                  <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-8 h-[1px] w-full" />
              </form>
              {errors.length > 0 && (
                <div className="error-messages">
                  <ul>
                    {errors.map((error, index) => (
                      <li key={index}>{error.msg}</li>
                    ))}
                  </ul>
                </div>
              )}
              {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Form;
