import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/images/curriculo.pdf"; // Caminho do arquivo PDF na pasta public
    downloadLink.download = "curriculo.pdf"; // Nome do arquivo que será baixado
    downloadLink.click();
  };

  return <button onClick={handleDownload}>Baixar Curriculo</button>;
};

export default DownloadButton;
