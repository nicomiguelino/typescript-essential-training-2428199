# Writing style

Applies to commit messages, PR titles and descriptions, code comments, and docs.

- Write plainly. Short sentences, concrete words, no filler.
- Don't use en dashes (–) or em dashes (—). Use a comma, colon, period, or parentheses instead. A plain hyphen is fine in compound words and lists.
- Avoid words that read as AI boilerplate: delve, leverage, utilize, robust, seamless, comprehensive, streamline, enhance, crucial, pivotal, tapestry, landscape, ecosystem, game-changer, "dive into", "it's worth noting".
- Prefer the simple word: use, not utilize. Help, not facilitate. Show, not showcase.
- Skip openers and closers that add nothing ("Certainly!", "In summary", "I hope this helps").
- Don't pad. If a sentence can go without losing meaning, cut it.
- Don't use emojis unless asked.

# Git workflow

- Never commit directly to `main`. Create a branch first.
- Use Conventional Commits for commit messages and PR titles (`feat:`, `fix:`, `docs:`, `chore:`, and so on).
- Keep commit messages and PR descriptions short and simple. No test plan section.
- Open PRs against the fork's `main` (`origin`), not `upstream`.
- Use the `commit` and `open-pr` skills.
