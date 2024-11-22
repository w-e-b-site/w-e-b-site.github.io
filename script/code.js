//const str = "如:여,是:시,我:아,聞:문,[하오니,一:일,時:시,[에,佛:불,[이,在:기,舍衛國,[,祇樹給,[孤獨園에서 與大比丘衆 千二百五十人으로 惧하시니라.";
const str = "如여,是시,我아,聞문,A,하오니";
const words = str.split(",");

console.log(words.length + " words :: " + words);
// console.log(words[0].charAt(0), words[0].charAt(1));

const char = words[4];
console.log("==========> ", char);
// &#91; [
if (char.charAt(0) >= "\uAC00" && char.charAt(0) <= "\uD7A3") {
    // 한글 : char.charAt(0) >= "\uAC00" && char.charAt(0) <= "\uD7A3"
    // 한자 : char.charAt(0) >= "\u4E00" && char.charAt(0) <= "\u9FFF"
    console.log("한글입니다.");
} else if (char.charAt(0) >= "\u4E00" && char.charAt(0) <= "\u9FFF") {
    console.log("한문입니다.");
} else {
    console.log("nothing");
}
