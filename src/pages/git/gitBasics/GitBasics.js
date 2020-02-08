import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

import gitworkshop from '../../../assets/img/pages/git/basics/gitworkshop.png';

const gitBasics = (props) => {
    return (
        <React.Fragment>
            <h1>Git Basics</h1>
            <Row>
                <Col xs md={6}>
                    <Image src={gitworkshop} fluid/>
                </Col>
            </Row>
            <h2>What is Version Control?</h2>
            <p>
                Version control is simply keeping track of changes to a file or several files over time. The idea is to
                always be able to go back to a specific version of a file in case anything goes wrong. This can
                be done in many different ways. The most obvious way to do this would be to save a file as a new version
                each time a change is made. For example, when working on a document, this method would leave your
                filesystem
                looking a little like this:
            </p>
            <pre>
                <code>
{`GitBasics_V1.txt    - 2KB
GitBasics_V1.2.txt  - 2.4KB
GitBasics_V2.txt    - 2.5KB
GitBasics_V2.8.txt  - 3.3KB
GitBasics_V3.txt    - 4.9KB`}
                </code>
            </pre>
            <p>
                This way, you can always go back to any version of the file you would like. If you need to completely
                revert to an older version, simply delete all the versions, or copy the older version to a new version
                file.
            </p>
            <p>
                Can you think of any problems with this system however? Probably not since the example shown is just
                a bunch of tiny text files. Imagine a photographer saving each version of their high res images in this
                manner, those file sizes will definitely add up very quickly. Moreover, as programmers, the names of our
                files are often crucial. For example, in Java, the name of a source file must match the name of the
                class
                that the file contains. This is a huge problem because we would have to rename each class every time a
                new version is created. The last thing we want to do is to have to change our source code to handle our
                version control. So instead, we use version control software.
            </p>
            <p>
                The idea of version control software (VCS) is to keep track of only the changes made to a file. The way
                a VCS would do this is to keep track of what is called a <strong>repository</strong> which is a
                collection
                of all the files that will be tracked. So, for every file that a repository <strong>tracks</strong>, the
                repository keeps the starting point of the file, and all the individual changes made to that file since
                it was added to the repository. Therefore, a file can be constructed by taking the original version and
                applying all the changes since. Using a VCS comes with many advantages including tools that allow teams
                of developers to collaborate on the same code base. The VCS that we will be going over is also one of
                the most widely used VCS's in the current industry, it is called Git.
            </p>
            <h2>Git</h2>
            <p>
                As stated above, Git is the most popular VCS in the industry by far. One of the reasons for this is
                because it uses a <a href="https://en.wikipedia.org/wiki/Distributed_version_control">Distributed
                Model</a>{' '}
                which you can learn more about on your own time.
            </p>
            <p>
                When working with Git, the repository is saved in a folder called <code>.git</code> in the root folder
                of
                the code base. This folder is managed by Git and should not be touched by a developer. The code base
                itself
                is just the files in the folder that contains the <code>.git</code> folder. As you create files, they
                will
                be <strong>untracked</strong>, which means that the file has not yet been added to the repository and
                so version control will not act on that file. As soon as you add a file to the repository it will become
                {' '}<strong>tracked</strong>, meaning that the file now be included in version control.
            </p>
            <p>
                You may have also heard of GitHub, please note that Git and GitHub are not the same thing.
            </p>
            <h2>Installing Git</h2>
            <p>
                To use Git, you must have it installed on your computer. Installing Git is a relatively simple process
                that differs slightly based on your operating system. On Windows, simply go to <a
                href="https://git-scm.com/downloads">https://git-scm.com/downloads</a>
                {' '} and download the windows installer.
            </p>
            <p>
                For Linux, you can simply use <code>apt-get</code> or similar package managers to install Git. Here is
                the command to install using <code>apt-get</code>:
            </p>
            <pre><code>sudo apt install git</code></pre>
            <p>
                There are several ways to install on Mac, the easiest being to install the Xcode Command Line Tools.
            </p>
            <p>
                If you would like to verify whether or not you already have Git installed on your system, simply run
                the following command in your command line.
            </p>
            <pre><code>git --version</code></pre>
            <p>
                The next thing we need to do is configure our user information for all our local repositories. What you
                will need to set up is your name and email since that information needs to be attached to every change
                you make to a file. Do that with the following commands:
            </p>
            <pre>
                <code>
{`git config --global user.name "[your name]"
git config --global user.email "[your email address]"`}
                </code>
            </pre>
            <p>
                Now that we have Git installed and set up, let's jump into actually using it.
            </p>
            <h2>Creating a Git Repository</h2>
            <p>
                Creating a repository in Git is incredibly simple. Simply use the following command:
            </p>
            <pre><code>git init</code></pre>
            <p>
                This will create an empty Git repository in the current working directory of your terminal. You can
                verify
                this by checking for the <code>.git</code> folder in your directory. Now note that any files that are
                also in the directory you created the repository in are untracked by default.
            </p>
            <p>
                If you would like to create a repository completely from scratch, meaning there will be no untracked
                files
                initially, you can use the following variant of the <code>init</code> command.
            </p>
            <pre><code>git init [repository-name]</code></pre>
            <p>
                This, instead of creating the Git repository in the current directory, will create a blank folder with
                the
                given name and then create the Git repository in that new folder. It is best practices to create Git
                repositories in folders with all lower case names and no spaces.
            </p>
            <h2>The Git Workflow</h2>
            <p>
                The processes of tracking changes in a repository is relatively simple, but might seem a little tricky
                to absolute beginners. Git keeps track of changes to a repository through commits,
                a <strong>commit</strong>
                {' '} is a snapshot of all the changes made to a repository at a certain time. Each commit has its own
                identifier, a unique number, and a message. The message is meant to describe what was done to the files
                in that commit. In order to commit changes to a repository, they must first be <strong>staged</strong>,
                which now leads us to taking a look at the 4 areas when working with Git.
            </p>
            <ul>
                <li>Untracked: These are the files that are untracked are not yet included in the repository at all.
                </li>
                <li>Unstaged: These are the changes to tracked files that have not yet been staged.</li>
                <li>Staged: These are the changes to the repository that are soon going to be committed.</li>
                <li>Repository: The collection of all commits.</li>
            </ul>
            <h2>Creating a New File</h2>
            <p>
                Now let's suppose we had a blank repository in a folder called <code>basics</code>. Let's create a file
                called <code>a.txt</code> in the root of that folder with some random text inside. Right now, that file
                is <strong>untracked</strong> because it has never been committed to the repository before. We can see
                this using the following command:
            </p>
            <pre><code>git status</code></pre>
            <p>
                <code>git status</code> shows us the current state of the repository, specifically which files have been
                created, modified, and staged. In our example, we would get the following output:
            </p>
            <pre>
                <code>
{`On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        a.txt

nothing added to commit but untracked files present (use "git add" to track)`}
                </code>
            </pre>
            <p>
                As you can see, <code>a.txt</code> is untracked. Before we can commit it to the repository, we must
                stage this file first. To do so, we will use
                the <code>git add</code> command:
            </p>
            <pre><code>git add a.txt</code></pre>
            <p>
                Using the <code>git add</code> command moves our untracked file into the staging area. We can verify
                this again with <code>git status</code>:
            </p>
            <pre>
                <code>
{`On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   a.txt`}
                </code>
            </pre>
            <h2>Committing Changes</h2>
            <p>
                Now that our changes are staged, let's commit them to our repository. The command to commit is quite
                simple
            </p>
            <pre><code>git commit</code></pre>
            <p>
                This will open your shell's editor, there you must type a commit message. The commit message is supposed
                to be a brief (&lt;70 characters) description of what changes were made in the commit. If you would like
                to use a different editor (such as <code>nano</code>, <code>vi</code>, <code>emacs</code>, etc.) You can
                use the following command:
            </p>
            <pre><code>git config --global core.editor [editor]</code></pre>
            <p>
                Alternatively, you can provide a commit message directly with the <code>commit</code> command as a
                parameter. This is my preferred way:
            </p>
            <pre><code>git commit -m "[message]"</code></pre>
            <p>
                Since this is my preferred way, I will commit <code>a.txt</code> to my repository with the following
                command:
            </p>
            <pre><code>git commit -m "Added a.txt"</code></pre>
            <p>
                And I will get the following response:
            </p>
            <pre>
                <code>
{`[master (root-commit) 0f841d0] Added a.txt
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt`}
                </code>
            </pre>
            <p>
                This commit is now permanently logged in my repository's history. I can see this by using the following
                command:
            </p>
            <pre><code>git log</code></pre>
            <p>
                This gives me this output:
            </p>
            <pre>
                <code>
{`commit 0f841d0b9daf9980473390c6c389d89456167d03 (HEAD -> master)
Author: Jose Rodriguez Rivas <example@example.com>
Date:   Sat Feb 8 13:35:16 2020 -0800

    Added a.txt`}
                </code>
            </pre>
            <p>
                The long number there is the ID of the commit, if I ever need to reference the commit for whatever
                reason I would need that ID.
            </p>
            <h2>Modifying Existing Files</h2>
            <p>
                So great! We have successfully created a new file and added it to our repository. Now let's modify the
                file. Running <code>git status</code> would give us the following:
            </p>
            <pre>
                <code>
{`On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   a.txt

no changes added to commit (use "git add" and/or "git commit -a")`}
                </code>
            </pre>
            <p>
                Now, instead of being untracked, <code>a.txt</code> is now modified, or unstaged. More specifically,
                the <i>changes</i> made to <code>a.txt</code> are unstaged. Moving those changes to the staging area
                is actually the same command from earlier:
            </p>
            <pre><code>git add a.txt</code></pre>
            <p>
                Now our changes have been staged, verifiable by <code>git status</code>
            </p>
            <pre>
                <code>
{`On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   a.txt`}
                </code>
            </pre>
            <p>
                What do you think will happen if I modify <code>a.txt</code> again? You can assume that those changes
                would be staged since <code>a.txt</code> is in the staging area. However, remember earlier I said that
                the changes to <code>a.txt</code> are in the staging area, so any changes I make after staging will be
                unstaged. You can see this below:
            </p>
            <pre>
                <code>
{`On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   a.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   a.txt`}
                </code>
            </pre>
            <p>
                I can simply use <code>git add a.txt</code> again to include the new changes to the staging area before
                I commit the changes. I will now commit those changes to the repository:
            </p>
            <pre><code>git commit -m "Updated a.txt"</code></pre>
            <p>
                And get the following response:
            </p>
            <pre>
                <code>
{`[master 5d96418] Updated a.txt
 1 file changed, 3 insertions(+), 1 deletion(-)`}
                </code>
            </pre>
            <p>
                I can see the two commits now using <code>git log</code> again.
            </p>
            <pre>
                <code>
{`commit 5d9641819afc4f68b2a65d4303053e3938e1937c (HEAD -> master)
Author: Jose Rodriguez Rivas <example@example.com>
Date:   Sat Feb 8 13:53:10 2020 -0800

    Updated a.txt

commit 0f841d0b9daf9980473390c6c389d89456167d03
Author: Jose Rodriguez Rivas <example@example.com>
Date:   Sat Feb 8 13:35:16 2020 -0800

    Added a.txt`}
                </code>
            </pre>
            <p>
                Note that the <code>(HEAD -> master)</code> is on the most recent commit. The <code>HEAD</code> is
                simply a reference to a commit, so I can use <code>HEAD</code> instead of the long ID. By default,{' '}
                <code>HEAD</code> is assigned to the most recent commit made.
            </p>
            <h2>Viewing Changes</h2>
            <p>
                Now suppose we modified <code>a.txt</code> again. Before we stage the changes, we can check the changes
                using the following command:
            </p>
            <pre><code>git diff</code></pre>
            <p>
                Gives me:
            </p>
            <pre>
                <code>
{`diff --git a/a.txt b/a.txt
index 85722fd..c21df61 100644
--- a/a.txt
+++ b/a.txt
@@ -1,3 +1,3 @@
-Hello world, my name is Jose!
+Hello world! My name is Jose!
 Pleased to meet you!`}
                </code>
            </pre>
            <p>
                Now if I stage those changes, I will get nothing from <code>git diff</code> this is because the command
                shows us the changes that are not yet staged. I can change this by using <code>git diff</code> with the
                following options:
            </p>
            <pre><code>git diff --staged</code></pre>
            <p>
                This will give me the same output as before.
            </p>
            <h2>Adding Multiple Files at Once</h2>
            <p>
                As programmers, chances are we are going to be working on several files at a time. Adding each file we
                edit to our staging area one at a time can be very tedious. We can use a simple trick to add all the
                files that we have modified to our staging area at once. We are going to be using the fact that when
                we give a directory to the <code>git add</code> command, all the files in that directory will be added.
                This is recursive, so all files in subdirectories will also be added. I am going to write some simple
                C code to show this.
            </p>
        </React.Fragment>
    );
};

export default gitBasics;
