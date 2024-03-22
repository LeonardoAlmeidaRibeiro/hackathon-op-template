// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MeuNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public baseURI = "https://meu-nft.com/nft/";

    constructor() ERC721("MeuNFT", "MNFT") {}

    // Função para criar um novo NFT
    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    // Permite atualizar o baseURI
    function setBaseURI(string memory newBaseURI) public {
        // Aqui, você poderia adicionar uma verificação de permissões
        baseURI = newBaseURI;
    }

    // Sobrescrevendo a função baseURI para retornar o valor atualizado
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }
}
