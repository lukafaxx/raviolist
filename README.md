# Raviolist

Raviolist is a collaborative project about presenting the move lists of all the characters from as many fighting games as possible. Everyone is welcome to contribute to its proper development, either by improving its code or by submitting data.

## About terminology

The easiest way to create a new character data file is to copy and modify an existing one from a similar character.

For the value under the **name** key, we use, if we can, the official name from the English version of the video game. When dealing with a selectable move like an Ultra Combo or a Super Art, we also prepend the number of the move to its name.

```
name: II. Yoga Shangri-La
```

For the sake of both reading simplicity and proper development, it is especially important that the values written under the **input** key of each character data file respect the same terminology across all games. In addition, we capitalize the first word of the value except for situational conditions written between parentheses.

```
input: (in air) Quarter-circle forward x 2, all three kicks
```

For values under the **note** key, we make use of an inline formatted list.

```
note: ["Command grab"]
```

Empty keys can be removed entirely, and new keys are always welcome (if one wants to add damage output or frame data, name aliases, anime fighters inputs conventions, etc).

It is always best to refer to the official in-game move list when creating a new character for Raviolist, but even those have inconsistencies. We also refer to everything below this point for the proper terminology to use.

### direction

* up
* up-forward
* forward
* down-forward
* down
* down-back
* back
* up-back

```
name: Ougi Kogetsu Zan
input: Forward, down, down-forward + Slash
```

### multiple directions

* quarter-circle forward
* quarter-circle back
* half-circle forward
* half-circle back
* 360°

```
name: "Shiranui Ryuu: Kunoichi No Mai"
input: Quarter-circle forward, half-circle back, LP + HP
note: ["Can be performed in air"]
```

### other directions

* starting from {direction}, {multiple directions}
* dash forward
* back dash
* double jump
* run
* 360° counter-clockwise

```
name: Rekkukyaku
input: Starting from down-back, half-circle forward, kick
note: ["EX", "Armor Break added to first hit"]
```

### button (sets examples)

* LP - MP - HP - LK - MK - HK - punch - kick - any two punches - any two kicks - all three punches - all three kicks
* L - M - H - attack - any two attacks - S
* P - K - S - HS - D
* W - S - WP - SP
* FP - BP - FK - BK - block - tag - flip stance
* A - B - G - K

```
name: Houten Geki
input: Half-circle back, attack
note: ["Command grab"]
```

### join

* ,
* +
* and
* or
* >

```
name: Rampage
input: Quarter-circle forward and W or S
note: ["SB", "Can be performed in air"]
```

### charge

* charge down, then {direction} + {button}
* charge down-back, then {direction} + {button}
* charge back, then {direction} + {button}

```
name: II. Sonic Hurricane
input: Charge back, then forward, back, forward + all three punches
```

### situational (examples)

We write those to show how to make the move come out, not particularly how to make it connect. For this reason, we don't use '(near opponent)' for most throws or command grabs. Though a good use of '(near opponent)' would be, for example, for the alternate version of Akuma's demon flip, for it is not obvious when to input its buttons otherwise.

* (in air)
* (near opponent)
* (during angled jump)
* (jump distance)

In addition, some position conventions mostly used for 3D fighting games:

* (from right side)
* (behind opponent)
* (on the ground, facing down with feet toward opponent)
* (fully crouched, with back toward opponent)

```
name: Rock Crusher
input: (near opponent) Forward or back + MP
note: ["Overhead"]
```

### various

We generally write 'close', 'crouching' or 'jumping' for target combos. Otherwise, we prefer the use of '(near opponent)', 'down +' or '(in air)'.

* hold {button}
* charge and release {button}
* {multiple directions} x 2
* press {button} repeatedly
* during {name} >
* close {button}
* far {button}
* crouching {button}
* jumping {button}


```
name: Zonk Knuckle
input: Charge and release punch
note: ["EX", "Armor Break"]
```

## About hierarchy

### _data/games.yml

This file contains a list of all completed video games, or that we seek to complete.

* **title:** The title of the game, always written between double quotation marks. We sometimes add '(year)' for old games otherwise named exactly like more relevant ones.
* **year:** The year or year.month of release of the game.
* **short:** A shortened name for the game that matches its HTML game page permalink and game layout.
* **status:** Whether the game is 'incomplete' or 'nothing' has been done about a single character yet. We remove this key once the game is completed.

The values under those keys are used by the sidebar to display the games in reversed chronological order, with working links, and with different colors depending of their status of completion.

### _data/{game}/

The name of this subfolder matches its HTML game page permalink and value under the **short** key in _data/games.yml.

### _data/{game}/{character}.yml

The name of this file matches its HTML character page permalink. This file contains the data we need to generate the HTML character page.

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
