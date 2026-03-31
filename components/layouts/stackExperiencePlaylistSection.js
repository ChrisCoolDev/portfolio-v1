"use client"

import Experience from "../basis/experience";
import MyStack from "../basis/myStack";
import Playlist from "../basis/playlist";
import { motion } from 'framer-motion';

export default function StackExperiencePlaylistSection() {
  return (
    <>
        <div className="px-4 pt-[80px] pb-[68px] max-sm:pb-[120px]">
            
            <div className="flex justify-between items-start max-w-[1080px] mx-auto max-xl:max-w-[900px] max-xl:flex-col gap-6 max-lg:max-w-[700px] max-md:max-w-full">
              <div className="flex flex-col gap-6 max-xl:flex-row max-xl:justify-between max-xl:w-[900px] max-xl:gap-4 max-lg:flex-col max-lg:gap-6 max-lg:max-w-[700px] max-md:max-w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Experience />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <MyStack />
                </motion.div>
              </div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
              >
                  <Playlist />
              </motion.div>
            </div>
        </div>
    </>
  );
}