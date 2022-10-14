//Revise
const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "YOUR_AUTH_TOKEN";
const revise = new Revise({ auth: AUTH_TOKEN });

// const COLLECTION_ID =  '31c2c13c-b5ed-4576-b7b4-ccb9eb50ab47'; //Github
const COLLECTION_ID =  'bb2f3ef5-134e-4fdb-957a-531835286f19'; //Github New

const run = async () => {
    // Creates one collection
    // const collection = await revise.addCollection({ name: "Github New", uri: 'githubnew' })
    // console.log({ collection }); //Keep the ID for later use
    

    // //Get All Cllections If you want
    // try {
    //     const collections = await revise.fetchCollections();
    //     console.log({ collections }); 

    // } catch (error) {

    // }


    //Add New NFT to the collection
    const nft = await revise.addNFT({
        image: 'https://revise-testing.fra1.cdn.digitaloceanspaces.com/badges/bronze.png',
        name: 'amarpathak',
        tokenId: '1',
        description: 'Site Stats Github'
    }, [
        { views: "0" },
    ], COLLECTION_ID)
    console.log({ nft }) //Keep the ID for later use

}
run();