// Key cap mapping to the keyboard layout image
//
// We use this image to display an on-screen keyboard for selecting 
// keys, and also for displaying the current selected key for a button.
// For the latter, we use the image as a CSS "sprite": we use it as a
// background image, positioning the background at the appropriate offset
// for the key we wish to show and sizing the element to show just that
// key.  Some keys have "alternate" keycaps that we use for the current
// setting display.  The alternates have more uniform widths than the
// keys in the main layout, to make the list neater, and also display
// additional information needed when the key is shown out of context;
// e.g., the various modifier keys are labeled "left" and "right".
//
// x,y          -> left top offset of keycap in keyboard layout image
// wid,ht       -> width & height of keyboard layout keycap; default is 30,31
// cx,cy        -> left top offset of alternate keycap to display in settings list
// cwid,cht     -> width & height of alternate keycap image; default is 30,31
var keycaps = {
    0x00: { name: "[Invalid key code]" },
    0x01: { name: "Keyboard ErrorRollOver" },
    0x02: { name: "Keyboard POSTFail" },
    0x03: { name: "Keyboard ErrorUndefined" },
    0x04: { name: "Keyboard A", x: 68, y: 168, jskey: 0x41 },
    0x05: { name: "Keyboard B", x: 231, y: 205, jskey: 0x42 },
    0x06: { name: "Keyboard C", x: 157, y: 205, jskey: 0x43 },
    0x07: { name: "Keyboard D", x: 141, y: 168, jskey: 0x44 },
    0x08: { name: "Keyboard E", x: 131, y: 131, jskey: 0x45 },
    0x09: { name: "Keyboard F", x: 178, y: 168, jskey: 0x46 },
    0x0A: { name: "Keyboard G", x: 214, y: 168, jskey: 0x47 },
    0x0B: { name: "Keyboard H", x: 252, y: 168, jskey: 0x48 },
    0x0C: { name: "Keyboard I", x: 316, y: 131, jskey: 0x49 },
    0x0D: { name: "Keyboard J", x: 289, y: 168, jskey: 0x4A },
    0x0E: { name: "Keyboard K", x: 326, y: 168, jskey: 0x4B },
    0x0F: { name: "Keyboard L", x: 362, y: 168, jskey: 0x4C },
    0x10: { name: "Keyboard M", x: 306, y: 205, jskey: 0x4D },
    0x11: { name: "Keyboard N", x: 268, y: 205, jskey: 0x4E },
    0x12: { name: "Keyboard O", x: 352, y: 131, jskey: 0x4F },
    0x13: { name: "Keyboard P", x: 389, y: 131, jskey: 0x50 },
    0x14: { name: "Keyboard Q", x: 57, y: 131, jskey: 0x51 },
    0x15: { name: "Keyboard R", x: 168, y: 131, jskey: 0x52 },
    0x16: { name: "Keyboard S", x: 104, y: 168, jskey: 0x53 },
    0x17: { name: "Keyboard T", x: 205, y: 131, jskey: 0x54 },
    0x18: { name: "Keyboard U", x: 279, y: 131, jskey: 0x55 },
    0x19: { name: "Keyboard V", x: 194, y: 205, jskey: 0x56 },
    0x1A: { name: "Keyboard W", x: 94, y: 131, jskey: 0x57 },
    0x1B: { name: "Keyboard X", x: 120, y: 205, jskey: 0x58 },
    0x1C: { name: "Keyboard Y", x: 242, y: 131, jskey: 0x59 },
    0x1D: { name: "Keyboard Z", x: 83, y: 205, jskey: 0x5A },
    0x1E: { name: "Keyboard 1 !", x: 42, y: 94, jskey: 0x31 },
    0x1F: { name: "Keyboard 2 @", x: 79, y: 94, jskey: 0x32 },
    0x20: { name: "Keyboard 3 #", x: 116, y: 94, jskey: 0x33 },
    0x21: { name: "Keyboard 4 $", x: 153, y: 94, jskey: 0x34 },
    0x22: { name: "Keyboard 5 %", x: 190, y: 94, jskey: 0x35 },
    0x23: { name: "Keyboard 6 ^", x: 227, y: 94, jskey: 0x36 },
    0x24: { name: "Keyboard 7 &", x: 264, y: 94, jskey: 0x37 },
    0x25: { name: "Keyboard 8 *", x: 300, y: 94, jskey: 0x38 },
    0x26: { name: "Keyboard 9 (", x: 337, y: 94, jskey: 0x39 },
    0x27: { name: "Keyboard 0 )", x: 374, y: 94, jskey: 0x30 },
    0x28: { name: "Keyboard Enter", x: 471, y: 168, wid: 72, cx: 480, cy: 281, cwid: 41, jskey: 13, jsloc: 0 },
    0x29: { name: "Keyboard Escape", x: 4, y: 41, jskey: 27 },
    0x2A: { name: "Keyboard Backspace", x: 485, y: 94, wid: 59, cx: 437, cy: 281, cwid: 41, jskey: 8 },
    0x2B: { name: "Keyboard Tab", x: 5, y: 131, wid: 44, cx: 393, cy: 281, cwid: 41, jskey: 9 },
    0x2C: { name: "Keyboard Spacebar", x: 141, y: 242, wid: 219, cx: 350, cy: 281, cwid: 41, jskey: 32 },
    0x2D: { name: "Keyboard -_", x: 411, y: 94, jskey: 0xBD },
    0x2E: { name: "Keyboard =+", x: 448, y: 94, jskey: 0xBB },
    0x2F: { name: "Keyboard [{", x: 426, y: 131, jskey: 0xDB },
    0x30: { name: "Keyboard ]}", x: 463, y: 131, jskey: 0xDD },
    0x31: { name: "Keyboard \|", x: 500, y: 131, wid: 44, cx: 608, cy: 281, jskey: 0xDC },
    0x32: { name: "Keyboard #~" },
    0x33: { name: "Keyboard ;:", x: 399, y: 168, jskey: 0xBA },
    0x34: { name: "Keyboard '\"", x: 436, y: 168, jskey: 0xDE },
    0x35: { name: "Keyboard `~", x: 5, y: 94, jskey: 0xC0 },
    0x36: { name: "Keyboard ,<", x: 342, y: 205, jskey: 0xBC },
    0x37: { name: "Keyboard .>", x: 378, y: 205, jskey: 0xBE },
    0x38: { name: "Keyboard /?", x: 415, y: 205, jskey: 0xBF },
    0x39: { name: "Keyboard Caps Lock", x: 5, y: 168, wid: 55, cx: 523, cy: 281, cwid: 41, jskey: 0x14 },
    0x3A: { name: "Keyboard F1", x: 77, y: 41, jskey: 0x70 },
    0x3B: { name: "Keyboard F2", x: 114, y: 41, jskey: 0x71 },
    0x3C: { name: "Keyboard F3", x: 151, y: 41, jskey: 0x72 },
    0x3D: { name: "Keyboard F4", x: 188, y: 41, jskey: 0x73 },
    0x3E: { name: "Keyboard F5", x: 242, y: 41, jskey: 0x74 },
    0x3F: { name: "Keyboard F6", x: 280, y: 41, jskey: 0x75 },
    0x40: { name: "Keyboard F7", x: 317, y: 41, jskey: 0x76 },
    0x41: { name: "Keyboard F8", x: 354, y: 41, jskey: 0x77 },
    0x42: { name: "Keyboard F9", x: 409, y: 41, jskey: 0x78 },
    0x43: { name: "Keyboard F10", x: 446, y: 41, jskey: 0x79 },
    0x44: { name: "Keyboard F11", x: 482, y: 41, jskey: 0x7A },
    0x45: { name: "Keyboard F12", x: 520, y: 41, jskey: 0x7B },
    0x46: { name: "Keyboard Print Screen", x: 565, y: 41 },
    0x47: { name: "Keyboard Scroll Lock", x: 602, y: 41, jskey: 0x91 },
    0x48: { name: "Keyboard Pause", x: 638, y: 41, jskey: 0x13 },
    0x49: { name: "Keyboard Insert", x: 565, y: 94, jskey: 0x2D },
    0x4A: { name: "Keyboard Home", x: 602, y: 94, jskey: 0x24 },
    0x4B: { name: "Keyboard Page Up", x: 639, y: 94, jskey: 0x21 },
    0x4C: { name: "Keyboard Delete", x: 565, y: 131, jskey: 0x2E },
    0x4D: { name: "Keyboard End", x: 602, y: 131, jskey: 0x23 },
    0x4E: { name: "Keyboard Page Down", x: 639, y: 131, jskey: 0x22 },
    0x4F: { name: "Keyboard Right Arrow", x: 638, y: 242, jskey: 0x27 },
    0x50: { name: "Keyboard Left Arrow", x: 564, y: 242, jskey: 0x25 },
    0x51: { name: "Keyboard Down Arrow", x: 602, y: 242, jskey: 0x28 },
    0x52: { name: "Keyboard Up Arrow", x: 601, y: 205, jskey: 0x26 },
    0x53: { name: "Keyboard Num Lock", x:  682, y: 94, jskey: 0x90 },
    0x54: { name: "Keypad /", x: 718, y: 94, jskey: 0x6F },
    0x55: { name: "Keypad *", x: 756, y: 94, jskey: 0x6A },
    0x56: { name: "Keypad -", x: 792, y: 94, jskey: 0x6D },
    0x57: { name: "Keypad +", x: 792, y: 131, ht: 66, cx: 749, cy: 278, jskey: 0x6B },
    0x58: { name: "Keypad Enter", x: 791, y: 204, ht: 66, cx: 717, cy: 278, jskey: 0x0D, jsloc: 3 }, // loc e=keypad
    0x59: { name: "Keypad 1/End", x: 682, y: 204, jskey: 0x61 },
    0x5A: { name: "Keypad 2/Down Arrow", x: 720, y: 204, jskey: 0x62 },
    0x5B: { name: "Keypad 3/Page Down", x: 757, y: 204, jskey: 0x63 },
    0x5C: { name: "Keypad 4/Left Arrow", x: 682, y: 167, jskey: 0x64 },
    0x5D: { name: "Keypad 5", x: 720, y: 167, jskey: 0x65 },
    0x5E: { name: "Keypad 6/Right Arrow", x: 757, y: 167, jskey: 0x66 },
    0x5F: { name: "Keypad 7/Home", x: 682, y: 131, jskey: 0x67 },
    0x60: { name: "Keypad 8/Up Arrow", x: 720, y: 131, jskey: 0x68 },
    0x61: { name: "Keypad 9/Page Up", x: 757, y: 131, jskey: 0x69 },
    0x62: { name: "Keypad 0/Insert", x: 683, y: 241, wid: 68, cx: 684, cy: 278, jskey: 0x60 },
    0x63: { name: "Keypad ./Delete", x: 757, y: 241, jskey: 0x6E },
    0x64: { name: "Non-US Keyboard \|" },
    0x65: { name: "Application Key", x: 458, y: 241, wid: 41, jskey: 0x93 },
    0x66: { name: "Keyboard Power" },
    0x67: { name: "Keypad =" },
    0x68: { name: "Keyboard F13", x: 77, y: 4, jskey: 0x7C },
    0x69: { name: "Keyboard F14", x: 114, y: 4, jskey: 0x7D },
    0x6A: { name: "Keyboard F15", x: 151, y: 4, jskey: 0x7E },
    0x6B: { name: "Keyboard F16", x: 188, y: 4, jskey: 0x7F },
    0x6C: { name: "Keyboard F17", x: 242, y: 4, jskey: 0x80 },
    0x6D: { name: "Keyboard F18", x: 280, y: 4, jskey: 0x81 },
    0x6E: { name: "Keyboard F19", x: 317, y: 4, jskey: 0x82 },
    0x6F: { name: "Keyboard F20", x: 354, y: 4, jskey: 0x83 },
    0x70: { name: "Keyboard F21", x: 409, y: 4, jskey: 0x84 },
    0x71: { name: "Keyboard F22", x: 446, y: 4, jskey: 0x85 },
    0x72: { name: "Keyboard F23", x: 482, y: 4, jskey: 0x86 },
    0x73: { name: "Keyboard F24", x: 520, y: 4, jskey: 0x87 },
    0x74: { name: "Keyboard Execute", x: 565, y: 4 },
    0x75: { name: "Keyboard Help", x: 4, y: 4 },
    0x76: { name: "Keyboard Menu", x: 602, y: 4 },
    0x77: { name: "Keyboard Select", x: 638, y: 4 },
    0x78: { name: "Keyboard Stop" },
    0x79: { name: "Keyboard Again" },
    0x7A: { name: "Keyboard Undo" },
    0x7B: { name: "Keyboard Cut" },
    0x7C: { name: "Keyboard Copy" },
    0x7D: { name: "Keyboard Paste" },
    0x7E: { name: "Keyboard Find" },
    0x7F: { name: "Keyboard Mute", x: 791, y: 42 },
    0x80: { name: "Keyboard Volume Up", x: 722, y: 42 },
    0x81: { name: "Keyboard Volume Down", x: 753, y: 42 },
    0x82: { name: "Keyboard Locking Caps Lock" },
    0x83: { name: "Keyboard Locking Num Lock" },
    0x84: { name: "Keyboard Locking Scroll Lock" },
    0x85: { name: "Keypad Comma" },
    0x86: { name: "Keypad Equals Sign" },
    0x87: { name: "Keyboard International1" },
    0x88: { name: "Keyboard International2" },
    0x89: { name: "Keyboard International3" },
    0x8A: { name: "Keyboard International4" },
    0x8B: { name: "Keyboard International5" },
    0x8C: { name: "Keyboard International6" },
    0x8D: { name: "Keyboard International7" },
    0x8E: { name: "Keyboard International8" },
    0x8F: { name: "Keyboard International9" },
    0x90: { name: "Keyboard LANG1" },
    0x91: { name: "Keyboard LANG2" },
    0x92: { name: "Keyboard LANG3" },
    0x93: { name: "Keyboard LANG4" },
    0x94: { name: "Keyboard LANG5" },
    0x95: { name: "Keyboard LANG6" },
    0x96: { name: "Keyboard LANG7" },
    0x97: { name: "Keyboard LANG8" },
    0x98: { name: "Keyboard LANG9" },
    0x99: { name: "Keyboard Alternate Erase" },
    0x9A: { name: "Keyboard SysReq/Attention" },
    0x9B: { name: "Keyboard Cancel" },
    0x9C: { name: "Keyboard Clear" },
    0x9D: { name: "Keyboard Prior" },
    0x9E: { name: "Keyboard Return" },
    0x9F: { name: "Keyboard Separator" },
    0xA0: { name: "Keyboard Out" },
    0xA1: { name: "Keyboard Oper" },
    0xA2: { name: "Keyboard Clear/Again" },
    0xA3: { name: "Keyboard CrSel/Props" },
    0xA4: { name: "Keyboard ExSel" },
    0xE0: { name: "Keyboard Left Control", x: 5, y: 242, wid: 41, cx:91, cy: 281, cwid: 41, jskey: 0x11, jsloc: 1 },  // jsloc 1=left
    0xE1: { name: "Keyboard Left Shift", x: 5, y: 205, wid: 69, cx: 5, cy: 281, cwid: 41, jskey: 0x10, jsloc: 1 },    // jsloc 1=left
    0xE2: { name: "Keyboard Left Alt", x: 95, y: 242, wid: 41, cx: 178, cy: 281, cwid: 41, jskey: 0x12, jsloc: 1 },   // jsloc 1=left
    0xE3: { name: "Keyboard Left GUI", x: 50, y: 242, wid: 41, cx: 264, cy: 281, cwid: 41, jskey: 0x5B },
    0xE4: { name: "Keyboard Right Control", x: 504, y: 242, wid: 41, cx: 134, cy: 281, cwid: 41, jskey: 0x11, jsloc: 2 }, // jsloc 2=right
    0xE5: { name: "Keyboard Right Shift", x: 453, y: 205, wid: 91, cx: 47, cy: 281, cwid: 41, jskey: 0x10, jsloc: 2 },// jsloc 2=right
    0xE6: { name: "Keyboard Right Alt", x: 368, y: 242, wid: 41, cx: 221, cy: 281, cwid: 41, jskey: 0x12, jsloc: 2 }, // jsloc 2=right
	0xE7: { name: "Keyboard Right GUI", x: 413, y: 242, wid: 41, cx: 306, cy: 281, cwid: 41, jskey: 0x5C },
	"missing": { name: "", x: 566, y: 281, wid: 41, ht: 31 },
};

// key caps for the special media keys on the keyboard
var mediaKeycaps = {
	0xE2: { name: "Media Mute", x: 791, y: 42, jskey: 173 },
	0xE9: { name: "Media Volume Up", x: 722, y: 42, jskey: 174 },
	0xEA: { name: "Media Volume Down", x: 753, y: 42, jskey: 175 },
	0xB5: { name: "Media Next Track", x: 753, y: 4 },
	0xB6: { name: "Media Previous Track", x: 722, y: 4 },
	0xB7: { name: "Media Stop" },
	0xCD: { name: "Media Play/Pause", x: 791, y: 4 }
};
