$hf.flat = String.fromCharCode(9837);
$hf.sharp= String.fromCharCode(9839);
$hf.maj7 = String.fromCharCode(9651) + '7';
$hf.min7 = '-7';
$hf.halfDim7 = String.fromCharCode(248) + '7';
$hf.dim = String.fromCharCode(176);


$hf.degree = [{
    solfege: "do",
    roman: "I",
    seventh: $hf.maj7,
    color: "rgba(255, 0, 0, 1)",
    diatonic: true
}, {
    solfege: "re",
    roman: "ii",
    seventh: $hf.min7,
    color: "rgba(255, 127, 0, 1)",
    diatonic: true
}, {
    solfege: "mi",
    roman: "iii",
    seventh: $hf.min7,
    color: "rgba(255, 255, 0, 1)",
    diatonic: true
}, {
    solfege: "fa",
    roman: "IV",
    seventh: $hf.maj7,
    color: "rgba(34, 139, 34, 1)",
    diatonic: true
}, {
    solfege: "sol",
    roman: "V",
    seventh: '7',
    color: "rgba(51, 51, 255, 1)",
    diatonic: true
}, {
    solfege: "la",
    roman: "vi",
    seventh: $hf.min7,
    color: "rgba(178, 102, 255, 1)",
    diatonic: true
}, {
    solfege: "ti",
    roman: "vii",
    seventh: $hf.halfDim7,
    color: "rgba(255, 204, 229, 1)",
    diatonic: true
}];

$hf.chromaticDegree = [
$hf.degree[0], {
    solfege: "ra",
    roman: $hf.flat + "ii",
    color: "rgba(253, 180, 98, 1)",
    diatonic: false
},
$hf.degree[1], {
    solfege: "me",
    roman: $hf.flat + "iii",
    color: "rgba(255, 255, 153, 1)",
    diatonic: false
},
$hf.degree[2],
$hf.degree[3], {
    solfege: "se",
    roman: "#IV",
    color: "rgba(128, 177, 211, 1)",
    diatonic: false
},
$hf.degree[4], {
    solfege: "le",
    roman: $hf.flat + "vi",
    color: "rgba(188, 128, 189, 1)",
    diatonic: false
},
$hf.degree[5], {
    solfege: "te",
    roman: $hf.flat + "vii",
    color: "rgba(217, 217, 217, 1)",
    diatonic: false
},
$hf.degree[6]];

//$hf.reversedChromaticDegree = $hf.chromaticDegree.reverse(); //used for voice leading???

$hf.rest = {solfege: "--", roman: "--", color:"rgba(224, 224, 224, 1)"};
$hf.secondaryDominant = {color:"rgba(0, 0, 0, 1)",
		degree: ['*', 'i','ii','iii','iv','v','vii','vii']};
$hf.borrowed = {color:"rgba(0, 0, 0, 1)"};

$hf.chordDegree = [
	[['Ionian'],	['I',$hf.maj7,"rgba(255, 0, 0, 1)"],['ii',$hf.min7,"rgba(255, 127, 0, 1)"],['iii',$hf.min7,"rgba(255, 255, 0, 1)"],
		['IV',$hf.maj7,"rgba(34, 139, 34, 1)"],['V','7',"rgba(51, 51, 255, 1)"],
		['vi',$hf.min7,"rgba(178, 102, 255, 1)"],['vii',$hf.halfDim7,"rgba(255, 204, 229, 1)"]],

	[['Dorian'],	['i',$hf.min7,"rgba(255, 127, 0, 1)"],['ii',$hf.min7,"rgba(255, 255, 0, 1)"],['III',$hf.maj7,"rgba(34, 139, 34, 1)"],
		['IV','7',"rgba(51, 51, 255, 1)"],['v','$hf.min7',"rgba(178, 102, 255, 1)"],
		['vi',$hf.halfDim7,"rgba(255, 204, 229, 1)"],['VII',$hf.maj7,"rgba(255, 0, 0, 1)"]],

	[['Phyrgian'],	['i',$hf.min7,"rgba(255, 255, 0, 1)"],['II',$hf.maj7,"rgba(34, 139, 34, 1)"],['III','7',"rgba(51, 51, 255, 1)"],
		['iv',$hf.min7,"rgba(178, 102, 255, 1)"],['v',$hf.halfDim7,"rgba(255, 204, 229, 1)"],
		['VI',$hf.maj7,"rgba(255, 0, 0, 1)"],['vii',$hf.min7,"rgba(255, 127, 0, 1)"]],

	[['Lydian'],	['I',$hf.maj7,"rgba(34, 139, 34, 1)"],['II','7',"rgba(51, 51, 255, 1)"],['iii',$hf.min7,"rgba(178, 102, 255, 1)"],
		['iv',$hf.halfDim7,"rgba(255, 204, 229, 1)"],['V','7',"rgba(255, 0, 0, 1)"],
		['vi',$hf.min7,"rgba(255, 127, 0, 1)"],['vii',$hf.min7,"rgba(255, 255, 0, 1)"]],

	[['Myxolydian'],['I','7',"rgba(255, 0, 0, 1)"],['ii',$hf.min7,"rgba(255, 127, 0, 1)"],['iii',$hf.halfDim7,"rgba(255, 255, 0, 1)"],
		['IV',$hf.maj7,"rgba(34, 139, 34, 1)"],['v',$hf.min7,"rgba(51, 51, 255, 1)"],
		['vi',$hf.min7,"rgba(178, 102, 255, 1)"],['VII',$hf.maj7,"rgba(255, 204, 229, 1)"]],

	[['Aeolian'],	['i',$hf.min7,"rgba(178, 102, 255, 1)"],['ii',$hf.halfDim7,"rgba(255, 204, 229, 1)"],['III',$hf.maj7,"rgba(255, 0, 0, 1)"],
		['iv',$hf.min7,"rgba(255, 127, 0, 1)"],['v',$hf.min7,"rgba(255, 255, 0, 1)"],
		['VI',$hf.maj7,"rgba(34, 139, 34, 1)"],['VII','7',"rgba(51, 51, 255, 1)"]],

	[['Locrian'],	['i',$hf.halfDim7,"rgba(255, 0, 0, 1)"],['II',$hf.maj7,"rgba(255, 127, 0, 1)"],['iii',$hf.min7,"rgba(255, 255, 0, 1)"],
		['iv',$hf.min7,"rgba(34, 139, 34, 1)"],['V',$hf.maj7,"rgba(51, 51, 255, 1)"],
		['VI','7',"rgba(178, 102, 255, 1)"],['vii',$hf.min7,"rgba(255, 204, 229, 1)"]],
];

