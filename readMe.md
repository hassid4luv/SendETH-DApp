Here’s the updated `README.md` file, including the `README.md` itself in the file structure:

```markdown
# SendETH DApp

SendETH is a decentralized application (DApp) built using `ethers.js` that allows users to connect their Ethereum wallet (e.g., MetaMask), view their account balance, and send ETH to other addresses.


## Features

- Connect to an Ethereum wallet using MetaMask.
- View your current wallet address and ETH balance.
- Send ETH to a recipient address with a specified amount.

## Setup

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v14+ recommended)
- MetaMask extension installed in your browser
- Basic knowledge of Ethereum and wallets

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hassid4luv/SendETH-DApp.git
   cd sendeth-dapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL provided in the terminal, typically:

   ```
   http://localhost:5173/
   ```

---

## Usage

1. **Connect Your Wallet**:
   - Click the **"Connect Wallet"** button.
   - Allow MetaMask to connect to the application.

2. **View Wallet Information**:
   - Once connected, your wallet address and ETH balance will be displayed on the screen.

3. **Send ETH**:
   - Enter the recipient's address and the amount of ETH you want to send.
   - Click the **"Send"** button. A MetaMask prompt will appear to confirm the transaction.
   - After confirmation, the transaction hash will be displayed.

---

## File Structure

```plaintext
sendeth-dapp/
│
├── index.html         # HTML structure of the DApp.
├── app.js             # JavaScript logic with ethers.js integration.
├── styles.css         # Styling for the DApp (optional).
├── package.json       # Dependency file for npm.
├── README.md          # Documentation file for the project.
└── node_modules/      # Directory created by npm for installed packages (auto-generated).
```

---

## Architecture

### Components

1. **Wallet Connection**:
   - Utilizes MetaMask to connect to the Ethereum network.
   - Fetches wallet address and balance using `ethers.js`.

2. **Transaction Processing**:
   - Uses `signer.sendTransaction` to initiate ETH transfers.

### Frontend

- **HTML**: Provides the basic structure of the DApp interface.
- **CSS**: Styles the application for a better user experience.
- **JavaScript (app.js)**: Handles wallet connection, balance fetching, and ETH transfers using `ethers.js`.

---

## Troubleshooting

### Common Issues

1. **MetaMask not installed**:
   - Ensure MetaMask is installed and enabled in your browser.

2. **Failed connection**:
   - Check if the correct network is selected in MetaMask.
   - Refresh the page and try again.

3. **Transaction errors**:
   - Verify the recipient address and ETH amount are valid.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any questions, reach out to [Hassan Idris](mailto:hassid4luv@gmail.com).

```

### Key Updates:
1. Added `README.md` to the file structure description.
2. The rest of the content remains aligned with your current project setup.

Let me know if further adjustments are needed!
