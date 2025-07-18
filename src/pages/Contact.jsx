import { useState } from "react";
import emailjs from "emailjs-com";
import {
  AiOutlineUser,
  AiOutlineMail
} from "react-icons/ai";
import { MdSubject } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaRegCommentDots } from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";

const SERVICE_ID = "service_hxmeltg";
const TEMPLATE_ID = "ctemplate_4cuysme";
const USER_ID = "fOcu1jHpv6dTSjiad";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const templateParams = {
        ...formData,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

      alert("Thank you for your message! We will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="text-white" style={{
      backgroundImage: "linear-gradient(135deg, #db1212 5%, #7a43bf 38%, #3dd7d7 69%, #b1c709 95%)",
    }}>
       <section class="overflow-hidden">
        <div class="flex flex-col font-emilys lg:flex-row lg:items-stretch lg:min-h-[600px]">
          <div class="relative flex items-center justify-center w-full lg:order-1 lg:w-7/12">
            <div class="absolute bottom-0 right-0 hidden lg:block">
              <img
                class="object-contain w-auto h-48"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                alt=""
              />
            </div>

            <div class="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                Let’s Start Your Journey Together
              </h1>
              <p class="mt-6 text-lg font-bold text-black sm:text-xl">
                Have a question? Need help with a visa, flight, or hotel? We're
                ready to make it happen.
              </p>
              <p class="mt-4 text-base text-black font-bold max-w-xl">
                Call, message, or visit us — our travel experts are here to plan
                every detail of your next adventure.
              </p>
            </div>

            <div class="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-right-20">
              <img
                class="w-32 h-32 md:w-40 md:h-40"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                alt=""
              />
            </div>
          </div>

          <div class="relative w-full overflow-hidden lg:order-2 h-screen lg:w-5/12">
            <div class="absolute inset-0">
              <img
                class="object-cover w-full h-full scale-150"
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Contact Flyway Travel"
              />
            </div>

            <div class="absolute bottom-0 left-0">
              <div class="p-4 sm:p-6 lg:p-8">
                <div class="flex items-center">
                  <svg
                    class="w-10 h-10 text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h2 class="ml-3 text-4xl font-bold text-white">10000+</h2>
                </div>
                <p class="max-w-xs mt-1.5 text-base text-white">
                  Happy travelers trust Flyway every year for honest advice,
                  quick support, and dream getaways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-fixed bg-cover bg-center min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-5 py-5 md:px-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-20 items-start">
            <div className="md:col-span-2">
              <h2 className="font-bold text-white">Contact us</h2>
              <h1 className="mb-3 pb-4 text-3xl font-bold text-white md:text-5xl">
                Have questions?
                <br />
                Get in touch!
              </h1>
              <p className="mb-3 text-white font-normal text-justify">
                Have a question or need to book a service? We're here to help!
              </p>
              <div className="space-y-2 font-normal text-lg text-white">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-white" />
                  <span>info@flywaytravel.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-white" />
                  <span>02 641 4434</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-white" />
                  <span>Al Nahyan - E25 - Abu Dhabi</span>
                </div>
              </div>

              <div className="mt-10 flex space-x-6">
                <a href="" className="text-white hover:text-red-700"><FaWhatsapp size={24} /></a>
                <a href="" className="text-white hover:text-red-700"><FaInstagram size={24} /></a>
                <a href="" className="text-white hover:text-red-700"><FaYoutube size={24} /></a>
                <a href="" className="text-white hover:text-red-700"><FaTiktok size={24} /></a>
                <a href="" className="text-white hover:text-red-700"><FaFacebook size={24} /></a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative flex items-center w-full">
                    <AiOutlineUser className="absolute left-2 text-white" size={20} />
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-white border-b border-white focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500" />
                  </div>

                  <div className="relative flex items-center">
                    <MdSubject className="absolute left-2 text-white" size={20} />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-white border-b border-white focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500" />
                  </div>

                  <div className="relative flex items-center">
                    <BiPhone className="absolute left-2 text-white" size={20} />
                    <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-white border-b border-white focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500" />
                  </div>

                  <div className="relative flex items-center">
                    <AiOutlineMail className="absolute left-2 text-white" size={20} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-white border-b border-white focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500" />
                  </div>

                  <div className="relative flex items-center sm:col-span-2">
                    <FaRegCommentDots className="absolute left-2 top-4 text-white" size={20} />
                    <textarea name="message" placeholder="How can we help you?" rows="5" value={formData.message} onChange={handleChange}
                      className="pl-8 pr-2 py-3 bg-transparent w-full text-lg text-white border-b border-white focus:border-red-700 hover:border-red-700 outline-none transition-all duration-500" required />
                  </div>
                </div>

                <button type="submit" disabled={submitting}
                  className={`relative mt-12 lg:ml-auto max-lg:w-full rounded-lg inline-flex items-center px-9 py-3 overflow-hidden text-base font-medium border ${
                    submitting
                      ? "bg-gray-300 text-black cursor-not-allowed"
                      : "text-white border-white hover:text-black hover:bg-white"
                  }`}>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <LuSendHorizontal className="ml-2" size={18} />
                  </span>
                  <span className="relative">
                    {submitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div style={{ overflow: "hidden" }}>
      <div className="relative w-full h-96">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.523346885761!2d54.38211257449502!3d24.467317360878045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6737a02e677b%3A0xc65731d635c5380b!2sFLY%20WAY%20TRAVEL!5e0!3m2!1sen!2sae!4v1752847625938!5m2!1sen!2sae"
          allowFullScreen
          aria-hidden="false"
          tabIndex="10"
        ></iframe>
      </div>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#77ffc2",
            width: "100%",
            height: 165,
            transform: "rotate(180deg)",
          }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
    </main>
  );
};

export default Contact;
