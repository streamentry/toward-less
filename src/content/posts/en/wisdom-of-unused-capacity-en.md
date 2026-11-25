---
title: "The Wisdom of Unused Capacity"
description: "Why leaving some time unpromised can make commitments more reliable, and why queueing theory does not prescribe an 80% rule for life."
lang: en
slug: wisdom-of-unused-capacity-en
translationKey: wisdom-of-unused-capacity-2026
pubDatetime: 2026-11-26T04:10:00+07:00
draft: false
featured: false
tags: [life, practice]
sourceURL: https://www.pdl.cmu.edu/ftp/associated/TeaPACS21.pdf
---

Imagine a day with every hour assigned. A meeting runs late. A repair takes longer than expected. Someone needs help. Nothing extraordinary has happened, yet the last promise of the day now depends on everything else going perfectly.

A reliable plan needs some capacity that has not already been promised.

A reader shared a screenshot of a Google Gemini response with a forceful recommendation: “Deliberately run your time, energy, and resources below 80% capacity.” It appeals to queueing theory, then extends a waiting-time equation to human errors, recovery and opportunity. The useful insight deserves a more careful argument.

## What the equation actually describes

In the standard M/M/1 model, one server handles independent Poisson arrivals, with independent exponential service times, first come, first served, and unlimited waiting space. Average demand stays below service capacity. Utilization, written as `ρ`, is the long-run fraction of time the server is busy.

The model gives:

`Wq / E[S] = ρ / (1 − ρ)`

Here `Wq` is average waiting time before service starts; `E[S]` is average service time. [MIT OpenCourseWare’s “M/M/1 Queue” notes, Fall 2016](https://live.ocw.mit.edu/courses/2-854-introduction-to-manufacturing-systems-fall-2016/927056a1af54772a587fd84ad4951e71_MIT2_854F16_Mm1Queue.pdf) derive the result. Substituting values gives:

| Utilization | Average wait, in units of average service time |
| --- | ---: |
| 50% | 1 |
| 80% | 4 |
| 90% | 9 |
| 98% | 49 |

Waiting grows sharply near full utilization. These are model calculations, not measurements of human performance. Total time includes service too: at 80%, it is five average service times, not four.

Nothing special happens at exactly 80%. There is no threshold there in this equation.

## Variability matters, and people are more complicated

In their 2021 paper, [Mor Harchol-Balter and Ziv Scully](https://www.pdl.cmu.edu/ftp/associated/TeaPACS21.pdf) explain that delays depend on variability in both arrivals and task duration, as well as utilization. Even a lightly used system can have long waits. Scheduling and sharing resources can also reduce delay. Leaving a fixed percentage unused is only one possible response.

The screenshot goes further: it says greater utilization multiplies error rates and recovery costs. The waiting-time formula does not establish either claim. Nor does it show that every brain, household or workplace follows the same curve.

For everyday life, the defensible connection is an analogy. If commitments already consume all the time available, a new demand needs a response: delay something, reduce its scope, find help, or extend the working day. Without room to adjust, keeping one promise may put another at risk.

That is enough reason to examine a crowded schedule. No claim about a universal law of the brain is needed.

## Leave room where it can actually help

Spare capacity is specific. An empty evening does not help with a decision due at noon. Three scattered ten-minute gaps cannot absorb a two-hour task. Someone else’s free time is useful only if they can take the work and have agreed to do so.

The practical question is: **where do ordinary surprises turn into broken commitments?**

For a team, it might be the one reviewer through whom every release must pass. For a household, it might be a tightly timed handover between work and care. Start with that point of pressure. A smaller workload, a longer lead time or an agreed backup may help more than a general promise to become less busy.

Define capacity honestly. Sleep, meals, care and existing responsibilities already belong in the plan. The hours left after those needs are met are a more useful starting point than every hour a person could theoretically remain awake.

## The real objection: spare capacity has a cost

An unused hour can mean work left undone or income forgone. Too much reserve can postpone a necessary decision. Some periods call for a deliberate, temporary stretch.

Nor does everyone control their workload. A person doing shift work or providing care may have very little room to decline a demand. Advice about margin becomes unfair when it treats limited choices as a failure of discipline. Sometimes the change requires staffing, shared responsibility or fewer demands from the people who set them.

The aim is a proportionate reserve. Consider how unpredictable the work is, how serious a delay would be, and what leaving room would cost. A universal percentage cannot settle those questions.

Also ask whether “keeping options open” has become a way to avoid one difficult, worthwhile commitment. Space can support action. It can also become a comfortable reason never to begin.

## A small experiment

For the next four weeks, choose one area where you can change commitments without breaking existing obligations.

1. Estimate the time you can sustainably give it. Suppose that is ten hours a week.
2. Promise seven or eight hours of work, leaving the rest unassigned. This is a trial setting, not a scientifically established optimum.
3. Keep that room available for overruns, an unexpected need or unhurried thought. When a new recurring commitment arrives, decide what it replaces.
4. Review completed work, missed promises and what happened when plans changed. Adjust the reserve to what you observe.

If work merely drifts, make the next action clearer or reduce the reserve. If every week consumes the buffer and still spills over, the commitments or capacity estimate need another look. The point is to learn what makes a promise credible.

## Rest need not earn its place

The screenshot dismisses “work-life balance” and insists that spare capacity must serve an advantage. That makes even empty time answer to productivity.

A walk, a quiet meal or time with someone you love need not produce a later return. They may be part of what the work is for.

Leaving a little time unassigned can also make an urge visible: the wish to fill every opening so that no possibility is lost. We can notice that wish before making another promise.

Choose one commitment to resize this week. Leave the freed space open long enough to discover what it allows.

---

*Source note: the starting point was a reader-supplied screenshot of a Google Gemini response. It contained no public share URL or date, so the original conversation could not be checked independently. The screenshot is credited as the prompt for this reflection; the technical claims above were checked against the linked MIT notes and the Harchol-Balter–Scully paper. The four-week exercise is a practical suggestion, not a tested intervention.*

- MIT OpenCourseWare, *Introduction to Manufacturing Systems* (2016). [“M/M/1 Queue”](https://live.ocw.mit.edu/courses/2-854-introduction-to-manufacturing-systems-fall-2016/927056a1af54772a587fd84ad4951e71_MIT2_854F16_Mm1Queue.pdf).
- Mor Harchol-Balter and Ziv Scully (2021). [“The Most Common Queueing Theory Questions Asked by Computer Systems Practitioners”](https://www.pdl.cmu.edu/ftp/associated/TeaPACS21.pdf).
