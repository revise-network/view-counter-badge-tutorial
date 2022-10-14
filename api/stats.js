//Revise
const { Revise } = require("revise-sdk");
//Save the Auth Token in Env Variable
const AUTH_TOKEN = "AUTH_TOKEN";
const revise = new Revise({ auth: AUTH_TOKEN });


const NFT_ID = "35472372-08d2-4fb2-94c9-3dbcf7f2245c"

//Makes image file using base64 image data
const Base64BufferThumbnail = require("base64-buffer-thumbnail-no-cache");
let onepxTransparentImage;
Base64BufferThumbnail(
  "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAD0lEQVR42mNkwAIYh7IgAAVVAAuInjI5AAAAAElFTkSuQmCC" // Base64 of 1px transparent image
).then(imageFromBase64 => {
  onepxTransparentImage = imageFromBase64; //Save the image in variable to use later
});



export default async function handler(request, response) {
  //get the NFT
  const profileNFT = await revise.fetchNFT(NFT_ID)
  //get the views data from NFT
  let [meta] = profileNFT.metaData;
  //Increase the view count
  let newViews = parseInt(meta.views) + 1

  //Revise the NFT
  await revise.nft(profileNFT)
    .setProperty('views', newViews) //Update the View Count
    .save(); // Do not forget to save

  //Send the transparent image
  response.setHeader('Content-Type', 'image/png') //Set the respose content type as image/png
  return response.send(onepxTransparentImage) //Actually send the image
}
