export const formatTrxId = (trxId: string) => {
  return `${trxId.slice(0, 6)}...${trxId.slice(
    trxId.length - 4,
    trxId.length,
  )}`;
};
export const generateRandomHash = () => {
  const characters = "abcdef0123456789";
  let hash = "0x";
  for (let i = 0; i < 40; i++) {
    hash += characters[Math.floor(Math.random() * characters.length)];
  }
  return hash;
};

export const generateRandomEthereumAddress = () => {
  const characters = "abcdef0123456789";
  let address = "0x";
  for (let i = 0; i < 40; i++) {
    address += characters[Math.floor(Math.random() * characters.length)];
  }
  return address;
};
