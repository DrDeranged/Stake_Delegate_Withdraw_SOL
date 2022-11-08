const { Connection, clusterApiUrl } = require("@solana/web3.js");

const main = async() => {
    const connection = new Connection(clusterApiUrl("devnet"), "processed");
    const { current, deliquent } = await connection.getVoteAccounts();
    console.log("all validators: " + current.concat(deliquent).length);
    console.log("current validators:" + current.length);

};
const runMain = async() => {
    try {
        await main();
    } catch (error) {
        console.error(error);
    }
};
runMain();