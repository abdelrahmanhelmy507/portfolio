import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";

export default function ProfileCardSectoin() {
     const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  return (
    <div className="main-profile-card">
    <ProfileCard
      name="AbdElrahman Helmy"
      title="Software Engineer"
      handle="AbdElrahmanHelmy"
      status="Online"
      contactText="Contact Me"
      avatarUrl="/me3.jpeg"
      showUserInfo={true}
      enableTilt={true}
      enableMobileTilt={false}
      behindGlowEnabled={false}
      onContactClick={() => console.log("Contact clicked")}
    />
     <motion.div
  className="profile-info"
  initial="hidden"
  animate="visible"
  variants={infoVariants}
>
  <h2>About Me</h2>
  <p>
    I'm a passionate Front-End Developer focused on creating smooth,
    user-friendly interfaces and dynamic web experiences.
  </p>
  <p>
    Skills: JavaScript, React, Tailwind CSS, HTML, CSS
  </p>
  <p>
    Looking for remote opportunities to build interactive and modern
    web apps.
  </p>
</motion.div>

    </div>
  );
}