$hf.cd = function (degreeArray, degreeIndex) {
    var data = [];
    var DEGREES = 7;
    for (var x = 0, y = degreeIndex; x < DEGREES; x++, y++) {
        data = data.concat([[degreeArray[x], $hf.degree[y].seventh, $hf.degree[y].color]]);
//          data = data.concat([[degreeArray[x], y]]);
        if (y%(DEGREES-1) === 0 ) 
            {y = 0;}
    }
    return data;
};


$hf.chordDegree2 = [
    [['Six ' + $hf.sharp, $hf.chromaticDegree[6].color], $hf.cd([$hf.sharp + 'I', $hf.sharp +'ii', $hf.sharp + 'iii', $hf.sharp + 'IV', $hf.sharp + 'v', $hf.sharp + 'vi', 'VII'], 4)],
    [['Five ' + $hf.sharp, $hf.chromaticDegree[1].color], $hf.cd([$hf.sharp + 'i', $hf.sharp + 'ii', 'III', $hf.sharp + 'IV', $hf.sharp + 'v', $hf.sharp + 'vi', 'VII'], 1)],
    [['Four ' + $hf.sharp, $hf.chromaticDegree[8].color], $hf.cd([$hf.sharp + 'i', $hf.sharp + 'ii', 'III', $hf.sharp + 'iv', $hf.sharp + 'v', 'VI', 'VII'], 5)],
    [['Three ' + $hf.sharp, $hf.chromaticDegree[3].color], $hf.cd([$hf.sharp + 'i','II','III', $hf.sharp + 'iv', $hf.sharp + 'v','VI', 'vii'], 2)],
    [['Two ' + $hf.sharp, $hf.chromaticDegree[10].color], $hf.cd([$hf.sharp + 'i','II','iii', $hf.sharp + 'iv', 'V','VI','vii'], 6)],
    [['Lydian', $hf.chromaticDegree[5].color], $hf.cd(['I','II','iii', $hf.sharp + 'iv','V','vi', 'vii'], 3)],
    [['Ionian', $hf.chromaticDegree[0].color], $hf.cd(['I','ii','iii','IV','V','vi','vii'], 0)],
    [['Mixolydian', $hf.chromaticDegree[7].color], $hf.cd(['I','ii','iii','IV','v','vi', $hf.flat + 'VII'], 4)],
    [['Dorian', $hf.chromaticDegree[2].color], $hf.cd(['i','ii',$hf.flat + 'III','IV','v','vi',$hf.flat + 'VII'], 1)],
    [['Aeolian', $hf.chromaticDegree[9].color], $hf.cd(['i','ii','iii','IV','v','vi', $hf.flat + 'VII'], 5)],
    [['Phyrgian', $hf.chromaticDegree[4].color], $hf.cd(['i', $hf.flat + 'II','iii','IV','V','vi', $hf.flat + 'vii'], 2)],
    [['Locrian', $hf.chromaticDegree[11].color], $hf.cd(['i', $hf.flat + 'II','iii','IV','v','vi', $hf.flat + 'vii'], 6)],
    [['Six ' + $hf.flat, $hf.chromaticDegree[6].color], $hf.cd([$hf.flat + 'i', $hf.flat + 'II','iii','IV','v','vi', $hf.flat + 'vii'], 3)]
];