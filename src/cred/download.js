const
    util          = require('../util.js'),
    prefix        = 'vc',
    cred_ontology = 'https://www.w3.org/2018/credentials#',
    sec_ontology  = 'https://w3id.org/security#',
    override      = true;

Promise.all([
    util.downloadOntology('https://www.w3.org/2018/credentials/v1', null, `data/${prefix}/vc_context.json`, override),
    util.downloadOntology('https://w3c.github.io/vc-data-model/vocab/credentials/credentials.ttl', null, `data/${prefix}/cred.ttl`, override),
    util.downloadOntology('https://w3c.github.io/vc-data-model/vocab/credentials/credentials.jsonld', null, `data/${prefix}/cred.json`, override)
    // util.downloadOntology('https://w3id.org/security/v1', null, `data/${prefix}/sec_context.json`, override)
]).then(util.logDone).catch(util.logError);
