# web

My personal webpage

https://pelochus.duckdns.org/

## Deploying

```bash
git clone https://github.com/Pelochus/web.git && cd web

# Install dependencies
npm install

# May need to do this
npm audit fix

# Start development server
npm run dev

# Or build for production
npm run build
npm run preview -- --host # Add this flag if not running on your local machine
```

Now if successful, you can serve the files in `/dist` to a Nginx or Apache server.

## Are you a web developer?

Nope! I made this webpage with ChatGPT and bolt.new, forget me being a good webdev.
Made this just to complete a course on my Master's degree. Thought it was a good chance for making my own and self-hosted web.
See [pelochus-homelab](https://github.com/pelochus/pelochus-homelab) for instructions on how I deploy this web on my homelab.
