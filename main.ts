// One-Line Pitches — entry program (Node 22, program/v1 harness).
//
// The whole entry is a single sentence, at most 240 characters, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt. A house judge compares sentences two at a
// time on persuasiveness, clarity and truth, in one read, for a friend who
// has never coded.
//
// Candidate pitches considered (each exactly one sentence, <= 240 chars):
//   A. "That app idea you've been carrying around — describe it in plain
//      words on make.fun and an AI agent will build it into a real app
//      today, no code needed and nothing to lose by trying." (181)
//   B. "You don't need to learn to code — just describe the app you've been
//      imagining on make.fun and an AI agent will build it for you, and it
//      costs nothing to try, so the only thing between you and your own app
//      is one sentence." (221)
//   C. "Describe the app you've been imagining over coffee and an AI agent
//      on make.fun will hand you back a working app by dinner — no code, no
//      cost to try, and nothing to lose but the idea sitting in your head."
//      (203)
//   D. "Just tell an AI agent on make.fun your app idea in plain words and
//      by tonight you'll be using a real app you dreamed up — no coding, no
//      cost to try, and if you don't love it, you've lost nothing." (195)
//   E. "Your idea deserves more than a note on your phone — describe it in
//      plain words on make.fun and an AI agent will build it into a real app
//      today, no coding and nothing to lose by trying." (184)
//   F. "Tell an AI agent on make.fun your app idea in plain words and watch
//      it become something real you can use today — you don't need to code a
//      thing, and trying costs you nothing." (174)
//
// Why the winner below beats them, against the judge's criteria in order:
//   1. On-task: it speaks directly to the non-coder friend ("you", "your
//      app"), names make.fun and the first app idea, in one read.
//   2. Persuasion: it removes the two fears that stop a beginner — coding
//      ("no code needed") and risk ("nothing to lose") — and its closer
//      ("the only thing between you and your own app is one sentence")
//      shrinks the ask to a single sentence, a concrete reason to say yes
//      now. B has the same closer but opens with a lecture ("You don't need
//      to learn to code"); the winner opens with the friend's own idea,
//      which is warmer and more personal.
//   3. Clarity: plain words throughout, no jargon, one read is enough.
//   4. Truth: it promises nothing about speed or money — no "by tonight",
//      no "free", no "guaranteed". C and D overpromise a same-day app; the
//      winner only says the agent will build it and there is nothing to
//      lose by trying, both of which hold up.
//   5. Warmth and craft: "the app idea you've been carrying around" sounds
//      like a person talking to a friend, not a slogan; the closer is a
//      fresh turn of phrase, not a template.
// Rejected: G, which asked a question mid-text ("...friends about?
// Describe it...") — that is two sentences, not one.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "That app idea you've been carrying around \u2014 describe it in plain " +
  "words on make.fun and an AI agent will build it for you, no code " +
  "needed and nothing to lose, so the only thing between you and your " +
  "own app is one sentence.";

// The gate: entry.txt must be UTF-8 text of 1 to 240 characters, not only
// whitespace. Guard it here so a bad edit fails loudly instead of shipping
// an invalid entry.
if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
  throw new Error(`pitch is ${PITCH.length} chars, must be 1-240`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`wrote ${PITCH.length}-char pitch to ${join(outDir, "entry.txt")}`);
