# ipyauth Docs

This folder contains the documentation, online on [gitlab](https://widgetti.github.io/ipyaggrid/).

## Develop

Run from terminal:

```bash
$ yarn docs:dev
```

## Deploy

You can manually deploy as follows:

```bash
# build
cd docs
export NODE_OPTIONS=--openssl-legacy-provider;
yarn docs:build

# navigate into the build output directory
cd ../public

# you need to remove public/ from .gitignore for manual run
git add .
git commit -m 'deploy'

# you are deploying to https://oscar6echo.gitlab.io/ipyauth
git push -f git@gitlab.com:oscar6echo/ipyauth.git master:pages
# or equivalently
git subtree push --prefix public/ origin pages

# back repo top level
cd ..
```

## CI/CD

But the **preferred way** is Gitlab CI/CD.  
See the config file: [.gitlab-ci.yml](../.gitlab-ci.yml).

You can:

+ manually run it from **ipyauth** repo [pipeline section](https://gitlab.com/oscar6echo/ipyauth/pipelines)
+ See the log and check all is good
+ Remark: Make sure your output folder is `public/` nothing else

Then the pipeline will run on each commit on branch `master`

See the [Gitlab Pages help](https://gitlab.com/help/user/project/pages/index.md) for more info.
