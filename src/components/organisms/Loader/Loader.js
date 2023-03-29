import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import LogoSVG from "../../../assets/images/logo.svg";

const LoaderWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 99999999;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  &.isFinished {
    transform: translateY(-100%);
  }
`;

const Layer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  z-index: 999999999;
`;

const Logo = styled(motion.img)`
  width: 200px;
  z-index: 9999999999;
`;

const Loader = ({ isLoading, setLoaderExit }) => {
  return (
    <AnimatePresence onExitComplete={() => setLoaderExit(true)}>
      {isLoading && (
        <LoaderWrapper exit={{ y: "100%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <Layer
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          ></Layer>
          <Logo
            src={LogoSVG}
            alt="Loading logo"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </LoaderWrapper>
      )}
    </AnimatePresence>
  );
};

export default Loader;
