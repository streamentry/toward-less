---
title: "A small experiment in silent speech"
description: "Subvox tests whether low-rate headphone motion can distinguish a few silently mouthed words."
lang: en
slug: subvox-silent-speech-en
translationKey: subvox-silent-speech-2026
modDatetime: 2026-11-14T01:59:00+07:00
pubDatetime: 2026-11-07T00:00:00+07:00
draft: false
featured: false
tags: [technology]
---

Subvox asks whether AirPods Pro head-motion data can distinguish a few words mouthed silently. It is a macOS prototype, not a general speech-recognition system.

The prototype:

- records acceleration, rotation, and attitude at roughly 25 Hz; the signal is mostly head and jaw movement, not vocal vibration;
- matches segments to user- and session-specific word templates with dynamic time warping;
- compares leave-one-out classification with 500 shuffled-label tests and shows a microphone transcript beside its predictions.

The README documents the method but reports no observed accuracy result. Reseating the earbuds can shift templates, and the prototype has no language model. It tests a signal; it does not show that silent speech is ready for everyday use.

Source: [Subvox README](https://github.com/joeblau/subvox/blob/main/README.md) (accessed 14 November 2026).
