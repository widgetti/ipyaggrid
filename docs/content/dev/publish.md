

# Publish

This section is intentionally verbose in order to help ipywidget developer.

## Versions

Set the **same** Javascript version in the following files.
_WARNING_: This is a **manual** sync.

+ `ipyaggrid/js/package.json`

Set the Python version in file:
+ `ipyaggrid/__meta__.py`

## Git

Git [commit](https://git-scm.com/docs/git-commit) the code with a [tag](https://git-scm.com/docs/git-tag).

```bash
# starting from repo top folder

# possibly: start afresh
git clean -fdxn # dry run - recommended as cannot be undone
git clean -fdx

# commit
git add .
git commit -m 'my comment'
git tag '<python version e.g. 0.1.0>'
git push
git push --tags
```

## Node

Build the Javascript files and publish the node package to [npmjs.org](https://www.npmjs.com/).
For more info see th [official doc](https://docs.npmjs.com/getting-started/publishing-npm-packages).

```bash
# starting from repo top folder
# make sure the version in js/package.json is correct

# build notebook extension javascript
$ cd js
$ npm ci

# test run to see what you will publish
# npm pack

# login npm if necessary
npm login

# publish npm package to npmjs.org - using ~/.npmrc
$ npm publish --access=public
# if you made a mistake you can unpublish in the first 24h
```

## Python

Publish the Python package to PyPI.
For more info see the [official doc](https://packaging.python.org/tutorials/distributing-packages/).

```bash
# starting from repo top folder
# make sure package version is correct in __meta__.py

# clear dist/ from previous bundles
rm -rf dist

# build Python package
$ python setup.py sdist
$ python setup.py bdist_wheel --universal

# upload package to PyPI - using ~/.pypirc
$ twine upload dist/*
# if you made a mistake you can remove the package on pypi.org
```

Done.

