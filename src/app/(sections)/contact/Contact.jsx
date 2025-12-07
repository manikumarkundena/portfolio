import React from "react";
import GlassCard from "../../components/GlassCard";
import { getPersonalData, getSocialsData } from "../../lib/data";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { MotionDiv } from "../../components/MotionWrappers";

const iconMap = {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
};

const Contact = async () => {
  const personal = await getPersonalData();
  const socials = await getSocialsData();

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-neon-purple text-neon-glow-purple">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CONTACT INFO --------------------------- */}
        <MotionDiv
          variants={infoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-1 space-y-6"
        >
          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-neon-purple text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Email Address</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-white hover:text-neon-cyan transition"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-neon-purple text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">{personal.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-neon-purple text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">{personal.address}</p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-8 pt-4 border-t border-gray-700/50">
              <h4 className="text-lg font-semibold mb-3 text-neon-cyan">
                Connect
              </h4>
              <div className="flex space-x-4">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-300 hover:text-neon-purple transition duration-300 hover:scale-110"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        </MotionDiv>

        {/* CONTACT FORM (WEB3FORMS) ------------------- */}
        <MotionDiv
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2"
        >
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">
              Send a Message
            </h3>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">

  <input type="hidden" name="apikey" value="1c562c0a-bbaa-420b-a32f-88cb5741d2cb" />
  <input type="hidden" name="redirect" value="http://localhost:3000/thank-you" />

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-300">Your Name</label>
    <input type="text" name="name" required 
      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-300">Your Email</label>
    <input type="email" name="email" required 
      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg" />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
    <textarea name="message" rows="5" required
      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg"></textarea>
  </div>

  <button type="submit"
    className="w-full px-6 py-3 bg-neon-cyan text-background-dark rounded-xl">
    Send Message
  </button>

</form>

           
          </GlassCard>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Contact;
