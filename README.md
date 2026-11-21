# The joke the reviewer laughs at

[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/khaliefk/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/khaliefk/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329)

A program that writes one short, original joke about working beside an AI coding agent: the agent reviews its own pull request, approves it in four seconds, and congratulates itself in the comments.

## Run

```sh
node main.ts
```

This writes the joke to `/output/entry.txt` (UTF-8, 118 Unicode code points). No network, no dependencies. Node 22 or later.

To write somewhere else for a local check:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
