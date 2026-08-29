const cards = [
  {
    id: 1,
    word: "Strength",
    verseLocation: "Psalm 18:32",
    verse:
      "It is God who arms me with strength and keeps my way secure. - Psalm 18:32",
  },
  {
    id: 2,
    word: "Rest",
    verseLocation: "1 Peter 5:7",
    verse:
      "Cast all your anxiety on Him, because He cares for you. - 1 Peter 5:7",
  },
  {
    id: 3,
    word: "Love",
    verseLocation: "Psalm 33:22",
    verse:
      "Let your unfailing love surround me, LORD, for my hope is in YOU alone. - Psalm 33:22",
  },
  {
    id: 4,
    word: "Never alone",
    verseLocation: "Hebrews 13:5",
    verse: "I will never leave you nor forsake you. - Hebrews 13:5",
  },
  {
    id: 5,
    word: "Capable",
    verseLocation: "Hebrews 12:11",
    verse:
      "No discipline seems pleasant at the time, but painful. Later on, however, it produces a harvest of righteousness and peace for those who have been trained by it. - Hebrews 12:11",
  },
  {
    id: 6,
    word: "Calm",
    verseLocation: "Zephaniah 3:17",
    verse: "With His love, He will calm all your fears. - Zephaniah 3:17",
  },
  {
    id: 7,
    word: "Kind",
    verseLocation: "Ephesians 4:32",
    verse:
      "And be kind to one another, tender hearted, forgiving each other, just as God also in Christ Jesus forgave you. - Ephesians 4:32",
  },
  {
    id: 8,
    word: "Renewed",
    verseLocation: "Psalm 103:5",
    verse:
      "He satisfies your years with good things, so that your youth is renewed like the eagle. - Psalm 103:5",
  },
  {
    id: 9,
    word: "Secured",
    verseLocation: "Psalm 91:2",
    verse:
      "I will say of the LORD, 'He is my refuge and my fortress, my God, in whom I trust'. - Psalm 91:2",
  },
  {
    id: 10,
    word: "Cared for",
    verseLocation: "Romans 8:28 (AMP)",
    verse:
      "And we know [with great confidence] that God [who is deeply concerned about us] causes all things to work together [as a plan] for good for those who love God, to those who are called according to His plan and purpose. - Romans 8:28",
  },
  {
    id: 11,
    word: "Productive",
    verseLocation: "Philippians 2:13 (AMP)",
    verse:
      "[Not in your own strength] for it is God who is all the while effectually at work in you [energizing and creating in you the power and desire], both to will and to work for His good pleasure and satisfaction and delight. - Philippians 2:13",
  },
  {
    id: 12,
    word: "Protected",
    verseLocation: "Isaiah 43:2",
    verse:
      "[I am with you through it all] When you go through deep waters, I [God] will be with you. When you go through rivers of difficulty, you will not drown. - Isaiah 43:2",
  },
];

/**
 * Retrieves a card object by its ID from the cards array.
 *
 * @param {number} cardId - The unique identifier of the card to retrieve
 * @returns {object|undefined} The card object if found, undefined otherwise
 */
function getCardByID(cardId) {
  return cards.find((card) => card.id === cardId);
}

export { cards, getCardByID };
