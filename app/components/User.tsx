'use client'


import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { ethers } from "ethers";

export default  function User() {
  const { address,isConnected  } = useWeb3ModalAccount();
  // const provider = new ethers.providers.Web3Provider()
  // await provider.send("eth_requestAccounts",[])
  // const signer = provider.getSigner()
  // const address = signer.getAddress()
 
  //   open({ view: "Account" });

  return <h1>{address} - {isConnected.valueOf().toString()}</h1>;
}
