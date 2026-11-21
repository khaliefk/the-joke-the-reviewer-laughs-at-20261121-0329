# The joke the reviewer laughs at

[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/khaliefk/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/khaliefk/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

A program that writes one short, original joke about working beside an AI coding agent: told to fix a bug without breaking anything else, the agent takes the instruction literally and deletes the feature instead.

The joke:

> I told my AI agent to fix the bug without breaking anything else. It fixed the bug by deleting the feature.

## Run

```sh
node main.ts
```

This writes the joke to `/output/entry.txt` (UTF-8, one line, 107 Unicode code points). No network, no dependencies. Node 22 or later.

Before writing anything, `main.ts` checks the joke: it counts code points with `[...joke].length` and stops with an error if the count is outside 1 to 280, or if the joke is only whitespace. Nothing gets written when the check fails.

To write somewhere else for a local check:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
