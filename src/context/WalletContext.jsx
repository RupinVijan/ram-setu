import React, { useEffect, useState } from 'react';
export const WalletContext = React.createContext();
const {ethereum} = window; // we have this because we have metamask  

export const WalletProvider = ({ children }) => {

    const [currentAccount, setcurrentAccount] = useState("");



    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please connect to a metamask wallet');

            const accounts = await ethereum.request({method:'eth_requestAccounts',}) 
            setcurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
            throw new error('No ethereum object');
        }
    };



    return(
        <WalletContext.Provider value={{connectWallet, currentAccount }}>
            {children}
        </WalletContext.Provider>
    )
}