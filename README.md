# Sidfrey

![Sidfrey](sidfrey.png)

A fast, customizable browser search router. Set it as your default search engine and use !bangs to search anywhere.

## Usage

Set your browser's search engine to:
```
https://sidfrey.xyz/?q=%s
```

Then search like:
- `hello world` → uses your default engine (Perplexity by default)
- `!g hello world` → Google
- `!yt cats` → YouTube
- `!gh react` → GitHub
- `! query` or `query !` → go directly to first result of Google (I'm Feeling Lucky)

## Default Bangs

| Bang | Service |
|------|---------|
| `!g` | Google |
| `!yt` | YouTube |
| `!gh` | GitHub |
| `!w` | Wikipedia |
| `!r` | Reddit |
| `!a` | Amazon |
| `!cl` | Claude |
| `!gpt` | ChatGPT |
| `!p` | Perplexity |
| `!ddg` | DuckDuckGo |
| `!b` | Bing |
| `!gi` | Google Images |
| `!wa` | Wolfram Alpha |
| `!x` | X/Twitter |
| `!eb` | eBay |
| `!so` | Stack Overflow |
| `!npm` | npm |
| `!mdn` | MDN Web Docs |
| `!maps` | Google Maps |
| `!tw` | Twitch |

## Features

- **Custom bangs**: Add your own at sidfrey.xyz
- **Default engine**: Choose what searches go to without a !bang
- **Override built-ins**: Custom bangs take precedence
- **Unknown bang fallback**: Unrecognized !bangs go to DuckDuckGo

## Why Sidfrey?

### vs DuckDuckGo

DuckDuckGo processes bangs server-side. Every `!g search` requires:
1. DNS lookup to DuckDuckGo
2. HTTP request to their servers
3. Server parses your bang
4. Server responds with redirect

This adds 100-500ms latency per search. Sidfrey runs entirely client-side—your browser parses the bang and redirects instantly.

### vs Unduck

[Unduck](https://github.com/T3-Content/unduck) also does client-side redirects, but takes a different approach:

| | Sidfrey | Unduck |
|---|---------|--------|
| **Bundle size** | ~3.5KB gzipped | ~200KB+ (bundles all 13,000+ DDG bangs) |
| **Build step** | None | TypeScript + Vite |
| **Dependencies** | Zero | vite, typescript, vite-plugin-pwa |
| **Custom bangs** | Yes | No |
| **Default engine** | Configurable | Google only |
| **Unknown bangs** | Falls back to DDG | Fails or uses default |

Unduck downloads DuckDuckGo's entire bang database to your browser. Sidfrey includes only the ~20 bangs you actually use, and falls back to DuckDuckGo for obscure ones—giving you the same coverage with 50x less payload.

## How It Works

Single static HTML file (~13KB, ~3.5KB gzipped). No server, no build step, no frameworks.

1. Browser sends search to `sidfrey.xyz/?q=your+search`
2. JavaScript parses the query for !bangs
3. Redirects to the appropriate service
4. Settings stored in localStorage

## Legacy URL Support

Old format still works: `sidfrey.xyz/search/chatgpt?q=hello`

## Deployment

Hosted on Cloudflare Pages. To deploy your own:

1. Fork this repo
2. Connect to Cloudflare Pages
3. Set output directory to `public`
4. Add custom domain in Cloudflare dashboard

## License

MIT
