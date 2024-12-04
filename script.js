import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.esm.min.js";

const connectWalletButton = document.getElementById("connectWallet");
const walletAddress = document.getElementById("walletAddress");
const balanceElement = document.getElementById("balance");
const recipientInput = document.getElementById("recipient");
const amountInput = document.getElementById("amount");
const sendButton = document.getElementById("send");
const statusElement = document.getElementById("status");

let provider;
let signer;

async function connectWallet() {
  if (window.ethereum) {
    try {
      // Request wallet connection
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      // Set provider and signer
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();

      // Get wallet address
      const address = accounts[0];
      walletAddress.textContent = `Wallet Address: ${address}`;

      // Fetch balance
      const balance = await provider.getBalance(address);
      balanceElement.textContent = `Balance: ${ethers.utils.formatEther(balance)} ETH`;

      // Optionally listen for account changes
      window.ethereum.on('accountsChanged', (accounts) => {
        walletAddress.textContent = `Wallet Address: ${accounts[0]}`;
        updateBalance(accounts[0]);
      });

      // Optionally listen for network changes
      window.ethereum.on('chainChanged', (chainId) => {
        console.log(`Network changed to: ${chainId}`);
        // Optionally, you can refresh the page or update the UI
      });

    } catch (error) {
      console.error("Connection Error:", error);
      statusElement.textContent = "Connection failed. Please try again.";
    }
  } else {
    alert("MetaMask is not installed. Please install it to use this DApp.");
  }
}

async function updateBalance(address) {
  const balance = await provider.getBalance(address);
  balanceElement.textContent = `Balance: ${ethers.utils.formatEther(balance)} ETH`;
}

async function sendETH() {
  const recipient = recipientInput.value;
  const amount = amountInput.value;

  if (!recipient || !amount) {
    statusElement.textContent = "Please enter both recipient address and amount.";
    return;
  }

  try {
    const tx = await signer.sendTransaction({
      to: recipient,
      value: ethers.utils.parseEther(amount),
    });
    statusElement.textContent = `Transaction sent: ${tx.hash}`;
  } catch (error) {
    console.error("Transaction Error:", error);
    statusElement.textContent = "Transaction failed. Please check the details and try again.";
  }
}

// Event Listeners
connectWalletButton.addEventListener("click", connectWallet);
sendButton.addEventListener("click", sendETH);

