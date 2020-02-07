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
                each time a change is made. For example, when working on a document, this method would leave your filesystem
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
                files are often crucial. For example, in Java, the name of a source file must match the name of the class
                that the file contains. This is a huge problem because we would have to rename each class every time a
                new version is created. The last thing we want to do is to have to change our source code to handle our
                version control. So instead, we use version control software.
            </p>
            <p>
                The idea of version control software (VCS) is to keep track of only the changes made to a file. The way
                a VCS would do this is to keep track of what is called a <strong>repository</strong> which is a collection
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
                because it uses a <a href="https://en.wikipedia.org/wiki/Distributed_version_control">Distributed Model</a>{' '}
                which you can learn more about on your own time.
            </p>
            <p>
                When working with Git, the repository is saved in a folder called <code>.git</code> in the root folder of
                the code base. This folder is managed by Git and should not be touched by a developer. The code base itself
                is just the files in the folder that contains the <code>.git</code> folder. As you create files, they will
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
                that differs slightly based on your operating system. On Windows, simply go to <a href="https://git-scm.com/downloads">https://git-scm.com/downloads</a>
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
                This will create an empty Git repository in the current working directory of your terminal. You can verify
                this by checking for the <code>.git</code> folder in your directory. Now note that any files that are
                also in the directory you created the repository in are untracked by default.
            </p>
            <p>
                If you would like to create a repository completely from scratch, meaning there will be no untracked files
                initially, you can use the following variant of the <code>init</code> command.
            </p>
            <pre><code>git init [repository-name]</code></pre>
            <p>
                This, instead of creating the Git repository in the current directory, will create a blank folder with the
                given name and then create the Git repository in that new folder. It is best practices to create Git
                repositories in folders with all lower case names and no spaces.
            </p>
            <h2>The Git Workflow</h2>
            <p>
                The processes of tracking changes in a repository is relatively simple, but might seem a little tricky
                to absolute beginners. Git keeps track of changes to a repository through commits, a <strong>commit</strong>
                {' '} is a snapshot of all the changes made to a repository at a certain time. Each commit has its own
                identifier, a unique number, and a message. The message is meant to describe what was done to the files
                in that commit. In order to commit changes to a repository, they must first be <strong>staged</strong>,
                which now leads us to taking a look at the 4 areas when working with Git.
            </p>
            <ul>
                <li>Untracked: These are the files that are untracked are not yet included in the repository at all.</li>
                <li>Unstaged: These are the changes to tracked files that have not yet been staged.</li>
                <li>Staged: These are the changes to the repository that are soon going to be committed.</li>
                <li>Repository: The collection of all commits.</li>
            </ul>
        </React.Fragment>
    );
};

export default gitBasics;
