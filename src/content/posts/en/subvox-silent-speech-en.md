---
title: "A small experiment in silent speech"
description: "Subvox tests whether AirPods Pro head motion can distinguish a small set of silently mouthed words."
lang: en
slug: subvox-silent-speech-en
translationKey: subvox-silent-speech-2026
pubDatetime: 2026-11-07T00:00:00+07:00
draft: true
featured: false
tags: [technology]
---

[Subvox](https://github.com/joeblau/subvox) asks a narrow question: can AirPods Pro motion distinguish a few words mouthed silently?

It is a macOS prototype, not a general silent-speech system. It records acceleration, rotation, and attitude from the headphones, segments each attempt, then matches it to word templates with dynamic time warping. A training screen evaluates leave-one-out accuracy against 500 shuffled-label tests. The decode screen shows motion predictions beside a live microphone transcript. There is no language model.

The experiment is inspectable: sensor plots, session recordings, selectable motion features, and rejection thresholds make the test visible. But the README describes the method without reporting an observed accuracy result. The signal is also limited: roughly 25 Hz, mostly head and jaw movement rather than vocal vibration. Templates are user- and session-specific and can shift when the earbuds are reseated.

Subvox is an experiment in measuring a signal, not evidence that silent speech is ready for everyday use.

[See the project on GitHub](https://github.com/joeblau/subvox).
