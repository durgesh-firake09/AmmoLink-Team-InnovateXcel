"use client";
import ConnectButton from "./components/ConnectButton";

import User from "./components/User";
import HeaderFunc from "./components/Header";
// import User from "@/app/components/User";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import Hero from "./components/Hero";
import { useEffect } from "react";
import SideApp from "./components/Side";

export default function App() {
  let connected = true;
  const { isConnected } = useWeb3ModalAccount();
  useEffect(() => {
    if (isConnected) connected = true;
  }, [isConnected]);
  return (
    <>
      <SideApp /> 
      {connected ? <User /> : <Hero />}
    </>
  );
}
