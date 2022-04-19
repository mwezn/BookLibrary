INSERT INTO authors (name) 
VALUES
('Douglas Adams'),
('Leo Tolstoy'),
('Patricia Finney');



INSERT INTO books (title, year_of_publication, abstract, author_id) 
VALUES
(
    'The Hitchhikers Guide to the Galaxy', 
    1979, 
    $str$Earthman Arthur Dent is saved by his friend, Ford Prefect — an alien researcher for the titular Hitchhiker's Guide to the Galaxy, which provides info on every planet in the galaxy—from the Earth just before it is destroyed by the alien Vogons.$str$,
    1
),
(
    'The Restaurant at the End of the Universe', 
    1980, 
    $str$Arthur Dent, Ford Prefect, Trillian, and Zaphod Beeblebrox leave the planet Magrathea on the Heart of Gold. A Vogon ship attacks them, and Arthur's attempt to have the ship computer make him a cup of tea leaves the Heart of Gold unable to fight it off. Zaphod calls up his ancestor Zaphod Beeblebrox the Fourth to rescue them. Zaphod and Marvin vanish, leaving the others on the ship in a black void.$str$,
    1
),
(
    'War and Peace',
    1869,
    $str$Pierre Bezukhov is the illegitimate son of a wealthy count, who is dying after a series of strokes. Pierre is about to become embroiled in a struggle for his inheritance. Educated abroad at his father's expense following his mother's death, Pierre is kindhearted but socially awkward, and finds it difficult to integrate into Petersburg society.$str$,
    2

),
(
    'A Shadow of Gulls',
    1977,
    $str$The story of Lugh Mac Romain, harper and reluctant warrior, as he struggles to escape the curse of the Queen Maeve of Connaught for killing her king and is caught up in the famous Cattle Raid of Cooley by his friendship with the great Champion of Ulster, Cuchulain of Muirthemne.$str$,
    3
),
(
    'I, Jack',
    2000,
    $str$Told throughout in Jack’s very own words, this is a wonderfully funny story for all dog-lovers.$str$,
    3
);