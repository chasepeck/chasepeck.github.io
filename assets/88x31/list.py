import os

path = os.path.dirname(os.path.realpath(__file__))
files = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]
files.sort()

for i in files:
	if i != "list.py":
		print("<img src='/assets/88x31/{0}'>".format(i))
