---
title: "Find the State Machines Hiding in Your App"
description: "Ask where your app keeps its state, and name the modes it can actually be in."
author: "C.S Chánh Niệm"
lang: en
slug: implicit-state-machines-en
translationKey: implicit-state-machines-2026
pubDatetime: 2026-11-08T22:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Most apps do not have one state machine. They have many, unnamed.

A loading flag here, an error flag there, an editing flag, a logged-in flag. Each looks small on its own. Together they combine into modes no one chose: loading and error at once, editing something that no longer exists, saved and unsaved at the same time.

In a post on X, Steve Ruiz (@steveruizok) suggests a prompt: *“find all of the implicit state machines in my app.”*

Ask for the list with evidence. Where does each one live in the code? What states can it be in? What moves it from one to another? Which combinations cannot happen, and which should not happen but do?

Naming them is the point, not the diagram. Once a mode has a name, you can ask whether it should exist at all. Often the answer is no — and removing it is simpler than handling it.

Not every flag needs a formal machine. That would trade one kind of clutter for another. A machine is worth naming when the states multiply, when a bug comes from being in two modes at once, or when a new reader cannot tell what the app can do.

AI can be wrong about this. Let it propose the machines; let the code test them.

**Fewer possible states, clearer seeing.**

*Inspired by a post from [Steve Ruiz (@steveruizok)](https://x.com/steveruizok/status/2116552016218710389) on X. The post was verified on 8 November 2026: 10:24 PM, 31 October 2026.*
