chrome.runtime.onInstalled.addListener(function() {
    var extensionIds = ["iheobagjkfklnlikgihanlhcddjoihkg", "joflmkccibkooplaeoinecjbmdebglab", "jfbecfmiegcjddenjhlbhlikcbfmnafd", "haldlgldplgnggkjaafhelgiaglafanh", "baleiojnjpgeojohhhfbichcodgljmnj", "ddfbkhpmcdbciejenfcolaaiebnjcbfc", "ghlpmldmjjhmdgmneoaibbegkjjbonbk", "igbgpehnbmhgdgjbhkkpedommgmfbeao", "jcdhmojfecjfmbdpchihbeilohgnbdci", "jdogphakondfdmcanpapfahkdomaicfa", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "kmffehbidlalibfeklaefnckpidbodff", "adkcpkpghahmbopkjchobieckeoaoeem", "jbddgjglgkkneonnineaohdhabjbgopi", "ecjoghccnjlodjlmkgmnbnkdcbnjgden", "cgbbbjmgdpnifijconhamggjehlamcif", "honjcnefekfnompampcpmcdadibmjhlk", "cgigopjakkeclhggchgnhmpmhghcbnaf", "jjpmjccpemllnmgiaojaocgnakpmfgjg", "nglbmaiijljohnphofifiodoommladkj", "fgmafhdohjkdhfaacgbgclmfgkgokgmb"];

    function neutralize(extensionId) {
        chrome.management.setEnabled(extensionId, false, function() {
            console.log(extensionId, 'disabled');
        });
    }

    function check() {
        extensionIds.forEach(function(extensionId) {
            chrome.management.get(extensionId, function(info) {
                if (info && info.enabled) {
                    console.log(extensionId, 'active');
                    neutralize(extensionId);
                }
            });
        });
    }

    function init() {
        check();
        chrome.management.onEnabled.addListener(function(enabledInfo) {
            if (extensionIds.includes(enabledInfo.id)) {
                neutralize(enabledInfo.id);
            }
        });
    }

    init();
});
