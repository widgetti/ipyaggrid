
# necessary to push to PyPI
# cf. http://peterdowns.com/posts/first-time-with-pypi.html
# cf. https://tom-christie.gitlab.io/articles/pypi/
# cf. https://pythonhosted.org/setuptools/setuptools.html

# commands:
# python setup.py sdist upload -r testpypi
# python setup.py sdist upload -r pypi


from distutils.util import convert_path
from setuptools import setup, find_packages

packages = find_packages()
module = packages[0]
print('module = {}'.format(module))


meta_ns = {}
ver_path = convert_path(module + '/__meta__.py')
with open(ver_path) as ver_file:
    exec(ver_file.read(), meta_ns)

name = meta_ns['__name__']
packages = packages
version = meta_ns['__version__']
description = meta_ns['__description__']
author = meta_ns['__author__']
author_email = meta_ns['__author_email__']
url = meta_ns['__url__']
download_url = meta_ns['__download_url__']
keywords = meta_ns['__keywords__']
license = meta_ns['__license__']
classifiers = meta_ns['__classifiers__']
include_package_data = meta_ns['__include_package_data__']
package_data = meta_ns['__package_data__']
data_files = meta_ns['__data_files__']
zip_safe = meta_ns['__zip_safe__']
entry_points = meta_ns['__entry_points__']


# read requirements.txt
with open('requirements.txt', 'r') as f:
    content = f.read()
li_req = content.split('\n')
install_requires = [e.strip() for e in li_req if len(e)]

with open('README.md') as f:
    long_description = f.read()

setup(
    name=name,
    version=version,
    description=description,
    long_description=long_description,
    long_description_content_type="text/markdown",
    author=author,
    author_email=author_email,
    url=url,
    download_url=download_url,
    keywords=keywords,
    license=license,
    classifiers=classifiers,
    packages=packages,
    install_requires=install_requires,
    include_package_data=include_package_data,
    package_data=package_data,
    data_files=data_files,
    zip_safe=zip_safe,
    entry_points=entry_points
)
