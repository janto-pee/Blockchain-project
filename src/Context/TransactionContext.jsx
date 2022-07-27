import React, {useState, useEffect, createContext} from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = createContext()

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log(provider, signer, transactionContract)
}

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo:'', amount: '', message :''})
    const [isLoading, setIsLoading] = useState('');
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleForm = (e) => {
        const {name, value} = e.target
        setFormData((prevState) => ({...prevState, [name]: value}))
    }
    const handleSend = (e) => {
        e.preventDefault();
        const {addressTo, amount, message} = formData;
        
        // input validation;
        if(!addressTo || !amount || !message) return alert('please fill the form');
        
        sendTransaction();
    }

    const checkIfWalletIsConnected = async () => {
        
       try {
        if (!ethereum) return alert('Please install MetaMask!');
        
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length){
            setCurrentAccount(accounts[0])
        } else {
            console.log('no account found')
        }
       } catch (error) {
        console.log(error)
       }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install MetaMask!');
        
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0])

        } catch (error) {
            console.log(error);
            throw new error('no ethereum object')
        }
    }

    const sendTransaction = async() => {
        try {
            if(!ethereum) return alert('please install metamask')
            const {addressTo, amount, message} = formData;

            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount)

            // Send Ethereum transaction
            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0X5208',
                    value: parsedAmount._hex
                }],
            })
            // add to blockchain to call the solidity SC function
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message);

            // loading state
            setIsLoading(true);
            console.log(`Loading -${transactionHash.hash}`)
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`success - ${transactionHash.hash}`) 

            const transactionCount = await transactionContract.getTransactionCount()
            setTransactionCount(transactionCount.toNumber());

         } catch (error) {
            console.log(error);
            // throw new error('no ethereum object')
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    return (
        <TransactionContext.Provider value={{connectWallet, isLoading, currentAccount, formData, sendTransaction, handleSend, handleForm}}>
            {children}
        </TransactionContext.Provider>
    )
}
