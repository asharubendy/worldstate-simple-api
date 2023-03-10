const worldstateData = require('warframe-worldstate-data');
function getSolNodeInfo (solnode) {
    const nodes = worldstateData.solNodes;
    const erpo = nodes[solnode];
    const {enemy, value, type} = erpo;
    console.log(erpo)
}

getSolNodeInfo('SolNode902')

