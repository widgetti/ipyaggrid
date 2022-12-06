import os

github_ref = os.environ["GITHUB_REF_NAME"]
local_version = "master" if github_ref == "master" else github_ref.split("/")[0]

target = "__version__ = _get_version(version_info)"
target_file = "ipyaggrid/__meta__.py"

with open(target_file, 'r') as file:
    filedata = file.read()

filedata = filedata.replace(target, target + f" + '.post0+{local_version}'")

with open(target_file, 'w') as file:
    file.write(filedata)
