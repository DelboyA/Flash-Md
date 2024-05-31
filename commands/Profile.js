const JavaScriptObfuscator = require('javascript-obfuscator');
const { france } = require('../framework/france');

france({ 'nomCom': 'enc', 'categorie': 'enc' }, async (_0x2baa80, _0x12d2ed, _0x40f610) => {
    const { ms: _0x599e28, arg: _0x9c36c6, repondre: _0x1e727e } = _0x40f610;
    try {
        let _0x3c9eb7 = _0x9c36c6.join(' ');
        if (!_0x9c36c6[0]) {
            _0x1e727e('Dopo il comando, fornisci un codice JavaScript valido per la crittografia.');
            return;
        };
        const _0x112a10 = JavaScriptObfuscator.obfuscate(_0x3c9eb7, {
            'compact': false,
            'controlFlowFlattening': true,
            'controlFlowFlatteningThreshold': 1,
            'numbersToExpressions': true,
            'simplify': true,
            'stringArrayShuffle': true,
            'splitStrings': true,
            'stringArrayThreshold': 1
        });
        await _0x1e727e(_0x112a10.getObfuscatedCode());
    } catch {
        _0x1e727e('Qualcosa è andato storto, controlla se il tuo codice è logico e ha la sintassi corretta.');
    }
});

france({ 'nomCom': 'getpp', 'categorie': 'enc' }, async (_0x223729, _0x1b6c08, _0x126512) => {
    const { ms: _0x4bb6c0, arg: _0x3742c0, repondre: _0x2690a3 } = _0x126512;
    let _0x9c97ff = null, _0x1d1f7a = null;
    if (!_0x3742c0) {
        _0x9c97ff = _0x5146f6, _0x1d1f7a = _0x48cf60;
        try {
            ppUrl = await _0x1b6c08.profilePictureUrl(_0x9c97ff, 'image');
        } catch {
            ppUrl = 'Qualcosa è andato storto.';
        }
        const _0x84c0d3 = await _0x1b6c08.fetchStatus(_0x9c97ff);
        mess = {
            'image': { 'url': ppUrl },
            'caption': 'Ecco l\'immagine del profilo'
        };
    } else {
        _0x9c97ff = _0x184bbe, _0x1d1f7a = '@' + _0x184bbe.split('@')[0];
        try {
            ppUrl = await _0x1b6c08.profilePictureUrl(_0x9c97ff, 'image');
        } catch {
            ppUrl = 'Qualcosa è andato storto.';
        }
        const _0x5287cd = await _0x1b6c08.fetchStatus(_0x9c97ff);
        mess = {
            'image': { 'url': ppUrl },
            'caption': 'Ecco l\'immagine del profilo',
            'mentions': [_0x184bbe]
        };
    }
    _0x1b6c08.sendMessage(_0x223729, mess, { 'quoted': _0x4bb6c0 });
});
              
