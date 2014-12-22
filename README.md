# Raviolist

Raviolist is a collaborative project about presenting the move lists of all the characters from as many fighting games as possible. Everyone is welcome to contribute to its proper development, either by improving its code or by submitting data.

## About terminology

The easiest way to create a new character data file is to copy and modify an existing one from a similar character.

For the value under the **name** key, we use, if we can, the official name from the English version of the video game. When dealing with a selectable move like an Ultra Combo or a Super Art, we also prepend the number of the move to its name.

```
name: II. Yoga Shangri-La
```

For the sake of both reading simplicity and proper development, it is especially important that the values written under the **input** key of each character data file respect the same terminology across all games.

```
input: (in air) qcf qcf kkk
```

For values under the **note** key, we make use of an inline formatted list.

```
note: ["Command grab"]
```

Empty keys can be removed entirely, and new keys are always welcome (if one wants to add damage output or frame data, name aliases, etc).

It is always best to refer to the official in-game move list when creating a new character for Raviolist, but even those have inconsistencies. We also refer to everything below this point for the proper terminology to use.

### direction

* up
* upforward
* forward
* downforward
* down
* downback
* back
* upback

```
name: Kakukyakuraku
input: downforward + hk
note: ["Overhead"]
```

### multiple directions

* dpf
* dpb
* qcf
* qcb
* hcf
* hcb
* 360
* 360cc
* cwing

```
name: "Shiranui Ryuu: Kunoichi No Mai"
input: qcf hcb pp
note: ["Can be performed in air"]
```

### button (sets examples)

To minimize unwanted parsing for terminology shortcuts, buttons are always written within the data files with at least two characters.

* lp - mp - hp - lk - mk - hk - punch - kick - pp - kk - ppp - kkk
* light - medium - heavy - atk - 2atk - sp
* punch - kick - slash - hs
* fp - bp - fk - bk - block - tag - stance

```
name: Houten Geki
input: hcb atk
note: ["Command grab"]
```

### join

To avoid repetition of primary special moves names and inputs, we prepend '--' to the value under the **name** key, and '...' to the one under the **input** key (see EX Kyo from KOF13 for an extreme example of multiple secondary and tertiary special moves). We use '+' for simultaneous inputs (e.g. command normals and charge moves) and '>' for moves such as target combos followups, where the first part can be performed independently of the following ones. ',' can be used for links.

* --
* ...
* During {version} {name} >
* +
* and
* or
* >
* ,

```
name: -- Hyakki Gosho
input: ... punch
note: ["Armor Break"]
```

### charge

* chdown {direction} + {button}
* chdownback {direction} + {button}
* chback {direction} + {button}

```
name: II. Sonic Hurricane
input: chback forward back forward + ppp
```

### situational (examples)

We write those to show how to make the move come out, not particularly how to make it connect. For this reason, we don't use '(near opponent)' for most throws (which already are in their own category of moves) or command grabs (normally noted as such).

* (near opponent)
* (jump distance)
* (in air)
* (during angled jump)
* (during up or upforward jump)

In addition, some position conventions mostly used for 3D fighting games:

* (from right side)
* (behind opponent)
* (on the ground, facing ground with feet toward opponent)
* (fully crouched, facing away from opponent)

```
name: Rock Crusher
input: (near opponent) forward or back + mp
note: ["Overhead", "Hold MP to change timing"]
```

### various

We generally write 'close', 'cr.' or 'j.' for target combos. Otherwise, we prefer the use of '(near opponent)', 'down +' or '(in air)'.

* hold {button}
* charge {button} and release
* press {button} repeatedly
* close {button}
* far {button}
* cr.{button}
* j.{button}


```
name: Zonk Knuckle
input: Charge punch and release
note: ["EX", "Armor Break"]
```

## About hierarchy

### _data/games.yml

This file contains a list of all completed video games, or that we seek to complete.

* **title:** The title of the game, always written between double quotation marks. We sometimes add '(year)' for old games otherwise named exactly like more relevant ones.
* **year:** The year or year.month of release of the game.
* **short:** A shortened name for the game that will match its HTML game page permalink and game layout.
* **status:** Whether the game is 'incomplete' or 'nothing' has been done about a single character yet. We remove this key once the game is completed.

The values under those keys are used by the sidebar to display the games in reversed chronological order, with working links, and with different colors depending of their status of completion.

### _data/{game}/

The name of this subfolder matches the value under the **short** key in _data/games.yml and will match its HTML game page permalink.

### _data/{game}/_characters.yml

This file contains a list of all characters from {game} with their status of completion. We remove the **status** key once a character is completed.

### _data/{game}/{character}.yml

The filename must match the full name of the character as it can be seen in _data/{game}/characters.yml, but in lowercase and without any special character ('.', '-' or ' '). For example, 'E. Honda' becomes 'ehonda.yml'. The filename will match its HTML character page permalink. This file contains the data we need to generate the HTML character page.

### _layouts/game.html

The layout we will use for all HTML game pages.

### _layouts/{game}.html

The layout we will use for all HTML character pages from {game}.

### _game/{game}/index.md

Only the front matter is required so the file can be processed by Jekyll.

* **layout:** game
* **title:** Must match the value under the **title** key in _data/games.yml.
* **permalink:** /{game}/

For example, the front matter for Skullgirls Encore would be:

```
---
layout: game
title: "Skullgirls Encore"
permalink: /skullgirls/
---
```

### _game/{game}/{character}.md

Only a front matter is required so the file can be processed by Jekyll.

* **layout:** {game}
* **title:** Must match the value under the **character** key in _data/{game}/{character}.yml.
* **permalink:** /{game}/{character}/

For example, the front matter for Chun-Li from "Street Fighter II: The World Warrior" would be:

```
---
layout: sf2
title: Chun-Li
permalink: /sf2/chunli/
---
```
