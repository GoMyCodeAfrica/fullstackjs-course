## Intro to git

* git is a Version Control System
* In other words, git enables us to manage the history of our projects
* Using git, we can store our current project state in a history tree

## From directory to repo

* In git terms, the project is called a repo ( or repository)
* To get git to start tracking our project history:
  * use the command line and move to the project directory
  * type the command `git init`

## What is my status ?

* Another useful command that git offers us is `git status`
* This command gives us information about what files are saved in the git history tree and what files are not
* Files can be in one of the following states:
  * Untracked: git does not track the changes of these files, it ignores them
  * Unchanged: these files are tracked by git but they have not been changed
  * Unstaged changes: when a file has been changed, git detects it. But we have to add it to the **stage**, in perparation to save it
  * Staged changes: are staged to be added to the next **commit**

## Adding a file to the staging area

To add files to the staging area, use `git add`

## Committing

* To commit a set of changes:
  * You need to have a non-empty stage
  * Use `git commit -m "commit message"`

## Seeing the history tree

To view the history tree, use `git log`
