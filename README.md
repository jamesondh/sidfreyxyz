# Sidfrey

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
