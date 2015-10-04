$hf.flat = String.fromCharCode(9837);
$hf.sharp= String.fromCharCode(9839);
$hf.maj7 = String.fromCharCode(9651) + '7';
$hf.min7 = '-7';
$hf.halfDim7 = String.fromCharCode(248) + '7';
$hf.dim = String.fromCharCode(176);

$hf.degree = [{
    solfege: "do",
    roman: "I",
    color: "rgba(255, 0, 0, 1)",
    diatonic: true
}, {
    solfege: "re",
    roman: "ii",
    color: "rgba(255, 127, 0, 1)",
    diatonic: true
}, {
    solfege: "mi",
    roman: "iii",
    color: "rgba(255, 255, 0, 1)",
    diatonic: true
}, {
    solfege: "fa",
    roman: "IV",
    color: "rgba(34, 139, 34, 1)",
    diatonic: true
}, {
    solfege: "sol",
    roman: "V",
    color: "rgba(51, 51, 255, 1)",
    diatonic: true
}, {
    solfege: "la",
    roman: "vi",
    color: "rgba(178, 102, 255, 1)",
    diatonic: true
}, {
    solfege: "ti",
    roman: "vii",
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

$hf.reversedChromaticDegree = $hf.chromaticDegree.reverse();


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
		['VI','7',"rgba(178, 102, 255, 1)"],['vii',$hf.min7,"rgba(255, 204, 229, 1)"]]
];

$hf.borrowedChordDegree = [
	[['Ionian'],	['I',$hf.maj7,"rgba(255, 0, 0, 1)"],['ii',$hf.min7,"rgba(255, 127, 0, 1)"],['iii',$hf.min7,"rgba(255, 255, 0, 1)"],
		['IV',$hf.maj7,"rgba(34, 139, 34, 1)"],['V','7',"rgba(51, 51, 255, 1)"],
		['vi',$hf.min7,"rgba(178, 102, 255, 1)"],['vii',$hf.halfDim7,"rgba(255, 204, 229, 1)"]],

	[['Dorian'],	['i' ,$hf.min7,"rgba(255, 0, 0, 1)"],['ii',$hf.min7,"rgba(255, 127, 0, 1)"],[$hf.flat+'III',$hf.maj7,"rgba(255, 255, 0, 1)"],
		['IV','7',"rgba(34, 139, 34, 1)"],['v','$hf.min7',"rgba(51, 51, 255, 1)"],
		['vi',$hf.halfDim7,"rgba(178, 102, 255, 1)"],[$hf.flat+'VII',$hf.maj7,"rgba(255, 204, 229, 1)"]],

	[['Phyrgian'],	['i',$hf.min7,"rgba(255, 0, 0, 1)"],[$hf.flat+'II',$hf.maj7,"rgba(255, 127, 0, 1)"],[$hf.flat+'III','7',"rgba(255, 255, 0, 1)"],
		['iv','7',"rgba(34, 139, 34, 1)"],['v',$hf.halfDim7,"rgba(51, 51, 255, 1)"],
		[$hf.flat+'VI',$hf.maj7,"rgba(178, 102, 255, 1)"],[$hf.flat+'vii',$hf.min7,"rgba(255, 204, 229, 1)"]],

	[['Lydian'],	['I',$hf.maj7,"rgba(255, 0, 0, 1)"],['II','7',"rgba(255, 127, 0, 1)"],['iii',$hf.min7,"rgba(255, 255, 0, 1)"],
		['iv'+$hf.sharp,$hf.halfDim7,"rgba(34, 139, 34, 1)"],['V','7',"rgba(51, 51, 255, 1)"],
		['vi',$hf.min7,"rgba(178, 102, 255, 1)"],['vii',$hf.min7,"rgba(255, 204, 229, 1)"]],

	[['Myxolydian'],['I','7',"rgba(255, 0, 0, 1)"],['ii',$hf.min7,"rgba(255, 127, 0, 1)"],['iii'+$hf.dim,'7',"rgba(255, 255, 0, 1)"],
		['IV',$hf.maj7,"rgba(34, 139, 34, 1)"],['v',$hf.min7,"rgba(51, 51, 255, 1)"],
		['vi',$hf.min7,"rgba(178, 102, 255, 1)"],[$hf.flat+'VII',$hf.maj7,"rgba(255, 204, 229, 1)"]],

	[['Aeolian'],	['i',$hf.min7,"rgba(255, 0, 0, 1)"],['ii',$hf.halfDim7,"rgba(255, 127, 0, 1)"],['III',$hf.maj7,"rgba(255, 255, 0, 1)"],
		['iv',$hf.min7,"rgba(34, 139, 34, 1)"],['v',$hf.min7,"rgba(51, 51, 255, 1)"],
		['VI',$hf.maj7,"rgba(178, 102, 255, 1)"],['VII','7',"rgba(255, 204, 229, 1)"]],

	[['Locrian'],	['i',$hf.halfDim7,"rgba(255, 0, 0, 1)"],['II',$hf.maj7,"rgba(255, 127, 0, 1)"],['iii',$hf.min7,"rgba(255, 255, 0, 1)"],
		['iv',$hf.min7,"rgba(34, 139, 34, 1)"],['V',$hf.maj7,"rgba(51, 51, 255, 1)"],
		['VI','7',"rgba(178, 102, 255, 1)"],['vii',$hf.min7,"rgba(255, 204, 229, 1)"]]
];