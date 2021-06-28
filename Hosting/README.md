### How To Host Your React App For Free on GitHub



#### What You Need:
- GH Account
- Install & Setup Git on your Machine
- Install NodeJS
- Install NPM


### Steps

1. Create a react app
```bash
npx create-react-app react-app
```

2. Initialize npm
```bash
npm init react-app react-app
```

3. Install GitHub Pages Package as a dev dependency
```bash
npm install gh-pages --save-dev
```

4. In your package.json Add a homepage property and give it a value like this
```json
{
    "homepage": "http://yourusername.github.io/yourrepositoryname"
}
```

5. Within the scripts portion of your package.json add predeploy and deploy property

```json
{
    "predeploy":"npm run build",
    "deploy":"gh-pages -d build"
}
```

6. Deploy your react app to github pages
```bash
npm run build
```

7. Follow Git Steps to push to github by setting main as the main branch

```bash
git add .
git commit -m "init commit"
git branch -M main
git push -u origin main
```

