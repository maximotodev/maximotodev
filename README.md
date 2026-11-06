# Maximoto

**Applied AI · Bitcoin / Lightning · Nostr · Open-source systems**

I'm an independent, self-taught full-stack engineer building practical software where open protocols, payments, and AI meet. I enjoy taking a loosely defined problem from prototype to working product: TypeScript/React on the frontend, Python and Node.js services behind it, and testing, observability, and security at the boundaries.

**[Portfolio & system-design case studies](https://maximotodev.vercel.app/systems)** · **[Selected contributions](https://github.com/PlebeianApp/market/pulls?q=author%3Amaximotodev)** · **[SatsRover source](https://github.com/maximotodev/sats-rover)**

## Start here — evidence in 60 seconds

| What to inspect | Why it matters | Evidence |
| --- | --- | --- |
| **An architectural decision** | Proposed four equal-power validators, 3-of-4 BFT finality, and explicit consensus vs. Nostr transport boundaries for experimental auctions | [Architecture PR #1407](https://github.com/PlebeianApp/market/pull/1407) · [Accepted ADR #1409](https://github.com/PlebeianApp/market/pull/1409) · **merged** |
| **A production release fix** | Corrected missing dependency patches in build/release packages after a staging failure | [Deployment PR #1410](https://github.com/PlebeianApp/market/pull/1410) · **merged** |
| **A protocol integration boundary** | Added tested, narrowly scoped NIP-17 order-message transport and read helpers before live checkout integration | [Boundary PR #1095](https://github.com/PlebeianApp/market/pull/1095) · [Transport PR #1110](https://github.com/PlebeianApp/market/pull/1110) · [Read helper PR #1136](https://github.com/PlebeianApp/market/pull/1136) · **merged** |
| **A deployed-style system architecture** | Client-signed Nostr writes, indexer-backed canonical event truth, API read models, Redis as non-authoritative cache | [SatsRover repo](https://github.com/maximotodev/sats-rover) · [architecture](https://github.com/maximotodev/sats-rover/blob/main/docs/architecture.md) · **prototype** |
| **A security review made concrete** | Protected private auction claims and constrained custody/reclaim behavior | [Security PR #1015](https://github.com/PlebeianApp/market/pull/1015) · **merged** |

## Work in progress — clearly labeled

- **[Plebeian Market](https://github.com/PlebeianApp/market):** decentralized commerce, Nostr messaging, auction protocol design, Cashu/Coco wallet workflows, safety checks, and release infrastructure. [Coco v2 integration PR #1387](https://github.com/PlebeianApp/market/pull/1387) and [product variations PR #1424](https://github.com/PlebeianApp/market/pull/1424) remain **open / in review**; they are not presented as merged or production-ready.
- **[SatsRover](https://github.com/maximotodev/sats-rover):** Bitcoin merchant discovery and Nostr check-ins. Next.js + FastAPI + PostgreSQL/PostGIS + Redis + indexer. [Current implementation boundaries](https://github.com/maximotodev/sats-rover/blob/main/README.md).
- **[Sovereign Portfolio / Newstr](https://github.com/maximotodev/sovereign-portfolio):** Next.js portfolio, source-linked [Systems Lab](https://maximotodev.vercel.app/systems), and signed Nostr writing experiments. [Site](https://maximotodev.vercel.app) · [engineering runbook](https://github.com/maximotodev/sovereign-portfolio/blob/main/docs/SOVEREIGN_PORTFOLIO_RUNBOOK.md).

## AI engineering approach

I use Codex, Claude Code, LLM APIs and retrieval-augmented techniques to accelerate exploration, prototyping, and engineering tasks. Models help generate hypotheses and implementations; **tests, reproducible evidence, review, and explicit human approval** determine what ships. Payments, credentials, private keys, and signing are outside autonomous agent authority.

**Focus areas:** agent/tool integrations and developer experience · API and backend engineering · retrieval pipelines · Nostr signing and relay semantics · Bitcoin/Lightning API exploration · infrastructure reliability.

**Current learning edge:** L402 and Taproot Assets. I follow the ecosystem and am exploring practical Lightning-native agent commerce; I do **not** claim to have deployed a production L402 service.

## Connect

- **GitHub:** [@maximotodev](https://github.com/maximotodev)
- **Portfolio:** [maximotodev.vercel.app](https://maximotodev.vercel.app)
- **Nostr:** [`npub165ka9706vpl8phnw0w5wh89za8nnl56dajz92h6e2m9uxxvkz6wszt0gn5`](https://primal.net/p/nprofile1qqsd2twjl8axqlnsmeh8h28tnj3wneel6dx7epz4tav4dj7rrxtpd8gnudt2k)
- **ngit:** [GitWorkshop identity](https://gitworkshop.dev/npub165ka9706vpl8phnw0w5wh89za8nnl56dajz92h6e2m9uxxvkz6wszt0gn5)
