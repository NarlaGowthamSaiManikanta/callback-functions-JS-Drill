## Directory Structure
   Folder structure:

        ├── data
        |   └── lipsum_1.txt
        ├── test
        |   ├── testProblem1.cjs
        |   └── testProblem2.cjs
        ├── problem1.cjs
        ├── problem2.cjs
        ├── package.json
        ├── README.md
        └── .gitignore

## Problem Description
Using callbacks and the fs module's asynchronous functions, do the following:

* Problem 1:
   1. Create a directory of random JSON files
   2. Delete those files simultaneously
   
* Problem 2:
   1. Read the given file lipsum.txt
   2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
   3. Read the new file and convert it to lowercase. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
   4. Read the new files, sort the content, and write it out to a new file. Store the name of the new file in filenames.txt
   5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

## Instructions to run the Project
* First, Clone this repository and move to the repository by following commands.
```bash
   git clone http/link/to/clone/the/repository
   cd cloned_repository
   ```

* Now you need to install the NVM by either of the following commands:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
or
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

* To verify that nvm has been installed, do:
```
command -v nvm
```
which should output `nvm` if the installation was successful. Please note that `which nvm` will not work, since nvm is a sourced shell function, not an executable binary.

* Now, to install the latest LTS (Long Term Support) version of Node.js, use the following command:
```
nvm install --lts
```

* As there are no packages used in this project, we can proceed with the running part.

#### To run the JavaScript file, use the following command:
```
# For problem -1:
node test/testProblem1.js

# For problem -2:
node test/testProblem2.js
```

You will be getting the output in the terminal.