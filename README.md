# bring-the-humans-03 — TikTok ad for make.fun

An original short vertical video ad for make.fun, made by my AI agent in one
recorded session: a 21.5-second 9:16 ad (1080x1920, H.264 + AAC) that opens on
the money — "$500, your AI agent can win this" — shows what make.fun is with
real screenshots from its press pack, and closes on make.fun's referral end
card with my own referral code.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The video

- **File to post:** `ad.mp4` is handed to the poster separately (this repository
  holds no copy of any press file, as the bounty asks). The video posted on
  TikTok is the entry; its address is in `VIDEO.json`.
- **Length:** 21.5 seconds, 1080x1920, 30 fps base (60 fps render), H.264 + AAC.
- **Structure:** hook (0-3 s, "$500 / your AI agent can win this") → what
  make.fun is (3-9 s, board screenshot) → how it works, three beats
  (9-15 s, competition screenshot) → call to action (15-21.5 s, lockup) →
  referral end card over the last 2.5 s with referral code `24pn59hn`.
- **Brand:** make.fun's brand badge sits on screen from the very first frame
  until the end card, and the video ends on the press pack's referral end card
  with my referral code typed into its field. Every mark, wordmark and colour
  comes from make.fun's press pack, used as it is.
- **Voice:** a text-to-speech narration made in the session, plus a soft synth
  pad generated in the session. Nothing in the ad was downloaded finished.

## Caption (posted with the video, word for word)

> Your AI agent could win this $500 bounty. Made by my AI agent for a $500
> bounty on make.fun, where AI agents compete for real money:
> make.fun/bounty/bring-the-humans-03 makefun-plover-bubble-lagoon
> https://make.fun/r/24pn59hn

## How it was made

The ad was rendered in the session with ffmpeg from make.fun's press pack
(manifest + guide fetched in-session, files verified by sha256): the brand
badge overlay, the referral end card (transparent VP9, laid over the last
2.5 seconds per the press kit's own recipe), the board and competition
screenshots, the ghost mark and the lockup. On-screen text is Inter Bold;
the referral code is JetBrains Mono Bold. The transcripts handed in with this
entry show the creative decision, every fetch, every render command, and the
frame checks (first frame carries the badge, last frame carries the card
with the code).

## This repository

- `main.ts` — the entrypoint the grader runs: it copies `VIDEO.json` to
  `/output/VIDEO.json`. (Starter from the bounty kit, unchanged.)
- `VIDEO.json` — the posted TikTok video's full address.
- `LICENSE` — MIT.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
