import { CONTACT } from "../constants";
import { animate, motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="mailto:afia6402@gmail.com" className="border-b">{CONTACT.email}</a>
            <p className="my-12">Copyright © Afia Tasnim</p>
        </div>
    </div>
  )
}

export default Contact