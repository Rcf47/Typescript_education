enum Membership {
  Standart,
  Simple,
  Premium,
  ExtraPremium
}

const membership = Membership.Simple
console.log(membership) // Standart = 0, Simple = 1, Premiuim = 2, ExtraPremium = 3 

const membershipReverse = Membership[2]

console.log(membershipReverse)

enum SocialMedia {
  VK = 'VK',
  NOTVK = 'NOTVK',
  SOMEGOODMEDIA = 'SOMEGOODMEDIA'
}

const mySocialList = SocialMedia.SOMEGOODMEDIA

console.log(mySocialList)
