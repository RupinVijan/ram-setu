import React, { useState } from 'react';
import Web3Modal from "web3modal";
import {ethers} from "ethers";
export const WalletContext = React.createContext();
const {ethereum} = window; // we have this because we have metamask  

export const WalletProvider = ({ children }) => {

    const [currentAccount, setcurrentAccount] = useState("");

    const providerOptions = {};


    const connectWeb3Wallet = async () => {
        try {
            let web3Modal = new Web3Modal({
                cacheProvider:false,
                providerOptions,
            });

            const web3Modalinstance = await web3Modal.connect();
            const web3Provider = new ethers.providers.Web3Provider(web3Modalinstance);
            console.log(web3Provider);
            
        } catch (error) {
            
        }
    }



    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please connect to a metamask wallet and reopen the link');

            const accounts = await ethereum.request({method:'eth_requestAccounts',}) 
            setcurrentAccount(accounts[0]);
            // window.location.reload();
        } catch (error) {
            console.log(error);
            throw new error('No ethereum object');
        }
    };


    const disconnectWallet = async () => {
        const accounts = await window.ethereum.request({
            method: "wallet_requestPermissions",
            params: [{
                eth_accounts: {}
            }]
        }).then(() => ethereum.request({
            method: 'eth_requestAccounts'
        }))
        
        const account = accounts[0]
        setcurrentAccount(account);
        // window.location.reload();
    };



    return(
        <WalletContext.Provider value={{connectWallet, currentAccount, disconnectWallet, connectWeb3Wallet }}>
            {children}
        </WalletContext.Provider>
    )
}