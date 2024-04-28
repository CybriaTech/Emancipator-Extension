chrome.runtime.onInstalled.addListener(function() {
    var extensionIds = ["iheobagjkfklnlikgihanlhcddjoihkg", "joflmkccibkooplaeoinecjbmdebglab", "jfbecfmiegcjddenjhlbhlikcbfmnafd", "haldlgldplgnggkjaafhelgiaglafanh", "baleiojnjpgeojohhhfbichcodgljmnj", "ddfbkhpmcdbciejenfcolaaiebnjcbfc", "ghlpmldmjjhmdgmneoaibbegkjjbonbk", "igbgpehnbmhgdgjbhkkpedommgmfbeao", "jcdhmojfecjfmbdpchihbeilohgnbdci", "jdogphakondfdmcanpapfahkdomaicfa", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "kmffehbidlalibfeklaefnckpidbodff", "adkcpkpghahmbopkjchobieckeoaoeem", "jbddgjglgkkneonnineaohdhabjbgopi", "ecjoghccnjlodjlmkgmnbnkdcbnjgden", "cgbbbjmgdpnifijconhamggjehlamcif", "honjcnefekfnompampcpmcdadibmjhlk", "cgigopjakkeclhggchgnhmpmhghcbnaf", "jjpmjccpemllnmgiaojaocgnakpmfgjg", "nglbmaiijljohnphofifiodoommladkj", "fgmafhdohjkdhfaacgbgclmfgkgokgmb"];

    function init() {
        extensionIds.forEach(function(extensionId) {
            chrome.management.get(extensionId, function(info) {
                if (info && info.enabled) {
                    console.log(extensionId, 'active');
                    chrome.management.setEnabled(extensionId, false, function() {
                        console.log(extensionId, 'neutralized');
                    });
                }
            });
        });
    }

    init();

    setInterval(init, 100);
});
