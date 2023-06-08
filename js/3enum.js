var Membership;
(function (Membership) {
    Membership[Membership["Standart"] = 0] = "Standart";
    Membership[Membership["Simple"] = 1] = "Simple";
    Membership[Membership["Premium"] = 2] = "Premium";
    Membership[Membership["ExtraPremium"] = 3] = "ExtraPremium";
})(Membership || (Membership = {}));
var membership = Membership.Simple;
console.log(membership); // Standart = 0, Simple = 1, Premiuim = 2, ExtraPremium = 3 
var membershipReverse = Membership[2];
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["NOTVK"] = "NOTVK";
    SocialMedia["SOMEGOODMEDIA"] = "SOMEGOODMEDIA";
})(SocialMedia || (SocialMedia = {}));
var mySocialList = SocialMedia.SOMEGOODMEDIA;
console.log(mySocialList);
